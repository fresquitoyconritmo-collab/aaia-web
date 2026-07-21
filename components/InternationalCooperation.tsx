import React from 'react';
import { useLanguage } from './LanguageContext';

interface InternationalCooperationProps {
  onContactClick: () => void;
}

const InternationalCooperation: React.FC<InternationalCooperationProps> = ({ onContactClick }) => {
  const { language, t } = useLanguage();

  const content = {
    es: {
      title: "Cooperación Internacional",
      subtitle: "Su Socio Tecnológico y Ético de IA en España",
      badge: "Convocatorias de Financiación Europea",
      introTitle: "Colaboración Transfronteriza con Impacto Social",
      introDesc: "Diseñado especialmente para asociaciones, centros de formación y organizaciones europeas. Si usted lidera iniciativas con impacto social y busca un partner tecnológico solvente y alineado con los valores éticos europeos para sus proyectos (Erasmus+, Horizon Europe, CERV, etc.), la AAIA es su aliado ideal.",
      targetAudienceHeader: "Sinergia de Liderazgo y Comunicación",
      targetAudienceDesc: "Entendemos la visión de las líderes que, tras formarse y liderar en grandes corporaciones, hoy canalizan su talento, idiomas y capacidad de comunicación en construir proyectos que mejoran el mundo. Hablamos su mismo lenguaje profesional y compartimos su nivel de exigencia, rigor y compromiso social.",
      pillarsTitle: "¿Por qué elegir a la AAIA como Socio Tecnológico?",
      pillars: [
        {
          icon: "gavel",
          title: "IA Ética por Diseño",
          desc: "Garantizamos que todo desarrollo formativo o tecnológico respete la privacidad, promueva la diversidad y mitigue sesgos de género o culturales en el diseño de algoritmos."
        },
        {
          icon: "menu_book",
          title: "Currículos Formativos Innovadores",
          desc: "Creamos contenidos educativos sobre alfabetización digital, ética de la IA, y herramientas prácticas de productividad para PYMEs, ONGs y comunidades diversas."
        },
        {
          icon: "share",
          title: "Liderazgo en Difusión (WP)",
          desc: "Especializados en el diseño técnico y en paquetes de trabajo de diseminación, comunicación de impacto, y transferencia de conocimiento en consorcios europeos."
        },
        {
          icon: "language",
          title: "Sólida Red en el Mediterráneo",
          desc: "Fomentamos la cohesión digital de la cuenca mediterránea, adaptando soluciones y capacitaciones a los contextos específicos de Grecia, Turquía, Portugal, Rumanía y España."
        }
      ],
      ctaTitle: "¿Está preparando una propuesta europea?",
      ctaDesc: "Buscamos activamente integrarnos en consorcios europeos como partner tecnológico y de IA ética. Le aportamos rigor metodológico, redacción técnica solvente, experiencia y una visión centrada en las personas.",
      ctaButton: "Escríbanos para colaborar",
      stats: [
        { value: "PIC Ready", label: "Registro europeo disponible para convocatorias" },
        { value: "100% Ética", label: "Cumplimiento garantizado de normativas IA de la UE" },
        { value: "Multilingüe", label: "Equipo experto en gestión internacional" }
      ]
    },
    en: {
      title: "International Cooperation",
      subtitle: "Your Ethical & Tech AI Partner in Spain",
      badge: "European Funding & Consortia",
      introTitle: "Cross-Border Collaboration for Social Impact",
      introDesc: "Specially designed for associations, training centers, and organizations across the Mediterranean basin (Greece, Turkey, Portugal...), Romania, and the rest of Europe. If you are leading high-impact social initiatives and looking for a reliable, expert technology partner aligned with European ethical values for your proposals (Erasmus+, Horizon Europe, CERV, etc.), AAIA is your perfect match.",
      targetAudienceHeader: "Synergy in Leadership and Communication",
      targetAudienceDesc: "We deeply value the vision of leaders who, after developing outstanding professional paths in major corporations, now channel their multilingual talent, communications skills, and strategic drive into building projects that change the world. We speak your professional language and share your standard of rigor, excellence, and social commitment.",
      pillarsTitle: "Why Partner with AAIA for your EU Proposals?",
      pillars: [
        {
          icon: "gavel",
          title: "Ethical AI by Design",
          desc: "We ensure all educational and technological developments respect data privacy, foster diversity, and systematically mitigate gender or cultural bias in algorithmic designs."
        },
        {
          icon: "menu_book",
          title: "Innovative Training Curricula",
          desc: "We develop state-of-the-art educational materials on AI literacy, technology ethics, and custom practical tools for SMEs, NGOs, and underrepresented communities."
        },
        {
          icon: "share",
          title: "Dissemination & Tech Leadership",
          desc: "Highly experienced in technical coordination, dissemination work packages (WPs), impact communication, and multi-stakeholder knowledge transfer across European consortia."
        },
        {
          icon: "language",
          title: "Mediterranean Basin Alliance",
          desc: "Fostering digital cohesion in Southern & Eastern Europe. We seamlessly adapt solutions and training methodologies for Greece, Turkey, Portugal, Romania, and Spain."
        }
      ],
      ctaTitle: "Preparing a European Project Proposal?",
      ctaDesc: "We are actively seeking to join EU consortia as a dedicated technology and ethical AI partner. We contribute solid technical writing, methodological rigor, and a human-centered technological vision.",
      ctaButton: "Let's build a proposal together",
      stats: [
        { value: "PIC Ready", label: "European Registry active for fast consortium integration" },
        { value: "100% Ethical", label: "Aligned with the EU AI Act & GDPR compliance" },
        { value: "Multilingual", label: "Native management in English, Spanish & European channels" }
      ]
    },
    de: {
      title: "Internationale Zusammenarbeit",
      subtitle: "Ihr technologischer und ethischer KI-Partner in Spanien",
      badge: "Europäische Finanzierungsaufrufe",
      introTitle: "Grenzüberschreitende Zusammenarbeit mit sozialer Wirkung",
      introDesc: "Speziell entwickelt für Verbände, Schulungszentren und Organisationen im Mittelmeerraum (Griechenland, Türkei, Portugal...), Rumänien und dem restlichen Europa. Wenn Sie Initiativen mit sozialer Wirkung leiten und einen kompetenten Technologiepartner suchen, der auf die europäischen ethischen Werte für Ihre Projekte (Erasmus+, Horizon Europe, CERV usw.) ausgerichtet ist, ist die AAIA Ihr idealer Partner.",
      targetAudienceHeader: "Synergie von Führung und Kommunikation",
      targetAudienceDesc: "Wir verstehen die Vision von Führungskräften, die sich nach ihrer Ausbildung und Führung in großen Unternehmen heute darauf konzentrieren, ihr Talent, ihre Sprachen und Kommunikationsfähigkeiten in Projekte einzubringen, die die Welt verbessern. Wir sprechen dieselbe professionelle Sprache und teilen Ihre Ansprüche an Qualität, Strenge und soziales Engagement.",
      pillarsTitle: "Warum die AAIA als Technologiepartner wählen?",
      pillars: [
        {
          icon: "gavel",
          title: "Ethische KI durch Design",
          desc: "Wir garantieren, dass jede pädagogische oder technologische Entwicklung die Privatsphäre respektiert, Vielfalt fördert und geschlechtsspezifische oder kulturelle Verzerrungen im Algorithmen-Design mindert."
        },
        {
          icon: "menu_book",
          title: "Innovative Lehrpläne",
          desc: "Wir erstellen Bildungsinhalte zu digitaler Kompetenz, KI-Ethik und praktischen Produktivitätswerkzeugen für KMU, NGOs und vielfältige Gemeinschaften."
        },
        {
          icon: "share",
          title: "Führend in der Verbreitung (WP)",
          desc: "Spezialisiert auf technisches Design, Verbreitungsarbeitspakete, wirkungsvolle Kommunikation und Wissenstransfer in europäischen Konsortien."
        },
        {
          icon: "language",
          title: "Starkes Netzwerk im Mittelmeerraum",
          desc: "Wir fördern den digitalen Zusammenhalt im Mittelmeerraum und passen Lösungen und Schulungen an die spezifischen Kontexte von Griechenland, der Türkei, Portugal, Rumänien und Spanien an."
        }
      ],
      ctaTitle: "Bereiten Sie einen europäischen Projektvorschlag vor?",
      ctaDesc: "Wir beteiligen uns aktiv an europäischen Konsortien als Technologie- und ethischer KI-Partner. Wir bieten Ihnen methodische Strenge, kompetente technische Ausarbeitung, Erfahrung und eine auf den Menschen ausgerichtete Vision.",
      ctaButton: "Schreiben Sie uns zur Zusammenarbeit",
      stats: [
        { value: "PIC Ready", label: "Europäisches Register bereit für schnelle Konsortium-Integration" },
        { value: "100% Ethisch", label: "Garantierte Einhaltung der EU-KI-Vorschriften" },
        { value: "Mehrsprachig", label: "Expertenteam für internationales Management" }
      ]
    },
    fr: {
      title: "Coopération Internationale",
      subtitle: "Votre Partenaire Technologique et Éthique de l'IA en Espagne",
      badge: "Appels à Financement Européens",
      introTitle: "Collaboration Transfrontalière avec Impact Social",
      introDesc: "Spécialement conçu pour les associations, centres de formation et organisations du bassin méditerranéen (Grèce, Turquie, Portugal...), la Roumanie et le reste de l'Europe. Si vous menez des initiatives à impact social et recherchez un partenaire technologique compétent et aligné sur les valeurs éthiques européennes pour vos projets (Erasmus+, Horizon Europe, CERV, etc.), l'AAIA est votre allié idéal.",
      targetAudienceHeader: "Synergie de Leadership et Communication",
      targetAudienceDesc: "Nous comprenons la vision des leaders qui, après s'être formées et avoir dirigé dans de grandes entreprises, canalisent aujourd'hui leur talent, leurs langues et leur capacité de communication pour construire des projets qui améliorent le monde. Nous parlons le même langage professionnel et partageons vos exigences de rigueur, d'excellence et d'engagement social.",
      pillarsTitle: "Pourquoi choisir l'AAIA comme Partenaire Technologique ?",
      pillars: [
        {
          icon: "gavel",
          title: "IA Éthique par Conception",
          desc: "Nous garantissons que tout développement éducatif ou technologique respecte la vie privée, favorise la diversité et atténue les biais de genre ou culturels dans la conception des algorithmes."
        },
        {
          icon: "menu_book",
          title: "Programmes de Formation Innovants",
          desc: "Nous créons des contenus éducatifs sur l'alphabétisation numérique, l'éthique de l'IA et des outils pratiques de productivité pour les PME, les ONG et les communautés diverses."
        },
        {
          icon: "share",
          title: "Leader en Diffusion (WP)",
          desc: "Spécialisé dans la conception technique, les lots de travaux de diffusion, la communication d'impact et le transfert de connaissances au sein de consortiums européens."
        },
        {
          icon: "language",
          title: "Réseau Solide en Méditerranée",
          desc: "Nous favorisons la cohésion numérique du bassin méditerranéen, en adaptant les solutions et les formations aux contextes spécifiques de la Grèce, de la Turquie, du Portugal, de la Roumanie et de l'Espagne."
        }
      ],
      ctaTitle: "Vous préparez une proposition européenne ?",
      ctaDesc: "Nous cherchons activement à intégrer des consortiums européens en tant que partenaire technologique et d'IA éthique. Nous vous apportons rigueur méthodologique, rédaction technique compétente, expérience et vision centrée sur l'humain.",
      ctaButton: "Écrivez-nous pour collaborer",
      stats: [
        { value: "PIC Ready", label: "Registre européen actif pour une intégration rapide" },
        { value: "100% Éthique", label: "Respect garanti des réglementations européennes sur l'IA" },
        { value: "Multilingue", label: "Équipe d'experts en gestion internationale" }
      ]
    },
    it: {
      title: "Cooperazione Internazionale",
      subtitle: "Il tuo Partner Tecnologico ed Etico per l'IA in Spagna",
      badge: "Bandi di Finanziamento Europei",
      introTitle: "Collaborazione Transfrontaliera con Impatto Sociale",
      introDesc: "Progettato appositamente per associazioni, centri di formazione e organizzazioni del bacino del Mediterraneo (Grecia, Turchia, Portogallo...), Romania e resto d'Europa. Se guidi iniziative con impatto sociale e cerchi un partner tecnologico affidabile e allineato ai valori etici europei per i tuoi progetti (Erasmus+, Horizon Europe, CERV, ecc.), AAIA è il tuo alleato ideale.",
      targetAudienceHeader: "Sinergia di Leadership e Comunicazione",
      targetAudienceDesc: "Comprendiamo la visione delle leader che, dopo essersi formate e aver guidato in grandi aziende, oggi canalizzano il proprio talento, le lingue e la capacità di comunicazione nella costruzione di progetti che migliorano il mondo. Parliamo lo stesso linguaggio professionale e condividiamo gli stessi standard di rigore, eccellenza e impegno sociale.",
      pillarsTitle: "Perché scegliere AAIA como Partner Tecnologico?",
      pillars: [
        {
          icon: "gavel",
          title: "IA Etica per Design",
          desc: "Garantiamo che ogni sviluppo formativo o tecnologico rispetti la privacy, promuova la diversità e mitighi i bias di genere o culturali nella progettazione degli algoritmi."
        },
        {
          icon: "menu_book",
          title: "Programmi Formativi Innovativi",
          desc: "Creiamo contenuti educativi sull'alfabetizzazione digitale, l'etica dell'IA e strumenti pratici di produttività per PMI, ONG e comunità diverse."
        },
        {
          icon: "share",
          title: "Leader nella Divulgazione (WP)",
          desc: "Specializzati nella progettazione tecnica, nei pacchetti di lavoro di diffusione, nella comunicazione di impatto e nel trasferimento di conoscenze nei consorzi europei."
        },
        {
          icon: "language",
          title: "Solida Rete nel Mediterraneo",
          desc: "Promuoviamo la coesione digitale del bacino del Mediterraneo, adattando soluzioni e formazione ai contesti specifici di Grecia, Turchia, Portogallo, Romania e Spagna."
        }
      ],
      ctaTitle: "Stai preparando una proposta europea?",
      ctaDesc: "Siamo attivamente alla ricerca di consorzi europei in qualità di partner tecnologico e di IA etica. Offriamo rigore metodologico, stesura tecnica competente, esperienza e una visione incentrata sulle persone.",
      ctaButton: "Scrivici per collaborare",
      stats: [
        { value: "PIC Ready", label: "Registro europeo pronto per l'integrazione nei consorzi" },
        { value: "100% Etica", label: "Conformità garantita alle normative europee sull'IA" },
        { value: "Madrelingua", label: "Team esperto nella gestione internazionale" }
      ]
    },
    ro: {
      title: "Cooperare Internațională",
      subtitle: "Partenerul tău Tehnologic și Etic în IA din Spania",
      badge: "Apeluri de Finanțare Europeană",
      introTitle: "Colaborare Transfrontalieră cu Impact Social",
      introDesc: "Conceput special pentru asociații, centre de formare și organizații din bazinul mediteranean (Grecia, Turcia, Portugalia...), România și restul Europei. Dacă conduceți inițiative cu impact social și căutați un partener tehnologic competent și aliniat cu valorile etice europene pentru proiectele dumneavoastră (Erasmus+, Horizon Europe, CERV etc.), AAIA este aliatul dumneavoastră ideal.",
      targetAudienceHeader: "Sinergie de Leadership și Comunicare",
      targetAudienceDesc: "Înțelegem viziunea liderilor care, după ce s-au format și au condus în corporații mari, își canalizează astăzi talentul, limbile străine și abilitățile de comunicare în construirea de proiecte care îmbunătățesc lumea. Vorbim același limbaj profesional și împărtășim aceleași standarde de rigoare, excelență și angajament social.",
      pillarsTitle: "De ce să alegeți AAIA ca Partener Tehnologic?",
      pillars: [
        {
          icon: "gavel",
          title: "IA Etică prin Design",
          desc: "Garantăm că orice dezvoltare educațională sau tehnologică respectă confidențialitatea, promovează diversitatea și atenuează prejudecățile de gen sau culturale în proiectarea algoritmilor."
        },
        {
          icon: "menu_book",
          title: "Curricule de Formare Inovatoare",
          desc: "Creăm conținut educațional despre alfabetizarea digitală, etica IA și instrumente practice de productivitate pentru IMM-uri, ONG-uri și comunități diverse."
        },
        {
          icon: "share",
          title: "Lider în Diseminare (WP)",
          desc: "Specializați în proiectare tehnică, pachete de lucru pentru diseminare, comunicare de impact și transfer de cunoștințe în consorții europene."
        },
        {
          icon: "language",
          title: "O Rețea Solidă în Mediterană",
          desc: "Promovăm coeziunea digitală a bazinului mediteranean, adaptând soluții și instruire la contextele specifice din Grecia, Turcia, Portugalia, România și Spania."
        }
      ],
      ctaTitle: "Pregătiți o propunere de proiect european?",
      ctaDesc: "Căutăm activ să ne integrăm în consorții europene ca partener tehnologic și de IA etică. Vă oferim rigoare metodologică, redactare tehnică competentă, experiență și o viziune centrată pe oameni.",
      ctaButton: "Scrieți-ne pentru a colabora",
      stats: [
        { value: "PIC Ready", label: "Registru european activ pentru integrare rapidă în consorțiu" },
        { value: "100% Etică", label: "Conformitate garantată cu reglementările UE privind IA" },
        { value: "Multilingv", label: "Echipă de experți în management internațional" }
      ]
    }
  };

  // Safe fallback to 'es' if language isn't supported in content
  const activeLang = (content[language as keyof typeof content] ? language : 'es') as keyof typeof content;
  const currentContent = content[activeLang];

  const geographicFocus = {
    title: t({
      es: "Foco Geográfico de Sinergias",
      en: "Geographic Synergy Focus",
      de: "Geografischer Fokus für Synergien",
      fr: "Focus Géographique des Synergies",
      it: "Focus Geografico delle Sinergie",
      ro: "Focalizare Geografică a Sinergiilor"
    }),
    items: [
      {
        country: t({ es: "España", en: "Spain", de: "Spanien", fr: "Espagne", it: "Spagna", ro: "Spania" }),
        role: t({ es: "Asociación AAIA (Sede Tecnológica)", en: "AAIA Association (Tech Hub)", de: "AAIA-Vereinigung (Technologiezentrum)", fr: "Association AAIA (Centre Technologique)", it: "Associazione AAIA (Hub Tecnologico)", ro: "Asociația AAIA (Centrul Tehnologic)" })
      },
      {
        country: t({ es: "Grecia", en: "Greece", de: "Griechenland", fr: "Grèce", it: "Grecia", ro: "Grecia" }),
        role: t({ es: "Asociaciones locales y Cooperativas Sociales", en: "Local Associations & Social Cooperatives", de: "Lokale Verbände & Sozialgenossenschaften", fr: "Associations locales & Coopératives Sociales", it: "Associazioni locali e Cooperative Sociali", ro: "Asociații locale și Cooperative Sociale" })
      },
      {
        country: t({ es: "Turquía", en: "Turkey", de: "Türkei", fr: "Turquie", it: "Turchia", ro: "Turcia" }),
        role: t({ es: "Centros de Formación y ONGs de Emprendimiento", en: "Training Centers & Entrepreneurship NGOs", de: "Schulungszentren & NGOs für Unternehmertum", fr: "Centres de formation & ONG d'entrepreneuriat", it: "Centri di Formazione e ONG per l'Imprenditoria", ro: "Centre de Formare și ONG-uri de Antreprenoriat" })
      },
      {
        country: t({ es: "Portugal", en: "Portugal", de: "Portugal", fr: "Portugal", it: "Portogallo", ro: "Portugalia" }),
        role: t({ es: "Iniciativas de Capacitación Tecnológica y Género", en: "Gender & Tech Capacity Building Initiatives", de: "Initiativen zum Aufbau von Technologie- und Genderkapazitäten", fr: "Initiatives de renforcement des capacités technologiques & de genre", it: "Iniziative di Sviluppo di Capacità Tecnologiche e di Genere", ro: "Inițiative de Consolidare a Capacităților Tehnologice și de Gen" })
      },
      {
        country: t({ es: "Rumanía", en: "Romania", de: "Rumänien", fr: "Roumanie", it: "Romania", ro: "România" }),
        role: t({ es: "Sistemas de Integración Digital Educativa", en: "Digital Educational Integration Systems", de: "Systeme zur digitalen Bildungsintegration", fr: "Systèmes d'intégration du numérique éducatif", it: "Sistemi di Integrazione Digitale Educativa", ro: "Sisteme de Integrare Digitală Educațională" })
      }
    ]
  };

  return (
    <div className="py-20 bg-slate-50 dark:bg-[#030712] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Language & Header Navigation Row */}
        <div className="flex justify-between items-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            <span className="material-icons-round text-sm">public</span>
            {currentContent.badge}
          </span>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            {currentContent.title}
          </h2>
          <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400">
            {currentContent.subtitle}
          </p>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Introduction Panel */}
        <div className="grid md:grid-cols-12 gap-8 items-center mb-20">
          <div className="md:col-span-7 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white leading-tight">
              {currentContent.introTitle}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              {currentContent.introDesc}
            </p>
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/50 dark:from-slate-900 dark:to-slate-900/50 border border-blue-100/50 dark:border-slate-800/80">
              <h4 className="text-lg font-extrabold text-blue-900 dark:text-blue-400 mb-2 flex items-center gap-2">
                <span className="material-icons-round text-blue-600 dark:text-blue-400">star_purple500</span>
                {currentContent.targetAudienceHeader}
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {currentContent.targetAudienceDesc}
              </p>
            </div>
          </div>
          
          <div className="md:col-span-5 relative">
            {/* Visual element representation of international network */}
            <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/5 rounded-3xl blur-2xl" />
            <div className="relative p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <span className="material-icons-round text-9xl">travel_explore</span>
              </div>
              <h4 className="font-black text-slate-800 dark:text-white text-lg mb-4 flex items-center gap-2">
                <span className="material-icons-round text-primary">hub</span>
                {geographicFocus.title}
              </h4>
              
              <div className="space-y-4">
                {geographicFocus.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </span>
                    <div>
                      <h5 className="font-extrabold text-sm text-slate-900 dark:text-slate-100">{item.country}</h5>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{item.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pillars / Competence Grid */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-black text-center text-slate-900 dark:text-white mb-12">
            {currentContent.pillarsTitle}
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentContent.pillars.map((pillar, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-icons-round text-2xl">{pillar.icon}</span>
                </div>
                <h4 className="font-extrabold text-slate-900 dark:text-white text-lg mb-2">
                  {pillar.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight Stats Row */}
        <div className="grid sm:grid-cols-3 gap-8 p-8 rounded-3xl bg-blue-600 text-white shadow-xl mb-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-20" />
          {currentContent.stats.map((stat, index) => (
            <div key={index} className="relative z-10 space-y-1">
              <p className="text-3xl md:text-4xl font-black tracking-tight">{stat.value}</p>
              <p className="text-xs md:text-sm text-blue-100 font-medium px-4">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Call to Action Container */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-indigo-900 to-slate-950 text-white border border-indigo-500/20 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20" />
          
          <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <h3 className="text-2xl md:text-3xl font-black tracking-tight">
                {currentContent.ctaTitle}
              </h3>
              <p className="text-indigo-200 text-base leading-relaxed max-w-2xl">
                {currentContent.ctaDesc}
              </p>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-300 pt-2">
                <span className="flex items-center gap-1">
                  <span className="material-icons-round text-green-400 text-base">check_circle</span>
                  {t({
                    es: "Socio de confianza",
                    en: "Trusted Partner",
                    de: "Vertrauenswürdiger Partner",
                    fr: "Partenaire de confiance",
                    it: "Partner di fiducia",
                    ro: "Partener de încredere"
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-icons-round text-green-400 text-base">check_circle</span>
                  {t({
                    es: "Cumplimiento UE",
                    en: "EU Aligned",
                    de: "EU-konform",
                    fr: "Conformité UE",
                    it: "Conformità UE",
                    ro: "Conformitate UE"
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-icons-round text-green-400 text-base">check_circle</span>
                  {t({
                    es: "Sello Ético",
                    en: "Ethical AI Certified",
                    de: "Ethisches Siegel",
                    fr: "Label Éthique",
                    it: "Marchio Etico",
                    ro: "Sigiliu Etic"
                  })}
                </span>
              </div>
            </div>
            
            <div className="md:col-span-4 text-left md:text-right">
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-black rounded-xl hover:bg-blue-50 transition-colors shadow-lg shadow-black/30 text-sm active:scale-95 duration-150"
              >
                <span className="material-icons-round text-primary">mail</span>
                {currentContent.ctaButton}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InternationalCooperation;
