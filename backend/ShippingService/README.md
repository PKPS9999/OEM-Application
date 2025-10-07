# ShippingService

This microservice is part of the OEM Seller Platform.

## Features

- RESTful API endpoints
- JWT-based authentication
- Health check endpoint
- Swagger documentation

## API Endpoints

- `GET /api/shipping` - Get all items
- `POST /api/shipping` - Create new item
- `PUT /api/shipping/{id}` - Update item
- `DELETE /api/shipping/{id}` - Delete item
- `GET /api/shipping/health` - Health check

## Running Locally

```bash
dotnet restore
dotnet run
```

The API will be available with Swagger documentation.
