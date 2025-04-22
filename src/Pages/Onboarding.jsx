import React, { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import OnboardingCard from "../components/OnboardingCard";
import WelcomeScreen from "../components/OnBoarding/WelcomeScreen";
import UsernameStep from "../components/OnBoarding/UsernameStep";
import MetricsCard from "../components/OnBoarding/MetricsCard";
import ActivityLevelCard from "../components/OnBoarding/ActivityLevelCard";
import FinalStep from "../components/OnBoarding/FinalStep";

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  const [userData, setUserData] = useState({
    username: "",
    age: "",
    height: "",
    weight: "",
    activityInput: "",
    activityLevel: "",
  });

  const nextStep = () => {
    if (step < steps.length - 1) {
      setDirection(1);
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setDirection(-1);
      setStep(step - 1);
    }
  };

  const steps = [
    {
      id: "welcome",
      component: <WelcomeScreen onNext={nextStep} />,
    },
    {
      id: "username",
      component: (
        <UsernameStep
          userData={userData}
          setUserData={setUserData}
          onNext={nextStep}
        />
      ),
    },
    {
      id: "metrics",
      component: (
        <MetricsCard
          userData={userData}
          setUserData={setUserData}
          onNext={nextStep}
        />
      ),
    },
    {
      id: "activity",
      component: (
        <ActivityLevelCard
          userData={userData}
          setUserData={setUserData}
          onNext={nextStep}
        />
      ),
    },
    {
      id: "complete",
      component: <FinalStep />,
    },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#0B0B1C] via-[#060617] to-black flex items-center justify-center">
      {/* Glowing Orb */}
      <motion.div
        className="absolute w-[600px] h-[400px] bg-gradient-to-br from-indigo-500/40 via-purple-600/30 to-blue-500/40 blur-[150px] opacity-90 rounded-full z-0"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      <div className="relative z-10 w-full max-w-xl px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ x: direction === 1 ? 100 : -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === 1 ? -100 : 100, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <OnboardingCard>{steps[step].component}</OnboardingCard>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons (skip on welcome screen) */}
        {step !== 0 && (
          <>
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <button
                onClick={prevStep}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <button
                onClick={nextStep}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
