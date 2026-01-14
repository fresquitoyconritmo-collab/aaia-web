
import React from 'react';

interface HeroProps {
  onNavigateAbout?: () => void;
  onNavigateNews?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigateAbout, onNavigateNews }) => {
  return (
    <header className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-white dark:bg-[#020617]">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-500/10 dark:bg-blue-600/5 rounded-full blur-[120px] animate-pulse-soft"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-indigo-500/10 dark:bg-indigo-600/5 rounded-full blur-[150px] animate-float"></div>
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-400 text-xs font-bold mb-8 border border-blue-100 dark:border-blue-800 shadow-sm transition-transform hover:scale-105">
              <span className="material-icons-round text-sm">rocket_launch</span>
              Innovación para el futuro de Aragón
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-slate-900 dark:text-white leading-[1.1]">
              Humanizando la <br />
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">
                IA en Aragón
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed">
              Formamos, conectamos y empoderamos a la sociedad aragonesa a través de una Inteligencia Artificial ética, transparente y accesible para todos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onNavigateNews}
                className="group px-10 py-4 bg-primary text-white rounded-2xl font-bold hover:shadow-2xl hover:shadow-blue-500/40 transition-all flex items-center justify-center gap-3 active:scale-95"
              >
                Ser parte del cambio
                <span className="material-icons-round text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              <button 
                onClick={onNavigateAbout}
                className="px-10 py-4 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                Conocer la asociación
              </button>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800 transform rotate-2 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600" 
                alt="AI Concept" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="text-xs font-bold uppercase tracking-wider">Próximo Evento</span>
                </div>
                <h3 className="text-2xl font-bold">Congreso IA Aragón 2026</h3>
              </div>
            </div>
            {/* Geometric accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl animate-float"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
