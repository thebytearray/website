#!/bin/bash
set -e

# Deploy script: pull latest, rebuild, and run
# Usage: ./scripts/deploy.sh [--no-pull]

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$PROJECT_ROOT"

DO_PULL=true
if [[ "${1:-}" == "--no-pull" ]]; then
  DO_PULL=false
fi

echo "==> Deploying from $PROJECT_ROOT"

# 1. Pull latest changes from git (if requested and repo exists)
if [[ "$DO_PULL" == true ]] && [[ -d .git ]]; then
  echo "==> Pulling latest changes..."
  git pull
else
  if [[ "$DO_PULL" == true ]] && [[ ! -d .git ]]; then
    echo "==> Not a git repo, skipping pull"
  fi
fi

# 2. Rebuild Docker image
echo "==> Rebuilding Docker image..."
docker compose build --no-cache

# 3. Stop existing container, start new one
echo "==> Restarting containers..."
docker compose up -d

echo "==> Done! App should be running at http://localhost:8098"
