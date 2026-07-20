
import React, { useState } from 'react';
// @ts-ignore
import logoUrl from '../logo_aaia.png';
import { useLanguage, Language } from './LanguageContext';

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
  onNavigateCooperation: () => void;
  onNavigateCommunity: () => void;
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
  onNavigateMembership,
  onNavigateCooperation,
  onNavigateCommunity
}) => {
  const LOGO_URL = logoUrl;
  const { language, setLanguage, t } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);

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
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="font-black text-2xl tracking-tighter text-slate-900 dark:text-white">AAIA</span>
              <span className="text-[8px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em]">
                {t('nav_asociacion')}
              </span>
            </div>
          </button>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-bold text-slate-600 dark:text-slate-400">
            <button onClick={onNavigateHome} className="hover:text-primary transition-colors">{t('nav_inicio')}</button>
            <button onClick={onNavigateMission} className="hover:text-primary transition-colors">{t('nav_mision')}</button>
            <button onClick={onNavigateTraining} className="hover:text-primary transition-colors">{t('nav_formacion')}</button>
            <button onClick={onNavigateCooperation} className="hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-icons-round text-sm text-primary">public</span>
              {t('nav_cooperacion')}
            </button>
            <button onClick={onNavigateCommunity} className="hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-icons-round text-sm text-indigo-500">groups</span>
              {t('nav_red_lideres')}
            </button>
            <button onClick={onNavigateEthics} className="hover:text-primary transition-colors">{t('nav_etica')}</button>
            <button onClick={onNavigateNews} className="hover:text-primary transition-colors">{t('nav_actualidad')}</button>
            <button onClick={onNavigateContact} className="hover:text-primary transition-colors">{t('nav_contacto')}</button>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-black bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm"
              >
                <span className="material-icons-round text-sm text-slate-500">translate</span>
                <span className="uppercase">{language}</span>
                <span className="material-icons-round text-[10px] text-slate-400">keyboard_arrow_down</span>
              </button>

              {isLangOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setIsLangOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-40 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xl z-20 py-1.5 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    {[
                      { code: 'es', label: 'Español', flag: '🇪🇸' },
                      { code: 'en', label: 'English', flag: '🇬🇧' },
                      { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
                      { code: 'fr', label: 'Français', flag: '🇫🇷' },
                      { code: 'it', label: 'Italiano', flag: '🇮🇹' },
                      { code: 'ro', label: 'Română', flag: '🇷🇴' }
                    ].map((langItem) => (
                      <button
                        key={langItem.code}
                        onClick={() => {
                          setLanguage(langItem.code as Language);
                          setIsLangOpen(false);
                        }}
                        className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-left text-xs font-bold transition-colors ${
                          language === langItem.code 
                            ? 'bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-400' 
                            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                        }`}
                      >
                        <span className="text-base leading-none">{langItem.flag}</span>
                        <span>{langItem.label}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

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
              {t('nav_hacerse_socio')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
