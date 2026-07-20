import React from 'react';
import { useLanguage } from './LanguageContext';

interface AreasOfActionProps {
  onNavigateTraining?: () => void;
  onNavigateNews?: () => void;
  onNavigateContact?: () => void;
}

const AreasOfAction: React.FC<AreasOfActionProps> = ({ 
  onNavigateTraining, 
  onNavigateNews, 
  onNavigateContact 
}) => {
  const { t } = useLanguage();

  const areas = [
    { 
      icon: "school", 
      title: t({
        es: "Formación",
        en: "Training",
        de: "Ausbildung",
        fr: "Formation",
        it: "Formazione",
        ro: "Formare"
      }), 
      desc: t({
        es: "Cursos, talleres y programas educativos en IA para todos los niveles de la sociedad.",
        en: "Courses, workshops, and educational programs in AI for all levels of society.",
        de: "Kurse, Workshops und Bildungsprogramme im Bereich der KI für alle gesellschaftlichen Ebenen.",
        fr: "Cours, ateliers et programmes éducatifs en IA pour tous les niveaux de la société.",
        it: "Corsi, workshop e programmi educativi sull'IA per tutti i livelli della società.",
        ro: "Cursuri, ateliere și programe educaționale în IA pentru toate nivelurile societății."
      }), 
      bg: "bg-blue-500", 
      action: onNavigateTraining 
    },
    { 
      icon: "campaign", 
      title: t({
        es: "Divulgación",
        en: "Outreach",
        de: "Öffentlichkeitsarbeit",
        fr: "Vulgarisation",
        it: "Divulgazione",
        ro: "Popularizare"
      }), 
      desc: t({
        es: "Eventos públicos y conferencias para acercar la IA a la comunidad aragonesa.",
        en: "Public events and conferences to bring AI closer to the Aragonese community.",
        de: "Öffentliche Veranstaltungen und Konferenzen, um der aragonesischen Gemeinschaft die KI näher zu bringen.",
        fr: "Événements publics et conférences pour rapprocher l'IA de la communauté aragonaise.",
        it: "Eventi pubblici e conferenze per avvicinare l'IA alla comunità aragonese.",
        ro: "Evenimente publice și conferințe pentru a aduce IA mai aproape de comunitatea aragoneză."
      }), 
      bg: "bg-indigo-500", 
      action: onNavigateNews 
    },
    { 
      icon: "build", 
      title: t({
        es: "Asesoramiento",
        en: "Advisory",
        de: "Beratung",
        fr: "Conseil",
        it: "Consulenza",
        ro: "Consiliere"
      }), 
      desc: t({
        es: "Consultoría especializada para empresas e instituciones que desean ser éticas.",
        en: "Specialized consultancy for companies and institutions that wish to be ethical.",
        de: "Spezialisierte Beratung für Unternehmen und Institutionen, die ethisch handeln möchten.",
        fr: "Conseil spécialisé pour les entreprises et institutions qui souhaitent être éthiques.",
        it: "Consulenza specializzata per aziende e istituzioni che desiderano operare in modo etico.",
        ro: "Consultanță de specialitate pentru companii și instituții care doresc să fie etice."
      }), 
      bg: "bg-purple-500", 
      action: onNavigateContact 
    },
    { 
      icon: "lightbulb", 
      title: t({
        es: "Innovación",
        en: "Innovation",
        de: "Innovation",
        fr: "Innovation",
        it: "Innovazione",
        ro: "Inovare"
      }), 
      desc: t({
        es: "Proyectos piloto y colaboraciones de I+D aplicados a problemas regionales.",
        en: "Pilot projects and R&D collaborations applied to regional challenges.",
        de: "Pilotprojekte und F&E-Kooperationen, angewandt auf regionale Herausforderungen.",
        fr: "Projets pilotes et collaborations de R&D appliqués aux défis régionaux.",
        it: "Progetti pilota e collaborazioni di R&D applicate alle sfide regionali.",
        ro: "Proiecte-pilot și colaborări de cercetare-dezvoltare aplicate provocărilor regionale."
      }), 
      bg: "bg-emerald-500", 
      action: onNavigateContact 
    }
  ];

  return (
    <section className="py-32 bg-slate-50 dark:bg-[#020617] relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            {t({
              es: "Nuestra Hoja de Ruta",
              en: "Our Roadmap",
              de: "Unsere Roadmap",
              fr: "Notre Feuille de Route",
              it: "La Nostra Tabella di Marcia",
              ro: "Foaia Noastră de Parcurs"
            })}
          </h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg">
            {t({
              es: "Impactamos en Aragón a través de cuatro dimensiones estratégicas diseñadas para el crecimiento inclusivo.",
              en: "We impact Aragon through four strategic dimensions designed for inclusive growth.",
              de: "Wir wirken in Aragonien durch vier strategische Dimensionen, die auf integratives Wachstum ausgelegt sind.",
              fr: "Nous impactons l'Aragon à travers quatre dimensions stratégiques conçues pour une croissance inclusive.",
              it: "Esercitiamo un impatto in Aragona attraverso quattro dimensioni strategiche progettate per una crescita inclusiva.",
              ro: "Impactăm Aragonul prin intermediul a patru dimensiuni strategice concepute pentru o creștere incluzivă."
            })}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area, idx) => (
            <div key={idx} className="group bg-white dark:bg-slate-900/50 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 glass-panel">
              <div className={`w-16 h-16 ${area.bg} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                <span className="material-icons-round text-3xl">{area.icon}</span>
              </div>
              <h4 className="text-xl font-bold dark:text-white mb-4">{area.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{area.desc}</p>
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => area.action && area.action()} 
                  className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform"
                >
                  {t({
                    es: "Ver detalles",
                    en: "View details",
                    de: "Details anzeigen",
                    fr: "Voir les détails",
                    it: "Visualizza dettagli",
                    ro: "Vezi detalii"
                  })} <span className="material-icons-round text-sm">east</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasOfAction;
