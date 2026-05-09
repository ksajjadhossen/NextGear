# 🚀 Next Gear – Premium Tech & Gadget Retail Solution

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge&logo=mongodb)
![Firebase](https://img.shields.io/badge/Firebase-Authentication-orange?style=for-the-badge&logo=firebase)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Styling-38BDF8?style=for-the-badge&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)

</div>

---

## 🌐 Live Links

### 🔗 Project Links

- 🚀 **Live Website:** https://next-gear-iota.vercel.app/
- 📂 **GitHub Repository:** https://github.com/ksajjadhossen/NextGear

## 🔐 Authentication Notice

Admin credentials are not publicly shared for security reasons.

If you want to test admin features, please contact the developer.

### 👨‍💻 Developer Profiles

- 💼 **GitHub:** https://github.com/ksajjadhossen
- 🔗 **LinkedIn:** https://www.linkedin.com/in/ksajjadhossen/
- 🌐 **Portfolio:** https://ksajjadhossen.vercel.app/
- 📘 **Facebook:** https://facebook.com/ksajjadhossen

---

# 📖 Project Overview

**Next Gear** is a modern, high-performance, full-stack e-commerce platform built using **Next.js App Router**, **MongoDB Atlas**, and **Firebase Authentication**.

Inspired by Apple’s premium minimalist design philosophy, the platform delivers a clean, responsive, and professional shopping experience for modern tech enthusiasts.

This project evolved from a simple front-end assignment into a production-ready full-stack architecture featuring:

- Persistent cloud database integration
- Secure authentication & authorization
- Dynamic product management system
- Optimized client/server rendering
- Real-time UI feedback
- Protected dashboard functionality
- Smart filtering & product discovery

---

# 🧠 Engineering Highlights

## ⚡ Full-Stack Architecture

Built with modern Next.js App Router architecture using:

- Server Components
- Client Components
- API Route Handlers
- Dynamic Rendering
- Async Data Fetching

## 🗄️ Database Engineering

Implemented robust schema-based architecture using:

- MongoDB Atlas
- Mongoose ODM
- Structured Product Collections
- User Collections
- Wishlist Collections

## 🔒 Authentication & Authorization

Integrated Firebase Authentication with:

- Google Sign In
- Email/Password Authentication
- Protected Routes
- Middleware Authorization
- Role-Based Access Control (Admin/User)

## 🎯 User Experience Optimization

- Skeleton Loaders
- Lazy Loading
- Toast Notifications
- Real-Time Feedback
- Optimistic UI Updates
- Auto Redirect Handling
- Empty State Navigation

---

# ✨ Core Features

## ❤️ Dynamic Wishlist System

- Add/remove products instantly
- Persistent MongoDB storage
- User-specific collections
- Protected wishlist access
- Real-time updates without reload

---

## 📦 Product Inventory Management

### ➕ Add Product

Admins can securely add:

- Product Images
- Product Details
- Pricing Information
- Categories
- Stock Information

### 🛠️ My Items Dashboard

Private dashboard where admins can:

- Manage uploaded products
- Delete products
- View inventory instantly
- Track added products

### 🔄 Smart Navigation

- Empty state redirects
- Route protection
- Auto-navigation after actions

---

## 🔍 Smart Product Discovery

### Features Include:

- Real-Time Search
- Category Filtering
- Price Sorting
- Pagination System
- Responsive Product Grid
- Dynamic Product Cards

---

## ⏳ Interactive Feedback System

Integrated:

- React Toastify
- Loading Spinners
- Dynamic State Handling
- Smooth Page Transitions

---

# 🛠️ Tech Stack

| Technology     | Usage                |
| -------------- | -------------------- |
| Next.js 15     | Full-Stack Framework |
| React 19       | Frontend Library     |
| MongoDB Atlas  | Cloud Database       |
| Mongoose       | ODM                  |
| Firebase Auth  | Authentication       |
| Tailwind CSS   | Styling              |
| React Toastify | Notifications        |
| Lucide React   | Icons                |
| Vercel         | Deployment           |

---

# 📂 Folder Structure

```bash
src/
 ┣ app/
 ┣ components/
 ┣ lib/
 ┣ models/
 ┣ providers/
 ┣ services/
 ┣ hooks/
 ┣ utils/
 ┗ assets/
```

---

# 🛤️ Route Summary

| Route        | Access     | Description                                               |
| ------------ | ---------- | --------------------------------------------------------- |
| `/`          | Public     | Landing page with Hero, Philosophy, and Featured Products |
| `/items`     | Public     | Product marketplace with filters and pagination           |
| `/wishlist`  | Protected  | User-specific wishlist data                               |
| `/items/add` | Admin Only | Add new products securely                                 |
| `/my-items`  | Admin Only | Manage admin-uploaded products                            |
| `/login`     | Public     | Authentication page                                       |
| `/register`  | Public     | User registration page                                    |

---

# 📸 Key Functionalities

## ✅ Authentication System

- Google Login
- Email Registration
- Protected Routes
- Firebase Session Handling

## ✅ Database Persistence

- Product CRUD Operations
- Wishlist CRUD Operations
- User Data Persistence

## ✅ Responsive Design

- Mobile First
- Tablet Responsive
- Desktop Optimized

## ✅ Performance Optimizations

- Image Optimization
- Dynamic Rendering
- Route-based Loading
- Lazy Components

---

# ⚙️ Environment Variables

Create a `.env.local` file in the root directory and add:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id

MONGODB_URI=your_mongodb_connection_string

NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

> ⚠️ Sensitive credentials have been hidden for security purposes.

---

# ⚙️ Setup & Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/ksajjadhossen/NextGear.git

cd NextGear
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Run Development Server

```bash
npm run dev
```

---

## 4️⃣ Open in Browser

```bash
http://localhost:3000
```

---

# 🚀 Deployment

This project is deployed on:

- ▲ Vercel
- MongoDB Atlas
- Firebase Authentication

---

# 🌟 Future Improvements

- 🛒 Shopping Cart System
- 💳 Payment Gateway Integration
- ⭐ Product Reviews & Ratings
- 📦 Order Tracking
- 🌙 Dark Mode
- 📊 Admin Analytics Dashboard
- ❤️ Product Recommendation System
- 🔔 Push Notifications

---

# 📈 Project Goals

This project was developed to practice and demonstrate:

- Full-Stack Development
- Modern Next.js Architecture
- Database Integration
- Authentication Systems
- Protected Routes
- State Management
- Real-World CRUD Operations
- Production-Level UI/UX

---

# 👨‍💻 Author

## Khandaker Sajjad Hossen

Passionate MERN Stack & Next.js Developer focused on building scalable full-stack web applications with modern technologies.

### 🔗 Connect With Me

- GitHub → https://github.com/ksajjadhossen
- LinkedIn → https://www.linkedin.com/in/ksajjadhossen/
- Portfolio → https://ksajjadhossen.vercel.app/

---

# 📄 License

This project is developed for educational, portfolio, and learning purposes.

---

<div align="center">

### ⭐ If you like this project, consider giving it a star on GitHub ⭐

</div>
