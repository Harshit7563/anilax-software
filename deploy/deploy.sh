#!/usr/bin/env bash
# Run ON THE VPS after git pull: bash deploy/deploy.sh
set -euo pipefail

cd "$(dirname "$0")/.."
APP_ROOT="$(pwd)"

echo "→ npm install & build…"
npm ci
npm run build

echo "→ restart API…"
if systemctl is-active --quiet anilax-api 2>/dev/null; then
  sudo systemctl restart anilax-api
  echo "✓ anilax-api restarted"
else
  echo "⚠ anilax-api service not found — start manually (see deploy/HOSTINGER-VPS.md)"
fi

echo "✓ Deploy done — $(date)"
