import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const categories = ['All', 'Electronics', 'Clothing', 'Footwear', 'Accessories']

export default function Products() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const query = search.toLowerCase().trim()
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory
      const matchesSearch =
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, search])

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy">Products</h1>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Browse a focused collection of useful products with clear pricing and quick cart actions.
          </p>
        </div>

        <div className="mt-10 rounded-xl border border-border bg-surface p-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search products"
              className="min-h-12 w-full rounded-xl border border-border bg-white pl-12 pr-4 outline-none focus:border-orange"
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === category
                    ? 'bg-navy text-white'
                    : 'border border-border bg-white text-gray-700 hover:border-orange hover:text-orange'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="mt-12 rounded-xl border border-border bg-white p-8 text-center shadow-md">
            <h2 className="text-xl font-bold text-navy">No products found</h2>
            <p className="mt-2 text-gray-600">Try a different search word or choose another category.</p>
          </div>
        )}
      </motion.section>
    </main>
  )
}
