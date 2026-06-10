import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, ShoppingCart, Star } from 'lucide-react'
import { useCartStore } from '../store/cartStore'

const formatPrice = (price) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price)

export default function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart)
  const [showAdded, setShowAdded] = useState(false)

  const handleAddToCart = (event) => {
    event.preventDefault()
    addToCart(product)
    setShowAdded(true)
    window.setTimeout(() => setShowAdded(false), 1400)
  }

  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white shadow-md"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-surface">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
          <AnimatePresence>
            {showAdded && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-semibold text-green-700 shadow-md"
              >
                <Check size={14} />
                Added
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold text-orange">
            {product.category}
          </span>
          <span className="flex items-center gap-1 text-sm font-medium text-gray-600">
            <Star size={15} className="fill-orange text-orange" />
            {product.rating.toFixed(1)}
          </span>
        </div>

        <Link to={`/product/${product.id}`} className="group">
          <h3 className="text-lg font-bold text-navy transition group-hover:text-orange">{product.name}</h3>
        </Link>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-6 text-gray-600">{product.description}</p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="text-xl font-bold text-navy">{formatPrice(product.price)}</p>
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={!product.stock}
            className="inline-flex items-center gap-2 rounded-xl bg-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            <ShoppingCart size={17} />
            {product.stock ? 'Add to Cart' : 'Sold Out'}
          </button>
        </div>
      </div>
    </motion.article>
  )
}
