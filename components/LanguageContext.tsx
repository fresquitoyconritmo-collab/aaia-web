import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

export type Language = 'es' | 'en' | 'de' | 'fr' | 'it' | 'ro';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (keyOrObject: string | Record<Language, string> | Record<string, string>) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('aaia_language');
    if (saved && ['es', 'en', 'de', 'fr', 'it', 'ro'].includes(saved)) {
      return saved as Language;
    }
    // Fallback to Spanish
    return 'es';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('aaia_language', lang);
  };

  const t = (keyOrObject: string | Record<Language, string> | Record<string, string>): string => {
    if (typeof keyOrObject === 'string') {
      const match = translations[keyOrObject];
      if (match) {
        return match[language] || match['es'] || keyOrObject;
      }
      return keyOrObject;
    }
    return (keyOrObject as Record<string, string>)[language] || (keyOrObject as Record<string, string>)['es'] || '';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
