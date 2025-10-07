# EmailService

This microservice is part of the OEM Seller Platform.

## Features

- RESTful API endpoints
- JWT-based authentication
- Health check endpoint
- Swagger documentation

## API Endpoints

- `GET /api/email` - Get all items
- `POST /api/email` - Create new item
- `PUT /api/email/{id}` - Update item
- `DELETE /api/email/{id}` - Delete item
- `GET /api/email/health` - Health check

## Running Locally

```bash
dotnet restore
dotnet run
```

The API will be available with Swagger documentation.
