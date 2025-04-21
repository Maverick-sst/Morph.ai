// src/components/GlowingStepNumber.jsx
import React from 'react';
import { motion } from 'framer-motion';

function GlowingStepNumber({ number, color = 'indigo' }) {
  const styles = {
    indigo: {
      glow: 'shadow-[0_0_45px_rgba(99,102,241,0.4)]',
      bg: 'bg-indigo-500/20',
      border: 'border-indigo-500/40',
      text: 'text-indigo-400',
      grad: 'from-indigo-900/50'
    },
    violet: {
      glow: 'shadow-[0_0_45px_rgba(139,92,246,0.4)]',
      bg: 'bg-violet-500/20',
      border: 'border-violet-500/40',
      text: 'text-violet-400',
      grad: 'from-violet-900/50'
    },
    blue: {
      glow: 'shadow-[0_0_45px_rgba(59,130,246,0.4)]',
      bg: 'bg-blue-500/20',
      border: 'border-blue-500/40',
      text: 'text-blue-400',
      grad: 'from-blue-900/50'
    }
  };

  const style = styles[color] || styles.indigo;

  return (
    <div className="relative flex items-center justify-center">
      {/* Pulsing outer ring */}
      <div className={`absolute h-20 w-20 rounded-full ${style.bg} ${style.glow} animate-ping`}></div>

      {/* Number bubble */}
      <div className={`h-16 w-16 rounded-full flex items-center justify-center bg-gradient-to-br ${style.grad} to-black ${style.glow} ${style.border} z-10`}>
        <motion.span
          className={`text-2xl font-bold ${style.text}`}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          {number}
        </motion.span>
      </div>
    </div>
  );
}

export default GlowingStepNumber;
