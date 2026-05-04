# 🚀 Next Gear – Premium Tech & Gadget Retail Solution

**Next Gear** is a high-performance, full-stack e-commerce web application built with **Next.js 14 (App Router)** and **MongoDB**. Designed for the modern tech enthusiast, it offers a professional-grade interface to explore, manage, and curate premium gadgets with real-time data persistence.

### 🔗 [Live Demo](https://next-gear-iota.vercel.app/) | 📂 [GitHub Repository](https://github.com/ksajjadhossen/NextGear)

---

## 📖 Project Overview

This project has evolved from a front-end UI assessment into a robust **Full-Stack Application**. By integrating **MongoDB** and **Mongoose**, the application now features persistent data management, replacing local storage with a professional-grade database architecture.

### Engineering Core:
- **Full-Stack Integration:** Leveraging Next.js API Routes for secure communication between the client and MongoDB.
- **Data Modeling:** Implemented structured schemas using Mongoose for products, users, and wishlist items.
- **Optimized UX:** Integrated global loading states and real-time feedback loops to ensure a smooth, "app-like" experience during data operations.

---

## ✨ Key Features

- **❤️ Dynamic Wishlist System:** 
  - Users can save items to a personal wishlist with a single click.
  - Full CRUD functionality: Items are stored in MongoDB and can be removed instantly from the Wishlist view.
- **📦 Inventory & "My Items":**
  - **Add Product:** A secure form for authorized users to list new gadgets.
  - **Auto-Navigation:** Upon successfully adding an item, users are automatically redirected to their personalized dashboard.
  - **Management Dashboard:** A private `/my-items` route where users can view and manage only the products they have added.
- **🔒 Advanced Authentication:** Powered by **Firebase Auth**, featuring Google One-Tap and Email/Password registration with protected route middleware.
- **⏳ Loading & Feedback:** 
  - Implementation of **Loading Spinners** to handle asynchronous data fetching gracefully.
  - **Toast Notifications** (React Hot Toast) for all major actions like adding items, removing from wishlist, or logging in.
- **🔍 Smart Discovery:** Real-time search functionality, category-based filtering, and price-range sorting.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14 (App Router)](https://nextjs.org/)
- **Database:** [MongoDB](https://www.mongodb.com/) with [Mongoose ODM](https://mongoosejs.com/)
- **Authentication:** [Firebase Auth](https://firebase.google.com/products/auth)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Feedback:** React Hot Toast & Lucide React Icons
- **Deployment:** [Vercel](https://vercel.app)

---

## 🛤️ Route Summary

| Route           | Access         | Description                                                  |
| :-------------- | :------------- | :----------------------------------------------------------- |
| `/`             | Public         | Landing page with Hero and Featured Gear sections.           |
| `/items`        | Public         | Main marketplace with Search, Category, and Price filters.   |
| `/wishlist`     | **Protected**  | User-specific saved items fetched from MongoDB.              |
| `/items/add`    | **Protected**  | Secure form for inventory contribution.                      |
| `/my-items`     | **Protected**  | Personal dashboard for managing user-added products.         |
| `/login`        | Public         | Secure authentication via Google or Email.                   |

---

## ⚙️ Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/ksajjadhossen/NextGear.git](https://github.com/ksajjadhossen/NextGear.git)
   cd NextGear
