# ISOComplianceService

This microservice is part of the OEM Seller Platform.

## Features

- RESTful API endpoints
- JWT-based authentication
- Health check endpoint
- Swagger documentation

## API Endpoints

- `GET /api/isocompliance` - Get all items
- `POST /api/isocompliance` - Create new item
- `PUT /api/isocompliance/{id}` - Update item
- `DELETE /api/isocompliance/{id}` - Delete item
- `GET /api/isocompliance/health` - Health check

## Running Locally

```bash
dotnet restore
dotnet run
```

The API will be available with Swagger documentation.
