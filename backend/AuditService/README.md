# AuditService

This microservice is part of the OEM Seller Platform.

## Features

- RESTful API endpoints
- JWT-based authentication
- Health check endpoint
- Swagger documentation

## API Endpoints

- `GET /api/audit` - Get all items
- `POST /api/audit` - Create new item
- `PUT /api/audit/{id}` - Update item
- `DELETE /api/audit/{id}` - Delete item
- `GET /api/audit/health` - Health check

## Running Locally

```bash
dotnet restore
dotnet run
```

The API will be available with Swagger documentation.
