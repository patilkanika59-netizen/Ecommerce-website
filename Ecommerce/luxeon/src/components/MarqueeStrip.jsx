import { motion } from 'framer-motion'

export default function MarqueeStrip() {
  const items = [
    'AI POWERED',
    'HEALTH TRACKING',
    '5G ENABLED',
    '72HR BATTERY',
    'QUANTUM SECURE',
    'HOLOGRAPHIC UI',
    'NEURAL PROCESSOR',
    'SAPPHIRE BUILD',
  ]

  return (
    <div className="relative overflow-hidden border-y border-primary/20 bg-gradient-to-r from-dark-bg via-dark-surface to-dark-bg py-6">
      <motion.div
        className="flex gap-12 whitespace-nowrap will-change-transform"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      >
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="font-orbitron text-lg font-bold text-accent">
            {item} •
          </span>
        ))}
      </motion.div>
    </div>
  )
}
