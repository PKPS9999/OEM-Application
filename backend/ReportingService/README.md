# ReportingService

This microservice is part of the OEM Seller Platform.

## Features

- RESTful API endpoints
- JWT-based authentication
- Health check endpoint
- Swagger documentation

## API Endpoints

- `GET /api/reporting` - Get all items
- `POST /api/reporting` - Create new item
- `PUT /api/reporting/{id}` - Update item
- `DELETE /api/reporting/{id}` - Delete item
- `GET /api/reporting/health` - Health check

## Running Locally

```bash
dotnet restore
dotnet run
```

The API will be available with Swagger documentation.
