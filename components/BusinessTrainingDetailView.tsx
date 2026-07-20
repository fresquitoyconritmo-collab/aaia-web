import React from 'react';
import { useLanguage } from './LanguageContext';

interface BusinessTrainingDetailViewProps {
  onBack: () => void;
  onContact: () => void;
}

const BusinessTrainingDetailView: React.FC<BusinessTrainingDetailViewProps> = ({ onBack, onContact }) => {
  const { t } = useLanguage();

  const m1 = {
    title: t({
      es: "2.1. IA Generativa para la Productividad",
      en: "2.1. Generative AI for Productivity",
      de: "2.1. Generative KI für Produktivität",
      fr: "2.1. L'IA Générative pour la Productivité",
      it: "2.1. IA Generativa per la Produttività",
      ro: "2.1. IA Generativă pentru Productivitate"
    }),
    subtitle: t({
      es: "Optimización profesional y ahorro de costes",
      en: "Professional optimization and cost savings",
      de: "Professionelle Optimierung und Kosteneinsparungen",
      fr: "Optimisation professionnelle et économies de coûts",
      it: "Ottimizzazione professionale e risparmio sui costi",
      ro: "Optimizare profesională și economii de costuri"
    }),
    audience: t({
      es: "Pymes y Emprendedores",
      en: "SMEs & Entrepreneurs",
      de: "Kines & Unternehmer",
      fr: "PME & Entrepreneurs",
      it: "PMI e Imprenditori",
      ro: "IMM-uri și Antreprenori"
    }),
    duration: t({
      es: "4 Horas",
      en: "4 Hours",
      de: "4 Stunden",
      fr: "4 Heures",
      it: "4 Ore",
      ro: "4 Ore"
    }),
    objective: t({
      es: "Implementar herramientas de IA realistas y accesibles para optimizar tiempos y elevar la calidad de los resultados en las tareas diarias del negocio.",
      en: "Implement realistic and accessible AI tools to optimize times and raise the quality of results in daily business tasks.",
      de: "Implementierung realistischer und zugänglicher KI-Tools zur Optimierung von Zeiten und zur Steigerung der Qualität der Ergebnisse im täglichen Geschäftsbetrieb.",
      fr: "Mettre en œuvre des outils d'IA réalistes et accessibles pour optimiser les temps et améliorer la qualité des résultats dans les tâches quotidiennes de l'entreprise.",
      it: "Implementare strumenti di IA realistici e accessibili per ottimizzare i tempi ed elevare la qualità dei risultati nelle attività quotidiane del business.",
      ro: "Implementarea unor instrumente IA realiste și accesibile pentru a optimiza timpul și a crește calitatea rezultatelor în sarcinile zilnice de afaceri."
    }),
    methodology: t({
      es: "Los asistentes trabajan con sus propios casos de negocio durante la sesión, saliendo con herramientas configuradas y listas para usar.",
      en: "Attendees work with their own business cases during the session, leaving with configured tools ready to use.",
      de: "Die Teilnehmer arbeiten während der Sitzung mit ihren eigenen Geschäftsfällen und gehen mit konfigurierten, einsatzbereiten Tools nach Hause.",
      fr: "Les participants travaillent avec leurs propres cas d'entreprise pendant la session, repartant avec des outils configurés et prêts à l'emploi.",
      it: "I partecipanti lavorano sui propri casi di business durante la sessione, uscendo con strumenti configurati e pronti all'uso.",
      ro: "Participanții lucrează cu propriile cazuri de afaceri în timpul sesiunii, plecând cu instrumente configurate și gata de utilizare."
    }),
    contents: [
      t({
        es: "Prompt Engineering: El arte de pedirle cosas a la IA con precisión estratégica.",
        en: "Prompt Engineering: The art of asking things from AI with strategic precision.",
        de: "Prompt Engineering: Die Kunst, KI mit strategischer Präzision Aufgaben zu stellen.",
        fr: "Prompt Engineering : L'art de demander des choses à l'IA avec précision stratégique.",
        it: "Prompt Engineering: L'arte di chiedere cose all'IA con precisione strategica.",
        ro: "Prompt Engineering: Arta de a cere lucruri de la IA cu precizie strategică."
      }),
      t({
        es: "Herramientas clave: Redacción de textos persuasivos, creación de imágenes y automatización inteligente de correos.",
        en: "Key tools: Persuasive text copywriting, image generation, and smart email automation.",
        de: "Schlüsselwerkzeuge: Verfassen überzeugender Texte, Bilderstellung und intelligente E-Mail-Automatisierung.",
        fr: "Outils clés : Rédaction de textes persuasifs, création d'images et automatisation intelligente des courriels.",
        it: "Strumenti chiave: Scrittura di testi persuasivi, generazione di immagini e automazione intelligente delle email.",
        ro: "Instrumente-cheie: Redactarea de texte persuasive, crearea de imagini și automatizarea inteligentă a e-mailurilor."
      }),
      t({
        es: "Análisis de retorno: Ahorro de costes operativos y mejora continua de procesos internos.",
        en: "ROI Analysis: Saving operational costs and continuous improvement of internal processes.",
        de: "ROI-Analyse: Einsparung operativer Kosten und kontinuierliche Verbesserung interner Prozesse.",
        fr: "Analyse de rentabilité : Économie de coûts opérationnels et amélioration continue des processus internes.",
        it: "Analisi di ritorno: Risparmio di costi operativi e miglioramento continuo dei processi interni.",
        ro: "Analiza randamentului: Economii de costuri operaționale și îmbunătățirea continuă a proceselor interne."
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
            <span className="material-icons-round text-lg">business_center</span>
            {t({
              es: "Solicitar para mi Empresa",
              en: "Request for my Company",
              de: "Für mein Unternehmen anfordern",
              fr: "Demander pour mon Entreprise",
              it: "Richiedi per la mia Azienda",
              ro: "Solicită pentru Compania mea"
            })}
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-black mb-6 uppercase tracking-widest border border-emerald-200 dark:border-emerald-800">
            {t({
              es: "Módulo Formativo 02",
              en: "Training Module 02",
              de: "Schulungsmodul 02",
              fr: "Module de Formation 02",
              it: "Modulo Formativo 02",
              ro: "Modul Formativ 02"
            })}
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight uppercase tracking-tighter">
            {t({
              es: "PRODUCTIVIDAD Y ",
              en: "PRODUCTIVITY AND ",
              de: "PRODUKTIVITÄT UND ",
              fr: "PRODUCTIVITÉ ET ",
              it: "PRODUTTIVITÀ E ",
              ro: "PRODUCTIVITATE ȘI "
            })}
            <br/>
            <span className="text-primary">
              {t({
                es: "EMPRESA EN ARAGÓN",
                en: "ENTERPRISE IN ARAGON",
                de: "UNTERNEHMEN IN ARAGONIEN",
                fr: "ENTREPRISE EN ARAGON",
                it: "IMPRESA IN ARAGONA",
                ro: "COMPANII ÎN ARAGON"
              })}
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium">
            {t({
              es: "Transformación digital mediante IA Generativa para optimizar la competitividad de Pymes, autónomos y emprendedores del territorio aragonés.",
              en: "Digital transformation through Generative AI to optimize the competitiveness of SMEs, freelancers, and entrepreneurs in the Aragonese territory.",
              de: "Digitale Transformation durch generative KI zur Optimierung der Wettbewerbsfähigkeit von KMU, Freiberuflern und Unternehmern in der aragonesischen Region.",
              fr: "Transformation numérique grâce à l'IA Générative pour optimiser la compétitivité des PME, des indépendants et des entrepreneurs sur le territoire aragonais.",
              it: "Trasformazione digitale tramite IA Generativa per ottimizzare la competitività di PMI, liberi professionisti e imprenditori del territorio aragonese.",
              ro: "Transformare digitală prin intermediul IA Generative pentru a optimiza competitivitatea IMM-urilor, liber-profesioniștilor și antreprenorilor din teritoriul aragonez."
            })}
          </p>
        </div>

        {/* Course Modules Grid */}
        <div className="grid gap-12">
          
          {/* Module 2.1 */}
          <div className="group bg-white dark:bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:border-emerald-500/20 transition-all duration-500 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-emerald-500/10 transition-colors"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 rounded-3xl flex items-center justify-center shadow-inner">
                    <span className="material-icons-round text-3xl">trending_up</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">{m1.title}</h2>
                    <p className="text-emerald-600 font-bold">{m1.subtitle}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <span className="material-icons-round text-sm">schedule</span> {m1.duration}
                  </span>
                  <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <span className="material-icons-round text-sm">store</span> {m1.audience}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span> {t({ es: "Objetivo del taller", en: "Workshop objective", de: "Workshop-Ziel", fr: "Objectif de l'atelier", it: "Obiettivo del workshop", ro: "Obiectivul de atelier" })}
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      {m1.objective}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span> {t({ es: "Metodología", en: "Methodology", de: "Methodik", fr: "Méthodologie", it: "Metodologia", ro: "Metodologie" })}
                    </h4>
                    <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/50">
                      <p className="text-emerald-800 dark:text-emerald-200 font-bold text-sm mb-1 uppercase">
                        {t({
                          es: "Learning by doing",
                          en: "Learning by doing",
                          de: "Learning by doing",
                          fr: "Learning by doing",
                          it: "Learning by doing",
                          ro: "Learning by doing"
                        })}
                      </p>
                      <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed text-sm">
                        {m1.methodology}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 dark:bg-emerald-950 p-8 rounded-3xl text-white shadow-xl">
                  <h4 className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-6">
                    {t({
                      es: "Bloques de contenido",
                      en: "Content blocks",
                      de: "Inhaltsblöcke",
                      fr: "Blocs de contenu",
                      it: "Blocchi di contenuto",
                      ro: "Blocuri de conținut"
                    })}
                  </h4>
                  <ul className="space-y-5">
                    {m1.contents.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="material-icons-round text-emerald-500">bolt</span>
                        <span className="text-sm font-medium text-slate-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Case / Teaser */}
        <div className="mt-16 bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
              <span className="material-icons-round text-4xl">rocket</span>
            </div>
            <div className="flex-grow">
              <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2 uppercase">
                {t({
                  es: "Impacto en el Negocio",
                  en: "Business Impact",
                  de: "Geschäftliche Auswirkungen",
                  fr: "Impact sur l'Entreprise",
                  it: "Impatto sul Business",
                  ro: "Impact în Afaceri"
                })}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                {t({
                  es: "Nuestras empresas piloto han reportado una reducción de hasta el 40% en tiempos de gestión administrativa tras aplicar estas técnicas. La IA en Aragón no es solo futuro, es rentabilidad hoy.",
                  en: "Our pilot companies have reported a reduction of up to 40% in administrative management times after applying these techniques. AI in Aragon is not just the future, it is profitability today.",
                  de: "Unsere Pilotunternehmen haben nach Anwendung dieser Techniken eine Reduzierung der administrativen Verwaltungszeiten um bis zu 40% gemeldet. KI in Aragonien ist nicht nur Zukunft, sondern Rentabilität heute.",
                  fr: "Nos entreprises pilotes ont signalé une réduction allant jusqu'à 40 % des temps de gestion administrative après avoir appliqué ces techniques. L'IA en Aragon n'est pas seulement l'avenir, c'est la rentabilité dès aujourd'hui.",
                  it: "Le nostre aziende pilota hanno segnalato una riduzione fino al 40% dei tempi di gestione amministrativa dopo l'applicazione di queste tecniche. L'IA in Aragona non è solo futuro, è redditività oggi.",
                  ro: "Companiile noastre pilot au raportat o reducere de până la 40% a timpului de gestionare administrativă după aplicarea acestor tehnici. IA în Aragon nu este doar viitor, ci rentabilitate astăzi."
                })}
              </p>
            </div>
            <button 
              onClick={onContact}
              className="w-full md:w-auto px-10 py-4 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-lg whitespace-nowrap"
            >
              {t({
                es: "Pedir Presupuesto Pyme",
                en: "Request SME Proposal",
                de: "KMU-Angebot anfordern",
                fr: "Demander Devis PME",
                it: "Richiedi Preventivo PMI",
                ro: "Solicită Buget IMM"
              })}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessTrainingDetailView;
