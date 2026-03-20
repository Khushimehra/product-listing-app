# 🛍️ Product Listing App

A full-stack web application that allows users to add, view, filter, and sort products dynamically.

---

## 🚀 Live Demo

🔗 https://product-listing-app-umber.vercel.app/

---

## 📌 Features

* ➕ Add new products (name, price, category)
* 📦 View all products in a clean card layout
* 🔍 Filter products by category
* 💰 Sort products by price (Low → High, High → Low)
* 🔄 Dynamic category generation from backend data
* ⚡ Real-time updates after adding products

---

## 🛠️ Tech Stack

### Frontend:

* React (Vite)
* Axios
* CSS 

### Backend:

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

---

## 📂 Project Structure

```
product-app/
│
├── backend/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── api/
│   └── ...
```

---

## ⚙️ API Endpoints

### 📥 Add Product

POST /products

```json
{
  "name": "Phone",
  "price": 20000,
  "category": "electronics"
}
```

---

## 🧠 Key Concepts Implemented

* REST API design
* Backend filtering and sorting using query parameters
* Modular project structure (MVC pattern)
* React state management (useState, useEffect)
* Component-based architecture
* Dynamic UI rendering

---

## 🚀 Deployment

* Frontend deployed on **Vercel**
* Backend deployed on **Render**
* Database hosted on **MongoDB Atlas**

---

## 📌 How to Run Locally

### 1. Clone the repository

```
git clone https://github.com/Khushimehra/product-listing-app
```

---

### 2. Backend Setup

```
cd backend
npm install
npm start
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_connection_string
```

---

### 3. Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## ✨ Future Improvements

* UI enhancement using Tailwind CSS
* Authentication (JWT)
* Product images support
* Pagination

---

## 👩‍💻 Author

Khushi Mehra

---


