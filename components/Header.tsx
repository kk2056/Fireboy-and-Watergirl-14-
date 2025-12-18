
import React from 'react';

interface HeaderProps {
  onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800 shadow-xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div 
          onClick={onLogoClick}
          className="cursor-pointer group flex items-center space-x-2"
        >
          <div className="flex space-x-1">
            <span className="text-orange-500 font-black text-2xl tracking-tighter group-hover:scale-110 transition-transform">FIRE</span>
            <span className="text-blue-500 font-black text-2xl tracking-tighter group-hover:scale-110 transition-transform">WATER</span>
          </div>
          <span className="hidden md:inline-block text-gray-400 font-medium text-sm ml-2 px-2 py-0.5 bg-gray-800 rounded">UNBLOCKED 2025</span>
        </div>

        <nav className="flex items-center space-x-6">
          <button 
            onClick={onLogoClick}
            className="text-sm font-semibold uppercase tracking-widest text-gray-300 hover:text-white transition-colors"
          >
            HOME
          </button>
          <a 
            href="#games" 
            onClick={() => onLogoClick()} 
            className="text-sm font-semibold uppercase tracking-widest text-gray-300 hover:text-white transition-colors"
          >
            GAMES
          </a>
          <button 
            className="bg-orange-600 hover:bg-orange-500 text-white px-5 py-2 rounded-full text-xs font-bold uppercase transition-all transform active:scale-95 shadow-lg shadow-orange-900/20"
          >
            PLAY NOW
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
