import React from 'react';
import { useLanguage } from './LanguageContext';

interface TransparencyProps {
  onOpenStatutes: () => void;
}

const Transparency: React.FC<TransparencyProps> = ({ onOpenStatutes }) => {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
          alt="Transparent Tech" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest mb-6 border border-white/20">
            {t({
              es: "Gobierno Abierto",
              en: "Open Government",
              de: "Open Government",
              fr: "Gouvernement Ouvert",
              it: "Open Government",
              ro: "Guvernare Deschisă"
            })}
          </div>
          <h3 className="text-4xl font-extrabold text-white mb-6 leading-tight">
            {t({
              es: "Transparencia Radical",
              en: "Radical Transparency",
              de: "Radikale Transparenz",
              fr: "Transparence Radicale",
              it: "Trasparenza Radicale",
              ro: "Transparență Radicală"
            })}
          </h3>
          <p className="text-slate-400 mb-10 text-lg leading-relaxed">
            {t({
              es: "Como organización sin ánimo de lucro, la confianza es nuestro activo más valioso. Compartimos públicamente nuestros estatutos, memorias anuales y el impacto real de cada euro invertido en Aragón.",
              en: "As a non-profit organization, trust is our most valuable asset. We publicly share our statutes, annual reports, and the real impact of every euro invested in Aragon.",
              de: "Als gemeinnützige Organisation ist Vertrauen unser wertvollstes Gut. Wir teilen unsere Satzungen, Jahresberichte und die tatsächliche Wirkung jedes in Aragonien investierten Euros öffentlich.",
              fr: "En tant qu'organisation à but non lucratif, la confiance est notre atout le plus précieux. Nous partageons publiquement nos statuts, nos rapports annuels et l'impact réel de chaque euro investi en Aragon.",
              it: "In quanto organizzazione non profit, la fiducia è il nostro bene più prezioso. Condividiamo pubblicamente i nostri statuti, i bilanci annuali e l'impatto reale di ogni euro investito in Aragona.",
              ro: "Ca organizație non-profit, încrederea este cel mai valoros activ al nostru. Împărtășim public statutele, rapoartele anuale și impactul real al fiecărui euro investit în Aragon."
            })}
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={onOpenStatutes}
              className="bg-white text-slate-950 px-8 py-4 rounded-2xl font-black flex items-center gap-3 hover:bg-slate-200 transition-all hover:scale-105 shadow-xl"
            >
              <span className="material-icons-round">description</span>
              {t({
                es: "Estatutos AAIA",
                en: "AAIA Statutes",
                de: "AAIA-Satzung",
                fr: "Statuts de l'AAIA",
                it: "Statuto AAIA",
                ro: "Statutul AAIA"
              })}
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-8 italic">
            {t({
              es: "Última actualización: Enero 2026 • Firmado digitalmente",
              en: "Last updated: January 2026 • Digitally signed",
              de: "Letzte Aktualisierung: Januar 2026 • Digital signiert",
              fr: "Dernière mise à jour : Janvier 2026 • Signé numériquement",
              it: "Ultimo aggiornamento: Gennaio 2026 • Firmato digitalmente",
              ro: "Ultima actualizare: Ianuarie 2026 • Semnat digital"
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Transparency;
