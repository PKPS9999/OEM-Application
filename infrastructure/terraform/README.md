# Infrastructure as Code

This directory contains Terraform configurations for deploying the OEM Seller Platform infrastructure on Azure.

## Resources Created

- Resource Group
- Azure Container Registry (ACR)
- Azure Kubernetes Service (AKS)
- Azure SQL Database
- Redis Cache
- Key Vault
- Storage Account

## Prerequisites

- Azure CLI
- Terraform >= 1.0
- Azure subscription

## Setup

1. Copy the example variables file:
   ```bash
   cp terraform.tfvars.example terraform.tfvars
   ```

2. Edit `terraform.tfvars` with your specific values

3. Initialize Terraform:
   ```bash
   terraform init
   ```

4. Plan the deployment:
   ```bash
   terraform plan
   ```

5. Apply the configuration:
   ```bash
   terraform apply
   ```

## Cleanup

To destroy all resources:
```bash
terraform destroy
```
