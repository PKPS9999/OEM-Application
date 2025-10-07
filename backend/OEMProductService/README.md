# OEM Product Service

This microservice handles all product-related operations for the OEM Seller Platform.

## Features

- Product CRUD operations
- Advanced product search and filtering
- Category and ISO standard management
- Product image and specification handling
- Stock quantity tracking
- JWT-based authentication and authorization

## API Endpoints

- `GET /api/oemproduct` - Get all products (with pagination and filtering)
- `GET /api/oemproduct/{id}` - Get product by ID
- `POST /api/oemproduct` - Create new product (Admin/Supplier only)
- `PUT /api/oemproduct/{id}` - Update product (Admin/Supplier only)
- `DELETE /api/oemproduct/{id}` - Delete product (Admin only)
- `GET /api/oemproduct/categories` - Get all categories
- `GET /api/oemproduct/iso-standards` - Get all ISO standards

## Configuration

Update `appsettings.json` with your database connection string and JWT settings.

## Running Locally

```bash
dotnet restore
dotnet run
```

The API will be available at `https://localhost:5001` with Swagger documentation.
