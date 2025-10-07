# FileStorageService

This microservice is part of the OEM Seller Platform.

## Features

- RESTful API endpoints
- JWT-based authentication
- Health check endpoint
- Swagger documentation

## API Endpoints

- `GET /api/filestorage` - Get all items
- `POST /api/filestorage` - Create new item
- `PUT /api/filestorage/{id}` - Update item
- `DELETE /api/filestorage/{id}` - Delete item
- `GET /api/filestorage/health` - Health check

## Running Locally

```bash
dotnet restore
dotnet run
```

The API will be available with Swagger documentation.
