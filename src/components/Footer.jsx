import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="relative bg-[#05050F] text-gray-400 px-6 py-10 ">
      {/* Animated Top Border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-400 opacity-80 animate-pulse blur-sm pointer-events-none z-0" />


      {/* Footer Content */}
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center space-y-6 text-center">

        {/* Logo / Brand */}
        <div className="text-xl md:text-2xl font-semibold text-white tracking-wide">
          Morph<span className="text-gray-500 text-sm align-super ml-1">™</span>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-2">
          <FaXTwitter className="w-5 h-5 hover:text-white transition duration-200 cursor-pointer" />
          <FaFacebookF className="w-5 h-5 hover:text-white transition duration-200 cursor-pointer" />
          <FaInstagram className="w-5 h-5 hover:text-white transition duration-200 cursor-pointer" />
          <FaYoutube className="w-5 h-5 hover:text-white transition duration-200 cursor-pointer" />
        </div>

        {/* Navigation Links (placeholders) */}
        <div className="flex space-x-6 text-sm text-gray-500 mt-4">
          <span className="hover:text-white transition duration-200 cursor-pointer">About</span>
          <span className="hover:text-white transition duration-200 cursor-pointer">Community</span>
          <span className="hover:text-white transition duration-200 cursor-pointer">Privacy Policy</span>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500 mt-4">
          © {new Date().getFullYear()} Morph. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
