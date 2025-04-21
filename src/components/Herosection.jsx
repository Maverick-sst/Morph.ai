import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CTA from "./CTA";

function HeroSection() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#0B0B1C] via-[#060617] to-black">
      {/* Pulsing Magnetic Orb */}
      <motion.div
        className="absolute pointer-events-none z-0"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="w-[700px] h-[400px] rounded-full bg-gradient-to-br from-indigo-500/40 via-purple-700/40 to-blue-500/40 blur-[200px] opacity-95"
          animate={{
            x: position.x - window.innerWidth / 2,
            y: position.y - window.innerHeight / 2,
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 12,
          }}
        />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-2">
            <span className="text-white">Your AI </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-700">
              Fitness Coach
            </span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-300">
            Anytime. Anywhere.
          </h2>

          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Transform your fitness journey with AI-powered guidance,
            personalized workouts, and real-time form analysis—all in one
            seamless experience.
          </p>

          <div className="flex items-center justify-center h-full">
            <CTA text="Start Free Trial" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
