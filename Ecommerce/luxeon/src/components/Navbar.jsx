import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, ShoppingCart, X } from 'lucide-react'
import { useCartStore } from '../store/cartStore'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const totalItems = useCartStore((state) => state.getTotalItems())
  const links = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl font-bold text-navy" onClick={() => setIsOpen(false)}>
          LUXEON SHOP
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? 'text-orange' : 'text-gray-700 hover:text-navy'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/cart"
            aria-label="Open cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-border text-navy transition hover:border-orange hover:text-orange"
            onClick={() => setIsOpen(false)}
          >
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange px-1.5 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            type="button"
            aria-label="Toggle navigation"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-navy md:hidden"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-white px-4 py-3 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-lg px-2 py-2 text-sm font-medium ${
                    isActive ? 'bg-orange/10 text-orange' : 'text-gray-700'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
