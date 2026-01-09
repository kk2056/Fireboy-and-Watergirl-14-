
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
      } catch (e) {
        console.warn("AdSense push initialization...");
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
              <h2 className="text-2xl font-bold mb-4 text-orange-500 italic uppercase tracking-widest">Next-Gen Gaming: 2026 Edition</h2>
              <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Welcome to the future of browser entertainment. Our portal is the #1 source for <strong>unblocked games 2026 school chromebook no download free play</strong>. 
                We've optimized our infrastructure to ensure every title runs at 60FPS on even the most restricted <strong>school chromebook</strong>. 
                Get <strong>free play</strong> access to the entire Fireboy and Watergirl saga with <strong>no download</strong> required—just pure, high-speed fun for 2025, 2026, and beyond.
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
            
            {/* 1. Main AdSense Slot below the game player for RPM boost */}
            <div className="ad-bottom mt-8 text-center bg-gray-800/20 p-6 rounded-2xl border border-dashed border-gray-700">
              <span className="text-[10px] text-gray-500 block mb-3 uppercase tracking-[0.2em] font-bold">Advertisement - Sponsored Content</span>
              <ins className="adsbygoogle"
                   style={{ display: 'block' }}
                   data-ad-client="ca-pub-9774042341049510"
                   data-ad-format="auto"
                   data-full-width-responsive="true"></ins>
            </div>

            {/* Strategy Section with 2026 SEO Keywords */}
            <div className="strategy mt-8 text-gray-300 p-8 bg-gray-800 rounded-3xl border border-gray-700 leading-relaxed shadow-xl">
              <h3 className="text-2xl font-black text-orange-400 mb-4 tracking-tight uppercase">Master the Elements: 2026 Strategy Guide</h3>
              <p className="mb-4">
                Are you ready for the <strong>unblocked games 2026 school chromebook no download free play</strong> experience? 
                Whether you're playing the Forest Temple or the Crystal Temple, the 2026 edition of Fireboy & Watergirl features enhanced physics 
                for smoother <strong>free play</strong>. This version is specifically tuned for <strong>school chromebook</strong> hardware, 
                eliminating input lag common in older ports.
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
                  <h4 className="font-bold text-blue-400 mb-2">Pro Tip #1: Sync Movement</h4>
                  <p className="text-sm">In 2026, co-op synchronization is key. Move Fireboy and Watergirl simultaneously to solve timed puzzles that require <strong>no download</strong> speed precision.</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
                  <h4 className="font-bold text-orange-400 mb-2">Pro Tip #2: Chromebook Hotkeys</h4>
                  <p className="text-sm">Use our optimized keyboard mapping for the ultimate <strong>school chromebook</strong> experience. Press F for an immersive fullscreen session.</p>
                </div>
              </div>
              <p className="italic text-gray-400 text-sm">
                *Note: This site is the official 2025-2026 hub for unblocked adventure games, provided completely free for students and gamers worldwide.
              </p>
            </div>

            {/* Internal Links System */}
            <div className="other-games mt-12 bg-gray-950 p-8 rounded-3xl shadow-2xl border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <span className="w-2 h-6 bg-orange-600 mr-4 rounded-full"></span>
                  Explore Unblocked Games 2026 Network
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 list-none">
                    <li className="group"><a href="https://unblocked2025.cfd" className="text-gray-400 group-hover:text-blue-400 transition-all text-sm flex items-center">➔ Unblocked Games 2026 Hub</a></li>
                    <li className="group"><a href="https://retrobowl2025.online" className="text-gray-400 group-hover:text-blue-400 transition-all text-sm flex items-center">➔ Retro Bowl 2026 Unblocked</a></li>
                    <li className="group"><a href="https://slope2025.online" className="text-gray-400 group-hover:text-blue-400 transition-all text-sm flex items-center">➔ Slope Game 2026 Free Play</a></li>
                    <li className="group"><a href="https://gd2025.site" className="text-gray-400 group-hover:text-blue-400 transition-all text-sm flex items-center">➔ Geometry Dash 2026 No Download</a></li>
                    <li className="group"><a href="https://1v1lol2025.online" className="text-gray-400 group-hover:text-blue-400 transition-all text-sm flex items-center">➔ 1v1.LOL 2026 Unblocked</a></li>
                    <li className="group"><a href="https://surfers2025.site" className="text-gray-400 group-hover:text-blue-400 transition-all text-sm flex items-center">➔ Subway Surfers 2026 Chromebook</a></li>
                </ul>
            </div>
          </>
        )}
      </main>

      <footer className="border-t border-gray-800 py-16 mt-16 text-center text-gray-500">
        <div className="container mx-auto px-4">
          <p className="text-xl font-black text-gray-300 mb-4 tracking-tighter">FIREBOY AND WATERGIRL UNBLOCKED 2026</p>
          <p className="max-w-3xl mx-auto text-sm leading-relaxed mb-8">
            The definitive destination for <strong>unblocked games 2026 school chromebook no download free play</strong>. 
            Our platform is built by engineers to bypass filters while providing a premium, ad-light experience.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-[11px] font-mono uppercase tracking-[0.3em] text-gray-600">
            <span className="hover:text-orange-500 transition-colors cursor-default">HTML5 SECURE</span>
            <span className="hover:text-blue-500 transition-colors cursor-default">2026 READY</span>
            <span className="hover:text-green-500 transition-colors cursor-default">CHROMEBOOK OPTIMIZED</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
