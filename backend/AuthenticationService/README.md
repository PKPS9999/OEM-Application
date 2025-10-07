# AuthenticationService

This microservice is part of the OEM Seller Platform.

## Features

- RESTful API endpoints
- JWT-based authentication
- Health check endpoint
- Swagger documentation

## API Endpoints

- `GET /api/authentication` - Get all items
- `POST /api/authentication` - Create new item
- `PUT /api/authentication/{id}` - Update item
- `DELETE /api/authentication/{id}` - Delete item
- `GET /api/authentication/health` - Health check

## Running Locally

```bash
dotnet restore
dotnet run
```

The API will be available with Swagger documentation.
