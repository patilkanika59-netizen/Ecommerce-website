import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <motion.div
      className="pointer-events-none fixed z-40 h-72 w-72 rounded-full opacity-30"
      style={{
        background: 'radial-gradient(circle, rgba(0, 245, 255, 0.22), rgba(124, 58, 237, 0.24), transparent 68%)',
        filter: 'blur(40px)',
        display: isVisible ? 'block' : 'none',
      }}
      animate={{
        x: mousePosition.x - 144,
        y: mousePosition.y - 144,
      }}
      transition={{
        type: 'spring',
        damping: 30,
        mass: 0.1,
        stiffness: 300,
      }}
    />
  )
}
