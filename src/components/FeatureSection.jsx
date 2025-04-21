import React from 'react';
import { motion } from 'framer-motion';
import { RiPulseLine } from 'react-icons/ri';
import { IoMdAnalytics } from 'react-icons/io';
import { BiBrain } from 'react-icons/bi';

function FeatureSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const features = [
    {
      icon: <RiPulseLine className="text-blue-400 text-4xl" />,
      title: "Workout Tracking",
      description: "Log exercises and track progress with an easy-to-use interface."
    },
    {
      icon: <IoMdAnalytics className="text-indigo-400 text-4xl" />,
      title: "Smart Analytics",
      description: "Get insights into your performance to optimize workouts."
    },
    {
      icon: <BiBrain className="text-purple-400 text-4xl" />,
      title: "AI Coach",
      description: "Receive personalized coaching and real-time feedback from AI."
    }
  ];

  return (
    <section className="relative pt-8 pb-20 px-6 bg-black">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A1B]/50 to-black pointer-events-none"></div>
      
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
            <span className="text-white">Powered by </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">Intelligence</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            More than just another fitness app. Our AI-driven platform delivers a complete solution that evolves with you.
          </motion.p>
        </div>
        
        {/* Feature cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="cursor-pointer"
              whileHover={{
                scale: 1.05, // Increase bump size
                y: -10, // Move the card upwards and create space
                rotate: 5, // Rotate the card slightly on hover
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
              whileTap={{
                scale: 0.98, // Slightly compress on tap
                transition: { type: 'spring', stiffness: 300, damping: 25 }
              }}
            >
              {/* Gradient Border Wrapper */}
              <div className="p-[2px] bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl">
                {/* Inner Card */}
                <div className="bg-black rounded-xl p-8 border border-transparent">
                  <div className="bg-gray-800/50 p-3 rounded-lg w-fit mb-5 group-hover:bg-gray-800 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-900/20 to-transparent" />
    </section>
  );
}

export default FeatureSection;
