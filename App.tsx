
import React, { useState } from 'react';
import { GAMES, Game } from './constants';
import Header from './components/Header';
import Home from './components/Home';
import GamePlayer from './components/GamePlayer';

const App: React.FC = () => {
  const [currentGame, setCurrentGame] = useState<Game | null>(null);

  const handleGoHome = () => {
    setCurrentGame(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlayGame = (game: Game) => {
    setCurrentGame(game);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans selection:bg-orange-500 selection:text-white">
      <Header onLogoClick={handleGoHome} />
      
      <main className="container mx-auto px-4 py-8">
        {!currentGame ? (
          <Home onSelectGame={handlePlayGame} />
        ) : (
          <GamePlayer game={currentGame} onBack={handleGoHome} />
        )}
      </main>

      <footer className="border-t border-gray-800 py-12 mt-12 text-center text-gray-500">
        <div className="container mx-auto px-4">
          <p className="text-lg font-bold text-gray-400 mb-2">Fireboy and Watergirl Unblocked 2025</p>
          <p className="max-w-2xl mx-auto text-sm">
            Experience the ultimate puzzle platformer series. Fully optimized for school chromebooks and unrestricted access. 
            No plugins, no registration, just pure gaming.
          </p>
          <div className="mt-6 space-x-4 text-xs">
            <span>UNBLOCKED AT SCHOOL</span>
            <span>•</span>
            <span>2025 EDITION</span>
            <span>•</span>
            <span>NO FLASH REQUIRED</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
