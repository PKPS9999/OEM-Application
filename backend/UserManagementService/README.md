# UserManagementService

This microservice is part of the OEM Seller Platform.

## Features

- RESTful API endpoints
- JWT-based authentication
- Health check endpoint
- Swagger documentation

## API Endpoints

- `GET /api/usermanagement` - Get all items
- `POST /api/usermanagement` - Create new item
- `PUT /api/usermanagement/{id}` - Update item
- `DELETE /api/usermanagement/{id}` - Delete item
- `GET /api/usermanagement/health` - Health check

## Running Locally

```bash
dotnet restore
dotnet run
```

The API will be available with Swagger documentation.
