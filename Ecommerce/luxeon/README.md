# SHOPIFY - LUXEON SHOP

SHOPIFY is a clean, modern ecommerce website built as a college project. The store is branded as **LUXEON SHOP** and presents a light-themed shopping experience for electronics, clothing, footwear, and accessories.

The website includes product browsing, category filtering, search, product detail pages, cart management, an about page, and a contact page. All product names, descriptions, prices, and page content are manually written for a realistic store experience.

## Live Preview

Run the project locally and open:

```bash
http://localhost:5173/
```

If Vite starts on another port, use the URL shown in the terminal.

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Router DOM v6
- Zustand for cart state
- Framer Motion for subtle animations
- Lucide React for icons
- Google Fonts: Poppins

## Main Features

- Sticky responsive navbar with mobile hamburger menu
- Cart icon with live item count badge
- Home page with hero, categories, featured products, benefits, and newsletter CTA
- Products page with search and category tabs
- Product detail page with quantity selector and related products
- Persistent shopping cart using localStorage
- Cart quantity controls, remove item action, subtotal, shipping, and total
- Empty cart state with continue shopping link
- About page with brand story, mission, values, and team section
- Contact page with form and realistic Indian store details
- Fully responsive layout for mobile, tablet, and desktop

## Pages

| Route | Page | Description |
| --- | --- | --- |
| `/` | Home | Hero section, categories, featured products, shopping benefits, newsletter form |
| `/products` | Products | Searchable and filterable product grid |
| `/product/:id` | Product Detail | Product image, price, category, description, stock, quantity, add to cart |
| `/cart` | Cart | Cart items, quantity controls, remove option, order summary |
| `/about` | About | Store story, mission, values, and team member |
| `/contact` | Contact | Contact form, address, email, and phone |

## Product Categories

- Electronics
- Clothing
- Footwear
- Accessories

The store currently includes 9 manually created products with Indian Rupee pricing.

## Project Structure

```text
src/
  components/
    Navbar.jsx
    Footer.jsx
    ProductCard.jsx
    CartItem.jsx
    CategoryCard.jsx
  pages/
    Home.jsx
    Products.jsx
    ProductDetail.jsx
    Cart.jsx
    About.jsx
    Contact.jsx
  store/
    cartStore.js
  data/
    products.js
  App.jsx
  main.jsx
  index.css
```

## Setup Instructions

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

## Cart State

Cart state is handled with Zustand in `src/store/cartStore.js`.

Supported cart actions:

- `addToCart`
- `removeFromCart`
- `updateQuantity`
- `clearCart`

Cart data is persisted in localStorage, so items remain available after refreshing the page.

## Design Theme

- Background: white
- Surface: light gray
- Accent colors: deep navy and warm orange
- Typography: Poppins
- Cards: white background, soft shadow, rounded corners
- Animations: subtle fade and hover movement only

## Project Note

This website is made for academic presentation purposes. Checkout and contact form submissions are demo interactions and do not connect to a real payment gateway or backend server.
