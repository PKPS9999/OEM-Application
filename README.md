# OEM Seller Platform

A comprehensive microservices-based platform for selling Original Equipment Manufacturer (OEM) products compliant with various ISO standards.

## 🏗️ Architecture Overview

This platform consists of 20 microservices, a React frontend, and complete DevOps infrastructure for Azure deployment.

### 🔧 Microservices (19 Services)
1. **OEMProductService** - Product catalog and management
2. **UserManagementService** - User registration, authentication, and profiles
3. **OrderManagementService** - Order processing and tracking
4. **PaymentService** - Payment processing and transactions
5. **InventoryService** - Stock management and tracking
6. **ShippingService** - Shipping and logistics management
7. **NotificationService** - Email and SMS notifications
8. **ReportingService** - Analytics and reporting
9. **AuthenticationService** - JWT token management
10. **ISOComplianceService** - ISO standards compliance checking
11. **AuditService** - Audit trails and logging
12. **ConfigurationService** - Application configuration management
13. **FileStorageService** - File upload and storage
14. **EmailService** - Email delivery service
15. **SearchService** - Product and content search
16. **ReviewService** - Product reviews and ratings
17. **AnalyticsService** - User behavior and sales analytics
18. **SupplierService** - Supplier management
19. **QualityAssuranceService** - Quality control and testing

### 🌐 Frontend Application
- **React 18** with TypeScript
- **Ant Design** UI components
- **JWT Authentication** with role-based access
- **Product Catalog** with advanced search and filtering
- **Shopping Cart** and checkout functionality
- **Order Management** and tracking
- **Responsive Design** for mobile and desktop

### ☁️ Infrastructure
- **Azure Kubernetes Service (AKS)** - Container orchestration
- **Azure Container Registry (ACR)** - Private Docker registry
- **Azure SQL Database** - Primary database
- **Azure Redis Cache** - Caching and session storage
- **Azure Key Vault** - Secrets management
- **Azure Service Bus** - Message queuing
- **Azure Storage Account** - File storage
- **Azure Log Analytics** - Monitoring and logging

## 🚀 Quick Start

### Prerequisites
- .NET 8 SDK
- Node.js 18+
- Docker Desktop
- Azure CLI
- kubectl
- Terraform

### Local Development
1. **Setup Environment**
   ```bash
   ./infrastructure/scripts/setup-environment.sh
   ```

2. **Build All Services**
   ```bash
   ./infrastructure/scripts/build-all.sh
   ```

3. **Run Locally**
   ```bash
   # Start databases (SQL Server, Redis)
   docker-compose up -d db redis

   # Run individual services
   cd backend/OEMProductService
   dotnet run

   # Run frontend
   cd frontend/oem-seller-web
   npm start
   ```

### Azure Deployment
1. **Setup Infrastructure**
   ```bash
   cd infrastructure/terraform
   cp terraform.tfvars.example terraform.tfvars
   # Edit terraform.tfvars with your values

   terraform init
   terraform plan
   terraform apply
   ```

2. **Build and Push Images**
   ```bash
   ./infrastructure/scripts/build-all.sh
   ./infrastructure/scripts/push-all-acr.sh
   ```

3. **Deploy to Kubernetes**
   ```bash
   # Get AKS credentials
   az aks get-credentials --resource-group oem-seller-rg --name oem-seller-aks

   # Deploy applications
   ./infrastructure/scripts/deploy-all-k8s.sh
   ```

## 📋 Project Structure

```
oem-seller-platform/
├── backend/                    # Microservices
│   ├── shared/                # Shared models and utilities
│   ├── OEMProductService/     # Product management service
│   ├── UserManagementService/ # User management service
│   └── ...                    # Other microservices
├── frontend/                  # React web application
│   └── oem-seller-web/       # Main web app
├── infrastructure/            # Infrastructure as Code
│   ├── terraform/            # Terraform configurations
│   ├── manifests/            # Kubernetes manifests
│   └── scripts/              # Automation scripts
├── pipelines/                # Azure DevOps pipelines
├── monitoring/               # Monitoring configurations
└── tests/                    # Test projects
```

## 🔐 Security Features
- JWT-based authentication system
- Role-based authorization (Admin, Supplier, Customer)
- Azure Key Vault integration for secrets
- HTTPS enforcement and input validation
- ISO standards compliance checking

## 📊 Business Features
- Multi-vendor OEM product management
- Advanced product search and filtering
- Order processing workflow
- Payment integration ready
- Inventory tracking and management
- Real-time notifications
- Analytics and reporting

## 🛠️ Technology Stack
- **Backend**: .NET 8, ASP.NET Core Web API, Entity Framework Core
- **Frontend**: React 18, TypeScript, Ant Design, Axios
- **Database**: Azure SQL Database, Redis Cache
- **Infrastructure**: Azure AKS, ACR, Key Vault, Service Bus
- **DevOps**: Azure DevOps, Terraform, Docker, Kubernetes
- **Monitoring**: Application Insights, Azure Monitor

## 📖 Documentation
- Each service includes detailed README.md
- API documentation via Swagger/OpenAPI
- Architecture diagrams and deployment guides
- Troubleshooting and maintenance guides

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Update documentation
6. Submit a pull request

## 📄 License
This project is licensed under the MIT License.

## 🆘 Support
- Create an issue in the repository
- Check the troubleshooting guide
- Contact the development team

---
**Built with ❤️ for OEM sellers worldwide**
