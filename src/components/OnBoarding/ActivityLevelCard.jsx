import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { BsPlus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
export default function ActivityLevelCard({ userData, setUserData }) {
  const [activityInput, setActivityInput] = useState(
    userData.activityInput || ""
  );
  const [selectedSuggestions, setSelectedSuggestions] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setIsValid(activityInput.trim().length >= 10);
  }, [activityInput]);

  const handleNext = async () => {
    if (!isValid) return;
    setLoading(true);

    const updatedUserData = {
      ...userData,
      activityInput: formatInput(activityInput),
    };

    try {
      const user = auth.currentUser;
      if (!user) throw new Error("User not authenticated");

      await setDoc(doc(db, "users", user.uid), {
        ...updatedUserData,
        createdAt: new Date(),
      });

      setUserData(updatedUserData);

      setTimeout(() => {
        navigate("/crafting");
      }, 1000);
    } catch (err) {
      console.error("🔥 Firestore Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const formatInput = (text) => {
    // Ensure sentence casing and proper punctuation
    const trimmed = text.trim();
    if (!trimmed) return "";
    const sentence = trimmed[0].toUpperCase() + trimmed.slice(1);
    return sentence.endsWith(".") ? sentence : sentence + ".";
  };

  const suggestions = [
    "I walk daily",
    "I sit most of the day",
    "I go to the gym",
    "I cycle to work",
    "I do yoga occasionally",
  ];

  const handleSuggestionClick = (text, index) => {
    const formatted = text.trim();
    const alreadySelected = selectedSuggestions.includes(index);
    let updatedInput = activityInput.trim();

    if (alreadySelected) {
      // Unselect ➔ Remove the sentence cleanly
      updatedInput = updatedInput
        .replace(new RegExp(`(?:\\.\\s*|^)${formatted}(?=\\.|$)`, "g"), "")
        .replace(/\s+/g, " ")
        .trim();

      setSelectedSuggestions(selectedSuggestions.filter((i) => i !== index));
    } else {
      // Select ➔ Add sentence smartly
      updatedInput = updatedInput
        ? updatedInput.endsWith(".")
          ? `${updatedInput} ${formatted}`
          : `${updatedInput}. ${formatted}`
        : formatted;

      setSelectedSuggestions([...selectedSuggestions, index]);
    }

    setActivityInput(updatedInput.trim());
  };

  return (
    <motion.div
      key="activity"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg flex flex-col justify-center items-center text-center min-h-[480px]"
    >
      <h2 className="text-white text-xl sm:text-2xl font-semibold mb-2">
        Describe your activity level
      </h2>
      <p className="text-white/60 text-sm mb-4">
        Tell us about your day so our AI can personalize your plan.
      </p>

      {/* Textarea */}
      <textarea
        placeholder="e.g. I sit for most of the day but walk every evening."
        value={activityInput}
        onChange={(e) => {
          setActivityInput(e.target.value);
          setSelectedSuggestions([]);  // Clear all selections if typing manually
        }}
        
        className="w-full h-32 px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/40 text-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all resize-none mb-6"
      />

      {/* Suggestions */}
      <div className="flex flex-wrap gap-3 mb-4 justify-center">
        {suggestions.map((text, i) => (
          <button
            key={i}
            type="button"
            onClick={() => handleSuggestionClick(text, i)}
            className={`text-sm px-3 py-1.5 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white font-medium flex items-center gap-1 transition duration-200 
              ${
                selectedSuggestions.includes(i)
                  ? "ring-2 ring-white/80 shadow-white shadow-sm"
                  : ""
              }
              hover:shadow-[0_0_12px_rgba(79,70,229,0.4)]`}
          >
            <BsPlus className="text-white text-lg" />
            {text}
          </button>
        ))}
      </div>

      {/* Continue Button */}
      <button
        onClick={handleNext}
        disabled={!isValid || loading}
        className={`mt-6 px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 ${
          isValid
            ? "bg-[#9400FF] hover:opacity-90"
            : "bg-white/10 text-white/40 cursor-not-allowed"
        }`}
      >
        {loading ? "Saving..." : "Continue"}
      </button>
    </motion.div>
  );
}
