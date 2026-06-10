import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Minus, Plus, ShoppingCart, Star } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import { useCartStore } from '../store/cartStore'

const formatPrice = (price) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price)

export default function ProductDetail() {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const [showAdded, setShowAdded] = useState(false)
  const addToCart = useCartStore((state) => state.addToCart)
  const product = products.find((item) => item.id === Number(id))

  const relatedProducts = useMemo(() => {
    if (!product) return []
    const sameCategory = products.filter((item) => item.category === product.category && item.id !== product.id)
    const fallback = products.filter(
      (item) => item.category !== product.category && item.id !== product.id
    )
    return [...sameCategory, ...fallback].slice(0, 3)
  }, [product])

  if (!product) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-navy">Product not found</h1>
        <Link to="/products" className="mt-5 inline-block rounded-xl bg-navy px-6 py-3 font-semibold text-white">
          Back to Products
        </Link>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="grid gap-10 lg:grid-cols-2"
      >
        <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-md">
          <img src={product.image} alt={product.name} className="h-full min-h-[360px] w-full object-cover" />
        </div>

        <div className="flex flex-col justify-center">
          <span className="w-fit rounded-full bg-orange/10 px-3 py-1 text-sm font-semibold text-orange">
            {product.category}
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl">{product.name}</h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
            <Star size={18} className="fill-orange text-orange" />
            <span>{product.rating.toFixed(1)} customer rating</span>
          </div>
          <p className="mt-5 text-3xl font-bold text-navy">{formatPrice(product.price)}</p>
          <p className="mt-5 max-w-xl leading-8 text-gray-600">{product.description}</p>
          <p className={`mt-4 font-semibold ${product.stock ? 'text-green-700' : 'text-red-600'}`}>
            {product.stock ? 'In stock and ready to ship' : 'Currently out of stock'}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex w-fit items-center rounded-xl border border-border">
              <button
                type="button"
                aria-label="Decrease quantity"
                className="p-3 text-navy hover:text-orange"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
              >
                <Minus size={18} />
              </button>
              <span className="w-12 text-center font-semibold">{quantity}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                className="p-3 text-navy hover:text-orange"
                onClick={() => setQuantity((value) => value + 1)}
              >
                <Plus size={18} />
              </button>
            </div>
            <button
              type="button"
              disabled={!product.stock}
              onClick={() => {
                addToCart(product, quantity)
                setShowAdded(true)
                window.setTimeout(() => setShowAdded(false), 1600)
              }}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3 font-semibold text-white transition hover:bg-orange disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>
          </div>
          <AnimatePresence>
            {showAdded && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="mt-4 inline-flex w-fit items-center gap-2 rounded-xl bg-green-50 px-4 py-2 text-sm font-semibold text-green-700"
              >
                <Check size={17} />
                Added {quantity} item{quantity > 1 ? 's' : ''} to your cart
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-navy">Related Products</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </main>
  )
}
