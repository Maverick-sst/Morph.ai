import { motion } from 'framer-motion'

export default function WelcomeScreen({ onNext }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6 bg-transparent">
      {/* Quote */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="text-white text-2xl sm:text-3xl md:text-4xl font-medium leading-relaxed tracking-wide max-w-3xl"
      >
        “Personalization is not a feature — it's an experience.”
      </motion.h1>

      {/* CTA Button */}
      <motion.button
        onClick={onNext}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative mt-12 px-8 py-4 text-base sm:text-lg rounded-xl backdrop-blur-md font-medium text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
      >
        Let’s Personalize Your Experience

        {/* Glowing Loop Effect */}
        <motion.div
          className="absolute inset-0 rounded-xl border-2 border-white opacity-20 blur-lg z-[-1]"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.button>
    </div>
  )
}
