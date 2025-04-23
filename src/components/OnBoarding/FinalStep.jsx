import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function FinalStep({ userData }) {
  const navigate = useNavigate();

  return (
    <motion.div
      key="final"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-xl p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg text-center text-white space-y-6"
    >
      <h1 className="text-2xl sm:text-3xl font-bold">You're all set! 🎉</h1>

      <p className="text-white/80 text-md leading-relaxed">
        Here's what our AI coach thinks based on your input:
      </p>

      <div className="bg-white/10 border border-white/20 rounded-xl p-5 text-white/90 text-sm sm:text-base max-h-64 overflow-y-auto whitespace-pre-wrap">
        {userData.aiOutput || "Loading..."}
      </div>

      <motion.button
        onClick={() => navigate("/crafting")}
        className="mt-4 px-8 py-3 bg-[#9400FF] text-white rounded-xl font-medium hover:opacity-90 transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Go to Dashboard →
      </motion.button>
    </motion.div>
  );
}
