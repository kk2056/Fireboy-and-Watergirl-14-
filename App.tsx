
import React, { useState, useEffect } from 'react';
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

  // Trigger AdSense push when a game is loaded
  useEffect(() => {
    if (currentGame) {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("Adsense push error:", e);
      }
    }
  }, [currentGame]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans selection:bg-orange-500 selection:text-white">
      <Header onLogoClick={handleGoHome} />
      
      <main className="container mx-auto px-4 py-8">
        {!currentGame ? (
          <Home onSelectGame={handlePlayGame} />
        ) : (
          <>
            {/* 1. Mobile Experience Tip */}
            <div className="text-center text-white bg-purple-800 p-4 rounded-lg mb-6 max-w-md mx-auto shadow-lg border border-purple-600 animate-pulse">
              Tip: Rotate to landscape mode for better mobile experience! Perfect on phone or Chromebook.
            </div>

            {/* 2. Optimized Full Screen Button */}
            <button 
              onClick={toggleFullscreen} 
              className="block mx-auto bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl text-xl mb-6 shadow-lg transform transition-all active:scale-95 hover:scale-105"
            >
              Play Full Screen (Press F - Ultimate Experience!)
            </button>

            {/* 3. Fullscreen Instruction Text */}
            <div className="text-center text-white bg-blue-800 p-4 rounded-lg mb-6 max-w-lg mx-auto shadow-lg border border-blue-600">
              Press F for fullscreen - No lag, full immersion on any device!
            </div>

            <GamePlayer game={currentGame} onBack={handleGoHome} />
            
            {/* 4. Bottom AdSense Placement for RPM Boost */}
            <div className="ad-bottom mt-8 text-center bg-gray-800/50 p-4 rounded-xl border border-gray-700">
              <span className="text-xs text-gray-500 block mb-2 uppercase tracking-widest">Advertisement</span>
              <ins className="adsbygoogle"
                   style={{ display: 'block' }}
                   data-ad-client="ca-pub-9774042341049510"
                   data-ad-slot="your-ad-slot-id" // Suggested: add a specific slot ID for better tracking
                   data-ad-format="auto"
                   data-full-width-responsive="true"></ins>
            </div>

            {/* Strategy Section */}
            <div className="strategy mt-8 text-gray-300 p-4 bg-gray-800 rounded-lg border border-gray-700 leading-relaxed">
              <p className="mb-4">
                A test of friendship or a recipe for disaster? <strong>Fireboy & Watergirl Unblocked 2025</strong> is the premier co-op puzzle adventure. 
                One player controls Fireboy (immune to lava, hates water), and the other controls Watergirl (immune to water, hates lava). 
                You must work together to clear green toxic goo, push boxes, and reflect light beams to open the exit doors.
              </p>
              <p>
                <span className="text-orange-500 font-bold">Co-op Secret:</span> Communication is everything! Before pressing an elevator button, check if your partner is safe. 
                While you can play solo with both hands, grabbing a classmate to play on the same keyboard doubles the fun. 
                Collect the color-coded diamonds for a perfect score. From the Forest Temple to the Crystal Temple, this is the best way to build teamwork in the school computer lab.
              </p>
            </div>

            {/* Internal Links Section - SEO Network */}
            <div className="other-games mt-8 bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-600 pb-2 flex items-center">
                  <span className="w-1.5 h-6 bg-blue-500 mr-3 rounded-full"></span>
                  More Unblocked Games 2025
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none">
                    <li className="mb-2"><a href="https://snakegame.cfd" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center">➔ Play Snake Game Unblocked 2025</a></li>
                    <li className="mb-2"><a href="https://playzero2025.sbs" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center">➔ Play Zero Lag Games Unblocked 2025</a></li>
                    <li className="mb-2"><a href="https://freegames2025.sbs" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center">➔ Play Free Games Unblocked 2025</a></li>
                    <li className="mb-2"><a href="https://nodownload2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center">➔ Play No Download Games Unblocked 2025</a></li>
                    <li className="mb-2"><a href="https://unblocked2025.cfd" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center">➔ Play Unblocked Games 2025 (Main)</a></li>
                    <li className="mb-2"><a href="https://unblocked2025.sbs" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center">➔ Play Best Unblocked Games 2025</a></li>
                    <li className="mb-2"><a href="https://promax.it.com" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center">➔ Play ProMax Games Unblocked 2025</a></li>
                    <li className="mb-2"><a href="https://retrobowl2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center">➔ Play Retro Bowl Unblocked 2025</a></li>
                    <li className="mb-2"><a href="https://1v1lol2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center">➔ Play 1v1.LOL Unblocked 2025</a></li>
                    <li className="mb-2"><a href="https://drift2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center">➔ Play Drift Hunters Unblocked 2025</a></li>
                    <li className="mb-2"><a href="https://slope2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center">➔ Play Slope Game Unblocked 2025</a></li>
                    <li className="mb-2"><a href="https://gd2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center">➔ Play Geometry Dash Unblocked 2025</a></li>
                    <li className="mb-2"><a href="https://motox3m2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center">➔ Play Moto X3M Unblocked 2025</a></li>
                    <li className="mb-2"><a href="https://surfers2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center">➔ Play Subway Surfers Unblocked 2025</a></li>
                    <li className="mb-2"><a href="https://run32025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center">➔ Play Run 3 Unblocked 2025</a></li>
                    <li className="mb-2"><a href="https://fireboy2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center">➔ Play Fireboy & Watergirl Unblocked 2025</a></li>
                    <li className="mb-2"><a href="https://paperio2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center">➔ Play Paper.io Unblocked 2025</a></li>
                    <li className="mb-2"><a href="https://driftbest2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center">➔ Play Drift Hunters MAX Unblocked 2025</a></li>
                    <li className="mb-2"><a href="https://gd-full2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center">➔ Play Geometry Dash Full Unblocked 2025</a></li>
                    <li className="mb-2"><a href="https://subway2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center">➔ Play Subway Surfers World Unblocked 2025</a></li>
                </ul>
            </div>
          </>
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
