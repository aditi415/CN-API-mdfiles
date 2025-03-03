
### **5. `post-waitlist.md`**
```markdown
# POST /api/waitlist

## Description
Add a customer to the waitlist.

## Request
- **Method**: `POST`
- **URL**: `/api/waitlist`
- **Body**:
  ```json
  {
    "restaurantId": "1",
    "name": "John Doe",
    "phone": "+1234567890",
    "partySize": 4
  }

## Response
- **Status Code**: 201 created
- **Body**:

    {
  "message": "Added to waitlist successfully",
  "waitlistId": "98765"
}