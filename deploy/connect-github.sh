#!/usr/bin/env bash
# Connect this project to a GitHub (or GitLab) remote and push
#
# Usage:
#   bash deploy/connect-github.sh https://github.com/USERNAME/anilax-software.git
#
set -euo pipefail

REPO_URL="${1:-}"
if [[ -z "$REPO_URL" ]]; then
  echo "Usage: bash deploy/connect-github.sh <git-repo-url>"
  echo ""
  echo "Example:"
  echo "  bash deploy/connect-github.sh https://github.com/harshitsharma7563/anilax-software.git"
  echo ""
  echo "Create empty repo first on GitHub: New repository → anilax-software (no README)"
  exit 1
fi

cd "$(dirname "$0")/.."

if ! git rev-parse --git-dir >/dev/null 2>&1; then
  git init -b main
fi

if git remote get-url origin >/dev/null 2>&1; then
  echo "→ Updating origin → $REPO_URL"
  git remote set-url origin "$REPO_URL"
else
  echo "→ Adding origin → $REPO_URL"
  git remote add origin "$REPO_URL"
fi

echo "→ Pushing main…"
git push -u origin main

echo ""
echo "✓ Connected and pushed to $REPO_URL"
