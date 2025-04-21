import { useEffect } from 'react'

function Onboarding() {
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log('User from localStorage:', user)
  }, [])

  return (
    <div className="text-white mt-20 text-center">
      Onboarding Page 🎯
    </div>
  )
}

export default Onboarding
