#!/usr/bin/env bash
# Connect monorepo and push to GitHub
#
# Usage:
#   bash deploy/connect-github.sh https://github.com/Harshit7563/anilax-software.git
#
set -euo pipefail

REPO_URL="${1:-}"
if [[ -z "$REPO_URL" ]]; then
  echo "Usage: bash deploy/connect-github.sh <git-repo-url>"
  exit 1
fi

cd "$(dirname "$0")/.."

if git remote get-url origin >/dev/null 2>&1; then
  git remote set-url origin "$REPO_URL"
else
  git remote add origin "$REPO_URL"
fi

git push -u origin main
echo "✓ Pushed to $REPO_URL"
