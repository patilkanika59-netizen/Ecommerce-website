import { Minus, Plus, Trash2 } from 'lucide-react'
import { useCartStore } from '../store/cartStore'

const formatPrice = (price) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price)

export default function CartItem({ item }) {
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const removeFromCart = useCartStore((state) => state.removeFromCart)

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border bg-white p-4 shadow-md sm:flex-row sm:items-center">
      <img src={item.image} alt={item.name} className="h-28 w-full rounded-lg object-cover sm:w-28" />
      <div className="flex-1">
        <h3 className="font-bold text-navy">{item.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{item.category}</p>
        <p className="mt-2 font-semibold text-navy">{formatPrice(item.price)}</p>
      </div>
      <div className="flex items-center justify-between gap-4 sm:justify-end">
        <div className="flex items-center rounded-xl border border-border">
          <button
            type="button"
            aria-label="Decrease quantity"
            className="p-2 text-navy hover:text-orange"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            <Minus size={16} />
          </button>
          <span className="w-10 text-center text-sm font-semibold">{item.quantity}</span>
          <button
            type="button"
            aria-label="Increase quantity"
            className="p-2 text-navy hover:text-orange"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            <Plus size={16} />
          </button>
        </div>
        <button
          type="button"
          aria-label="Remove item"
          className="rounded-xl border border-border p-2 text-gray-500 hover:border-orange hover:text-orange"
          onClick={() => removeFromCart(item.id)}
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  )
}
