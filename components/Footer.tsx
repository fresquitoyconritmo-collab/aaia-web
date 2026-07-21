import React from 'react';
import { useLanguage } from './LanguageContext';
// @ts-ignore
import logoUrl from '../logo_aaia.png';

interface FooterProps {
  onNavigateHome?: () => void;
  onNavigateMission?: () => void;
  onNavigateTraining?: () => void;
  onNavigateNews?: () => void;
  onNavigateMembership?: () => void;
  onNavigateStatutes?: () => void;
  onNavigateCooperation?: () => void;
}

const Footer: React.FC<FooterProps> = ({
  onNavigateHome,
  onNavigateMission,
  onNavigateTraining,
  onNavigateNews,
  onNavigateMembership,
  onNavigateStatutes,
  onNavigateCooperation
}) => {
  const LOGO_URL = logoUrl;
  const { t } = useLanguage();

  const SocialIcons = {
    LinkedIn: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    Facebook: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
      </svg>
    ),
    TikTok: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.85.51-1.44 1.43-1.58 2.41-.16 1.02.21 2.11.95 2.81.67.65 1.61.98 2.54.91 1.17-.05 2.25-.74 2.77-1.78.2-.41.27-.86.27-1.31V.02z"/>
      </svg>
    ),
    YouTube: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
      </svg>
    )
  };

  return (
    <footer className="bg-slate-950 text-slate-500 py-20 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6 text-white">
              <img 
                src={LOGO_URL} 
                alt="AAIA Logo" 
                className="h-10 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="font-black text-2xl tracking-tighter">AAIA</span>
            </div>
            <p className="mb-8 text-slate-400 leading-relaxed font-medium">
              {t({
                es: "Asociación Aragonesa de Inteligencia Artificial. Promoviendo el desarrollo ético y responsable de la IA en todo el territorio.",
                en: "Aragonese Association of Artificial Intelligence. Promoting the ethical and responsible development of AI across the region.",
                de: "Aragonesische Vereinigung für Künstliche Intelligenz. Förderung der ethischen und verantwortungsvollen Entwicklung der KI in der gesamten Region.",
                fr: "Association Aragonaise d'Intelligence Artificielle. Promouvoir le développement éthique et responsable de l'IA sur l'ensemble du territoire.",
                it: "Associazione Aragonese di Intelligenza Artificiale. Promuovere lo sviluppo etico e responsabile dell'IA in tutto il territorio.",
                ro: "Asociația Aragoneză de Inteligență Artificială. Promovarea dezvoltării etice și responsabile a IA pe întreg teritoriul."
              })}
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#1877F2] transition-all duration-300 shadow-lg" 
                title="Facebook"
              >
                {SocialIcons.Facebook}
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0A66C2] transition-all duration-300 shadow-lg" 
                title="LinkedIn"
              >
                {SocialIcons.LinkedIn}
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-black transition-all duration-300 shadow-lg" 
                title="TikTok"
              >
                {SocialIcons.TikTok}
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#FF0000] transition-all duration-300 shadow-lg" 
                title="YouTube"
              >
                {SocialIcons.YouTube}
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">
              {t({
                es: "Navegación",
                en: "Navigation",
                de: "Navigation",
                fr: "Navigation",
                it: "Navigazione",
                ro: "Navigare"
              })}
            </h4>
            <ul className="space-y-4 font-medium">
              <li>
                <button onClick={onNavigateHome} className="hover:text-primary transition-colors text-left w-full">
                  {t({ es: "Inicio", en: "Home", de: "Startseite", fr: "Accueil", it: "Home", ro: "Acasă" })}
                </button>
              </li>
              <li>
                <button onClick={onNavigateMission} className="hover:text-primary transition-colors text-left w-full">
                  {t({ es: "Misión", en: "Mission", de: "Mission", fr: "Mission", it: "Mission", ro: "Misiune" })}
                </button>
              </li>
              <li>
                <button onClick={onNavigateTraining} className="hover:text-primary transition-colors text-left w-full">
                  {t({ es: "Formación", en: "Training", de: "Ausbildung", fr: "Formation", it: "Formazione", ro: "Formare" })}
                </button>
              </li>
              <li>
                <button onClick={onNavigateCooperation} className="hover:text-primary transition-colors text-left w-full flex items-center gap-1">
                  <span className="material-icons-round text-sm text-primary">public</span>
                  {t({ es: "Cooperación Internacional", en: "International Cooperation", de: "Internationale Kooperation", fr: "Coopération Internationale", it: "Cooperazione Internazionale", ro: "Cooperare Internațională" })}
                </button>
              </li>
              <li>
                <button onClick={onNavigateNews} className="hover:text-primary transition-colors text-left w-full">
                  {t({ es: "Actualidad", en: "News", de: "Aktuelles", fr: "Actualités", it: "Attualità", ro: "Actualități" })}
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">
              {t({
                es: "Participa",
                en: "Participate",
                de: "Mitmachen",
                fr: "Participer",
                it: "Partecipa",
                ro: "Participă"
              })}
            </h4>
            <ul className="space-y-4 font-medium">
              <li>
                <button onClick={onNavigateMembership} className="hover:text-primary transition-colors text-left w-full">
                  {t({ es: "Hazte Socio", en: "Become a Member", de: "Mitglied werden", fr: "Devenir Membre", it: "Diventa Socio", ro: "Devină Membru" })}
                </button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors text-left w-full">
                  {t({ es: "Voluntariado", en: "Volunteering", de: "Ehrenamt", fr: "Bénévolat", it: "Volontariato", ro: "Voluntariat" })}
                </button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors text-left w-full">
                  {t({ es: "Colabora con Proyectos", en: "Collaborate on Projects", de: "An Projekten mitwirken", fr: "Collaborer aux Projets", it: "Collabora con i Progetti", ro: "Colaborează la Proiecte" })}
                </button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors text-left w-full">
                  {t({ es: "Donaciones", en: "Donations", de: "Spenden", fr: "Dons", it: "Donazioni", ro: "Donații" })}
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">
              {t({
                es: "Legal",
                en: "Legal",
                de: "Rechtliches",
                fr: "Mentions Légales",
                it: "Legale",
                ro: "Legal"
              })}
            </h4>
            <ul className="space-y-4 font-medium">
              <li>
                <button onClick={onNavigateStatutes} className="hover:text-primary transition-colors text-left w-full">
                  {t({ es: "Estatutos", en: "Statutes", de: "Satzung", fr: "Statuts", it: "Statuto", ro: "Statut" })}
                </button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors text-left w-full">
                  {t({ es: "Política de Privacidad", en: "Privacy Policy", de: "Datenschutzerklärung", fr: "Politique de Confidentialité", it: "Informativa sulla Privacy", ro: "Politică de Confidențialitate" })}
                </button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors text-left w-full">
                  {t({ es: "Aviso Legal", en: "Legal Notice", de: "Impressum", fr: "Avis Légal", it: "Note Legali", ro: "Mențiuni Legale" })}
                </button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors text-left w-full">
                  {t({ es: "Código Ético", en: "Ethical Code", de: "Verhaltenskodex", fr: "Code d'Éthique", it: "Codice Etico", ro: "Cod Etic" })}
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 font-medium">
            {t({
              es: "© 2026 Asociación Aragonesa de Inteligencia Artificial. Todos los derechos reservados.",
              en: "© 2026 Aragonese Association of Artificial Intelligence. All rights reserved.",
              de: "© 2026 Aragonesische Vereinigung für Künstliche Intelligenz. Alle Rechte vorbehalten.",
              fr: "© 2026 Association Aragonaise d'Intelligence Artificielle. Tous droits réservés.",
              it: "© 2026 Associazione Aragonese di Intelligenza Artificiale. Tutti i diritti riservati.",
              ro: "© 2026 Asociația Aragoneză de Inteligență Artificială. Toate drepturile rezervate."
            })}
          </p>
          <div className="flex items-center gap-3 text-slate-400 font-bold text-xs uppercase tracking-widest">
            <span>
              {t({
                es: "Desarrollado con IA Ética",
                en: "Developed with Ethical AI",
                de: "Entwickelt mit ethischer KI",
                fr: "Développé avec une IA Éthique",
                it: "Sviluppato con IA Etica",
                ro: "Dezvoltat cu IA Etică"
              })}
            </span>
            <span className="material-icons-round text-primary">smart_toy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
