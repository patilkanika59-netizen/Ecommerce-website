import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'
import { useState } from 'react'
import CartItem from '../components/CartItem'
import { useCartStore } from '../store/cartStore'

const formatPrice = (price) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price)

export default function Cart() {
  const [checkoutMessage, setCheckoutMessage] = useState('')
  const items = useCartStore((state) => state.items)
  const subtotal = useCartStore((state) => state.getTotalPrice())
  const clearCart = useCartStore((state) => state.clearCart)
  const shipping = subtotal === 0 || subtotal >= 999 ? 0 : 79
  const total = subtotal + shipping

  if (items.length === 0) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-border bg-surface p-10 text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-orange/10 text-orange">
            <ShoppingBag size={44} />
          </div>
          <h1 className="mt-6 text-3xl font-bold text-navy">Your cart is empty</h1>
          <p className="mx-auto mt-3 max-w-md text-gray-600">
            Add products you like and they will appear here with quantity controls and price details.
          </p>
          <Link to="/products" className="mt-6 inline-block rounded-xl bg-navy px-6 py-3 font-semibold text-white transition hover:bg-orange">
            Continue Shopping
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-4xl font-bold text-navy">Cart</h1>
            <p className="mt-2 text-gray-600">Review your products before checkout.</p>
          </div>
          <button type="button" onClick={clearCart} className="w-fit font-semibold text-orange hover:text-navy">
            Clear Cart
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-4">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <aside className="h-fit rounded-xl border border-border bg-white p-6 shadow-md">
            <h2 className="text-2xl font-bold text-navy">Order Summary</h2>
            <div className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold text-navy">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold text-navy">{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
              </div>
              {subtotal < 999 && (
                <p className="rounded-lg bg-orange/10 p-3 text-xs leading-5 text-gray-700">
                  Add {formatPrice(999 - subtotal)} more to unlock free shipping.
                </p>
              )}
              <div className="border-t border-border pt-4">
                <div className="flex justify-between text-lg font-bold text-navy">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
            </div>
            {checkoutMessage && (
              <p className="mt-5 rounded-lg bg-green-50 p-3 text-sm font-medium text-green-700">
                {checkoutMessage}
              </p>
            )}
            <button
              type="button"
              onClick={() => setCheckoutMessage('Checkout is ready. This college project stops before payment processing.')}
              className="mt-6 w-full rounded-xl bg-orange px-6 py-3 font-semibold text-white transition hover:bg-navy"
            >
              Proceed to Checkout
            </button>
          </aside>
        </div>
      </motion.section>
    </main>
  )
}
