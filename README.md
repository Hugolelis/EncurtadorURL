# 🚀 URL Shortener API

![Version](https://img.shields.io/badge/version-v1.0.0-blue.svg) ![Status](https://img.shields.io/badge/status-complete-brightgreen.svg) ![License](https://img.shields.io/badge/license-MIT-green.svg)


> Powerful and scalable backend API built with modern technologies.

---

## 📚 About

This is a RESTful API designed to handle URL shortening, redirection and link analytics.

---

## 🧰 Tech Stack

- ⚙️ Node.js & Fastify 
- 📘 TypeScript  
- 🗃️ MongoDB

---

## 📂 Project Structure

```bash
📦 src
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── services/
└── utils/
```
---

## 📬 Main Endpoints and Features

### 🔐 AuthController

| Method | Route         | Description             |
|--------|---------------|-------------------------|
| POST   | /api/login    | Authenticate user       |
| POST   | /api/register | Register a new user     |
| GET    | /api/profile  | Get logged-in user data |

###  👤 UserController

| Method | Route         | Description             |
|--------|---------------|-------------------------|
| GET    | /api/users    | Get all users           |
| GET    | /api/users/:id| Get user by ID          |
| PUT    | /api/users/:id| Update user             |
| DELETE | /api/users/:id| Delete user             |

###  📦 ProductController

| Method | Route             | Description             |
|--------|-------------------|-------------------------|
| GET    | /api/products     | List all products       |
| POST   | /api/products     | Create a new product    |
| PUT    | /api/products/:id | Update a product        |
| DELETE | /api/products/:id | Delete a product        |

---

## 🖥️ Running the Project

### 🔧 1. Clone the Repository

```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

### 📦 2. Install Dependencies

```bash
npm install
```

### ⚙️ 3. Set Up Environment Variables (.env)

```bash
PORT=3000
DATABASE_URL=mongodb://localhost:27017/your-db
JWT_SECRET=your_jwt_secret
```

### ▶️ 4. Start the Server

```bash
npm start
```
