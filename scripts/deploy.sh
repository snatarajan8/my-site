#!/bin/bash
set -e

REPO="/home/shyam/Shyam/Work/my-site"

# Ensure brew-installed tools (vercel, etc.) are on PATH
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv bash)"

cd "$REPO"

echo "==> Staging all changes..."
git add -A

if git diff --cached --quiet; then
  echo "==> Nothing to commit, skipping."
else
  TIMESTAMP=$(date '+%Y-%m-%d %H:%M')
  git commit -m "chore: update site ($TIMESTAMP)"
fi

echo "==> Pushing..."
git push

echo "==> Vercel preview deploy..."
vercel

echo "==> Vercel production deploy..."
vercel --prod

echo "==> Done!"
