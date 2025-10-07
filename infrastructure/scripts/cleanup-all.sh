#!/bin/bash

# Cleanup Script
set -e

echo "=== Cleanup OEM Seller Platform ==="

read -p "⚠️  This will delete all resources. Continue? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Cleanup cancelled."
    exit 0
fi

NAMESPACE="oem-seller"
ACR_NAME="oemselleracr"

# Delete Kubernetes resources
if command -v kubectl &> /dev/null && kubectl cluster-info &> /dev/null; then
    echo "🗑️  Deleting Kubernetes resources..."
    kubectl delete namespace $NAMESPACE --ignore-not-found=true
fi

# Remove Docker images
if command -v docker &> /dev/null; then
    echo "🗑️  Cleaning Docker images..."
    docker images "${ACR_NAME}.azurecr.io/*" -q | xargs -r docker rmi -f
    docker image prune -f
fi

# Clean build artifacts
echo "🗑️  Cleaning build artifacts..."
find backend -name "bin" -type d -exec rm -rf {} + 2>/dev/null || true
find backend -name "obj" -type d -exec rm -rf {} + 2>/dev/null || true
rm -rf frontend/oem-seller-web/node_modules 2>/dev/null || true
rm -rf frontend/oem-seller-web/build 2>/dev/null || true

echo "✅ Cleanup completed!"
echo "Note: Azure resources need to be destroyed with 'terraform destroy'"
