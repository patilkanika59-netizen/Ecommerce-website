import { Link } from 'react-router-dom'

export default function CategoryCard({ icon: Icon, label }) {
  return (
    <Link
      to="/products"
      className="flex flex-col items-center justify-center rounded-xl border border-border bg-white p-6 text-center shadow-md transition hover:-translate-y-1 hover:border-orange"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-orange/10 text-orange">
        <Icon size={26} />
      </span>
      <span className="mt-4 font-semibold text-navy">{label}</span>
    </Link>
  )
}
