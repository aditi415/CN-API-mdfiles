# Owner and Staff Modules
## Owner APIs
post-owner-details,
get-owner-Id,
post-restaurant-view,
get-restaurant-overview,

post-authenticate-staff,
get-staff-credntls

### Staff APIs
post-staff-details,
get-staff-details,
...


## Owner and Staff API Documentation
### Table of Contents
1. [Owner APIs](#owner-apis)
   - [Create Owner](#post-apiowners)
   - [Get Owner Details](#get-apiownersownerid)
   - [Add Restaurant](#post-apiownersowneridrestaurants)
   - [View Restaurants](#get-apiownersowneridrestaurants)
   - [Get Restaurant Details](#get-apiownersowneridrestaurantsrestaurantid)
   - [Authenticate Staff](#post-authstafflogin)
   - [Get Staff Roles](#get-apistaffstaffidroles)
2. [Staff APIs](#staff-apis)
   - [Register Staff](#post-apistaff)
   - [Get Staff Details](#get-apistaffstaffid)

---

# _Owner APIs_
...
## **POST /api/owners**
### **Description:**
Create a new owner account.

### **Request:**
- **Method**: `POST`
- **URL**: `/api/owners`
- **Body**:
  ```json
  {
    "firstname": "string",
    "lastname":"string",
    "email":"sring",
    "password": "string"
  }
  ```

### **Response:**
-//Work in progress on further Use Cases
-STANDARD EXPECTED: 
- **Status code**: `201 Created`
- **Body**:
  ```json
  {
    "ownerId": "alphanumeric",
    "message": "Owner account created successfully"
  }
  ```

1. when user doesn't give one of the required field of data
- **Status code**: `400 Bad Request`
- **Body**:
  ```json
  {
    "error": "Firstname and Lastname are expected"
  }
  ```
2. When user gives a password less than 8 characters
- **Status code**: `400 Bad Request`
- **Body**:
  ```json
  {
    "error": "Password must be atleast 8 characters"
  }
  ```
 3. When user doesnt provide correct email ID     
 -**Status code**: `400 Bad Request`
 - **Body**:
  ```json
  {
    "error": "Invalid email format"
  }
   ```
  4. Duplicate email/User already exists 
  -**Status code**: `409 Conflict`
 - **Body**:
  ```json
  {
    "error": "Invalid email format"
  }
   ```
   5. Unexpected Server error 
  -**Status code**: `500 Internal Server Error`
 - **Body**:
  ```json
  {
    "error": "Internal server error"
  }
   ```


---

## **GET /api/owners/{ownerId}**
### **Description:**
Get owner details by ID.
### **Request:**
- **Method**: `POST`
- **URL**: `/api/owners/{owenrId}`
- **Body**:
  ```json
  {
     "ownerId:alphaNumeric"
    "firstname": "string",
    "lastname":"string",
    "email":"sring",
    "password": "string" //Use case of wrong password 
  }
  ```
### **Response:**
- **Status code**: `200 OK`
- **Body**:
  ```json
  {
    "ownerId": "alphanumeric",
    "firstname": "String",
    "lastname": "String",
    "email": "email",
    "restaurs": "String",
    "Address" : "Alphanumeric"
  }
  ```

---

## **POST /api/owners/{ownerId}/restaurants**
### **Description:**
Add a new restaurant under an owner.

### **Request:**
- **Body**:
  ```json
  {
    "owner":"string(firstname)",
    "restaurantName": "String/Alphanumeric",
    "location": "String(City, State)",
    "capacity": 100
  }
  ```

### **Response:**
- **Status code**: `201 Created`
- **Body**:
  ```json
  {
    "restaurantId": "67890",
    "message": "Restaurant added successfully"
  }
  ```

---

## **GET /api/owners/{ownerId}/restaurants** //Looks sketchy, Work in progress
### **Description:**
View all restaurants managed by an owner.

### **Response:**
- **Status code**: `200 OK`
- **Body**:
  ```json
  [
    {
      "restaurantId": "67890",
      "restaurantName": "The Great Indian Diner",
      "location": "Mumbai",
      "capacity": 100
    },
    {
      "restaurantId": "98765",
      "restaurantName": "Spice Delight",
      "location": "Delhi",
      "capacity": 150
    }
  ]
  ```

---

## **GET /api/owners/{ownerId}/restaurants/{restaurantId}**
### **Description:**
Get details of a specific restaurant.

### **Response:**
- **Status code**: `200 OK`
- **Body**:
  ```json
  {
    "restaurantId": "67890",
    "restaurantName": "The Great Indian Diner",
    "location": "Mumbai",
    "capacity": 100
  }
  ```

---

## **POST /auth/staff/login**
### **Description:**
Authenticate staff login.

### **Request:**
- **Body**:
  ```json
  {
    "email": "staff@example.com",
    "password": "securepassword"
  }
  ```

### **Response:**
- **Status code**: `200 OK`
- **Body**:
  ```json
  {
    "token": "jwt_token_here",
    "role": "manager"
  }
  ```

---

## **GET /api/staff/{staffId}/roles**
### **Description:**
Get staff roles & permissions.

### **Response:**
- **Status code**: `200 OK`
- **Body**:
  ```json
  {
    "staffId": "45678",
    "role": "manager",
    "permissions": ["manage_orders", "view_reports"]
  }
  ```

---

# Staff APIs

## **POST /api/staff**
### **Description:**
Register a new staff member.

### **Request:**
- **Body**:
  ```json
  {
    "name": "Alice",
    "email": "alice@example.com",
    "password": "securepassword",
    "role": "waiter"
  }
  ```

### **Response:**
- **Status code**: `201 Created`
- **Body**:
  ```json
  {
    "staffId": "45678",
    "message": "Staff registered successfully"
  }
  ```

---

## **GET /api/staff/{staffId}**
### **Description:**
Get details of a specific staff member.

### **Response:**
- **Status code**: `200 OK`
- **Body**:
  ```json
  {
    "staffId": "45678",
    "name": "Alice",
    "role": "waiter",
    "restaurantId": "67890"
  }
  ```

