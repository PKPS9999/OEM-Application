# PaymentService

This microservice is part of the OEM Seller Platform.

## Features

- RESTful API endpoints
- JWT-based authentication
- Health check endpoint
- Swagger documentation

## API Endpoints

- `GET /api/payment` - Get all items
- `POST /api/payment` - Create new item
- `PUT /api/payment/{id}` - Update item
- `DELETE /api/payment/{id}` - Delete item
- `GET /api/payment/health` - Health check

## Running Locally

```bash
dotnet restore
dotnet run
```

The API will be available with Swagger documentation.
