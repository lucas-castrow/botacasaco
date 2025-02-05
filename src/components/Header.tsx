import React from "react";
import { Shirt } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-[#1F1F1F] border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shirt className="h-10 w-10 text-[#FFD700]" />
            <span className="text-3xl font-bold text-white">
              <span className="bg-gradient-to-r from-[#FFD700] to-[#FF8C00] text-transparent bg-clip-text">
                Bota
              </span>
              <span className="text-[#FFD700]">Casaco</span>
            </span>
          </div>
          <nav className="flex items-center space-x-8">
            <a
              href="/"
              className="text-lg font-medium text-gray-300 hover:text-[#FFD700] transition-colors"
            >
              Home
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;