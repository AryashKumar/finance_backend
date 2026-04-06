# 💰 Finance Data Processing Backend

## 📌 Overview

This project is a backend system for managing financial records with role-based access control. It supports user authentication, financial data management, and dashboard analytics.

The system is designed with clean architecture principles, ensuring scalability, maintainability, and clear separation of concerns.
---
## 🚀 Features

### 🔐 Authentication & Authorization

* JWT-based authentication
* Role-Based Access Control (RBAC)
* Roles:

  * **Viewer** → Read-only access
  * **Analyst** → Read + analytics
  * **Admin** → Full access (CRUD + users)
---
### 👤 User Management

* Register & login users
* Assign roles
* Active/inactive status support
---
### 💰 Financial Records

* Create, update, delete records (Admin only)
* View records (all roles)
* Fields:

  * Amount
  * Type (Income / Expense)
  * Category
  * Date
  * Notes
---
### 📊 Dashboard APIs

* Total Income
* Total Expenses
* Net Balance
* Category-wise breakdown
---
### 🛡️ Security & Validation

* JWT authentication middleware
* Role-based authorization
* Input validation
* Proper error handling
---
## 🧱 Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** PostgreSQL
* **ORM:** Prisma
* **Authentication:** JWT
* **Tools:** Postman, VS Code
---
## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone <your-repo-link>
cd finance-backend
```

---

### 2️⃣ Install Dependencies

```
npm install
```

---

### 3️⃣ Setup Environment Variables

Create `.env` file:

```
DATABASE_URL="your_postgresql_connection_url"
JWT_SECRET="your_secret_key"
PORT=5000
```

---

### 4️⃣ Setup Database

Run migration:

```
npx prisma migrate dev --name init
```

Generate Prisma client:

```
npx prisma generate
```

---

### 5️⃣ Run Server

```
npm run dev
```

Server will run at:

```
http://localhost:5000
```
## 🔑 Test Credentials

Email: test@gmail.com  
Password: 123456  
Role: ADMIN
---

## 🧪 API Endpoints

### 🔐 Auth

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| POST   | /auth/register | Register user |
| POST   | /auth/login    | Login user    |

---

### 💰 Records

| Method | Endpoint     | Access |
| ------ | ------------ | ------ |
| GET    | /records     | All    |
| POST   | /records     | Admin  |
| PATCH  | /records/:id | Admin  |
| DELETE | /records/:id | Admin  |

---

### 📊 Dashboard

| Method | Endpoint            |
| ------ | ------------------- |
| GET    | /dashboard/summary  |
| GET    | /dashboard/category |

---

## 🔑 Authentication

Use JWT token in headers:

```
Authorization: Bearer <your_token>
```

---

## ⚠️ Assumptions

* Each user manages their own financial records
* Admin has full access
* Dates are stored in ISO format
* Categories are user-defined strings

---

## 🌍 Deployment

* Backend hosted on Render
* Database hosted on Neon

---

## 🔮 Future Improvements

* Pagination & filtering
* Refresh tokens
* API documentation (Swagger)
* Unit & integration testing
* Caching (Redis)

---

## 🧠 Design Highlights

* Clean separation: controllers, middleware, routes
* Middleware-based RBAC
* Aggregation queries for analytics
* Scalable database schema using Prisma

---

## 👨‍💻 Author

Aryash
