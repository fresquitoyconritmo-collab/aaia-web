import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';

const EthicsSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'eu-principles' | 'women-leaders'>('eu-principles');

  const euPrinciples = [
    {
      icon: "person_search",
      title: t({
        es: "Acción y Supervisión Humanas",
        en: "Human Agency & Oversight",
        de: "Menschliches Handeln & Aufsicht",
        fr: "Action & Contrôle Humains",
        it: "Azione e Vigilanza Umana",
        ro: "Ațiune și Supraveghere Umană"
      }),
      desc: t({
        es: "La IA debe empoderar a las personas, permitiéndoles tomar decisiones informadas y fomentando sus derechos fundamentales, siempre bajo supervisión humana crítica.",
        en: "AI should empower people, allowing them to make informed decisions and fostering their fundamental rights, always under critical human oversight.",
        de: "KI sollte Menschen befähigen, fundierte Entscheidungen zu treffen und ihre Grundrechte zu stärken, immer unter kritischer menschlicher Aufsicht.",
        fr: "L'IA doit autonomiser les personnes, leur permettre de prendre des décisions éclairées et favoriser leurs droits fondamentaux, toujours sous la supervision humaine critique.",
        it: "L'IA deve dare potere alle persone, consentendo loro di prendere decisioni informate e promuovendo i loro diritti fondamentali, sempre sotto la vigilanza critica dell'uomo.",
        ro: "IA ar trebui să responsabilizeze oamenii, permițându-le să ia decizii informate și promovându-le drepturile fundamentale, întotdeauna sub supraveghere umană critică."
      })
    },
    {
      icon: "admin_panel_settings",
      title: t({
        es: "Robustez Técnica y Seguridad",
        en: "Technical Robustness & Safety",
        de: "Technische Robustheit & Sicherheit",
        fr: "Robustesse Technique & Sécurité",
        it: "Robustezza Tecnica e Sicurezza",
        ro: "Robustețe Tehnică și Siguranță"
      }),
      desc: t({
        es: "Desarrollos seguros, fiables y resilientes ante errores o ataques, minimizando riesgos involuntarios con planes de contingencia claros.",
        en: "Secure, reliable and resilient developments against errors or attacks, minimizing unintended risks with clear contingency plans.",
        de: "Sichere, zuverlässige und widerstandsfähige Entwicklungen gegen Fehler oder Angriffe, Minimierung unbeabsichtigter Risiken mit klaren Notfallplänen.",
        fr: "Développements sécurisés, fiables et résilients face aux erreurs ou aux attaques, minimisant les risques involontaires grâce à des plans de contingence clairs.",
        it: "Sviluppi sicuri, affidabili e resilienti contro errori o attacchi, riducendo al minimo i rischi involontari con piani di emergenza chiari.",
        ro: "Dezvoltări sigure, fiabile și rezistente împotriva erorilor sau atacurilor, minimizând riscurile neintenționate cu planuri de urgență clare."
      })
    },
    {
      icon: "fingerprint",
      title: t({
        es: "Privacidad y Gestión de Datos",
        en: "Privacy & Data Governance",
        de: "Datenschutz & Datenverwaltung",
        fr: "Confidentialité & Gestion des Données",
        it: "Privacy e Gestione dei Dati",
        ro: "Confidențialitate și Guvernanța Datelor"
      }),
      desc: t({
        es: "Garantía absoluta del cumplimiento de la privacidad, protección de datos (RGPD) y establecimiento de mecanismos de gobernanza de datos íntegros.",
        en: "Absolute guarantee of privacy compliance, data protection (GDPR) and the establishment of integral data governance mechanisms.",
        de: "Absolute Garantie der Einhaltung des Datenschutzes, Datenschutz (DSGVO) und Einrichtung solider Datenverwaltungsmechanismen.",
        fr: "Garantie absolue du respect de la vie privée, de la protection des données (RGPD) et mise en place de mécanismes de gouvernance des données intègres.",
        it: "Garanzia assoluta del rispetto della privacy, protezione dei dati (GDPR) e istituzione di meccanismi di governance dei dati integri.",
        ro: "Garanție absolută a respectării confidențialității, protecția datelor (GDPR) și stabilirea unor mecanisme de guvernanță a datelor integre."
      })
    },
    {
      icon: "visibility",
      title: t({
        es: "Transparencia e IA Explicable",
        en: "Transparency & Explainable AI",
        de: "Transparenz & Erklärbare KI",
        fr: "Transparence & IA Explicable",
        it: "Trasparenza e IA Spiegabile",
        ro: "Transparență și IA Explicabilă"
      }),
      desc: t({
        es: "Trazabilidad de los sistemas de IA, explicabilidad de sus decisiones y comunicación abierta sobre las capacidades y limitaciones de los modelos.",
        en: "Traceability of AI systems, explainability of their decisions, and open communication about model capabilities and limitations.",
        de: "Rückverfolgbarkeit von KI-Systemen, Erklärbarkeit ihrer Entscheidungen und offene Kommunikation über die Fähigkeiten und Grenzen der Modelle.",
        fr: "Traçabilité des systèmes d'IA, explicabilité de leurs décisions et communication ouverte sur les capacités et les limites des modèles.",
        it: "Tracciabilità dei sistemi di IA, spiegabilità delle loro decisioni e comunicazione aperta su capacità e limiti dei modelli.",
        ro: "Trasabilitatea sistemelor de IA, explicabilitatea deciziilor lor și comunicarea deschisă despre capacitățile și limitările modelelor."
      })
    },
    {
      icon: "diversity_3",
      title: t({
        es: "Diversidad, Equidad y No Discriminación",
        en: "Diversity, Non-discrimination & Fairness",
        de: "Vielfalt, Nichtdiskriminierung & Fairness",
        fr: "Diversité, Non-discrimination & Équité",
        it: "Diversità, Non Discriminazione ed Equità",
        ro: "Diversitate, Nediscriminare și Echitate"
      }),
      desc: t({
        es: "Mitigación activa de sesgos en datos y algoritmos. Diseño inclusivo que garantice el acceso universal sin discriminación de género, cultura o edad.",
        en: "Active mitigation of bias in data and algorithms. Inclusive design ensuring universal access without discrimination based on gender, culture or age.",
        de: "Aktive Minderung von Verzerrungen in Daten und Algorithmen. Inklusives Design, das den universellen Zugang ohne Diskriminierung aufgrund von Geschlecht, Kultur oder Alter gewährleistet.",
        fr: "Atténuation active des biais dans les données et les algorithmes. Conception inclusive garantissant l'accès universel sans discrimination de genre, de culture ou d'âge.",
        it: "Mitigazione attiva dei bias nei dati e negli algoritmi. Design inclusivo che garantisca l'accesso universale senza discriminazioni di genere, cultura o età.",
        ro: "Atenuarea activă a prejudecăților în date și algoritmi. Design incluziv care asigură accesul universal fără discriminare pe bază de gen, cultură sau vârstă."
      })
    },
    {
      icon: "eco",
      title: t({
        es: "Bienestar Social y Medioambiental",
        en: "Societal & Environmental Well-being",
        de: "Gesellschaftliches & ökologisches Wohlergehen",
        fr: "Bien-être Social & Environnemental",
        it: "Benessere Sociale e Ambientale",
        ro: "Bunăstare Socială și de Mediu"
      }),
      desc: t({
        es: "Fomento de sistemas de IA sostenibles y respetuosos con el medio ambiente, evaluando su impacto social, laboral y democrático.",
        en: "Promotion of sustainable and environmentally friendly AI systems, assessing their social, labor and democratic impact.",
        de: "Förderung nachhaltiger und umweltfreundlicher KI-Systeme, Bewertung ihrer sozialen, arbeitsrechtlichen und demokratischen Auswirkungen.",
        fr: "Promotion de systèmes d'IA durables et respectueux de l'environnement, en évaluant leur impact social, professionnel et démocratique.",
        it: "Promozione di sistemi di IA sostenibili e rispettosi dell'ambiente, valutandone l'impatto sociale, lavorativo e democratico.",
        ro: "Promovarea sistemelor de IA durabile și ecologice, evaluând impactul lor social, de muncă și democratic."
      })
    }
  ];

  const womenWorkgroups = [
    {
      icon: "psychology_alt",
      title: t({
        es: "Auditoría y Mitigación de Sesgos",
        en: "Bias Auditing & Mitigation",
        de: "Prüfung & Minderung von Verzerrungen",
        fr: "Audit & Atténuation des Biais",
        it: "Audit e Mitigazione dei Bias",
        ro: "Auditarea și Atenuarea Prejudecăților"
      }),
      desc: t({
        es: "Evaluamos algoritmos y bases de datos formativas para erradicar sesgos de género tradicionales, asegurando una representación equitativa.",
        en: "We evaluate algorithms and training databases to eradicate traditional gender biases, ensuring equitable representation.",
        de: "Wir bewerten Algorithmen und Trainingsdatenbanken, um traditionelle geschlechtsspezifische Verzerrungen zu beseitigen und eine gerechte Darstellung zu gewährleisten.",
        fr: "Nous évaluons les algorithmes et les bases de données d'apprentissage pour éradiquer les biais de genre traditionnels, garantissant une représentation équitable.",
        it: "Valutiamo algoritmi e database di formazione per sradicare i tradizionali bias di genere, garantendo una rappresentazione equa.",
        ro: "Evaluăm algoritmii și bazele de date de instruire pentru a eradica prejudecățile tradiționale de gen, asigurând o reprezentare echitabilă."
      })
    },
    {
      icon: "campaign",
      title: t({
        es: "Red de Comunicación y Excelencia",
        en: "Communication & Excellence Network",
        de: "Netzwerk für Kommunikation & Exzellenz",
        fr: "Réseau de Communication & d'Excellence",
        it: "Rete di Comunicazione ed Eccellenza",
        ro: "Rețeaua de Comunicare și Excelență"
      }),
      desc: t({
        es: "Canalizamos el talento multilingüe y de alta dirección de mujeres que, tras su etapa corporativa, lideran el discurso ético de la IA en Europa.",
        en: "We channel the multilingual and executive talent of women who, after their corporate phase, lead the ethical discourse of AI in Europe.",
        de: "Wir kanalisieren das mehrsprachige und leitende Talent von Frauen, die nach ihrer Unternehmensphase den ethischen Diskurs der KI in Europa anführen.",
        fr: "Nous canalisons le talent multilingue et de direction des femmes qui, après leur phase d'entreprise, mènent le discours éthique de l'IA en Europe.",
        it: "Canalizziamo il talento multilingue e dirigenziale delle donne che, dopo la fase aziendale, guidano il discorso etico dell'IA in Europa.",
        ro: "Canalizăm talentul multilingv și executiv al femeilor care, după etapa corporativă, conduc discursul etic al IA în Europa."
      })
    },
    {
      icon: "import_contacts",
      title: t({
        es: "Capacitación Tecnológica con Propósito",
        en: "Purposeful Tech Training",
        de: "Zielgerichtete Technologieschulung",
        fr: "Formation Technologique Engagée",
        it: "Formazione Tecnologica con Scopo",
        ro: "Instruire Tehnologică cu Scop"
      }),
      desc: t({
        es: "Programas de reconversión y alfabetización práctica en IA diseñados para que fundadoras y líderes sociales dominen la tecnología sin perder el foco humano.",
        en: "Reskilling and practical AI literacy programs designed for female founders and social leaders to master technology while keeping a human focus.",
        de: "Umschulungs- und praktische KI-Schulungsprogramme für Gründerinnen und soziale Führungskräfte, um Technologie zu beherrschen und den menschlichen Fokus zu behalten.",
        fr: "Programmes de reconversion et d'alphabétisation pratique en IA conçus pour que les fondatrices et les leaders sociaux maîtrisent la technologie tout en gardant un focus humain.",
        it: "Programmi di riqualificazione e alfabetizzazione pratica in IA progettati per fondatrici e leader sociali per padroneggiare la tecnologia mantenendo il focus umano.",
        ro: "Programe de recalificare și alfabetizare practică în IA concepute pentru fondatoare și lideri sociali pentru a stăpâni tehnologia, menținând în același timp atenția asupra omului."
      })
    },
    {
      icon: "hub",
      title: t({
        es: "Alianzas Euromediterráneas",
        en: "Euro-Mediterranean Alliances",
        de: "Euro-mediterrane Allianzen",
        fr: "Alliances Euro-Méditerranéennes",
        it: "Alleanze Euromediterranee",
        ro: "Alianțe Euro-Mediteraneene"
      }),
      desc: t({
        es: "Conectamos con asociaciones de Grecia, Turquía, Rumanía y Portugal, posicionando a la mujer española como motor de proyectos financiados por la UE.",
        en: "We connect with associations in Greece, Turkey, Romania and Portugal, positioning Spanish women as a driving force in EU-funded projects.",
        de: "Wir vernetzen uns mit Verbänden in Griechenland, der Türkei, Rumänien und Portugal und positionieren spanische Frauen als treibende Kraft in EU-finanzierten Projekten.",
        fr: "Nous nous connectons avec des associations en Grèce, Turquie, Roumanie et Portugal, positionnant les femmes espagnoles comme moteur de projets financés par l'UE.",
        it: "Ci colleghiamo con associazioni in Grecia, Turchia, Romania e Portogallo, posizionando le donne spagnole come motore di progetti finanziati dall'UE.",
        ro: "Ne conectăm cu asociații din Grecia, Turcia, România și Portugalia, poziționând femeile spaniole ca forță motrice în proiectele finanțate de UE."
      })
    }
  ];

  return (
    <section id="etica" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-4">
            <span className="material-icons-round text-sm">gavel</span>
            {t({
              es: "Compromiso Ético y de Impacto",
              en: "Ethical & Impact Commitment",
              de: "Verpflichtung zu Ethik & Wirkung",
              fr: "Engagement Éthique & d'Impact",
              it: "Impegno Etico e di Impatto",
              ro: "Angajament Etic și de Impact"
            })}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            {t({
              es: "IA con Propósito y Valores",
              en: "AI with Purpose & Values",
              de: "KI mit Zweck & Werten",
              fr: "L'IA avec Objectif & Valeurs",
              it: "IA con Scopo e Valori",
              ro: "IA cu Scop și Valori"
            })}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
            {t({
              es: "Entendemos la inteligencia artificial no como un fin, sino como una herramienta catalizadora para mejorar el mundo y estrechar brechas sociales.",
              en: "We understand artificial intelligence not as an end, but as a catalytic tool to improve the world and close social divides.",
              de: "Wir verstehen künstliche Intelligenz nicht als Selbstzweck, sondern als katalytisches Werkzeug, um die Welt zu verbessern und soziale Gräben zu schließen.",
              fr: "Nous comprenons l'intelligence artificielle non pas comme une fin en soi, mais comme un outil catalytique pour améliorer le monde et réduire les fractures sociales.",
              it: "Intendiamo l'intelligenza artificiale non come un fine, ma como uno strumento catalizzatore per migliorare il mondo e ridurre i divari sociali.",
              ro: "Înțelegem inteligența artificială nu ca pe un scop, ci ca pe un instrument catalizator pentru a îmbunătăți lumea și a reduce decalajele sociale."
            })}
          </p>
          <div className="w-16 h-1 bg-purple-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Tab Switcher - Clean, High Contrast */}
        <div className="flex justify-center mb-16">
          <div className="bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm inline-flex">
            <button
              onClick={() => setActiveTab('eu-principles')}
              className={`px-6 py-3 rounded-xl text-sm font-black transition-all flex items-center gap-2 ${
                activeTab === 'eu-principles'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-primary'
              }`}
            >
              <span className="material-icons-round text-base">verified_user</span>
              {t({
                es: "IA Fiable (Trustworthy AI - UE)",
                en: "Trustworthy AI (EU Guidelines)",
                de: "Vertrauenswürdige KI (EU-Richtlinien)",
                fr: "IA Digne de Confiance (Directives UE)",
                it: "IA Affidabile (Linee Guida UE)",
                ro: "IA de Încredere (Ghidul UE)"
              })}
            </button>
            <button
              onClick={() => setActiveTab('women-leaders')}
              className={`px-6 py-3 rounded-xl text-sm font-black transition-all flex items-center gap-2 ${
                activeTab === 'women-leaders'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-accent'
              }`}
            >
              <span className="material-icons-round text-base">female</span>
              {t({
                es: "Mujer, Liderazgo e IA Ética",
                en: "Women, Leadership & Ethical AI",
                de: "Frauen, Führung & Ethische KI",
                fr: "Femmes, Leadership & IA Éthique",
                it: "Donne, Leadership e IA Etica",
                ro: "Femei, Leadership și IA Etică"
              })}
            </button>
          </div>
        </div>

        {/* Tab Content 1: EU Trustworthy AI principles */}
        {activeTab === 'eu-principles' && (
          <div className="space-y-12 animate-in fade-in duration-500">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/40 dark:from-slate-900 dark:to-slate-900/40 border border-blue-100/50 dark:border-slate-800/80 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8 space-y-4">
                  <span className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                    {t({
                      es: "Marco de Referencia Europeo",
                      en: "European Framework of Reference",
                      de: "Europäischer Referenzrahmen",
                      fr: "Cadre de Référence Européen",
                      it: "Quadro di Riferimento Europeo",
                      ro: "Cadrul European de Referință"
                    })}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight">
                    {t({
                      es: "Directrices de la Comisión Europea para una IA Fiable",
                      en: "European Commission Guidelines for Trustworthy AI",
                      de: "Richtlinien der Europäischen Kommission für eine vertrauenswürdige KI",
                      fr: "Directives de la Commission Européenne pour une IA Digne de Confiance",
                      it: "Linee Guida della Commissione Europea per un'IA Affidabile",
                      ro: "Ghidul Comisiei Europene pentru o IA de Încredere"
                    })}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                    {t({
                      es: "Nuestra actividad formativa, técnica y asesora está minuciosamente alineada con el reglamento europeo (EU AI Act). No concebimos la innovación sin el marco de seguridad jurídica, equidad y respeto ético que exige la Unión Europea.",
                      en: "Our educational, technical and advisory activity is meticulously aligned with European regulations (EU AI Act). We do not conceive of innovation without the framework of legal safety, fairness and ethical respect required by the European Union.",
                      de: "Unsere Bildungs-, Technik- und Beratungstätigkeit ist akribisch auf die europäischen Vorschriften (EU-KI-Gesetz) abgestimmt. Wir können uns Innovation nicht ohne den von der Europäischen Union geforderten Rahmen für Rechtssicherheit, Fairness und ethischen Respekt vorstellen.",
                      fr: "Notre activité de formation, technique et de conseil est minutieusement alignée sur la réglementation européenne (EU AI Act). Nous ne concevons pas l'innovation sans le cadre de sécurité juridique, d'équité et de respect éthique exigé par l'Union Européenne.",
                      it: "La nostra attività formativa, tecnica e di consulenza è meticolosamente allineata al regolamento europeo (EU AI Act). Non concepiamo l'innovazione senza il quadro di sicurezza giuridica, equità e rispetto etico richiesto dall'Unione Europea.",
                      ro: "Activitatea noastră educațională, tehnică și de consultanță este aliniată meticulos cu reglementările europene (EU AI Act). Nu concepem inovarea fără cadrul de siguranță juridică, echitate și respect etic cerut de Uniunea Europeană."
                    })}
                  </p>
                </div>
                <div className="md:col-span-4 flex justify-center md:justify-end">
                  <div className="inline-flex items-center gap-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-6 py-4 rounded-2xl shadow-sm">
                    <span className="material-icons-round text-blue-600 dark:text-blue-400 text-3xl">gavel</span>
                    <div>
                      <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">EU AI Act Compliant</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {t({
                          es: "Gobernanza y Ética Rigurosa",
                          en: "Rigorous Governance & Ethics",
                          de: "Strenge Governance & Ethik",
                          fr: "Gouvernance & Éthique Rigoureuses",
                          it: "Governance ed Etica Rigorose",
                          ro: "Guvernanță și Etică Riguroasă"
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {euPrinciples.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800/50 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <span className="material-icons-round text-2xl">{item.icon}</span>
                  </div>
                  <h4 className="font-extrabold text-slate-900 dark:text-white text-lg mb-3">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content 2: Women, Leadership & Ethical AI */}
        {activeTab === 'women-leaders' && (
          <div className="space-y-12 animate-in fade-in duration-500">
            {/* Context / Mission Banner for Women */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50/40 dark:from-slate-900 dark:to-slate-900/40 border border-purple-100/50 dark:border-slate-800/80 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8 space-y-4">
                  <span className="text-xs font-black text-purple-600 dark:text-purple-400 uppercase tracking-widest">
                    {t({
                      es: "Grupo de Trabajo y Cohesión Euromediterránea",
                      en: "Working Group & Euro-Mediterranean Cohesion",
                      de: "Arbeitsgruppe & euro-mediterraner Zusammenhalt",
                      fr: "Groupe de Travail & Cohésion Euro-Méditerranéenne",
                      it: "Gruppo di Lavoro e Coesione Euromediterranea",
                      ro: "Grup de Lucru și Coeziune Euro-Mediteraneeană"
                    })}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight">
                    {t({
                      es: "Mujer, Liderazgo Corporativo y Propósito en IA",
                      en: "Women, Corporate Leadership & Purpose in AI",
                      de: "Frauen, Unternehmensführung & Zweck in der KI",
                      fr: "Femmes, Leadership d'Entreprise & Sens de l'IA",
                      it: "Donne, Leadership Aziendale e Scopo nell'IA",
                      ro: "Femei, Leadership Corporativă și Scop în IA"
                    })}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                    {t({
                      es: "Creado para conectar a líderes procedentes de la gran empresa, expertas en comunicación, idiomas y gestión de proyectos de toda la cuenca mediterránea. Canalizamos este formidable potencial directivo para promover una IA con valores humanos, mitigando sesgos y liderando proyectos de cooperación internacional.",
                      en: "Created to connect leaders from major corporations, experts in communication, languages and project management from all over the Mediterranean basin. We channel this formidable managerial potential to promote AI with human values, mitigating bias and leading international cooperation projects.",
                      de: "Gegründet, um Führungskräfte aus großen Unternehmen, Experten für Kommunikation, Sprachen und Projektmanagement aus dem gesamten Mittelmeerraum zu verbinden. Wir kanalisieren dieses formidable Managementpotenzial, um eine KI mit menschlichen Werten zu fördern, Verzerrungen zu mindern und internationale Kooperationsprojekte zu leiten.",
                      fr: "Créé pour connecter les leaders de grandes entreprises, expertes en communication, langues et gestion de projets de tout le bassin méditerranéen. Nous canalisons ce formidable potentiel managérial pour promouvoir une IA aux valeurs humaines, en atténuant les biais et en menant des projets de coopération internationale.",
                      it: "Creato per connettere leader provenienti da grandi aziende, esperte in comunicazione, lingue e gestione di progetti in tutto il bacino del Mediterraneo. Canalizziamo questo straordinario potenziale manageriale per promuovere un'IA con valori umani, mitigando i bias e guidando progetti di cooperazione internazionale.",
                      ro: "Creat pentru a conecta lideri din corporații majore, experți în comunicare, limbi străine și management de proiect din întregul bazin mediteranean. Canalizăm acest formidabil potențial managerial pentru a promova o IA cu valori umane, atenuând prejudecățile și conducând proiecte de cooperare internațională."
                    })}
                  </p>
                </div>
                <div className="md:col-span-4 flex justify-center md:justify-end">
                  <div className="inline-flex items-center gap-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-6 py-4 rounded-2xl shadow-sm">
                    <span className="material-icons-round text-purple-600 dark:text-purple-400 text-3xl">diversity_1</span>
                    <div>
                      <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">
                        {t({
                          es: "Liderazgo Femenino",
                          en: "Female Leadership",
                          de: "Weibliche Führung",
                          fr: "Leadership Féminin",
                          it: "Leadership Femminile",
                          ro: "Leadership Feminin"
                        })}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {t({
                          es: "Mediterráneo y Europa",
                          en: "Mediterranean & Europe",
                          de: "Mittelmeer & Europa",
                          fr: "Méditerranée & Europe",
                          it: "Mediterraneo ed Europa",
                          ro: "Mediterana și Europa"
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Workstreams */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {womenWorkgroups.map((group, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/50 shadow-sm hover:shadow-md hover:border-purple-200 dark:hover:border-purple-900/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-5 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                    <span className="material-icons-round text-2xl">{group.icon}</span>
                  </div>
                  <h4 className="font-extrabold text-slate-900 dark:text-white text-base mb-2">
                    {group.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                    {group.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote of Empowerment */}
            <div className="text-center max-w-2xl mx-auto pt-6">
              <p className="italic text-slate-600 dark:text-slate-300 font-medium text-sm">
                "{t({
                  es: "La tecnología sin principios es ciega. Lideramos la transición digital europea aportando la voz, la ética y la capacidad de transformación social que el mundo necesita.",
                  en: "Technology without principles is blind. We lead the European digital transition by providing the voice, ethics and capacity for social transformation that the world needs.",
                  de: "Technologie ohne Prinzipien ist blind. Wir leiten den europäischen digitalen Wandel ein, indem wir die Stimme, die Ethik und die Fähigkeit zur gesellschaftlichen Transformation bereitstellen, die die Welt braucht.",
                  fr: "La technologie sans principes est aveugle. Nous menons la transition numérique européenne en apportant la voix, l'éthique et la capacité de transformation sociale dont le monde a besoin.",
                  it: "La tecnologia senza principi è cieca. Guidiamo la transizione digitale europea offrendo la voce, l'etica e la capacità di trasformazione sociale di cui il mondo ha bisogno.",
                  ro: "Tehnologia fără principii este oarbă. Conducem tranziția digitală europeană oferind vocea, etica și capacitatea de transformare socială de care are nevoie lumea."
                })}"
              </p>
            </div>
          </div>
        )}

        {/* Local & Social Focus */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 text-white shadow-xl shadow-blue-500/20">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-icons-round text-3xl">psychology</span>
              <h3 className="text-2xl font-black">
                {t({
                  es: "Nuestra Meta Social",
                  en: "Our Social Goal",
                  de: "Unser soziales Ziel",
                  fr: "Notre Objectif Social",
                  it: "Il Nostro Obiettivo Sociale",
                  ro: "Scopul Nostru Social"
                })}
              </h3>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed mb-8">
              {t({
                es: "Trabajamos incansablemente con colectivos tradicionalmente vulnerables a la automatización digital. Diseñamos capacitaciones en IA adaptadas para la tercera edad, la juventud y colectivos profesionales diversos, para asegurar que la Inteligencia Artificial sea un vehículo de ascenso social y no de marginación.",
                en: "We work tirelessly with groups traditionally vulnerable to digital automation. We design AI training adapted for elderly people, youth and diverse professional groups, to ensure that Artificial Intelligence is a vehicle for social advancement and not marginalization.",
                de: "Wir arbeiten unermüdlich mit Gruppen zusammen, die traditionell anfällig für digitale Automatisierung sind. Wir entwickeln KI-Schulungen, die auf ältere Menschen, Jugendliche und verschiedene Berufsgruppen zugeschnitten sind, um sicherzustellen, dass künstliche Intelligenz ein Instrument für den sozialen Aufstieg und nicht für Ausgrenzung ist.",
                fr: "Nous travaillons sans relâche avec les groupes traditionnellement vulnérables à l'automatisation numérique. Nous concevons des formations à l'IA adaptées aux personnes âgées, aux jeunes et à divers groupes professionnels, pour garantir que l'Intelligence Artificielle soit un vecteur d'ascension sociale et non de marginalisation.",
                it: "Lavoriamo instancabilmente con i gruppi tradizionalmente vulnerabili all'automazione digitale. Progettiamo corsi di formazione sull'IA adatti alla terza età, ai giovani e a diversi gruppi professionali, per garantire que l'Intelligenza Artificiale sia un veicolo di ascesa sociale e no di emarginazione.",
                ro: "Lucrăm neobosit cu grupuri vulnerabile în mod tradițional la automatizarea digitală. Proiectăm cursuri de IA adaptate pentru persoanele în vârstă, tineri și diverse grupuri profesionale, pentru a ne asigura că Inteligența Artificială este un vehicul pentru progresul social și nu pentru marginalizare."
              })}
            </p>
            <div className="bg-blue-700/40 p-4 rounded-xl text-xs text-blue-50 border border-white/15">
              {t({
                es: "Fórmula de Innovación Social: IA Práctica, Ética y Humana.",
                en: "Social Innovation Formula: Practical, Ethical & Human AI.",
                de: "Formel für soziale Innovation: Praktische, ethische & menschliche KI.",
                fr: "Formule d'Innovation Sociale : IA Pratique, Éthique & Humaine.",
                it: "Formula di Innovazione Sociale: IA Pratica, Etica e Umana.",
                ro: "Formula de inovare socială: IA practică, etică și umană."
              })}
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-icons-round text-3xl text-primary">explore</span>
              <h3 className="text-2xl font-black">
                {t({
                  es: "Raíces y Ecosistema",
                  en: "Roots & Ecosystem",
                  de: "Wurzeln & Ökosystem",
                  fr: "Racines & Écosystème",
                  it: "Radici ed Ecosistema",
                  ro: "Rădăcini și Ecosistem"
                })}
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">
              {t({
                es: "AAIA nace para fortalecer Aragón, posicionando a nuestra comunidad autónoma como un laboratorio de referencia europeo en IA responsable. Ofrecemos respuestas concretas ante desafíos territoriales, reteniendo talento local y promoviendo el desarrollo inclusivo.",
                en: "AAIA was born to strengthen Aragon, positioning our autonomous community as a European reference laboratory in responsible AI. We offer concrete answers to regional challenges, retaining local talent and promoting inclusive development.",
                de: "Die AAIA wurde gegründet, um Aragonien zu stärken und unsere autonome Gemeinschaft als europäisches Referenzlabor für verantwortungsvolle KI zu positionieren. Wir bieten konkrete Antworten auf regionale Herausforderungen, binden lokale Talente und fördern eine inklusive Entwicklung.",
                fr: "L'AAIA est née pour renforcer l'Aragon, en positionnant notre communauté autonome comme un laboratoire de référence européen en IA responsable. Nous offrons des réponses concrètes aux défis territoriaux, en retenant les talents locaux et en promouvant le développement inclusif.",
                it: "AAIA nasce per rafforzare l'Aragona, posizionando la nostra comunità autonoma come laboratorio europeo di riferimento nell'IA responsabile. Offriamo risposte concrete alle sfide regionali, trattenendo i talenti locali e promuovendo lo sviluppo inclusivo.",
                ro: "AAIA s-a născut pentru a consolida Aragonul, poziționând comunitatea noastră autonomă ca un laborator de referință european în IA responsabilă. Oferim răspunsuri concrete la provocările regionale, reținând talentele locale și promovând dezvoltarea incluzivă."
              })}
            </p>
            <div className="bg-slate-50 dark:bg-slate-800/80 p-4 rounded-xl text-xs text-primary font-bold border border-slate-100 dark:border-slate-700">
              {t({
                es: "Aragón como referente del Sur de Europa en IA de Impacto",
                en: "Aragon as a benchmark in Southern Europe for AI of Impact",
                de: "Aragonien als Maßstab in Südeuropa für wirkungsvolle KI",
                fr: "L'Aragon comme référence dans le sud de l'Europe pour l'IA d'impact",
                it: "L'Aragona come punto di riferimento nel Sud Europa per l'IA d'Impatto",
                ro: "Aragonul ca punct de referință în Europa de Sud pentru IA cu impact"
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EthicsSection;
