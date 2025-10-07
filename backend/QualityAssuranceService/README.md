# QualityAssuranceService

This microservice is part of the OEM Seller Platform.

## Features

- RESTful API endpoints
- JWT-based authentication
- Health check endpoint
- Swagger documentation

## API Endpoints

- `GET /api/qualityassurance` - Get all items
- `POST /api/qualityassurance` - Create new item
- `PUT /api/qualityassurance/{id}` - Update item
- `DELETE /api/qualityassurance/{id}` - Delete item
- `GET /api/qualityassurance/health` - Health check

## Running Locally

```bash
dotnet restore
dotnet run
```

The API will be available with Swagger documentation.
