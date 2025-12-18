
import React, { useState } from 'react';
import { Game } from '../constants';

interface GamePlayerProps {
  game: Game;
  onBack: () => void;
}

const GamePlayer: React.FC<GamePlayerProps> = ({ game, onBack }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="animate-in slide-in-from-bottom-8 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <button 
            onClick={onBack}
            className="text-gray-400 hover:text-white flex items-center mb-2 font-bold text-sm tracking-widest uppercase"
          >
            ← BACK TO HOME
          </button>
          <h1 className="text-3xl font-black bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            {game.title}
          </h1>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={() => window.location.reload()}
            className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-xs font-bold uppercase transition-colors"
          >
            RELOAD
          </button>
          <button 
            onClick={() => {
               const elem = document.querySelector('iframe');
               if (elem?.requestFullscreen) {
                 elem.requestFullscreen();
               }
            }}
            className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all shadow-lg shadow-blue-900/20"
          >
            FULLSCREEN
          </button>
        </div>
      </div>

      <div className="relative bg-black rounded-2xl overflow-hidden border-4 border-gray-800 shadow-2xl">
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-950 z-10">
            <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-400 font-mono animate-pulse uppercase tracking-widest text-xs">Loading Secure Stream...</p>
          </div>
        )}
        <iframe 
          src={game.url} 
          title={game.title}
          onLoad={() => setIsLoading(false)}
          allow="fullscreen; autoplay; encrypted-media"
        />
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-800">
          <h2 className="text-xl font-bold mb-4 flex items-center text-orange-400">
            HOW TO PLAY
          </h2>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-start">
              <span className="bg-orange-600 text-[10px] px-1.5 py-0.5 rounded mr-3 mt-1 font-black">FIRE</span>
              <span>Use <b>ARROW KEYS</b> to move Fireboy. Collect Red Diamonds and avoid Water Puddles.</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-600 text-[10px] px-1.5 py-0.5 rounded mr-3 mt-1 font-black">WATER</span>
              <span>Use <b>A, W, D</b> keys to move Watergirl. Collect Blue Diamonds and avoid Fire Pits.</span>
            </li>
            <li className="flex items-start">
              <span className="bg-green-600 text-[10px] px-1.5 py-0.5 rounded mr-3 mt-1 font-black">GREEN</span>
              <span>Stay away from <b>Green Sludge</b> (Acid) - it kills both characters!</span>
            </li>
            <li className="flex items-start">
              <span className="bg-gray-600 text-[10px] px-1.5 py-0.5 rounded mr-3 mt-1 font-black">CO-OP</span>
              <span>Both characters must reach their respective doors to complete the level.</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-800">
          <h2 className="text-xl font-bold mb-4 text-blue-400">GAME INFO</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            This version of {game.title} is hosted on a high-speed S3 cloud environment to ensure it remains 
            unblocked on school networks. It uses the latest HTML5 technology, meaning no Adobe Flash is required. 
            Progress is typically saved locally in your browser cache.
          </p>
          <div className="mt-6 p-4 bg-gray-900 rounded-xl border border-gray-700">
             <span className="text-xs font-bold text-gray-500 uppercase block mb-1">SERVER STATUS</span>
             <span className="text-green-500 text-sm font-mono flex items-center">
               <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-ping"></span>
               CONNECTED TO PRIMARY NODE [US-WEST-2]
             </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePlayer;
