import React from 'react';
import { useLanguage } from './LanguageContext';

interface EducationTrainingDetailViewProps {
  onBack: () => void;
  onContact: () => void;
}

const EducationTrainingDetailView: React.FC<EducationTrainingDetailViewProps> = ({ onBack, onContact }) => {
  const { t } = useLanguage();

  const m1 = {
    title: t({
      es: "3.1. IA Generativa aplicada al Aula",
      en: "3.1. Generative AI Applied to the Classroom",
      de: "3.1. Generative KI angewandt im Klassenzimmer",
      fr: "3.1. L'IA Générative Appliquée à la Classe",
      it: "3.1. IA Generativa applicata alla Classe",
      ro: "3.1. IA Generativă Aplicată în Clasă"
    }),
    subtitle: t({
      es: "Transformación de la labor docente",
      en: "Transformation of the teaching role",
      de: "Transformation der Lehrerrolle",
      fr: "Transformation du rôle de l'enseignant",
      it: "Trasformazione del ruolo docente",
      ro: "Transformarea activității didactice"
    }),
    audience: t({
      es: "Profesores de FP, Primaria y Secundaria",
      en: "VET, Primary & Secondary Teachers",
      de: "Lehrer für Berufsbildung, Grund- und Sekundarschule",
      fr: "Enseignants de FP, Primaire et Secondaire",
      it: "Insegnanti di FP, Primaria e Secondaria",
      ro: "Profesori de profesională, primar și secundar"
    }),
    duration: t({
      es: "6 Horas",
      en: "6 Hours",
      de: "6 Stunden",
      fr: "6 Heures",
      it: "6 Ore",
      ro: "6 Ore"
    }),
    objective: t({
      es: "Transformar la labor docente mediante la creación eficiente de materiales y una gestión del aula adaptada a los nuevos retos tecnológicos.",
      en: "Transform teaching work through the efficient creation of materials and classroom management adapted to new technological challenges.",
      de: "Transformation der Lehrtätigkeit durch die effiziente Erstellung von Materialien und ein an neue technologische Herausforderungen angepasstes Klassenmanagement.",
      fr: "Transformer le travail d'enseignement grâce à la création efficace de matériels et à une gestion de classe adaptée aux nouveaux défis technologiques.",
      it: "Trasformare il lavoro di insegnamento attraverso la creazione efficiente di materiali e una gestione della classe adatta alle nuove sfide tecnologiche.",
      ro: "Transformarea muncii didactice prin crearea eficientă de materiale și un management al clasei adaptat noilor provocări tehnologice."
    }),
    methodology: t({
      es: "Taller práctico e intensivo de creación de materiales curriculares reales, diseñados para ser aplicados en el aula de forma inmediata.",
      en: "Practical and intensive workshop for creating real curricular materials, designed to be applied in the classroom immediately.",
      de: "Praktischer und intensiver Workshop zur Erstellung realer Lehrplanmaterialien, die sofort im Klassenzimmer angewendet werden können.",
      fr: "Atelier pratique et intensif de création de matériels pédagogiques réels, conçus pour être appliqués immédiatement en classe.",
      it: "Workshop pratico e intensivo per la creazione di materiali curricolari reali, progettati per essere applicati immediatamente in classe.",
      ro: "Atelier practic și intensiv pentru crearea de materiale curriculare reale, concepute pentru a fi aplicate imediat în clasă."
    }),
    contents: [
      t({
        es: "Diseño de situaciones de aprendizaje y unidades didácticas con IA de apoyo.",
        en: "Design of learning scenarios and didactic units with supporting AI.",
        de: "Gestaltung von Lernszenarien und didaktischen Einheiten mit unterstützender KI.",
        fr: "Conception de situations d'apprentissage et d'unités didactiques avec IA d'appui.",
        it: "Progettazione di scenari di apprendimento e unità didattiche con l'ausilio dell'IA.",
        ro: "Proiectarea de scenarii de învățare și unități didactice cu sprijinul IA."
      }),
      t({
        es: "Nuevos modelos de evaluación competencial: evolucionando más allá del examen tradicional.",
        en: "New competence evaluation models: evolving beyond the traditional exam.",
        de: "Neue Kompetenzbewertungsmodelle: Weiterentwicklung über die traditionelle Prüfung hinaus.",
        fr: "Nouveaux modèles d'évaluation des compétences : évoluer au-delà de l'examen traditionnel.",
        it: "Nuovi modelli di valutazione delle competenze: evolvere oltre l'esame tradizionale.",
        ro: "Noi modele de evaluare a competențelor: evoluție dincolo de examenul tradițional."
      }),
      t({
        es: "Uso ético y guiado de la IA por parte del alumnado: límites y posibilidades pedagógicas.",
        en: "Ethical and guided use of AI by students: limits and pedagogical possibilities.",
        de: "Ethischer und begleiteter Einsatz von KI durch Schüler: Grenzen und pädagogische Möglichkeiten.",
        fr: "Utilisation éthique et guidée de l'IA par les élèves : limites et possibilités pédagogiques.",
        it: "Uso etico e guidato dell'IA da parte degli studenti: limiti e possibilità pedagogiche.",
        ro: "Utilizarea etică și ghidată a IA de către elevi: limite și posibilități pedagogice."
      })
    ]
  };

  const m2 = {
    title: t({
      es: "3.2. Pensamiento Crítico",
      en: "3.2. Critical Thinking",
      de: "3.2. Kritisches Denken",
      fr: "3.2. Pensée Critique",
      it: "3.2. Pensiero Critico",
      ro: "3.2. Gândire Critică"
    }),
    subtitle: t({
      es: "Ciudadanía Digital Segura",
      en: "Secure Digital Citizenship",
      de: "Sichere digitale Bürgerschaft",
      fr: "Citoyenneté Numérique Sécurisée",
      it: "Cittadinanza Digitale Sicura",
      ro: "Cetățenie Digitală Securizată"
    }),
    audience: t({
      es: "Estudiantes de FP y Universidad",
      en: "VET & University Students",
      de: "Schüler von Berufsbildung und Universität",
      fr: "Étudiants de FP et Université",
      it: "Studenti di FP e Università",
      ro: "Studenți de profesională și universitate"
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
      es: "Fomentar un uso consciente, ético y seguro de la Inteligencia Artificial entre los nativos digitales, dotándoles de herramientas de verificación.",
      en: "Foster a conscious, ethical, and secure use of Artificial Intelligence among digital natives, providing them with verification tools.",
      de: "Förderung einer bewussten, ethischen und sicheren Nutzung der Künstlichen Intelligenz unter Digital Natives und Ausstattung mit Verifizierungswerkzeugen.",
      fr: "Favoriser une utilisation consciente, éthique et sécurisée de l'Intelligence Artificielle chez les natifs du numérique, en les dotant d'outils de vérification.",
      it: "Incoraggiare un uso consapevole, etico e sicuro dell'Intelligenza Artificiale tra i nativi digitali, dotandoli di strumenti di verifica.",
      ro: "Promovarea unei utilizări conștiente, etice și sigure a Inteligenței Artificiale în rândul nativilor digitali, oferindu-le instrumente de verificare."
    }),
    methodology: t({
      es: "Gamificación basada en retos grupales de detección y análisis de contenidos generados por IA, fomentando la competitividad sana y el aprendizaje activo.",
      en: "Gamification based on group challenges of detection and analysis of content generated by AI, promoting healthy competition and active learning.",
      de: "Gamifizierung basierend auf Gruppenherausforderungen zur Erkennung und Analyse von KI-generierten Inhalten, Förderung eines gesunden Wettbewerbs und aktiven Lernens.",
      fr: "Gamification basée sur des défis de groupe de détection et d'analyse de contenus générés par l'IA, favorisant une saine émulation et un apprentissage actif.",
      it: "Gamification basata su sfide di gruppo di rilevamento e analisi di contenuti generati dall'IA, promuovendo una sana competizione e l'apprendimento attivo.",
      ro: "Gamificare bazată pe provocări de grup pentru detectarea și analiza conținutului generat de IA, promovând o competiție sănătoasă și învățarea activă."
    }),
    contents: [
      t({
        es: "Deepfakes y desinformación: Herramientas y protocolos para verificar contenidos multimedia.",
        en: "Deepfakes and disinformation: Tools and protocols to verify multimedia content.",
        de: "Deepfakes und Desinformation: Werkzeuge und Protokolle zur Verifizierung von Multimedia-Inhalten.",
        fr: "Deepfakes et désinformation : Outils et protocoles de vérification des contenus multimédias.",
        it: "Deepfake e disinformazione: Strumenti e protocolli per verificare i contenuti multimediali.",
        ro: "Deepfakes și dezinformare: Instrumente și protocoale pentru verificarea conținutului multimedia."
      }),
      t({
        es: "Derechos digitales y huella tecnológica: Conciencia sobre la soberanía del dato.",
        en: "Digital rights and technological footprint: Awareness of data sovereignty.",
        de: "Digitale Rechte und technologischer Fußabdruck: Bewusstsein für Datensouveränität.",
        fr: "Droits numériques et empreinte technologique : Conscience de la souveraineté des données.",
        it: "Diritti digitali e impronta tecnologica: Consapevolezza sulla sovranità dei dati.",
        ro: "Drepturi digitale și amprenta tehnologică: Conștientizarea suveranității datelor."
      }),
      t({
        es: "La IA como aliada creativa: Fomentando la creación frente al consumo pasivo de tecnología.",
        en: "AI as a creative ally: Fostering creation over passive consumption of technology.",
        de: "KI als kreativer Partner: Förderung der Schöpfung gegenüber passivem Technologiekonsum.",
        fr: "L'IA comme alliée créative : Favoriser la création face à la consommation passive de technologie.",
        it: "L'IA come alleata creativa: Promuovere la creazione rispetto al consumo passivo di tecnologia.",
        ro: "IA ca aliat creativ: Încurajarea creației în detrimentul consumului pasiv de tehnologie."
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
            <span className="material-icons-round text-lg">school</span>
            {t({
              es: "Solicitar para mi Centro",
              en: "Request for my School",
              de: "Für mein Bildungszentrum anfordern",
              fr: "Demander pour mon Centre",
              it: "Richiedi per il mio Istituto",
              ro: "Solicită pentru Centrul meu"
            })}
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-black mb-6 uppercase tracking-widest border border-purple-200 dark:border-purple-800">
            {t({
              es: "Módulo Formativo 03",
              en: "Training Module 03",
              de: "Schulungsmodul 03",
              fr: "Module de Formation 03",
              it: "Modulo Formativo 03",
              ro: "Modul Formativ 03"
            })}
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight uppercase tracking-tighter">
            {t({
              es: "EDUCACIÓN E ",
              en: "EDUCATION AND ",
              de: "BILDUNG UND ",
              fr: "ÉDUCATION ET ",
              it: "ISTRUZIONE E ",
              ro: "EDUCAȚIE ȘI "
            })}
            <br/>
            <span className="text-primary">
              {t({
                es: "INNOVACIÓN DOCENTE",
                en: "TEACHER INNOVATION",
                de: "LEHRER-INNOVATION",
                fr: "INNOVATION PÉDAGOGIQUE",
                it: "INNOVAZIONE DOCENTE",
                ro: "INOVARE DIDACTICĂ"
              })}
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium">
            {t({
              es: "Capacitación para transformar el sistema educativo aragonés, empoderando a docentes y estudiantes con un uso crítico y creativo de la IA.",
              en: "Training to transform the Aragonese educational system, empowering teachers and students with critical and creative use of AI.",
              de: "Schulung zur Transformation des aragonesischen Bildungssystems, die Lehrer und Schüler zu einem kritischen und kreativen Umgang mit KI befähigt.",
              fr: "Formation pour transformer le système éducatif aragonais, en responsabilisant les enseignants et les élèves avec une utilisation critique et créative de l'IA.",
              it: "Formazione per trasformare il sistema educativo aragonese, responsabilizzando docenti e studenti con un uso critico e creativo dell'IA.",
              ro: "Formare pentru a transforma sistemul educațional aragonez, responsabilizând profesorii și elevii cu o utilizare critică și creativă a IA."
            })}
          </p>
        </div>

        {/* Course Modules Grid */}
        <div className="grid gap-12">
          
          {/* Module 3.1 */}
          <div className="group bg-white dark:bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:border-purple-500/20 transition-all duration-500 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-purple-500/10 transition-colors"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-purple-50 dark:bg-purple-900/20 text-purple-600 rounded-3xl flex items-center justify-center shadow-inner">
                    <span className="material-icons-round text-3xl">menu_book</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">{m1.title}</h2>
                    <p className="text-purple-600 font-bold">{m1.subtitle}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <span className="material-icons-round text-sm">schedule</span> {m1.duration}
                  </span>
                  <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <span className="material-icons-round text-sm">badge</span> {m1.audience}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-500"></span> {t({ es: "Objetivo del curso", en: "Course objective", de: "Kursziel", fr: "Objectif du cours", it: "Obiettivo del corso", ro: "Obiectivul cursului" })}
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      {m1.objective}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-400"></span> {t({ es: "Metodología", en: "Methodology", de: "Methodik", fr: "Méthodologie", it: "Metodologia", ro: "Metodologie" })}
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      {m1.methodology}
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900 dark:bg-purple-950 p-8 rounded-3xl text-white shadow-xl">
                  <h4 className="text-xs font-black text-purple-400 uppercase tracking-widest mb-6">
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
                        <span className="material-icons-round text-purple-500">auto_fix_high</span>
                        <span className="text-sm font-medium text-slate-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Module 3.2 */}
          <div className="group bg-white dark:bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:border-blue-500/20 transition-all duration-500 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-blue-500/10 transition-colors"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-3xl flex items-center justify-center shadow-inner">
                    <span className="material-icons-round text-3xl">psychology</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">{m2.title}</h2>
                    <p className="text-blue-600 font-bold">{m2.subtitle}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <span className="material-icons-round text-sm">schedule</span> {m2.duration}
                  </span>
                  <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <span className="material-icons-round text-sm">groups</span> {m2.audience}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span> {t({ es: "Objetivo del taller", en: "Workshop objective", de: "Workshop-Ziel", fr: "Objectif de l'atelier", it: "Obiettivo del workshop", ro: "Obiectivul de atelier" })}
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      {m2.objective}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400"></span> {t({ es: "Metodología", en: "Methodology", de: "Methodik", fr: "Méthodologie", it: "Metodologia", ro: "Metodologie" })}
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      {m2.methodology}
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900 dark:bg-blue-950 p-8 rounded-3xl text-white shadow-xl">
                  <h4 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-6">
                    {t({
                      es: "Contenidos clave",
                      en: "Key contents",
                      de: "Schlüsselinhalte",
                      fr: "Contenus clés",
                      it: "Contenuti chiave",
                      ro: "Conținuturi-cheie"
                    })}
                  </h4>
                  <ul className="space-y-5">
                    {m2.contents.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="material-icons-round text-blue-500">fact_check</span>
                        <span className="text-sm font-medium text-slate-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing / Contact Section */}
        <div className="mt-16 bg-gradient-to-br from-purple-600 to-blue-700 p-1 rounded-[3rem] shadow-2xl">
          <div className="bg-white dark:bg-slate-900 rounded-[2.9rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600">
                <span className="material-icons-round text-3xl">history_edu</span>
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-900 dark:text-white uppercase">
                  {t({
                    es: "Mejora la calidad educativa",
                    en: "Improve educational quality",
                    de: "Verbesserung der Bildungsqualität",
                    fr: "Améliorer la qualité de l'éducation",
                    it: "Migliora la qualità educativa",
                    ro: "Îmbunătățește calitatea educațională"
                  })}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 font-medium">
                  {t({
                    es: "Lleva la innovación de la AAIA a tu centro escolar o facultad.",
                    en: "Bring AAIA innovation to your school or faculty.",
                    de: "Bringen Sie die Innovation von AAIA an Ihre Schule oder Fakultät.",
                    fr: "Apportez l'innovation de l'AAIA à votre école ou faculté.",
                    it: "Porta l'innovazione della AAIA nella tua scuola o facoltà.",
                    ro: "Aduceți inovația AAIA în școala sau facultatea dumneavoastră."
                  })}
                </p>
              </div>
            </div>
            <button 
              onClick={onContact}
              className="w-full md:w-auto px-12 py-5 bg-purple-600 text-white rounded-2xl font-bold hover:bg-purple-700 transition-all shadow-xl shadow-purple-500/20 active:scale-95"
            >
              {t({
                es: "Contactar para Talleres",
                en: "Contact for Workshops",
                de: "Kontakt für Workshops",
                fr: "Contacter pour Ateliers",
                it: "Contattaci per Workshop",
                ro: "Contactați pentru Ateliere"
              })}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationTrainingDetailView;
