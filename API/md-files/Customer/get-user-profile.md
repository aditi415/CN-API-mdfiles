
---

### **6. `get-user-profile.md`**
```markdown
# GET /api/users/:id

## Description
Fetch customer profile details.

## Request
- **Method**: `GET`
- **URL**: `/api/users/:id`
- **URL Parameters**:
  - `id`: The ID of the customer.

## Response
- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "id": "12345",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890"
  }