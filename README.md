# eCommerce

A simple eCommerce web app for browsing products, viewing details, and managing a cart/checkout flow.

> ⚠️ Work in progress—see the **Roadmap / TODO** section below.

---

## Features

- Product listing with search and basic filtering  
- Product detail pages with images and specs  
- Shopping cart and order review  
- Client-side routing (single-page app)  
- Lightweight state management

---

## Getting Started

### Prerequisites
- Node.js (LTS recommended)
- npm or yarn

### Installation

```bash
# 1) Clone the repo
git clone https://github.com/wyattraimer/eCommerce.git
cd eCommerce

# 2) Install dependencies
npm install
# or: yarn
```

### Running in Development

```bash
npm run dev
# or:
npm start
```

Then open the local URL printed in your terminal (commonly `http://localhost:3000` or `http://localhost:5173`, depending on your setup).

### Production Build

```bash
npm run build
```

### Preview Production Build (if available)

```bash
npm run preview
```

---

## Project Structure (typical)

```
eCommerce/
├─ public/                # Static assets
├─ src/
│  ├─ components/         # Reusable UI components
│  ├─ pages/              # Route-based pages (Home, Product, Cart, Order, etc.)
│  ├─ hooks/              # Custom hooks (optional)
│  ├─ context/ or store/  # App state (Context/Redux/etc.)
│  ├─ services/           # API helpers/fetch utilities
│  ├─ styles/             # Global styles (CSS/Tailwind)
│  ├─ App.jsx             # App root
│  └─ main.jsx            # Entry point / router mounting
├─ package.json
└─ README.md
```

> The exact layout may differ slightly—this is a guide for orientation.

---

## Environment Variables (if applicable)

If your app calls a backend or third-party APIs, create a `.env` (and/or `.env.local`) file:

```
VITE_API_BASE_URL=http://localhost:4000
# REACT_APP_API_BASE_URL=...   ← if using CRA
# NEXT_PUBLIC_API_BASE_URL=... ← if using Next.js
```

Adjust the prefix (`VITE_`, `REACT_APP_`, etc.) to match your build tool.

---

## Scripts (common)

These may vary based on your setup; check `package.json`.

- `dev` / `start` – run the development server  
- `build` – create a production build  
- `preview` – serve the production build locally  
- `test` – run tests (if configured)  
- `lint` – run lints/formatters (if configured)

---

## Tech Stack (high level)

- **React** for UI  
- **React Router** for client-side routing  
- State via React Context or Redux (depending on the current code)  
- Build tooling via Vite or CRA (depending on the current code)

---

## Roadmap / TODO

- ✅ Core pages and routing  
- ✅ Cart and basic checkout flow  
- ⏳ **Fix search filtering** (improve query → results accuracy and UI feedback)  
- ⏳ **Enable adding products to cart from individual product pages** (ensure consistent add-to-cart between list and detail views)  
- ⏳ Add empty/loading states for slow networks  
- ⏳ Validation and better error handling in checkout  
- ⏳ Unit tests for cart logic and product filtering  
- ⏳ Basic accessibility pass (focus states, aria labels)

---

## Contributing

1. Create a branch: `git checkout -b feature/my-change`  
2. Commit changes: `git commit -m "feat: describe change"`  
3. Push the branch: `git push origin feature/my-change`  
4. Open a Pull Request

Please keep PRs focused and include a brief description of the change and screenshots/GIFs when UI is affected.

---

## Troubleshooting

- **Blank page / crash on refresh:** If a page depends on navigation state (e.g., `location.state`), add guards or fetch by ID on direct loads.  
- **“Each child in a list should have a unique key” warning:** Ensure every `.map()` item has a stable `key` (e.g., product id).  
- **Undefined property errors:** Use optional chaining (`obj?.child`) and initialize state with safe defaults until data loads.
