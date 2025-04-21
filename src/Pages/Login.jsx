import { useEffect } from 'react'
import { auth, provider, signInWithPopup } from '../Firebase'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function Login() {
  const navigate = useNavigate()

  useEffect(() => {
    const loginUser = async () => {
      try {
        const result = await signInWithPopup(auth, provider)
        const user = result.user

        if (user) {
          // Save full user object safely
          const userData = {
            name: user.displayName || 'No Name',
            email: user.email || 'No Email',
            uid: user.uid,
            photo: user.photoURL || ''
          }

          localStorage.setItem('user', JSON.stringify(userData))
          console.log("Saved to localStorage:", localStorage.getItem('user'))
          // Delay slightly to let routing register
          setTimeout(() => {
            navigate('/onboarding')
          }, 100)
        }
      } catch (err) {
        console.error('Login error:', err)
      }
    }

    loginUser()
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#0B0B1C] via-[#060617] to-black flex items-center justify-center text-center text-white">
      
      {/* Glowing gradient orb */}
      <motion.div
        className="absolute w-[600px] h-[400px] bg-gradient-to-br from-indigo-500/40 via-purple-600/30 to-blue-500/40 blur-[150px] opacity-90 rounded-full z-0"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />

      <div className="relative z-10">
        <p className="text-lg md:text-2xl animate-pulse text-gray-200">
          Redirecting to Google...
        </p>
      </div>
    </section>
  )
}

export default Login
