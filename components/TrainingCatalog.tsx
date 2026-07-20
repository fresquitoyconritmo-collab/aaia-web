
import React from 'react';
import { useLanguage } from './LanguageContext';

interface TrainingCatalogProps {
  onOpenDetail?: () => void;
  onOpenBusinessDetail?: () => void;
  onOpenEducationDetail?: () => void;
}

const TrainingCatalog: React.FC<TrainingCatalogProps> = ({ onOpenDetail, onOpenBusinessDetail, onOpenEducationDetail }) => {
  const { t } = useLanguage();

  const courses = [
    {
      id: "alfabetizacion",
      icon: "menu_book",
      title: t({
        es: "Capacitación Asociaciones",
        en: "Associations Training",
        de: "Schulung für Verbände",
        fr: "Formation des Associations",
        it: "Formazione Associazioni",
        ro: "Formare Asociații"
      }),
      desc: t({
        es: "Programas diseñados para que cualquier persona pueda comprender y utilizar la IA de forma segura.",
        en: "Programs designed so that anyone can understand and use AI safely.",
        de: "Programme, die darauf ausgelegt sind, dass jeder KI verstehen und sicher nutzen kann.",
        fr: "Programmes conçus pour que quiconque puisse comprendre et utiliser l'IA en toute sécurité.",
        it: "Programmi pensati affinché chiunque possa comprendere e utilizzare l'IA in modo sicuro.",
        ro: "Programe concepute pentru ca oricine să poată înțelege și utiliza IA în siguranță."
      }),
      features: [
        t({ es: "Conceptos básicos de IA", en: "AI basics", de: "KI-Grundlagen", fr: "Bases de l'IA", it: "Concetti base dell'IA", ro: "Concepte de bază ale IA" }),
        t({ es: "Herramientas cotidianas", en: "Everyday tools", de: "Alltägliche Werkzeuge", fr: "Outils quotidiens", it: "Strumenti quotidiani", ro: "Instrumente de zi cu zi" }),
        t({ es: "Privacidad y seguridad", en: "Privacy & security", de: "Datenschutz & Sicherheit", fr: "Confidentialité & sécurité", it: "Privacy e sicurezza", ro: "Confidențialitate și securitate" })
      ],
      isPopular: false
    },
    {
      id: "empresas",
      icon: "business_center",
      title: t({
        es: "Capacitación Empresas",
        en: "Businesses Training",
        de: "Schulung für Unternehmen",
        fr: "Formation des Entreprises",
        it: "Formazione Imprese",
        ro: "Formare Companii"
      }),
      desc: t({
        es: "Formación especializada para profesionales que desean integrar la IA en sus procesos.",
        en: "Specialized training for professionals who want to integrate AI into their processes.",
        de: "Spezialisierte Schulungen für Fachkräfte, die KI in ihre Prozesse integrieren möchten.",
        fr: "Formation spécialisée pour les professionnels qui souhaitent intégrer l'IA dans leurs processus.",
        it: "Formazione specializzata per i professionisti che desiderano integrare l'IA nei loro processi.",
        ro: "Formare specializată pentru profesioniști care doresc să integreze IA în procesele lor."
      }),
      features: [
        t({ es: "IA aplicada a la productividad", en: "AI applied to productivity", de: "KI für Produktivität", fr: "L'IA appliquée à la productivité", it: "IA applicata alla produttività", ro: "IA aplicată productivității" }),
        t({ es: "Automatización de tareas", en: "Task automation", de: "Aufgabenautomatisierung", fr: "Automatisation des tâches", it: "Automazione delle attività", ro: "Automatizarea sarcinilor" }),
        t({ es: "Análisis de datos empresariales", en: "Business data analysis", de: "Unternehmensdatenanalyse", fr: "Analyse des données d'entreprise", it: "Analisi dei dati aziendali", ro: "Analiza datelor de afaceri" })
      ],
      isPopular: true
    },
    {
      id: "educacion",
      icon: "school",
      title: t({
        es: "Capacitación Sistema Educativo",
        en: "Education System Training",
        de: "Schulung für das Bildungssystem",
        fr: "Formation du Système Éducatif",
        it: "Formazione Sistema Educativo",
        ro: "Formare Sistem Educațional"
      }),
      desc: t({
        es: "Capacitación para docentes y estudiantes en el uso pedagógico de la IA.",
        en: "Training for teachers and students in the pedagogical use of AI.",
        de: "Schulung für Lehrkräfte und Schüler in der pädagogischen Nutzung von KI.",
        fr: "Formation des enseignants et des étudiants à l'utilisation pédagogique de l'IA.",
        it: "Formazione per docenti e studenti sull'uso pedagogico dell'IA.",
        ro: "Formare pentru profesori și elevi în utilizarea pedagogică a IA."
      }),
      features: [
        t({ es: "IA como herramienta", en: "AI as a tool", de: "KI als Werkzeug", fr: "L'IA comme outil", it: "IA come strumento", ro: "IA ca instrument" }),
        t({ es: "Personalización del aprendizaje", en: "Learning personalization", de: "Personalisiertes Lernen", fr: "Personnalisation de l'apprentissage", it: "Personalizzazione dell'apprendimento", ro: "Personalizarea învățării" }),
        t({ es: "Pensamiento crítico", en: "Critical thinking", de: "Kritisches Denken", fr: "Pensée critique", it: "Pensiero critico", ro: "Gândire critică" })
      ],
      isPopular: false
    }
  ];

  return (
    <section id="formacion" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            {t({
              es: "Catálogo de Formación",
              en: "Training Catalog",
              de: "Ausbildungs-Katalog",
              fr: "Catalogue de Formation",
              it: "Catalogo di Formazione",
              ro: "Catalog de instruire"
            })}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t({
              es: "Oferta formativa diseñada para democratizar el acceso a la IA y preparar a personas, empresas e instituciones.",
              en: "Training programs designed to democratize access to AI and prepare individuals, businesses and institutions.",
              de: "Schulungsangebote zur Demokratisierung des Zugangs zu KI und zur Vorbereitung von Einzelpersonen, Unternehmen und Institutionen.",
              fr: "Offre de formation conçue pour démocratiser l'accès à l'IA et préparer les personnes, les entreprises et les institutions.",
              it: "Offerta formativa pensata per democratizzare l'accesso all'IA e preparare persone, imprese e istituzioni.",
              ro: "Ofertă de formare concepută pentru a democratiza accesul la IA și pentru a pregăti persoane, companii și instituții."
            })}
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div key={idx} className={`flex flex-col p-8 rounded-2xl border transition-all hover:shadow-xl relative ${course.isPopular ? 'bg-slate-50 dark:bg-slate-800 border-primary/20' : 'bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700'}`}>
              {course.isPopular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] px-3 py-1 rounded-bl-xl font-bold uppercase tracking-wider">
                  {t({
                    es: "Popular",
                    en: "Popular",
                    de: "Beliebt",
                    fr: "Populaire",
                    it: "Popolare",
                    ro: "Popular"
                  })}
                </div>
              )}
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 text-primary rounded-lg flex items-center justify-center mb-6">
                <span className="material-icons-round">{course.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">{course.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 flex-grow">
                {course.desc}
              </p>
              <ul className="space-y-4 mb-10 text-sm text-slate-600 dark:text-slate-300">
                {course.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="material-icons-round text-primary text-base">check_circle</span>
                    {f}
                  </li>
                ))}
              </ul>
              
              {course.id === 'alfabetizacion' ? (
                <button 
                  onClick={onOpenDetail}
                  className="w-full py-3 bg-primary text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors text-center block shadow-lg shadow-blue-500/20"
                >
                  {t({
                    es: "Ver Oferta Detallada",
                    en: "View Detailed Offer",
                    de: "Detailliertes Angebot anzeigen",
                    fr: "Voir l'Offre Détaillée",
                    it: "Vedi Offerta Dettagliata",
                    ro: "Vezi Oferta Detaliată"
                  })}
                </button>
              ) : course.id === 'empresas' ? (
                <button 
                  onClick={onOpenBusinessDetail}
                  className="w-full py-3 bg-primary text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors text-center block shadow-lg shadow-blue-500/20"
                >
                  {t({
                    es: "Ver Oferta Detallada",
                    en: "View Detailed Offer",
                    de: "Detailliertes Angebot anzeigen",
                    fr: "Voir l'Offre Détaillée",
                    it: "Vedi Offerta Dettagliata",
                    ro: "Vezi Oferta Detaliată"
                  })}
                </button>
              ) : course.id === 'educacion' ? (
                <button 
                  onClick={onOpenEducationDetail}
                  className="w-full py-3 bg-primary text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors text-center block shadow-lg shadow-blue-500/20"
                >
                  {t({
                    es: "Ver Oferta Detallada",
                    en: "View Detailed Offer",
                    de: "Detailliertes Angebot anzeigen",
                    fr: "Voir l'Offre Détaillée",
                    it: "Vedi Offerta Dettagliata",
                    ro: "Vezi Oferta Detaliată"
                  })}
                </button>
              ) : (
                <a href="#contacto" className="w-full py-3 bg-primary text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors text-center block">
                  {t({
                    es: "Solicitar información",
                    en: "Request Information",
                    de: "Informationen anfordern",
                    fr: "Demander des informations",
                    it: "Richiedi informazioni",
                    ro: "Solicitați informații"
                  })}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingCatalog;
