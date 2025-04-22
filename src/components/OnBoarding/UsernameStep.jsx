import React, { useEffect, useState } from 'react'

export default function UsernameStep({ userData, setUserData, onNext }) {
  const [input, setInput] = useState(userData.username || '')
  const [error, setError] = useState('')

  useEffect(() => {
    // Autofill from stored data
    setInput(userData.username || '')
  }, [userData])

  const handleContinue = () => {
    if (!input.trim()) {
      setError('Please enter a username.')
      return
    }
    setError('')
    setUserData({ ...userData, username: input.trim() })
    onNext()
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Enter Username</h2>
      <input
        className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="eg. JohnDoe123"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {error && <p className="text-red-400 mt-2">{error}</p>}

      <button
        className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-xl"
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  )
}
