// src/pages/CraftingScreen.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export default function CraftingScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/dashboard");
    }, 6500);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#0B0B1C] via-[#060617] to-black flex items-center justify-center text-center text-white">
      <motion.div
        className="absolute w-[500px] h-[300px] bg-gradient-to-br from-indigo-500/40 via-purple-600/30 to-blue-500/40 blur-[160px] opacity-90 rounded-full z-0"
        animate={{
          scale: [1, 1.05, 1],
          x: [0, 20, -20, 0],
          y: [0, -15, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 space-y-3">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl font-semibold"
        >
          Crafting your experience...
        </motion.h2>
        <p className="text-white/70 text-sm sm:text-base animate-pulse">
          Hold tight! We’re personalizing your dashboard ✨
        </p>
      </div>
    </section>
  );
}
