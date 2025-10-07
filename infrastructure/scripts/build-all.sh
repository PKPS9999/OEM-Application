#!/bin/bash

# Build All Services Script
set -e

echo "=== Building OEM Seller Platform ==="

ACR_NAME="oemselleracr"
BUILD_ID=$(date +%Y%m%d-%H%M%S)

echo "Build ID: $BUILD_ID"

# Backend services
SERVICES=(
    "OEMProductService"
    "UserManagementService" 
    "OrderManagementService"
    "PaymentService"
    "InventoryService"
    "ShippingService"
    "NotificationService"
    "ReportingService"
    "AuthenticationService"
    "ISOComplianceService"
    "AuditService"
    "ConfigurationService"
    "FileStorageService"
    "EmailService"
    "SearchService"
    "ReviewService"
    "AnalyticsService"
    "SupplierService"
    "QualityAssuranceService"
)

# Build backend services
for service in "${SERVICES[@]}"; do
    echo "🔨 Building $service..."
    cd "backend/$service"
    dotnet build --configuration Release
    docker build -t "${ACR_NAME}.azurecr.io/${service,,}:${BUILD_ID}" .
    docker tag "${ACR_NAME}.azurecr.io/${service,,}:${BUILD_ID}" "${ACR_NAME}.azurecr.io/${service,,}:latest"
    cd - > /dev/null
    echo "✅ $service built successfully"
done

# Build frontend
echo "🔨 Building frontend..."
cd frontend/oem-seller-web
npm ci
npm run build
docker build -t "${ACR_NAME}.azurecr.io/oem-seller-web:${BUILD_ID}" .
docker tag "${ACR_NAME}.azurecr.io/oem-seller-web:${BUILD_ID}" "${ACR_NAME}.azurecr.io/oem-seller-web:latest"
cd - > /dev/null

echo "✅ All services built successfully!"
echo "Build ID: $BUILD_ID"
echo "Next: Run './infrastructure/scripts/push-all-acr.sh' to push to Azure Container Registry"
