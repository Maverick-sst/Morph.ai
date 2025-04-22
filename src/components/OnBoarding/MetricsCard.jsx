import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function MetricsCard({ onNext, userData, setUserData }) {
  const [formData, setFormData] = useState({
    age: userData.age || '',
    height: userData.height || '',
    weight: userData.weight || ''
  })

  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    const { age, height, weight } = formData
    setIsValid(
      Number(age) > 0 &&
      Number(height) > 0 &&
      Number(weight) > 0
    )
  }, [formData])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (isValid) {
      setUserData(prev => ({ ...prev, ...formData }))
      onNext()
    }
  }

  return (
    <motion.div
      key="metrics"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg flex flex-col justify-center items-center text-center min-h-[360px]"
    >
      <h2 className="text-white text-xl sm:text-2xl font-semibold mb-6">
  Help us personalize your plan
</h2>


      <div className="w-full space-y-4">
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/40 text-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
        />

        <input
          type="number"
          name="height"
          placeholder="Height (cm)"
          value={formData.height}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/40 text-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
        />

        <input
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          value={formData.weight}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/40 text-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
        />
      </div>

      <button
        onClick={handleNext}
        disabled={!isValid}
        className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-xl"
      >
        Next
      </button>
    </motion.div>
  )
}
