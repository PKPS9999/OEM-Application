# SupplierService

This microservice is part of the OEM Seller Platform.

## Features

- RESTful API endpoints
- JWT-based authentication
- Health check endpoint
- Swagger documentation

## API Endpoints

- `GET /api/supplier` - Get all items
- `POST /api/supplier` - Create new item
- `PUT /api/supplier/{id}` - Update item
- `DELETE /api/supplier/{id}` - Delete item
- `GET /api/supplier/health` - Health check

## Running Locally

```bash
dotnet restore
dotnet run
```

The API will be available with Swagger documentation.
