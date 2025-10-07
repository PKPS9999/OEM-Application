#!/bin/bash

# Deploy to Kubernetes
set -e

echo "=== Deploying to Kubernetes ==="

NAMESPACE="oem-seller"
MANIFEST_DIR="infrastructure/manifests"

# Check kubectl connectivity
kubectl cluster-info > /dev/null || { echo "❌ Cannot connect to Kubernetes cluster"; exit 1; }

echo "📍 Current context: $(kubectl config current-context)"

# Apply manifests
echo "📦 Applying Kubernetes manifests..."

kubectl apply -f "$MANIFEST_DIR/namespace.yaml"
sleep 2

kubectl apply -f "$MANIFEST_DIR/configmap.yaml"
kubectl apply -f "$MANIFEST_DIR/secret.yaml"

# Apply all other manifests
for manifest in "$MANIFEST_DIR"/*.yaml; do
    filename=$(basename "$manifest")
    if [[ ! "$filename" =~ ^(namespace|configmap|secret)\.yaml$ ]]; then
        echo "Applying $filename..."
        kubectl apply -f "$manifest"
    fi
done

echo "⏳ Waiting for deployments..."
sleep 10

echo "📊 Deployment status:"
kubectl get pods -n $NAMESPACE
kubectl get services -n $NAMESPACE

echo "✅ Deployment completed!"
echo "Access your application at the ingress URL configured in ingress.yaml"
