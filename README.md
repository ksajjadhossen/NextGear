# Next Gear – Premium Tech & Gadget Retail Solution

**Next Gear** is a high-performance, minimalist e-commerce web application built with **Next.js 14 (App Router)**. Designed for the modern tech enthusiast, it offers a seamless interface to explore and manage premium gadgets like wearables, audio devices, and accessories.

### 🚀 [Live Demo](https://next-gear-iota.vercel.app/) | 📂 [GitHub Repository](https://github.com/ksajjadhossen/NextGear)

---

## 📖 Project Overview

This project is a professional-grade web application developed as an assessment task to demonstrate proficiency in modern web technologies. **Next Gear** bridges the gap between hardware complexity and seamless user utility, featuring a polished UI, Firebase authentication, and robust state management.

### Core Philosophy:

- **Minimalist Aesthetics:** Clean, architectural design focusing on product visuals and white space.
- **Performance First:** Optimized using Next.js 14 features for fast transitions and asset loading.
- **User Centric:** Intuitive navigation with protected routes and personalized dashboards.

---

## ✨ Key Features

- **Advanced Authentication System:** Integrated with **Firebase Auth** featuring:
  - **Google One-Tap:** Instant login/sign-up via Google provider.
  - **Register Page (`/register`):** Dedicated account creation with email and password.
  - **Login Page (`/login`):** Secure access for returning users.
- **Smart Search & Discovery:** \* Real-time **Search Bar** on the `/items` page to find gadgets by name instantly.
- **Powerful Filtering Logic:** \* **Category Filtering:** Browse specific collections (e.g., Earphones, Speakers, Phones).
  - **Price Range Filter:** Sort items based on budget constraints.
  - **Advanced Sorting:** Organize products with "Price: Low to High" and "Price: High to Low" options for better shopping decisions.
- **Responsive Architecture:** Meticulously crafted for seamless usage across Mobile, Tablet, and Desktop.
- **Inventory Management (Protected):**
  - **Add Item:** A secure form to list new products with title, price, and descriptions.
  - **Manage Inventory:** A private dashboard to track, view, and delete listed items.
- **Interactive UI:** \* Sticky navigation and uniform card layouts with hover states.
  - Real-time **Toast notifications** for successful actions (Registration, Login, Item Added).
  - Dynamic Navbar: Context-aware profile dropdowns and Auth buttons.
- **Local Persistence:** Utilizes LocalStorage for managing user-added items, ensuring data persists across sessions.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14 (App Router)](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Authentication:** [Firebase Auth](https://firebase.google.com/products/auth)
- **State Management:** React Context API
- **Icons & Fonts:** Lucide React & Geist Sans
- **Deployment:** [Vercel](https://vercel.app)

---

## 🛤️ Route Summary

| Route         | Access        | Description                                                  |
| :------------ | :------------ | :----------------------------------------------------------- |
| `/`           | Public        | Landing page with Hero, Featured Gear, and "Our Philosophy". |
| `/items`      | Public        | Shop page with Search, Category Filter, and Price Sorting.   |
| `/items/[id]` | Public        | Dynamic route for detailed product specifications.           |
| `/login`      | Public        | Access your account via Google or Email.                     |
| `/register`   | Public        | Create a new account with email credentials.                 |
| `/about`      | Public        | Brand story and mission statement.                           |
| `/items/add`  | **Protected** | Secure form for authorized users to list new gadgets.        |
| `/my-items`   | **Protected** | Private dashboard to manage and delete listed inventory.     |

---

## ⚙️ Setup & Installation

Follow these steps to run the project locally:

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/ksajjadhossen/NextGear.git](https://github.com/ksajjadhossen/NextGear.git)
    cd NextGear
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Configure Environment Variables:**
    Create a `.env.local` file and add your Firebase credentials:

    ```env
    NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

---

## 🤝 Contribution & Contact

Developed with focus on clean code and UX by **Sajjad Hossen**.

- **GitHub:** [@ksajjadhossen](https://github.com/ksajjadhossen)
- **LinkedIn:** [ksajjadhossen](https://linkedin.com/in/ksajjadhossen)
- **Email:** ksajjadhossen07@gmail.com

---

_Created as part of the Odyssey Next.js Assessment - 2026._
