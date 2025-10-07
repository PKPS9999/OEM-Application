#!/bin/bash

# Environment Setup Script
set -e

echo "=== OEM Seller Platform - Environment Setup ==="

# Check required tools
command -v dotnet >/dev/null 2>&1 || { echo "❌ .NET SDK required but not installed."; exit 1; }
command -v docker >/dev/null 2>&1 || { echo "❌ Docker required but not installed."; exit 1; }
command -v node >/dev/null 2>&1 || { echo "❌ Node.js required but not installed."; exit 1; }

echo "✅ All required tools are installed"

# Setup development certificates
dotnet dev-certs https --trust 2>/dev/null || echo "⚠️  Could not setup HTTPS certificates"

# Create directories
mkdir -p logs temp data

# Install frontend dependencies
if [ -f "frontend/oem-seller-web/package.json" ]; then
    echo "📦 Installing frontend dependencies..."
    cd frontend/oem-seller-web
    npm install
    cd - > /dev/null
fi

echo "✅ Environment setup completed!"
echo "Next steps:"
echo "1. Run './infrastructure/scripts/build-all.sh' to build all services"
echo "2. Configure your Azure credentials with 'az login'"
