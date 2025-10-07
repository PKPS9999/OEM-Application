# OrderManagementService

This microservice is part of the OEM Seller Platform.

## Features

- RESTful API endpoints
- JWT-based authentication
- Health check endpoint
- Swagger documentation

## API Endpoints

- `GET /api/ordermanagement` - Get all items
- `POST /api/ordermanagement` - Create new item
- `PUT /api/ordermanagement/{id}` - Update item
- `DELETE /api/ordermanagement/{id}` - Delete item
- `GET /api/ordermanagement/health` - Health check

## Running Locally

```bash
dotnet restore
dotnet run
```

The API will be available with Swagger documentation.
