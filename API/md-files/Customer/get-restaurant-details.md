
---

### **2. `get-restaurant-details.md`**
```markdown
# GET /api/restaurants/:id

## Description
Fetch details of a specific restaurant.

## Request
- **Method**: `GET`
- **URL**: `/api/restaurants/:id`
- **URL Parameters**:
  - `id`: The ID of the restaurant.

## Response
- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "id": "1",
    "name": "The Food Place",
    "location": "New York",
    "cuisine": "Italian",
    "crowdStatus": "moderate",
    "occupiedSeats": 25,
    "totalSeats": 50,
    "rating": 4.5,
    "reviews": [
      {
        "user": "John Doe",
        "comment": "Great food!",
        "rating": 5
      }
    ]
  }