# SearchService

This microservice is part of the OEM Seller Platform.

## Features

- RESTful API endpoints
- JWT-based authentication
- Health check endpoint
- Swagger documentation

## API Endpoints

- `GET /api/search` - Get all items
- `POST /api/search` - Create new item
- `PUT /api/search/{id}` - Update item
- `DELETE /api/search/{id}` - Delete item
- `GET /api/search/health` - Health check

## Running Locally

```bash
dotnet restore
dotnet run
```

The API will be available with Swagger documentation.
