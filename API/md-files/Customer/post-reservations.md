
---

### **4. `post-reservations.md`**
```markdown
# POST /api/reservations

## Description
Create a new reservation.

## Request
- **Method**: `POST`
- **URL**: `/api/reservations`
- **Body**:
  ```json
  {
    "restaurantId": "1",
    "customerId": "12345",
    "date": "2023-10-25",
    "time": "19:00",
    "guests": 4,
    "specialRequests": "Window seat preferred"
  }


## Response
- **Status code**: 201 created
- **Body**:
  {
  "message": "Reservation created successfully",
  "reservationId": "67890"
}