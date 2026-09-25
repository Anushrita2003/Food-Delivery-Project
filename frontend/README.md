# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🍔 Food Delivery Frontend

A modern and responsive food delivery web application frontend built with **React.js** and **Vite**. The application allows users to browse food items, add products to their cart, place orders, and proceed to online payment.

## 🚀 Features

- 🏠 **Home Page** – Browse available food items and categories
- 🔍 **Food Search** – Easily find food items
- 🍕 **Food Listing** – Display food items with images, names, descriptions, and prices
- 🛒 **Shopping Cart** – Add, remove, and manage food items
- 🔢 **Quantity Management** – Increase or decrease item quantities
- 👤 **User Authentication** – Login and registration functionality
- 📦 **Order Placement** – Enter delivery information and place orders
- 💳 **Online Payment** – Integrated with Stripe Checkout
- 📋 **My Orders** – View previously placed orders and their status
- 🔔 **Toast Notifications** – User-friendly success and error notifications
- 📱 **Responsive UI** – Designed to work across different screen sizes

---

## 🛠️ Technologies Used

### Frontend

- **React.js**
- **Vite**
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**
- **React Router DOM**
- **Axios**
- **React Toastify**

### Payment

- **Stripe Checkout**

### Backend Communication

The frontend communicates with a Node.js/Express backend through REST APIs.

---

## 📂 Project Structure

```text
src/
│
├── assets/
│   └── assets.js
│
├── components/
│   ├── ExploreMenu/
│   ├── FoodDisplay/
│   ├── FoodItem/
│   ├── Footer/
│   ├── Header/
│   ├── Navbar/
│   └── context/
│       └── StoreContext.jsx
│
├── pages/
│   ├── Cart/
│   ├── Home/
│   ├── LoginPopup/
│   ├── MyOrders/
│   ├── PlaceOrder/
│   └── Verify/
│
├── App.jsx
├── main.jsx
└── index.css
