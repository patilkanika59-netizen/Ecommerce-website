import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false)

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-navy">Contact Us</h1>
          <p className="mt-3 text-gray-600">
            Send a question about products, orders, returns, or delivery. We will reply as soon as possible.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_380px]">
          <form
            className="rounded-xl border border-border bg-white p-6 shadow-md"
            onSubmit={(event) => {
              event.preventDefault()
              setMessageSent(true)
            }}
          >
            <div className="grid gap-5">
              <label className="block">
                <span className="text-sm font-semibold text-navy">Name</span>
                <input
                  type="text"
                  placeholder="Your full name"
                  required
                  className="mt-2 min-h-12 w-full rounded-xl border border-border px-4 outline-none focus:border-orange"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-navy">Email</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="mt-2 min-h-12 w-full rounded-xl border border-border px-4 outline-none focus:border-orange"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-navy">Message</span>
                <textarea
                  rows="6"
                  placeholder="Write your message"
                  required
                  className="mt-2 w-full resize-none rounded-xl border border-border px-4 py-3 outline-none focus:border-orange"
                />
              </label>
              {messageSent && (
                <p className="rounded-lg bg-green-50 p-3 text-sm font-medium text-green-700">
                  Your message has been recorded for this project demo.
                </p>
              )}
              <button type="submit" className="rounded-xl bg-navy px-6 py-3 font-semibold text-white transition hover:bg-orange">
                Submit
              </button>
            </div>
          </form>

          <div className="rounded-xl bg-surface p-6">
            <h2 className="text-2xl font-bold text-navy">Store Details</h2>
            <div className="mt-6 space-y-5">
              <div className="flex gap-3">
                <MapPin className="mt-1 shrink-0 text-orange" size={22} />
                <p className="text-gray-600">
                  LUXEON SHOP, 2nd Floor, Phoenix Marketcity Road, Kurla West, Mumbai, Maharashtra 400070
                </p>
              </div>
              <div className="flex gap-3">
                <Mail className="mt-1 shrink-0 text-orange" size={22} />
                <p className="text-gray-600">support@luxeonshop.in</p>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-1 shrink-0 text-orange" size={22} />
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  )
}
