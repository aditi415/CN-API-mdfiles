
---

### **3. `get-crowd-status.md`**
```markdown
# GET /api/restaurants/:id/crowd-status

## Description
Fetch real-time crowd status for a restaurant.

## Request
- **Method**: `GET`
- **URL**: `/api/restaurants/:id/crowd-status`
- **URL Parameters**:
  - `id`: The ID of the restaurant.

## Response
- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "totalSeats": 50,
    "occupiedSeats": 25,
    "crowdStatus": "moderate"
  }