#!/usr/bin/env bash
# Run FROM YOUR MAC in project folder — uploads code to Hostinger VPS
#
# Usage:
#   export VPS_HOST=root@YOUR_VPS_IP
#   export DOMAIN=anilaxsoftware.com
#   bash deploy/upload-to-hostinger.sh
#
set -euo pipefail

: "${VPS_HOST:?Set VPS_HOST — example: export VPS_HOST=root@123.45.67.89}"
DOMAIN="${DOMAIN:-}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
REMOTE_DIR="/var/www/anilax-software"

echo "→ Uploading to ${VPS_HOST}:${REMOTE_DIR}"

ssh "$VPS_HOST" "mkdir -p ${REMOTE_DIR}"

rsync -avz --delete \
  --exclude node_modules \
  --exclude .git \
  --exclude .env \
  --exclude dist \
  --exclude ".DS_Store" \
  "$PROJECT_ROOT/" "${VPS_HOST}:${REMOTE_DIR}/"

echo "→ Running server install…"
ssh "$VPS_HOST" "chmod +x ${REMOTE_DIR}/deploy/*.sh && DOMAIN='${DOMAIN}' bash ${REMOTE_DIR}/deploy/vps-first-install.sh"

echo ""
echo "Done. Open https://${DOMAIN:-YOUR_DOMAIN} when DNS points to this VPS."
