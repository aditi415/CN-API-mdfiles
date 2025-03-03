
---

### **7. `get-reservation-history.md`**
```markdown
# GET /api/reservations?userId=12345

## Description
Fetch reservation history for a customer.

## Request
- **Method**: `GET`
- **URL**: `/api/reservations?userId=12345`
- **Query Parameters**:
  - `userId`: The ID of the customer.

## Response
- **Status Code**: `200 OK`
- **Body**:
  ```json
  [
    {
      "id": "67890",
      "restaurantId": "1",
      "date": "2023-10-25",
      "time": "19:00",
      "guests": 4,
      "status": "confirmed"
    }
  ]