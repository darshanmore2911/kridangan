#!/bin/bash
set -e

echo "Building frontend..."
cd frontend
npm ci
npm run build
cd ..

echo "Frontend build complete!"
echo "Built files are in frontend/dist/"