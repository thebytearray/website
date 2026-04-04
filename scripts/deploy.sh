#!/bin/sh
# Git pull (unless --no-pull) then production stack rebuild + restart (see up.sh).
set -e
cd "$(dirname "$0")/.."
[ "${1:-}" = "--no-pull" ] || { [ ! -d .git ] || git pull --ff-only; }
exec ./scripts/up.sh
