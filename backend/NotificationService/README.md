# NotificationService

This microservice is part of the OEM Seller Platform.

## Features

- RESTful API endpoints
- JWT-based authentication
- Health check endpoint
- Swagger documentation

## API Endpoints

- `GET /api/notification` - Get all items
- `POST /api/notification` - Create new item
- `PUT /api/notification/{id}` - Update item
- `DELETE /api/notification/{id}` - Delete item
- `GET /api/notification/health` - Health check

## Running Locally

```bash
dotnet restore
dotnet run
```

The API will be available with Swagger documentation.
