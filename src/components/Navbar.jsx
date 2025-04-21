import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className=" pl-12 w-full fixed top-0 left-0 z-50 px-8 py-6 flex items-center justify-between backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="ml-6 text-white font-semibold text-3xl tracking-wide">
        Morph
      </div>

      <div className="flex items-center gap-6 text-sm font-medium text-gray-300">
        <Link
          to="/login"
          className="bg-white text-black px-4 py-2 rounded-md hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] transition duration-200"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
