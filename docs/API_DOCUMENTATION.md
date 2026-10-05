# API Documentation

## Base URL
`http://localhost:5000/api`

## Authentication
All protected endpoints require JWT token in Authorization header:
```
Authorization: Bearer <token>
```

## Incidents

### Get All Incidents
```
GET /incidents

Query Parameters:
- type: accident | blockage | construction
- severity: high | medium | low
- area: Lahore neighborhood

Response:
[
  {
    "_id": "...",
    "type": "accident",
    "severity": "high",
    "location": { "lat": 31.5204, "lng": 74.3587 },
    "area": "DHA Phase 5",
    "description": "Car collision",
    "status": "active",
    "image": "url",
    "reportedBy": "userId",
    "createdAt": "2024-01-01T00:00:00Z"
  }
]
```

### Create Incident Report
```
POST /incidents

Body:
{
  "type": "accident",
  "severity": "high",
  "location": { "lat": 31.5204, "lng": 74.3587 },
  "area": "DHA Phase 5",
  "description": "Car collision at Main Road",
  "image": "base64 or file"
}

Response: 201 Created
{
  "_id": "...",
  "type": "accident",
  "status": "pending",
  "createdAt": "..."
}
```

## Authentication

### Register
```
POST /auth/register

Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "secure_password",
  "phoneNumber": "+923001234567"
}

Response: 201 Created
{
  "user": { "_id": "...", "name": "John Doe", "email": "john@example.com" },
  "token": "jwt_token"
}
```

### Login
```
POST /auth/login

Body:
{
  "email": "john@example.com",
  "password": "secure_password"
}

Response: 200 OK
{
  "user": { "_id": "...", "name": "John Doe" },
  "token": "jwt_token"
}
```

## Admin Endpoints

### Get All Incidents (Admin)
```
GET /admin/incidents
Auth: Required (Admin)

Response:
[
  {
    "_id": "...",
    "type": "accident",
    "status": "pending",
    "reportedBy": { "name": "John Doe", "email": "john@example.com" },
    "createdAt": "..."
  }
]
```

### Approve Incident
```
PUT /admin/incidents/:id/approve
Auth: Required (Admin)

Response: 200 OK
{
  "message": "Incident approved",
  "incident": { "_id": "...", "status": "approved" }
}
```

### Reject Incident
```
PUT /admin/incidents/:id/reject
Auth: Required (Admin)
Body:
{
  "reason": "False report"
}

Response: 200 OK
{
  "message": "Incident rejected",
  "incident": { "_id": "...", "status": "rejected" }
}
```
