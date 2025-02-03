import React from "react";
import { Shirt } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-[#2A2A2A] border-b border-[#4A90E2]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shirt className="h-8 w-8 text-[#4A90E2]" />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#8A2BE2] to-[#4A90E2] text-transparent bg-clip-text">
              BotaCasaco
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-300 hover:text-[#4A90E2] transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#4A90E2] transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#4A90E2] transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
