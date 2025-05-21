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

📦 backend
| |├──src/
| |├── connection/
| |├── controllers/
| |├── helpers/
|  |├── interfaces/
|  |├── types/
|  |└── utils/
| |├── models/
| |├── routes/
| |└── server.ts
```
---

## 📬 Main Endpoints and Features

### 🔗 UrlController

| Method | Route                | Description                                           |
| ------ | -------------------- | ----------------------------------------------------- |
| POST   | /api/url/shortUrl    | Generates a new shortened URL                         |
| GET    | /api/url/getAllUrls  | Returns all shortened URLs                             |
| GET    | /api/url/\:shortCode | Redirects to the original URL based on the short code |


---

## 🖥️ Running the Project

### 🔧 1. Clone the Repository

```bash
git clone https://github.com/Hugolelis/ShortUrlAPI.git
cd ShortUrlAPI
```

### 📦 2. Install Dependencies

```bash
npm install
```

### ⚙️ 3. Set Up Environment Variables (.env)

```bash
DB_URI=mongodb://localhost:27017/shortUrlAPI
PORT=3000
HOST=0.0.0.0
```

### ▶️ 4. Start the Server

```bash
npm start
```
