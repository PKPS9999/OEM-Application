# InventoryService

This microservice is part of the OEM Seller Platform.

## Features

- RESTful API endpoints
- JWT-based authentication
- Health check endpoint
- Swagger documentation

## API Endpoints

- `GET /api/inventory` - Get all items
- `POST /api/inventory` - Create new item
- `PUT /api/inventory/{id}` - Update item
- `DELETE /api/inventory/{id}` - Delete item
- `GET /api/inventory/health` - Health check

## Running Locally

```bash
dotnet restore
dotnet run
```

The API will be available with Swagger documentation.
