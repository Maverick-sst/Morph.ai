import React from 'react';
import { motion } from 'framer-motion';
import { HiUser } from 'react-icons/hi'
import CTA from './CTA';

function FinalCTA() {
  return (
    <section className="relative py-20 pb-36 px-6 bg-[#05050F] overflow-hidden">

      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A1B] to-[#05050F] pointer-events-none"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,59,255,0.1)_0%,transparent_70%)] pointer-events-none"></div>
      
      {/* Content container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-8"
        >
          <span className="text-white">Your fitness journey </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">starts now</span>
        </motion.h2>
        
        {/* <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          Join thousands transforming their fitness with AI-powered guidance. 
          Get started with a 7-day free trial – no commitments.
        </motion.p> */}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
        
        <CTA text="Sign Up with Google" icon={<HiUser className="w-5 h-5" />} className="w-full sm:w-auto" />
          
          
        </motion.div>
        
        
      </div>
    </section>
  );
}

export default FinalCTA;