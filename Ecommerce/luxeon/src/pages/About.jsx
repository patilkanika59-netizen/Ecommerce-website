import { motion } from 'framer-motion'
import { BadgeCheck, HeartHandshake, IndianRupee } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: BadgeCheck,
      title: 'Quality',
      text: 'We select products that feel useful, durable, and worth recommending to friends.',
    },
    {
      icon: IndianRupee,
      title: 'Affordability',
      text: 'Our catalogue focuses on fair pricing for students, families, and first-time online shoppers.',
    },
    {
      icon: HeartHandshake,
      title: 'Trust',
      text: 'Clear product details, simple returns, and responsive support guide every order.',
    },
  ]

  const team = [
    { name: 'Kanika Patil', role: 'Developer' },
  ]

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-navy">About LUXEON SHOP</h1>
          <p className="mt-5 leading-8 text-gray-600">
            LUXEON SHOP started as a simple idea for a college ecommerce project: build a store that feels easy to use and practical for everyday buyers. This Website brings together products people commonly need, from headphones and backpacks to shirts and desk lamps. Each page is designed to keep prices, product details, and cart actions clear. Our goal is to make online shopping feel calm, direct, and dependable.
          </p>
        </div>

        <section className="mt-14 rounded-xl bg-surface p-8 text-center">
          <h2 className="text-3xl font-bold text-navy">Our Mission</h2>
          <p className="mx-auto mt-4 max-w-3xl leading-8 text-gray-600">
            We aim to offer a clean shopping experience where customers can compare useful products quickly,
            understand what they are buying, and complete an order without confusion.
          </p>
        </section>

        <section className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="rounded-xl border border-border bg-white p-6 text-center shadow-md">
              <value.icon className="mx-auto text-orange" size={34} />
              <h3 className="mt-4 text-xl font-bold text-navy">{value.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">{value.text}</p>
            </div>
          ))}
        </section>

        <section className="mt-14">
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold text-navy">Our Team</h2>
            <p className="mt-3 text-gray-600">A small team keeping the store simple and organized.</p>
          </div>
          <div className="mx-auto grid max-w-sm gap-6">
            {team.map((member) => (
              <div key={member.name} className="rounded-xl border border-border bg-white p-6 text-center shadow-md">
                <h3 className="text-lg font-bold text-navy">{member.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </motion.section>
    </main>
  )
}
