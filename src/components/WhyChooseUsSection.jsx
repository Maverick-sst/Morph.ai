import React from 'react';
import { motion } from 'framer-motion';
import { RiTimeLine, RiShieldUserLine, RiUserHeartLine, RiDeviceLine } from 'react-icons/ri';

function WhyChooseUsSection() {
  const benefits = [
    {
      icon: <RiTimeLine className="text-blue-400 text-3xl" />,
      title: "Available 24/7",
      description: "Your AI fitness coach is always ready when you are. Train anytime, anywhere without scheduling constraints."
    },
    {
      icon: <RiShieldUserLine className="text-indigo-400 text-3xl" />,
      title: "Privacy First",
      description: "Your data is encrypted and never shared. We prioritize your privacy with industry-leading security measures."
    },
    {
      icon: <RiUserHeartLine className="text-purple-400 text-3xl" />,
      title: "Beginner Friendly",
      description: "Whether you're just starting or an experienced athlete, our AI adapts to your fitness level and goals."
    },
    {
      icon: <RiDeviceLine className="text-blue-500 text-3xl" />,
      title: "No Special Equipment",
      description: "No gym? No problem. Our AI coach creates effective workouts with the equipment you have available."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
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

  return (
    <section className="relative py-20 px-6 bg-black">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070716] to-[#0A0A1B] pointer-events-none"></div>
      
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
            <span className="text-white">Why </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">Choose Us</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Building better fitness with better technology. Here's what sets our platform apart.
          </motion.p>
        </div>
        
        {/* Benefits grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="flex items-start gap-5"
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-lg">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Optional testimonial/social proof */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 p-8 rounded-xl text-center"
        >
          <p className="text-gray-400 text-lg italic mb-6">
            "After trying several fitness apps, this AI coach finally helped me achieve consistent progress without plateauing. The personalized guidance makes all the difference."
          </p>
          <div className="flex items-center justify-center">
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-xl">
              JS
            </div>
            <div className="ml-4 text-left">
              <p className="text-white font-medium">Jamie S.</p>
              <p className="text-gray-500 text-sm">Early Access User</p>
            </div>
          </div>
        </motion.div> */}
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-900/20 to-transparent"></div>
    </section>
  );
}

export default WhyChooseUsSection;