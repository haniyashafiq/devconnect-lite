
# DevConnect-Lite

A backend API built with **Node.js**, **Express**, and **MySQL** for DevConnect-Lite where users can post projects and developers can place bids.

---

## 🚀 Features

* **User signup** (`role = user`)
* **Developer signup** (`role = developer`)
* **Login** with **JWT authentication**
* Users can **create projects**
* Developers can **place bids** on projects
* **Role-based access control**

---

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone (https://github.com/haniyashafiq/devconnect-lite)
cd freelance-marketplace
````

### 2\. Install dependencies

```bash
npm install
```

### 3\. Configure environment variables

Create a **`.env`** file in the root directory and add your configuration details:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=freelance_marketplace
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 4\. Initialize the database

Run the provided SQL script to create the database schema. You'll be prompted for your MySQL root password:

```bash
mysql -u root -p < db/init.sql
```

This script will:

  * Create the `freelance_marketplace` database
  * Set up the `users`, `projects`, and `bids` tables

### 5\. Start the server

```bash
npm run dev
```

The server will run at:

```
http://localhost:5000
```

-----

## 🔑 API Endpoints

### Auth

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/auth/signup/user` | Register a new user |
| `POST` | `/auth/signup/developer` | Register a new developer |
| `POST` | `/auth/login` | Login and receive JWT |

### Projects

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/projects/create` | Create a new project (**requires user role**) |
| `GET` | `/projects/open` | Get all open projects |
| `GET` | `/projects/:id/bids` | Get all bids for a specific project |

### Bids

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/bids/place` | Place a bid (**requires developer role**) |

-----

## 📂 Project Structure

```
src/
 ├── app.js
 ├── config/
 │    └── db.js
 ├── controllers/
 │    ├── authController.js
 │    ├── projectController.js
 │    └── bidController.js
 ├── middleware/
 │    ├── authMiddleware.js
 │    └── roleMiddleware.js
 ├── routes/
 │    ├── auth.js
 │    ├── projects.js
 │    └── bids.js
db/
 └── init.sql
.env
README.md
```

```
```