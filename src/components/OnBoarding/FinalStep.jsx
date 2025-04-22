import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function FinalStep() {
  const navigate = useNavigate()

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/dashboard')
    }, 6900)

    return () => clearTimeout(timeout)
  }, [navigate])

  return (
    <motion.div
      key="complete"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg flex flex-col justify-center items-center text-center min-h-[300px]"
    >
      <h2 className="text-white text-2xl font-semibold mb-4">
        You're all set! ✅
      </h2>
      <p className="text-white/60 text-sm mb-2">
        Thanks for sharing your details. We’re crafting your experience now.
      </p>
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [1, 0.8, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-6 w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 blur-2xl"
      />
    </motion.div>
  )
}
