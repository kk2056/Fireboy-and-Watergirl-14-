
import React from 'react';
import { GAMES, Game } from '../constants';

interface HomeProps {
  onSelectGame: (game: Game) => void;
}

const Home: React.FC<HomeProps> = ({ onSelectGame }) => {
  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-24 bg-gradient-to-b from-gray-800/50 to-transparent rounded-3xl border border-gray-800">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
          FIREBOY & WATERGIRL <br/>
          <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">UNBLOCKED 2025</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto px-4 leading-relaxed">
          The most stable gaming portal for schools. Play all Fireboy and Watergirl chapters without lag, blockers, or ads. 
          Master the temples and reach the exit with both characters!
        </p>
        <div className="mt-10">
          <button 
            onClick={() => onSelectGame(GAMES[0])}
            className="bg-white text-black px-10 py-4 rounded-xl font-black text-lg hover:bg-gray-200 transition-all transform hover:-translate-y-1 shadow-2xl active:scale-95"
          >
            START ADVENTURE
          </button>
        </div>
      </section>

      {/* Game Grid */}
      <section id="games">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold flex items-center">
            <span className="w-2 h-8 bg-orange-500 rounded-full mr-3"></span>
            LATEST RELEASES
          </h2>
          <span className="text-sm text-gray-500 font-mono">SCHOOL-READY // 2025</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GAMES.map((game) => (
            <div 
              key={game.id}
              onClick={() => onSelectGame(game)}
              className="group bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-orange-500/50 cursor-pointer transition-all hover:shadow-2xl hover:shadow-orange-500/10"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={game.thumbnail} 
                  alt={game.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-orange-600 text-[10px] font-bold px-2 py-1 rounded uppercase">NEW</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 group-hover:text-orange-400 transition-colors">{game.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-2 mb-4 leading-snug">
                  {game.description}
                </p>
                <div className="flex items-center text-xs font-bold text-gray-500 group-hover:text-white uppercase tracking-widest">
                  LAUNCH GAME ➔
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="bg-gray-950 p-8 md:p-12 rounded-3xl border border-gray-800 shadow-inner">
        <h2 className="text-2xl font-bold mb-6 text-gray-200">Why Play Fireboy and Watergirl Unblocked Here?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-gray-400 leading-relaxed text-sm">
          <div>
            <h3 className="text-orange-500 font-bold mb-3">ZERO LAG PORTAL</h3>
            <p>Our infrastructure is optimized for 2025 school networks. By using a state-based architecture, we ensure the site never triggers 404 errors or black screens, providing a 100% uptime experience.</p>
          </div>
          <div>
            <h3 className="text-blue-500 font-bold mb-3">SAFE & SECURE</h3>
            <p>Fireboy and Watergirl Unblocked is a clean site. No downloads, no plugins, and no tracking. It's the safest way to enjoy your favorite flash-style puzzle games in a modern HTML5 environment.</p>
          </div>
          <div>
            <h3 className="text-purple-500 font-bold mb-3">KEYBOARD CONTROLS</h3>
            <p>Perfect for teamwork! One player uses WASD to control Watergirl, while the other uses Arrow Keys to control Fireboy. Solve cooperative puzzles and master the temple together.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
