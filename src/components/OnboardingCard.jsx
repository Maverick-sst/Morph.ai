import React from 'react'

function OnboardingCard({ children }) {
  return (
    <div className="w-full max-w-xl mx-auto p-6">
      <div className="rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg p-8 text-white">
        {children}
      </div>
    </div>
  )
}

export default OnboardingCard
