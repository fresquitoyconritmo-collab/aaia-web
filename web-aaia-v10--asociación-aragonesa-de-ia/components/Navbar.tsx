
import React from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  onNavigateHome: () => void;
  onNavigateTraining: () => void;
  onNavigateContact: () => void;
  onNavigateEthics: () => void;
  onNavigateMission: () => void;
  onNavigateNews: () => void;
  onNavigateMembership: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  isDarkMode, 
  toggleTheme, 
  onNavigateHome, 
  onNavigateTraining, 
  onNavigateContact,
  onNavigateEthics,
  onNavigateMission,
  onNavigateNews,
  onNavigateMembership
}) => {
  // Cambiamos a ruta relativa sin la barra inicial para mayor compatibilidad
  const LOGO_URL = "logo_aaia.png";

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 glass-panel border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <button onClick={onNavigateHome} className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
            <div className="relative flex items-center">
              <img 
                src={LOGO_URL} 
                alt="Logo AAIA" 
                className="h-12 w-auto object-contain transition-transform group-hover:scale-110"
                onError={(e) => {
                  // Si falla el PNG, ocultamos la imagen y el usuario seguirá viendo el texto AAIA al lado
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="font-black text-2xl tracking-tighter text-slate-900 dark:text-white">AAIA</span>
              <span className="text-[8px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em]">Asociación Aragonesa de IA</span>
            </div>
          </button>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-bold text-slate-600 dark:text-slate-400">
            <button onClick={onNavigateHome} className="hover:text-primary transition-colors">Inicio</button>
            <button onClick={onNavigateMission} className="hover:text-primary transition-colors">Misión</button>
            <button onClick={onNavigateTraining} className="hover:text-primary transition-colors">Formación</button>
            <button onClick={onNavigateNews} className="hover:text-primary transition-colors">Actualidad</button>
            <button onClick={onNavigateEthics} className="hover:text-primary transition-colors">Ética</button>
            <button onClick={onNavigateContact} className="hover:text-primary transition-colors">Contacto</button>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
            >
              <span className="material-icons-round">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
            </button>
            <button 
              onClick={onNavigateMembership}
              className="hidden lg:block px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-black hover:shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95"
            >
              Hacerse Socio
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
