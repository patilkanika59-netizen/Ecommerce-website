import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-xl font-bold text-navy">LUXEON SHOP</h3>
          <p className="mt-3 max-w-sm text-sm leading-6 text-gray-600">
            SHOPIFY brings dependable everyday products together in one simple shopping experience.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-navy">Quick Links</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm text-gray-600">
            <Link to="/products" className="hover:text-orange">Products</Link>
            <Link to="/about" className="hover:text-orange">About</Link>
            <Link to="/contact" className="hover:text-orange">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-navy">Customer Care</h4>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            Email support@luxeonshop.in for order help, returns, and product questions.
          </p>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-sm text-gray-500">
        &copy; 2026 LUXEON SHOP. College project ecommerce website.
      </div>
    </footer>
  )
}
