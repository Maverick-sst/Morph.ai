import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ActivityLevelCard({ onNext, userData, setUserData }) {
  const [activityInput, setActivityInput] = useState(userData.activityInput || '')
  const [isValid, setIsValid] = useState(false)
  const [detectedLevel, setDetectedLevel] = useState(null)

  useEffect(() => {
    setIsValid(activityInput.trim().length >= 10)
  }, [activityInput])

  const detectLevel = (text) => {
    const lower = text.toLowerCase()

    if (
      lower.includes('gym') ||
      lower.includes('work out') ||
      lower.includes('training')
    ) return 'Advanced'

    if (
      lower.includes('walk') ||
      lower.includes('active') ||
      lower.includes('move')
    ) return 'Intermediate'

    return 'Beginner'
  }

  const handleNext = () => {
    if (isValid) {
      const level = detectLevel(activityInput)
      setDetectedLevel(level)

      // Save to userData and proceed
      setUserData(prev => ({
        ...prev,
        activityInput,
        activityLevel: level
      }))

      setTimeout(() => {
        onNext()
      }, 1400) // let the animation message play a bit
    }
  }

  return (
    <motion.div
      key="activity"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg flex flex-col justify-center items-center text-center min-h-[360px]"
    >
      <h2 className="text-white text-xl sm:text-2xl font-semibold mb-4">
        Describe your usual day
      </h2>
      <p className="text-white/60 text-sm mb-6">
        This helps us match your starting level.
      </p>

      <textarea
        placeholder="e.g. I sit for most of the day but go on walks sometimes"
        value={activityInput}
        onChange={e => setActivityInput(e.target.value)}
        className="w-full h-32 px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/40 text-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all resize-none"
      />

      <button
        onClick={handleNext}
        disabled={!isValid}
        className={`mt-6 px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 ${
          isValid
            ? 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90'
            : 'bg-white/10 text-white/40 cursor-not-allowed'
        }`}
      >
        Continue
      </button>

      {detectedLevel && (
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-4 text-white/80 text-sm"
        >
          Awesome! Based on your answer, you’re <strong>{detectedLevel}</strong> 💪
        </motion.p>
      )}
    </motion.div>
  )
}
