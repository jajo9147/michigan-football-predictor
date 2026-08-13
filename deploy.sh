#!/bin/bash
# Michigan Wolverines Predictor Deploy Script
set -e

echo "〽️ Initializing and pushing Michigan Football Predictor to GitHub..."

cd /Users/jakejohnson/michigan-football-predictor

if [ ! -d ".git" ]; then
  git init
  git branch -M main
fi

git add .
git commit -m "Initial release: Michigan Wolverines 2026 Season Predictor & Big Ten/CFP Simulator" || true

if ! git remote | grep -q "origin"; then
  git remote add origin git@github.com:jajo9147/michigan-football-predictor.git
fi

echo "Pushing to origin main..."
git push -u origin main

echo "✅ Pushed successfully! Configure GitHub Pages under Settings > Pages (main branch / root)."
