# GET /api/restaurants

## Description
Fetch a list of restaurants with filters (e.g., location, cuisine, crowd status).

## Request
- **Method**: `GET`
- **URL**: `/api/restaurants`
- **Query Parameters**:
  - `location` (optional): Filter by location.
  - `cuisine` (optional): Filter by cuisine type.
  - `crowdStatus` (optional): Filter by crowd status (e.g., "low", "moderate", "high").

## Response
- **Status Code**: `200 OK`
- **Body**:
  ```json
  [
    {
      "id": "1",
      "name": "The Food Place",
      "location": "New York",
      "cuisine": "Italian",
      "crowdStatus": "moderate",
      "occupiedSeats": 25,
      "totalSeats": 50
    }
  ]