# 🍔 Food Delivery Web Application

A full-stack **Food Delivery Web Application** built using the **MERN stack** with a separate **Admin Panel** for managing food items and customer orders.

The application allows users to browse food items, add them to their cart, place orders, and make payments through Stripe. The admin panel allows administrators to add/remove food items and manage order status.

---

## 🚀 Project Overview

This project consists of three major parts:

1. **Customer Frontend** – React-based food ordering website
2. **Admin Panel** – React-based dashboard for managing food and orders
3. **Backend API** – Node.js + Express REST API connected to MongoDB Atlas

### Main Features

- 👤 User Registration & Login
- 🔐 JWT Authentication
- 🍕 Browse Food Items
- 🛒 Add/Remove Items from Cart
- 💰 Dynamic Cart & Order Total
- 💳 Stripe Payment Integration
- 📦 Place Food Orders
- 📋 View User Orders
- 🛠️ Admin Food Management
- 🚚 Admin Order Management
- 🔄 Update Order Status
- 🖼️ Food Image Upload
- ☁️ MongoDB Atlas Database
- 🔒 Environment Variable Configuration
- 🌐 RESTful API Architecture

---

# 🏗️ Project Architecture

```text
                    ┌─────────────────────┐
                    │    Customer React    │
                    │      Frontend        │
                    └──────────┬──────────┘
                               │
                               │ REST API
                               ▼
                    ┌─────────────────────┐
                    │   Node.js + Express │
                    │       Backend       │
                    └──────┬───────┬──────┘
                           │       │
                 ┌─────────┘       └──────────┐
                 ▼                            ▼
        ┌─────────────────┐          ┌─────────────────┐
        │ MongoDB Atlas   │          │     Stripe      │
        │    Database     │          │    Payments     │
        └─────────────────┘          └─────────────────┘
                           ▲
                           │
                    REST API
                           │
                    ┌──────┴──────┐
                    │    Admin    │
                    │    Panel    │
                    └─────────────┘

# 🛠️ Technologies Used

## 🎨 Frontend

- ⚛️ **React.js** – Build the customer-facing user interface
- ⚡ **Vite** – Fast development and build tool
- 🟨 **JavaScript** – Application logic
- 🌐 **HTML5** – Page structure
- 🎨 **CSS3** – Styling and layout
- 🛣️ **React Router** – Client-side navigation
- 🔗 **Axios** – API requests
- 🔄 **Context API** – Global state and cart management

## 🛠️ Admin Panel

- ⚛️ **React.js** – Admin dashboard interface
- ⚡ **Vite** – Development and build tool
- 🟨 **JavaScript** – Application logic
- 🛣️ **React Router** – Admin page navigation
- 🔗 **Axios** – Backend API communication
- 🔔 **React Toastify** – Notifications and alerts

## ⚙️ Backend

- 🟢 **Node.js** – JavaScript runtime
- 🚂 **Express.js** – REST API and server framework
- 🍃 **MongoDB** – Database
- 🔗 **Mongoose** – MongoDB object modeling
- 🔐 **JWT** – User authentication
- 🔒 **bcrypt** – Password hashing
- 💳 **Stripe** – Online payment processing
- 📤 **Multer** – Food image upload handling
- 🌱 **dotenv** – Environment variable management
- 🌐 **CORS** – Cross-origin resource sharing

## 🗄️ Database

- ☁️ **MongoDB Atlas** – Cloud-hosted MongoDB database

## 💳 Payment

- 💰 **Stripe Checkout** – Secure online payment processing

## 🔧 Development Tools

- 💻 **VS Code**
- 🐙 **Git**
- 🐙 **GitHub**
- 🧪 **Postman**
- 📦 **npm**

---

# 👨‍💻 Customer Frontend

The **Customer Frontend** is the user-facing part of the Food Delivery application.  
It allows customers to browse available food items, manage their cart, place orders, and complete the payment process.

## ✨ Customer Features

### 🔐 Authentication

Users can:

- 📝 Register for a new account
- 🔑 Login to their account
- 🎫 Receive a JWT authentication token
- 🔒 Access authenticated features

---

### 🍕 Food Listing

The frontend retrieves food items from the backend API and displays:

- 🖼️ Food image
- 🍔 Food name
- 📖 Food description
- 🏷️ Food category
- 💰 Food price
- 🛒 Add-to-cart option

---

### 🛒 Shopping Cart

Users can:

- ➕ Add food items to the cart
- 🔢 Increase or decrease item quantities
- 🗑️ Remove items from the cart
- 💵 View the subtotal
- 🚚 View the delivery fee
- 🧾 View the final total amount
