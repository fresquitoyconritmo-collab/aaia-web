import React from 'react';
import { useLanguage } from './LanguageContext';

interface TrainingDetailViewProps {
  onBack: () => void;
  onContact: () => void;
}

const TrainingDetailView: React.FC<TrainingDetailViewProps> = ({ onBack, onContact }) => {
  const { t } = useLanguage();

  const m1 = {
    title: t({
      es: "1.1. Introducción a la IA",
      en: "1.1. Introduction to AI",
      de: "1.1. Einführung in die KI",
      fr: "1.1. Introduction à l'IA",
      it: "1.1. Introduzione all'IA",
      ro: "1.1. Introducere în IA"
    }),
    subtitle: t({
      es: "¿Qué es y cómo nos afecta?",
      en: "What is it and how does it affect us?",
      de: "Was ist es und wie betrifft es uns?",
      fr: "Qu'est-ce que c'est et comment cela nous affecte-t-il ?",
      it: "Cos'è e come ci influenza?",
      ro: "Ce este și cum ne afectează?"
    }),
    audience: t({
      es: "Ciudadanía General",
      en: "General Public",
      de: "Allgemeine Öffentlichkeit",
      fr: "Grand Public",
      it: "Cittadinanza Generale",
      ro: "Publicul Larg"
    }),
    duration: t({
      es: "2 Horas",
      en: "2 Hours",
      de: "2 Stunden",
      fr: "2 Heures",
      it: "2 Ore",
      ro: "2 Ore"
    }),
    objective: t({
      es: "Desmitificar la IA, reduciendo el miedo tecnológico y fomentando una base crítica para su comprensión.",
      en: "Demystify AI, reducing technological fear and fostering a critical foundation for its understanding.",
      de: "Entmystifizierung der KI, Verringerung technologischer Ängste und Förderung einer kritischen Grundlage für ihr Verständnis.",
      fr: "Démystifier l'IA, réduire la peur technologique et favoriser une base critique pour sa compréhension.",
      it: "Demistificare l'IA, riducendo la paura tecnologica e promuovendo una base critica per la sua comprensione.",
      ro: "Demistificarea IA, reducerea fricii tehnologice și promovarea unei baze critice pentru înțelegerea acesteia."
    }),
    methodology: t({
      es: "Exposición visual dinámica con ejemplos prácticos en tiempo real y ronda de preguntas interactiva para resolver dudas inmediatas.",
      en: "Dynamic visual presentation with real-time practical examples and interactive Q&A round to resolve immediate doubts.",
      de: "Dynamische visuelle Präsentation mit praktischen Beispielen in Echtzeit und interaktiver Fragerunde zur sofortigen Klärung von Fragen.",
      fr: "Présentation visuelle dynamique avec des exemples pratiques en temps réel et une séance de questions-réponses interactive pour résoudre les doutes immédiats.",
      it: "Presentazione visiva dinamica con esempi pratici in tempo reale e sessione interattiva di domande e risposte per risolvere dubbi immediati.",
      ro: "Prezentare vizuală dinamică cu exemple practice în timp real și sesiune interactivă de întrebări și răspunsuri pentru a rezolva îndoielile imediate."
    }),
    contents: [
      t({
        es: "Definición sencilla: del algoritmo a la red neuronal.",
        en: "Simple definition: from algorithm to neural network.",
        de: "Einfache Definition: vom Algorithmus zum neuronalen Netz.",
        fr: "Définition simple : de l'algorithme au réseau neuronal.",
        it: "Definizione semplice: dall'algoritmo alla rete neurale.",
        ro: "Definiție simplă: de la algoritm la rețeaua neuronală."
      }),
      t({
        es: "IA en la vida cotidiana (recomendaciones, mapas, salud).",
        en: "AI in everyday life (recommendations, maps, health).",
        de: "KI im Alltag (Empfehlungen, Karten, Gesundheit).",
        fr: "L'IA au quotidien (recommandations, cartes, santé).",
        it: "IA nella vita quotidiana (raccomandazioni, mappe, salute).",
        ro: "IA în viața de zi cu zi (recomandări, hărți, sănătate)."
      }),
      t({
        es: "El futuro del trabajo y la convivencia con máquinas.",
        en: "The future of work and coexistence with machines.",
        de: "Die Zukunft der Arbeit und das Zusammenleben mit Maschinen.",
        fr: "L'avenir du travail et la coexistence avec les machines.",
        it: "Il futuro del lavoro e la convivenza con le macchine.",
        ro: "Viitorul muncii și coexistența cu mașinile."
      })
    ]
  };

  const m2 = {
    title: t({
      es: "1.2. Uso Responsable y Ético",
      en: "1.2. Responsible & Ethical Use",
      de: "1.2. Verantwortungsbewusste & ethische Nutzung",
      fr: "1.2. Utilisation Responsable et Éthique",
      it: "1.2. Uso Responsabile ed Etico",
      ro: "1.2. Utilizare Responsabilă și Etică"
    }),
    subtitle: t({
      es: "Criterios para el entorno profesional",
      en: "Criteria for the professional environment",
      de: "Kriterien für das berufliche Umfeld",
      fr: "Critères pour le milieu professionnel",
      it: "Criteri per l'ambiente professionale",
      ro: "Criterii pentru mediul profesional"
    }),
    audience: t({
      es: "Profesionales y Docentes",
      en: "Professionals & Teachers",
      de: "Fachkräfte & Lehrkräfte",
      fr: "Professionnels & Enseignants",
      it: "Professionisti e Docenti",
      ro: "Profesioniști și Cadre Didactice"
    }),
    duration: t({
      es: "3 Horas",
      en: "3 Hours",
      de: "3 Stunden",
      fr: "3 Heures",
      it: "3 Ore",
      ro: "3 Ore"
    }),
    objective: t({
      es: "Dotar de criterios éticos sólidos para el uso de herramientas de IA en entornos profesionales y personales, alineado con el RGPD.",
      en: "Provide solid ethical criteria for using AI tools in professional and personal settings, aligned with GDPR.",
      de: "Bereitstellung solider ethischer Kriterien für den Einsatz von KI-Tools im beruflichen und persönlichen Umfeld im Einklang mit der DSGVO.",
      fr: "Fournir des critères éthiques solides pour l'utilisation des outils d'IA dans les milieux professionnels et personnels, conformément au RGPD.",
      it: "Fornire solidi criteri etici per l'uso degli strumenti di IA in contesti professionali e personali, in linea con il GDPR.",
      ro: "Oferirea unor criterii etice solide pentru utilizarea instrumentelor de IA în medii profesionale și personale, în conformitate cu GDPR."
    }),
    methodology: t({
      es: "Análisis participativo de casos reales y debates guiados sobre dilemas éticos actuales y futuros en la administración y educación.",
      en: "Participatory analysis of real cases and guided debates on current and future ethical dilemmas in administration and education.",
      de: "Partizipative Analyse realer Fälle und geführte Debatten über aktuelle und zukünftige ethische Dilemmata in Verwaltung und Bildung.",
      fr: "Analyse participative de cas réels et débats guidés sur les dilemmes éthiques actuels et futurs dans l'administration et l'éducation.",
      it: "Analisi partecipativa di casi reali e dibattiti guidati su dilemmi etici attuali e futuri nell'amministrazione e nell'istruzione.",
      ro: "Analiză participativă a cazurilor reale și dezbateri ghidate privind dilemele etice actuale și viitoare în administrație și educație."
    }),
    contents: [
      t({
        es: "Privacidad y protección de datos (RGPD aplicado a la IA).",
        en: "Privacy and data protection (GDPR applied to AI).",
        de: "Datenschutz und Privatsphäre (DSGVO angewandt auf KI).",
        fr: "Confidentialité et protection des données (RGPD appliqué à l'IA).",
        it: "Privacy e protezione dei dati (GDPR applicato all'IA).",
        ro: "Confidențialitatea și protecția datelor (GDPR aplicat în IA)."
      }),
      t({
        es: "Sesgos algorítmicos y estrategias de detección.",
        en: "Algorithmic biases and detection strategies.",
        de: "Algorithmische Verzerrungen und Erkennungsstrategien.",
        fr: "Biais algorithmiques et stratégies de détection.",
        it: "Bias algoritmici e strategie di rilevamento.",
        ro: "Prejudecăți algoritmice și strategii de detectare."
      }),
      t({
        es: "Transparencia radical y propiedad intelectual en modelos generativos.",
        en: "Radical transparency and intellectual property in generative models.",
        de: "Radikale Transparenz und geistiges Eigentum bei generativen Modellen.",
        fr: "Transparence radicale et propriété intellectuelle dans les modèles génératifs.",
        it: "Trasparenza radicale e proprietà intellettuale nei modelli generativi.",
        ro: "Transparență radicală și proprietate intelectuală în modelele generative."
      })
    ]
  };

  return (
    <div className="bg-slate-50 dark:bg-[#020617] min-h-screen pt-24 pb-20 px-4 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        {/* Navigation Bar */}
        <div className="flex justify-between items-center mb-12">
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary font-bold transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-icons-round">arrow_back</span>
            </div>
            {t({
              es: "Volver al catálogo",
              en: "Back to catalog",
              de: "Zurück zum Katalog",
              fr: "Retour au catalogue",
              it: "Torna al catalogo",
              ro: "Înapoi la catalog"
            })}
          </button>
          
          <button 
            onClick={onContact}
            className="bg-primary text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
          >
            <span className="material-icons-round text-lg">edit_calendar</span>
            {t({
              es: "Solicitar esta formación",
              en: "Request this training",
              de: "Diese Schulung anfordern",
              fr: "Demander cette formation",
              it: "Richiedi questa formazione",
              ro: "Solicită această instruire"
            })}
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-400 text-xs font-black mb-6 uppercase tracking-widest border border-blue-200 dark:border-blue-800">
            {t({
              es: "Módulo Formativo 01",
              en: "Training Module 01",
              de: "Schulungsmodul 01",
              fr: "Module de Formation 01",
              it: "Modulo Formativo 01",
              ro: "Modul Formativ 01"
            })}
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
            {t({
              es: "ALFABETIZACIÓN Y ",
              en: "LITERACY AND ",
              de: "KOMPETENZ UND ",
              fr: "ALPHABÉTISATION ET ",
              it: "ALFABETIZZAZIONE E ",
              ro: "ALFABETIZARE ȘI "
            })}
            <br/>
            <span className="text-primary">
              {t({
                es: "CIUDADANÍA DIGITAL",
                en: "DIGITAL CITIZENSHIP",
                de: "DIGITALE BÜRGERSCHAFT",
                fr: "CITOYENNETÉ NUMÉRIQUE",
                it: "CITTADINANZA DIGITALE",
                ro: "CETĂȚENIE DIGITALĂ"
              })}
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium">
            {t({
              es: "Capacitación integral diseñada para reducir la brecha tecnológica y fomentar una ciudadanía crítica en la era de la inteligencia artificial.",
              en: "Comprehensive training designed to bridge the digital divide and foster critical citizenship in the artificial intelligence era.",
              de: "Umfassende Schulung, die darauf abzielt, die digitale Kluft zu verringern und eine kritische Bürgerschaft im Zeitalter der künstlichen Intelligenz zu fördern.",
              fr: "Formation complète conçue pour réduire la fracture numérique et favoriser une citoyenneté critique à l'ère de l'intelligence artificielle.",
              it: "Formazione completa progettata per colmare il divario digitale e promuovere una cittadinanza critica nell'era dell'intelligenza artificiale.",
              ro: "Formare cuprinzătoare concepută pentru a reduce decalajul digital și a promova cetățenia critică în era inteligenței artificiale."
            })}
          </p>
        </div>

        {/* Course Modules Grid */}
        <div className="grid gap-12">
          
          {/* Module 1.1 */}
          <div className="group bg-white dark:bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-primary/10 transition-colors"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 text-primary rounded-3xl flex items-center justify-center shadow-inner">
                    <span className="material-icons-round text-3xl">lightbulb</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">{m1.title}</h2>
                    <p className="text-primary font-bold">{m1.subtitle}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <span className="material-icons-round text-sm">schedule</span> {m1.duration}
                  </span>
                  <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <span className="material-icons-round text-sm">groups</span> {m1.audience}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span> {t({ es: "Objetivo del curso", en: "Course objective", de: "Kursziel", fr: "Objectif du cours", it: "Obiettivo del corso", ro: "Obiectivul cursului" })}
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      {m1.objective}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400"></span> {t({ es: "Metodología", en: "Methodology", de: "Methodik", fr: "Méthodologie", it: "Metodologia", ro: "Metodologie" })}
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      {m1.methodology}
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900 dark:bg-black p-8 rounded-3xl text-white shadow-xl">
                  <h4 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-6">
                    {t({
                      es: "Contenidos del programa",
                      en: "Program contents",
                      de: "Programminhalte",
                      fr: "Contenu du programme",
                      it: "Contenuti del programma",
                      ro: "Conținutul programului"
                    })}
                  </h4>
                  <ul className="space-y-5">
                    {m1.contents.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="material-icons-round text-blue-500">check_circle</span>
                        <span className="text-sm font-medium text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Module 1.2 */}
          <div className="group bg-white dark:bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-indigo-500/10 transition-colors"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-3xl flex items-center justify-center shadow-inner">
                    <span className="material-icons-round text-3xl">gavel</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">{m2.title}</h2>
                    <p className="text-indigo-600 dark:text-indigo-400 font-bold">{m2.subtitle}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <span className="material-icons-round text-sm">schedule</span> {m2.duration}
                  </span>
                  <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <span className="material-icons-round text-sm">badge</span> {m2.audience}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-500"></span> {t({ es: "Objetivo del taller", en: "Workshop objective", de: "Workshop-Ziel", fr: "Objectif de l'atelier", it: "Obiettivo del workshop", ro: "Obiectivul atelierului" })}
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      {m2.objective}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-400"></span> {t({ es: "Metodología", en: "Methodology", de: "Methodik", fr: "Méthodologie", it: "Metodologia", ro: "Metodologie" })}
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      {m2.methodology}
                    </p>
                  </div>
                </div>

                <div className="bg-indigo-950 p-8 rounded-3xl text-white shadow-xl shadow-indigo-900/20">
                  <h4 className="text-xs font-black text-indigo-300 uppercase tracking-widest mb-6">
                    {t({
                      es: "Bloques temáticos",
                      en: "Thematic blocks",
                      de: "Themenblöcke",
                      fr: "Blocs thématiques",
                      it: "Blocchi tematici",
                      ro: "Blocuri tematice"
                    })}
                  </h4>
                  <ul className="space-y-5">
                    {m2.contents.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="material-icons-round text-indigo-400">verified_user</span>
                        <span className="text-sm font-medium text-indigo-100">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-16 bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <span className="material-icons-round">info</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md font-medium">
              {t({
                es: "Esta oferta formativa puede ser adaptada para instituciones públicas, ayuntamientos o asociaciones sectoriales en todo el territorio aragonés.",
                en: "This educational offer can be adapted for public institutions, town halls, or sectoral associations throughout the Aragonese territory.",
                de: "Dieses Bildungsangebot kann für öffentliche Einrichtungen, Rathäuser oder Branchenverbände in der gesamten aragonesischen Region angepasst werden.",
                fr: "Cette offre éducative peut être adaptée pour les institutions publiques, les mairies ou les associations sectorielles sur tout le territoire aragonais.",
                it: "Questa offerta formativa può essere adattata per istituzioni pubbliche, comuni o associazioni di settore in tutto il territorio aragonese.",
                ro: "Această ofertă educațională poate fi adaptată pentru instituții publice, primării sau asociații sectoriale pe tot teritoriul aragonez."
              })}
            </p>
          </div>
          <button 
            onClick={onContact}
            className="w-full md:w-auto px-10 py-4 bg-primary text-white rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            {t({
              es: "Contactar para Presupuesto",
              en: "Contact for Budget",
              de: "Kontakt für Angebot",
              fr: "Contacter pour Devis",
              it: "Contattaci per Preventivo",
              ro: "Contactați pentru Buget"
            })}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainingDetailView;
