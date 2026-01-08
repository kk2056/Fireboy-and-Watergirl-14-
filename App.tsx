
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

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  // Performance & Ad Logic: Listen for Fullscreen key and push AdSense
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'f' && currentGame) {
        toggleFullscreen();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Dynamic AdSense Push on component update
    if (currentGame) {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({}); // Second slot trigger
      } catch (e) {
        console.error("AdSense initialization warning:", e);
      }
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentGame]);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans selection:bg-orange-500 selection:text-white">
      <Header onLogoClick={handleGoHome} />
      
      <main className="container mx-auto px-4 py-8">
        {!currentGame ? (
          <>
            <Home onSelectGame={handlePlayGame} />
            
            {/* 2026 SEO Content Block for Home Page */}
            <section className="mt-12 p-8 bg-gray-800/40 rounded-3xl border border-gray-800 text-center">
              <h2 className="text-2xl font-bold mb-4 text-orange-500 italic uppercase tracking-widest">Upcoming: 2026 Edition</h2>
              <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Searching for the next level of entertainment? Our site is fully ready for <strong>unblocked games 2026</strong>. 
                Optimized specifically for every <strong>school chromebook</strong>, we guarantee a fast, <strong>no download</strong> experience 
                that bypasses restrictions seamlessly. Bookmark us now for the most reliable gaming portal of the next decade.
              </p>
            </section>
          </>
        ) : (
          <>
            {/* Mobile Experience & Fullscreen Controls */}
            <div className="text-center text-white bg-purple-800 p-4 rounded-lg mb-6 max-w-md mx-auto shadow-lg border border-purple-600">
              Tip: Rotate to landscape for better mobile experience! Perfect on phone or Chromebook.
            </div>

            <button 
              onClick={toggleFullscreen} 
              className="block mx-auto bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl text-xl mb-6 shadow-lg transform transition-all active:scale-95 hover:scale-105"
            >
              Play Full Screen (Press F - Ultimate Experience!)
            </button>

            <div className="text-center text-white bg-blue-800 p-4 rounded-lg mb-6 max-w-lg mx-auto shadow-lg border border-blue-600">
              Press F for fullscreen - No lag, full immersion on any device!
            </div>

            <GamePlayer game={currentGame} onBack={handleGoHome} />
            
            {/* Primary Game Ad Slot */}
            <div className="ad-bottom mt-8 text-center bg-gray-800/30 p-4 rounded-xl border border-gray-700">
              <span className="text-[10px] text-gray-600 block mb-2 uppercase tracking-widest">Premium Ad Slot</span>
              <ins className="adsbygoogle"
                   style={{ display: 'block' }}
                   data-ad-client="ca-pub-9774042341049510"
                   data-ad-format="auto"
                   data-full-width-responsive="true"></ins>
            </div>

            {/* Strategy Section with 2026 Keywords Integration */}
            <div className="strategy mt-8 text-gray-300 p-6 bg-gray-800 rounded-lg border border-gray-700 leading-relaxed shadow-inner">
              <h3 className="text-xl font-bold text-orange-400 mb-3">2026 Pro Strategy Guide</h3>
              <p className="mb-4">
                A test of friendship or a recipe for disaster? <strong>Fireboy & Watergirl Unblocked 2026</strong> is the premier co-op puzzle adventure. 
                This version is optimized for the latest <strong>school chromebook</strong> firmware, ensuring a <strong>no download</strong> setup 
                that works instantly in your browser. As a leader in the <strong>unblocked games 2026</strong> ecosystem, we provide low-latency inputs 
                crucial for the Forest, Light, and Ice temples.
              </p>
              <p className="bg-gray-900/50 p-4 rounded-lg border-l-4 border-orange-500 italic">
                <strong>Co-op Secret:</strong> Communication is everything! Before pressing an elevator button, check if your partner is safe. 
                Whether you're playing solo or with a classmate, this 2026-ready portal is your ultimate workstation getaway.
              </p>
            </div>

            {/* NEW: Secondary RPM Boost Ad Slot (Post-Strategy) */}
            <div className="ad-extra mt-8 text-center bg-gray-950 p-6 rounded-xl border border-gray-800 border-dashed">
              <span className="text-[10px] text-gray-700 block mb-3 uppercase font-mono">2026 Ad Engine Optimized</span>
              <ins className="adsbygoogle"
                   style={{ display: 'block' }}
                   data-ad-client="ca-pub-9774042341049510"
                   data-ad-format="rectangle, horizontal"
                   data-full-width-responsive="true"></ins>
            </div>

            {/* Internal Links System */}
            <div className="other-games mt-8 bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-600 pb-2 flex items-center">
                  <span className="w-1.5 h-6 bg-blue-500 mr-3 rounded-full animate-pulse"></span>
                  Explore Unblocked Games 2026 Network
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none">
                    <li className="mb-2"><a href="https://snakegame.cfd" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Snake Game Unblocked 2025/2026</a></li>
                    <li className="mb-2"><a href="https://playzero2025.sbs" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Zero Lag Games Unblocked 2025/2026</a></li>
                    <li className="mb-2"><a href="https://freegames2025.sbs" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Free Games Unblocked 2025/2026</a></li>
                    <li className="mb-2"><a href="https://nodownload2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play No Download Games Unblocked 2025/2026</a></li>
                    <li className="mb-2"><a href="https://unblocked2025.cfd" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Unblocked Games 2026 (Main Hub)</a></li>
                    <li className="mb-2"><a href="https://unblocked2025.sbs" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Best Unblocked Games 2026</a></li>
                    <li className="mb-2"><a href="https://promax.it.com" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play ProMax Games Unblocked 2026</a></li>
                    <li className="mb-2"><a href="https://retrobowl2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Retro Bowl Unblocked 2026</a></li>
                    <li className="mb-2"><a href="https://1v1lol2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play 1v1.LOL Unblocked 2026</a></li>
                    <li className="mb-2"><a href="https://drift2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Drift Hunters Unblocked 2026</a></li>
                    <li className="mb-2"><a href="https://slope2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Slope Game Unblocked 2026</a></li>
                    <li className="mb-2"><a href="https://gd2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Geometry Dash Unblocked 2026</a></li>
                    <li className="mb-2"><a href="https://motox3m2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Moto X3M Unblocked 2026</a></li>
                    <li className="mb-2"><a href="https://surfers2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Subway Surfers Unblocked 2026</a></li>
                    <li className="mb-2"><a href="https://run32025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Run 3 Unblocked 2026</a></li>
                    <li className="mb-2"><a href="https://fireboy2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Fireboy & Watergirl Unblocked 2026</a></li>
                    <li className="mb-2"><a href="https://paperio2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Paper.io Unblocked 2026</a></li>
                    <li className="mb-2"><a href="https://driftbest2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Drift Hunters MAX Unblocked 2026</a></li>
                    <li className="mb-2"><a href="https://gd-full2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Geometry Dash Full Unblocked 2026</a></li>
                    <li className="mb-2"><a href="https://subway2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Subway Surfers World Unblocked 2026</a></li>
                </ul>
            </div>
          </>
        )}
      </main>

      <footer className="border-t border-gray-800 py-12 mt-12 text-center text-gray-500">
        <div className="container mx-auto px-4">
          <p className="text-lg font-bold text-gray-400 mb-2">Fireboy and Watergirl Unblocked 2026</p>
          <p className="max-w-2xl mx-auto text-sm">
            Experience the definitive edition of the ultimate co-op platformer. Optimized for 2025/2026 school sessions. 
            <strong>No download</strong>, no plugins, and 100% accessible on <strong>school chromebook</strong> networks.
          </p>
          <div className="mt-6 space-x-4 text-[10px] font-mono tracking-widest text-gray-600">
            <span>UNBLOCKED 2026</span>
            <span>•</span>
            <span>SCHOOL READY</span>
            <span>•</span>
            <span>NO FLASH</span>
            <span>•</span>
            <span>HTML5 POWERED</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
