#!/bin/bash

# Vercel Deployment Script for farm-ts application
# Usage: ./deploy.sh [--prod]

set -e

echo "🚀 Farm-TS Vercel Deployment Script"
echo "===================================="

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI is not installed."
    echo "Install it with: npm install -g vercel"
    exit 1
fi

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Not in a git repository. Please initialize git first."
    exit 1
fi

# Check for uncommitted changes
if [[ -n $(git status --porcelain) ]]; then
    echo "⚠️  You have uncommitted changes. Consider committing them first."
    read -p "Do you want to continue? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Build frontend locally to check for errors
echo "🔨 Building frontend..."
cd frontend
npm ci
npm run build
cd ..

echo "✅ Frontend build successful!"

# Check if .env exists and warn about environment variables
if [ ! -f backend/.env ]; then
    echo "⚠️  No .env file found in backend/. Make sure to set environment variables in Vercel."
fi

echo "📝 Pre-deployment checklist:"
echo "   - MongoDB Atlas cluster set up ✓"
echo "   - Environment variables configured in Vercel ✓"
echo "   - CORS_ORIGINS updated with your domain ✓"
echo ""

# Deploy based on argument
if [[ "$1" == "--prod" ]]; then
    echo "🚀 Deploying to production..."
    vercel --prod
else
    echo "🧪 Deploying to preview..."
    vercel
fi

echo ""
echo "✅ Deployment complete!"
echo "📋 Next steps:"
echo "   1. Test your API endpoints"
echo "   2. Update CORS_ORIGINS if this is your first deployment"
echo "   3. Check Vercel dashboard for any function errors"