import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
// import Login from '../Pages/Login'
function CTA({ text = 'Start Free Trial', icon = null, className = '' }) {
  const navigate = useNavigate()

  return (
    <motion.button
      onClick={() => navigate('/login')}
      className={`bg-gradient-to-r from-indigo-700 to-blue-700 text-white font-medium px-8 py-4 rounded-md flex items-center justify-center ${className} hover:shadow-[0_0_25px_rgba(79,70,229,0.45)] transition duration-300`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </motion.button>
  )
}

export default CTA
