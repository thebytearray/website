#!/bin/bash
# Auto-deploy: only pull, build, and run when there are new changes from git.
# Use with cron: */5 * * * * /var/www/thebytearray/scripts/auto-deploy.sh >> /var/log/thebytearray-deploy.log 2>&1

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$PROJECT_ROOT"

if [[ ! -d .git ]]; then
  echo "[$(date)] Not a git repo, skipping"
  exit 0
fi

# Fetch and check if we're behind origin
git fetch origin 2>/dev/null || true
BRANCH=$(git rev-parse --abbrev-ref HEAD)
REMOTE="origin/${BRANCH}"
# Fallback to origin/main if branch doesn't exist on remote
git rev-parse "$REMOTE" &>/dev/null || REMOTE="origin/main"
BEHIND=$(git rev-list HEAD.."$REMOTE" 2>/dev/null | wc -l)

if [[ "$BEHIND" -gt 0 ]]; then
  echo "[$(date)] New changes detected, deploying..."
  exec "$SCRIPT_DIR/deploy.sh"
else
  echo "[$(date)] No new changes, skipping"
fi
