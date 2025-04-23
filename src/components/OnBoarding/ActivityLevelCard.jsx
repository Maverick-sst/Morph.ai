import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { doc, setDoc } from 'firebase/firestore'
import { db, auth } from '../../firebase'
import { getGeminiResponse } from '../../utils/gemini'

export default function ActivityLevelCard({ onNext, userData, setUserData }) {
  const [activityInput, setActivityInput] = useState(userData.activityInput || '')
  const [isValid, setIsValid] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setIsValid(activityInput.trim().length >= 10)
  }, [activityInput])

  const handleNext = async () => {
    if (!isValid) return
    setLoading(true)

    const updatedUserData = {
      ...userData,
      activityInput,
    }

    try {
      const user = auth.currentUser
      if (!user) throw new Error('User not authenticated')

      // 1. Save to Firestore
      await setDoc(doc(db, 'users', user.uid), {
        ...updatedUserData,
        createdAt: new Date(),
      })

      // 2. Ask Gemini AI
      const aiOutput = await getGeminiResponse(activityInput)

      // 3. Store in state
      setUserData(prev => ({
        ...prev,
        activityInput,
        aiOutput,
      }))

      // 4. Go to FinalStep
      setTimeout(() => {
        onNext()
      }, 1000)

    } catch (err) {
      console.error("🔥 AI or Firestore Error:", err)
    } finally {
      setLoading(false)
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
        Describe your activity level
      </h2>
      <p className="text-white/60 text-sm mb-6">
        Tell us about your day so our AI can personalize your plan.
      </p>

      <textarea
        placeholder="e.g. I sit for most of the day but walk every evening."
        value={activityInput}
        onChange={e => setActivityInput(e.target.value)}
        className="w-full h-32 px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/40 text-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all resize-none"
      />

      <button
        onClick={handleNext}
        disabled={!isValid || loading}
        className={`mt-6 px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 ${
          isValid
            ? 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90'
            : 'bg-white/10 text-white/40 cursor-not-allowed'
        }`}
      >
        {loading ? 'Analyzing with AI...' : 'Continue'}
      </button>
    </motion.div>
  )
}
