# CI/CD Pipelines

This directory contains Azure DevOps pipeline definitions for the OEM Seller Platform.

## Pipelines

1. **azure-pipelines-backend.yaml** - Builds and deploys all microservices
2. **azure-pipelines-frontend.yaml** - Builds and deploys the React frontend
3. **azure-pipelines-infrastructure.yaml** - Manages infrastructure with Terraform

## Setup

1. Create service connections in Azure DevOps:
   - Azure Resource Manager connection: `azure-service-connection`
   - Docker registry connection: `oemselleracr-connection`
   - Kubernetes connection: `oem-seller-aks-connection`

2. Import these pipeline files in Azure DevOps

3. Configure environments:
   - `oem-seller-production`
   - `oem-seller-infrastructure`

## Triggers

- Backend pipeline: Triggers on changes to `backend/*`
- Frontend pipeline: Triggers on changes to `frontend/*`
- Infrastructure pipeline: Triggers on changes to `infrastructure/terraform/*`
