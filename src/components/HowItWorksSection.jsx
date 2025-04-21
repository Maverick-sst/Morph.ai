import React from 'react';
import { motion } from 'framer-motion';
import GlowingStepNumber from './GlowingStepNumber';

function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Sign in with Google",
      description: "Get started in seconds with a simple, secure sign-in process. No lengthy forms or complicated setup required."
    },
    {
      number: "02",
      title: "Set goals & record workouts",
      description: "Define your fitness objectives and start tracking your workouts. Our AI begins learning your patterns and preferences immediately."
    },
    {
      number: "03",
      title: "Get real-time coaching",
      description: "Receive personalized guidance, form corrections, and adaptive workout plans as you progress on your fitness journey."
    }
  ];

  return (
    <section className="relative py-20 px-6 bg-black">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#070716] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="text-white">Simple </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">3-Step Process</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Getting started is easy. Our streamlined process helps you begin your fitness journey in minutes.
          </motion.p>
        </div>
        
        {/* Vertical timeline */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-700/30 via-indigo-700/30 to-transparent"></div>
          
          {/* Step items */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
              >
                {/* 🔥 Glowing step number */}
                <div className="w-full md:w-1/2 flex md:justify-center">
                  <GlowingStepNumber 
                    number={step.number} 
                    color={index === 0 ? 'indigo' : index === 1 ? 'violet' : 'blue'} 
                  />
                </div>

                {/* Step content */}
                <div className="w-full md:w-1/2 md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-900/20 to-transparent"></div>
    </section>
  );
}

export default HowItWorksSection;
