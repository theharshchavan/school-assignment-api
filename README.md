# 🏫 School Locator API

A simple Node.js and Express-based API project that allows users to add schools with their coordinates and fetch a list of schools sorted by proximity to the user’s location.

---

## 🚀 Project Features

- Add new school with name, address, and location (latitude & longitude).
- List all schools sorted by distance from user-provided coordinates.
- Proper input validation and error handling.
- Uses MySQL as the database.

---

## 📦 Technologies Used

- Node.js  
- Express.js  
- MySQL  
- dotenv  
- Postman (for testing)

---

## 📌 API Route Structure

| Route | Method | URL |
|-------|--------|-----|
| Home | GET | `http://localhost:8080` |
| Add School | POST | `http://localhost:8080/api/v1/addschool` |
| List Schools | GET | `http://localhost:8080/api/v1/listschools?latitude=18.5204&longitude=73.8567` |

---

## 📂 API Endpoints

### ✅ Home Route  
- **Method:** GET  
- **URL:** `http://localhost:8080`  
- **Description:** Basic health check route.
- **Response:**
```json
"Home Route"
