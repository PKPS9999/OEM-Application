# ReviewService

This microservice is part of the OEM Seller Platform.

## Features

- RESTful API endpoints
- JWT-based authentication
- Health check endpoint
- Swagger documentation

## API Endpoints

- `GET /api/review` - Get all items
- `POST /api/review` - Create new item
- `PUT /api/review/{id}` - Update item
- `DELETE /api/review/{id}` - Delete item
- `GET /api/review/health` - Health check

## Running Locally

```bash
dotnet restore
dotnet run
```

The API will be available with Swagger documentation.
