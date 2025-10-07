#!/bin/bash

# Push to Azure Container Registry
set -e

echo "=== Pushing to Azure Container Registry ==="

ACR_NAME="oemselleracr"

# Login to ACR
echo "🔑 Logging into ACR..."
az acr login --name $ACR_NAME

# Push all images
IMAGES=(
    "oemproductservice"
    "usermanagementservice"
    "ordermanagementservice" 
    "paymentservice"
    "inventoryservice"
    "shippingservice"
    "notificationservice"
    "reportingservice"
    "authenticationservice"
    "isocomplianceservice"
    "auditservice"
    "configurationservice"
    "filestorageservice"
    "emailservice"
    "searchservice"
    "reviewservice"
    "analyticsservice"
    "supplierservice"
    "qualityassuranceservice"
    "oem-seller-web"
)

for image in "${IMAGES[@]}"; do
    echo "📤 Pushing $image..."
    docker push "${ACR_NAME}.azurecr.io/${image}:latest"
    echo "✅ $image pushed successfully"
done

echo "✅ All images pushed to ACR!"
echo "Next: Run './infrastructure/scripts/deploy-all-k8s.sh' to deploy to Kubernetes"
