# AnalyticsService

This microservice is part of the OEM Seller Platform.

## Features

- RESTful API endpoints
- JWT-based authentication
- Health check endpoint
- Swagger documentation

## API Endpoints

- `GET /api/analytics` - Get all items
- `POST /api/analytics` - Create new item
- `PUT /api/analytics/{id}` - Update item
- `DELETE /api/analytics/{id}` - Delete item
- `GET /api/analytics/health` - Health check

## Running Locally

```bash
dotnet restore
dotnet run
```

The API will be available with Swagger documentation.
