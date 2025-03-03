
---

### **8. `post-notifications.md`**
```markdown
# POST /api/notifications

## Description
Send notifications to customers.

## Request
- **Method**: `POST`
- **URL**: `/api/notifications`
- **Body**:
  ```json
  {
    "userId": "12345",
    "message": "Your table is ready!",
    "type": "waitlist"
  }

## Response
- **Status Code**:200 OK
- **Body**:
  {
    "message": "Notification sent successfully"
  }