#!/usr/bin/env bash
# First-time or update install ON THE VPS (run as root)
set -euo pipefail

APP_DIR="${APP_DIR:-/var/www/anilax-software}"
DOMAIN="${DOMAIN:-}"
DB_PASSWORD="${DB_PASSWORD:-}"
ADMIN_PASSWORD="${ADMIN_PASSWORD:-}"

cd "$APP_DIR"

echo "→ Installing system packages (if needed)…"
export DEBIAN_FRONTEND=noninteractive
apt-get update -qq
apt-get install -y -qq git nginx certbot python3-certbot-nginx curl postgresql postgresql-contrib

if ! command -v node >/dev/null 2>&1 || [[ "$(node -v | cut -d. -f1 | tr -d v)" -lt 20 ]]; then
  curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
  apt-get install -y -qq nodejs
fi

echo "→ Node $(node -v) · npm $(npm -v)"

if [[ -z "$DB_PASSWORD" ]]; then
  DB_PASSWORD="$(openssl rand -base64 24 | tr -d '/+=' | head -c 32)"
  echo "  Generated DB_PASSWORD"
fi
if [[ -z "$ADMIN_PASSWORD" ]]; then
  ADMIN_PASSWORD="$(openssl rand -base64 24 | tr -d '/+=' | head -c 24)"
  echo "  Generated ADMIN_PASSWORD"
fi

export DB_PASSWORD
bash deploy/setup-postgres.sh

CORS_LINE=""
if [[ -n "$DOMAIN" ]]; then
  CORS_LINE="CORS_ORIGINS=https://${DOMAIN},https://www.${DOMAIN}"
fi

cat > .env <<ENVFILE
NODE_ENV=production
API_HOST=127.0.0.1
API_PORT=3001
DATABASE_URL=postgresql://anilax_app:${DB_PASSWORD}@127.0.0.1:5432/anilax_software
ADMIN_PASSWORD=${ADMIN_PASSWORD}
${CORS_LINE}
ENVFILE

chmod 600 .env

echo "→ npm install & build…"
npm ci
npm run build

echo "→ systemd API service…"
cp deploy/anilax-api.service /etc/systemd/system/
systemctl daemon-reload
systemctl enable anilax-api
systemctl restart anilax-api

if [[ -n "$DOMAIN" ]]; then
  echo "→ Nginx for ${DOMAIN}…"
  sed "s/YOUR_DOMAIN.com/${DOMAIN}/g" deploy/nginx-anilax.conf > /etc/nginx/sites-available/anilax-software
  ln -sf /etc/nginx/sites-available/anilax-software /etc/nginx/sites-enabled/
  rm -f /etc/nginx/sites-enabled/default
  nginx -t
  systemctl reload nginx

  if ! certbot certificates 2>/dev/null | grep -q "$DOMAIN"; then
    echo "→ SSL certificate (certbot)…"
    certbot --nginx -d "$DOMAIN" -d "www.$DOMAIN" --non-interactive --agree-tos -m "admin@${DOMAIN}" || true
  fi
fi

chown -R www-data:www-data "$APP_DIR"
chown www-data:www-data .env

echo ""
echo "════════════════════════════════════════"
echo "✓ Deploy complete"
echo "  App dir:  $APP_DIR"
if [[ -n "$DOMAIN" ]]; then
  echo "  Site:     https://${DOMAIN}"
  echo "  Admin:    https://${DOMAIN}/admin"
fi
echo "  Admin password: ${ADMIN_PASSWORD}"
echo "  (saved in $APP_DIR/.env as ADMIN_PASSWORD)"
echo "════════════════════════════════════════"
echo ""
systemctl status anilax-api --no-pager | head -5
curl -s http://127.0.0.1:3001/api/health || true
echo ""
