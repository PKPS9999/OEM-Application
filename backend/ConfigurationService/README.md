# ConfigurationService

This microservice is part of the OEM Seller Platform.

## Features

- RESTful API endpoints
- JWT-based authentication
- Health check endpoint
- Swagger documentation

## API Endpoints

- `GET /api/configuration` - Get all items
- `POST /api/configuration` - Create new item
- `PUT /api/configuration/{id}` - Update item
- `DELETE /api/configuration/{id}` - Delete item
- `GET /api/configuration/health` - Health check

## Running Locally

```bash
dotnet restore
dotnet run
```

The API will be available with Swagger documentation.
