<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:D8A7B1,100:2E2A27&height=220&section=header&text=Sole%20%26%20Step&fontSize=52&fontColor=ffffff&fontAlignY=38&desc=A%20full%20e-commerce%20storefront%20%2B%20admin%20dashboard,%20built%20in%20React&descAlignY=58&descSize=16" alt="Sole & Step banner"/>

<p>
  <img src="https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19"/>
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 8"/>
  <img src="https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router 7"/>
  <img src="https://img.shields.io/badge/ESLint-clean-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint"/>
  <img src="https://img.shields.io/badge/license-MIT-cream?style=for-the-badge" alt="MIT License"/>
</p>

**A rose‑and‑cream shoe store storefront, paired with SoleHub — a fully functional admin dashboard for managing it.**

[Live demo](#) · [Features](#-features) · [Admin dashboard](#-SoleHub-admin-dashboard) · [Getting started](#-getting-started)

</div>

<br/>

## 🛍️ About

**Sole & Step** is a React + Vite e-commerce project for a shoe store, built as a full-stack-feeling frontend experience — a public storefront customers browse and shop on, plus **SoleHub**, a private admin dashboard where the store owner manages products, customers, coupons, reviews, and settings. Every piece of admin data is real state, persisted to `localStorage`, so actions like adding a product, blocking a customer, or changing your password actually stick between sessions.

<br/>

## ✨ Features

### Storefront
- Browse by category — Women, Kids, New Arrivals, Sale
- Product detail pages with dynamic routing (`/product/:id`)
- Cart and Wishlist, both backed by React Context and available store-wide
- Toast notifications for cart/wishlist actions
- Responsive, rose/cream design system built with CSS variables

### SoleHub — Admin Dashboard
| Page | What it does |
|---|---|
| **Dashboard** | Live revenue, orders, customer, and product stats computed from real data |
| **Products** | Add, view, and remove products from the catalog |
| **Add Product** | Full form with validation that writes straight into the shared product list |
| **Inventory** | Low-stock view with one-click restock |
| **Customers** | Add, remove, and block/unblock customers |
| **Coupons** | Create and remove discount codes |
| **Reviews** | Approve or reject pending customer reviews |
| **Analytics** | Category breakdown and revenue charts generated from live data |
| **Notifications** | Auto-generated low-stock alerts, dismissible |
| **Settings** | Editable store info + a working change-password flow |

Admin credentials are seeded once from `public/admin.json` and then live entirely in `localStorage` — so changing your password in Settings really changes what you log in with next time.

<br/>

## 🧱 Tech Stack

- **React 19** with function components and hooks
- **Vite 8** for dev server and bundling
- **React Router 7** for client-side routing
- **Context API** for cart, wishlist, and toast state
- Plain CSS with a custom design-token system (no CSS framework)
- **ESLint** (flat config, `eslint-plugin-react-hooks`) for code quality

<br/>

## 📁 Project Structure

```
src/
├── components/
│   ├── soleHubComponents/   # Sidebar, Topbar, Panel — admin-only UI
│   └── ...                  # Navbar, Button, shared storefront UI
├── context/
│   ├── CartContext.jsx
│   ├── wishlistContext.jsx
│   └── toastContext.jsx
├── js/
│   ├── products.jsx         # Product seed data
│   ├── customers.js         # Customer seed data
│   ├── coupons.js           # Coupon seed data
│   ├── reviews.js           # Review seed data
│   ├── storage.js           # localStorage load/save helpers
│   └── stats.js             # Revenue / best-sellers / category math
├── pages/
│   ├── SoleHub/              # The entire admin dashboard
│   │   ├── soleHub.jsx       # Central hub: owns all state, wires it to pages
│   │   ├── login.jsx
│   │   ├── dashboard.jsx
│   │   ├── products.jsx
│   │   ├── addProduct.jsx
│   │   ├── inventory.jsx
│   │   ├── customers.jsx
│   │   ├── coupons.jsx
│   │   ├── reviews.jsx
│   │   ├── analytics.jsx
│   │   ├── settings.jsx
│   │   └── notification.jsx
│   └── ...                   # Home, Shop, Women, Kids, Cart, Wishlist, etc.
└── styles/
```

<br/>

## 🚀 Getting Started

**Prerequisites:** Node.js 18+

```bash
# clone and install
git clone https://github.com/<your-username>/sole-step.git
cd sole-step
npm install

# run the dev server
npm run dev
```

Open `http://localhost:5173` for the storefront, and `http://localhost:5173/soleHub` for the SoleHub admin dashboard.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

### Demo Admin Login

Credentials are defined in `public/admin.json` and seeded into the app on first run:

```json
{ "email": "az.zi.mo.fa@gmail.com", "password": "GoiGoeool" }
```

> Once logged in, changing the password from **Settings → Change password** updates it for good — log out and back in with the new one.

<br/>

## 🗺️ Roadmap

- [ ] Edit-product form (currently create/remove only)
- [ ] Real backend/API instead of `localStorage`
- [ ] Order management page
- [ ] Multi-language support (Arabic RTL toggle in Settings is UI-only for now)

<br/>

## 📄 License

Licensed under the [MIT License](LICENSE).

<br/>

<div align="center">
<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:2E2A27,100:D8A7B1&height=100&section=footer"/>
</div>