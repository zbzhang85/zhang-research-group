#!/usr/bin/env bash
# One-click deploy: build the site and publish dist/ to the gh-pages branch.
# Usage (Git Bash, from the project root):
#   bash deploy.sh            # build + deploy
#   npm run deploy            # same thing via npm
#
# Note: this only publishes the built site. Remember to commit & push your
# source changes to the main branch separately:
#   git add -A && git commit -m "your message" && git push origin main

set -e

DEPLOY_DIR="/c/Temp/ghp-deploy"
REPO="https://github.com/zbzhang85/zhang-research-group.git"
SITE="https://zbzhang85.github.io/zhang-research-group/"

echo "==> Building..."
npm run build

echo "==> Preparing gh-pages content..."
rm -rf "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR"
cp -r dist/* "$DEPLOY_DIR"/

cd "$DEPLOY_DIR"
git init -b gh-pages -q
git add -A
git -c user.name="Zhenbo Zhang" -c user.email="zbzhang@shanghaitech.edu.cn" \
  commit -q -m "Deploy $(date '+%Y-%m-%d %H:%M')"
git remote add origin "$REPO"

echo "==> Pushing to gh-pages..."
for i in 1 2 3; do
  if git push -f -q origin gh-pages; then
    break
  fi
  echo "push failed, retrying ($i/3)..."
  sleep 3
  if [ "$i" = "3" ]; then
    echo "ERROR: push failed after 3 attempts. Check your network and try again."
    exit 1
  fi
done

echo "==> Deployed! The site will update at $SITE within 1-2 minutes."
