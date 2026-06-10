import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Headphones, RotateCcw, Shirt, ShieldCheck, ShoppingBag, Smartphone, Truck, Watch } from 'lucide-react'
import { useState } from 'react'
import CategoryCard from '../components/CategoryCard'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45 },
}

export default function Home() {
  const [newsletterMessage, setNewsletterMessage] = useState('')
  const categories = [
    { label: 'Electronics', icon: Smartphone },
    { label: 'Clothing', icon: Shirt },
    { label: 'Footwear', icon: ShoppingBag },
    { label: 'Accessories', icon: Watch },
  ]
  const featuredProducts = products.slice(0, 3)

  return (
    <main>
      <section className="bg-surface">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <motion.div {...fadeIn} className="text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange">LUXEON SHOP</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-navy sm:text-5xl">
              Fresh Styles, Delivered Fast
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-600 lg:mx-0">
              Shop practical electronics, clothing, footwear, and accessories selected for daily Indian lifestyles.
              Clean design, clear prices, and dependable checkout keep the experience simple.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link to="/products" className="rounded-xl bg-navy px-6 py-3 text-center font-semibold text-white transition hover:bg-orange">
                Shop Now
              </Link>
              <Link to="/products" className="rounded-xl border border-navy px-6 py-3 text-center font-semibold text-navy transition hover:border-orange hover:text-orange">
                Browse Categories
              </Link>
            </div>
          </motion.div>
          <motion.div {...fadeIn} className="overflow-hidden rounded-xl bg-white shadow-md">
            <img
              src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=1200&q=85"
              alt="Clothing and shopping bags arranged in a bright store"
              className="h-full min-h-[320px] w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <motion.section {...fadeIn} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-navy">Shop by Category</h2>
          <p className="mt-3 text-gray-600">Find everyday essentials without digging through clutter.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.label} {...category} />
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeIn} className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-bold text-navy">Featured Products</h2>
              <p className="mt-3 text-gray-600">Popular picks that work well for gifting and daily use.</p>
            </div>
            <Link to="/products" className="font-semibold text-orange hover:text-navy">
              View all products
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeIn} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Truck, title: 'Free Shipping', text: 'Get free delivery on orders above Rs. 999 across India.' },
            { icon: RotateCcw, title: 'Easy Returns', text: 'Return eligible products within 7 days of delivery.' },
            { icon: Headphones, title: '24/7 Support', text: 'Reach our support team anytime for order assistance.' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-white p-6 text-center shadow-md">
              <item.icon className="mx-auto text-orange" size={32} />
              <h3 className="mt-4 text-xl font-bold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeIn} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-orange/10 px-6 py-10 text-center">
          <ShieldCheck className="mx-auto text-orange" size={34} />
          <h2 className="mt-4 text-3xl font-bold text-navy">Get Store Updates</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Receive product launches, seasonal offers, and useful shopping updates in your inbox.
          </p>
          <form
            className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row"
            onSubmit={(event) => {
              event.preventDefault()
              setNewsletterMessage('Thanks for subscribing. We will send store updates to your inbox.')
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="min-h-12 flex-1 rounded-xl border border-border bg-white px-4 outline-none focus:border-orange"
            />
            <button type="submit" className="rounded-xl bg-orange px-6 py-3 font-semibold text-white transition hover:bg-navy">
              Subscribe
            </button>
          </form>
          {newsletterMessage && (
            <p className="mt-4 text-sm font-medium text-green-700">{newsletterMessage}</p>
          )}
        </div>
      </motion.section>
    </main>
  )
}
