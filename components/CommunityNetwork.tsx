import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

interface CommunityNetworkProps {
  onContactClick: () => void;
}

interface ProposalItem {
  id: string;
  isFoundational: boolean;
  name: string;
  role: string;
  org: string;
  country: string;
  title: Record<string, string>;
  desc: Record<string, string>;
  lookingFor: Record<string, string>;
  contact: string;
  date: string;
}

interface MentorProfile {
  name: string;
  expertise: Record<string, string>;
  role: string;
  languages: string[];
  pic: string;
}

const CommunityNetwork: React.FC<CommunityNetworkProps> = ({ onContactClick }) => {
  const { language: lang, setLanguage: setLang } = useLanguage();
  const [activeTab, setActiveTab] = useState<'network' | 'mentorship'>('network');
  
  // Interactive state for alliance submissions
  const [proposals, setProposals] = useState<ProposalItem[]>([]);
  const [showForm, setShowForm] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    org: '',
    country: 'España',
    titleEs: '',
    titleEn: '',
    descEs: '',
    descEn: '',
    lookingEs: '',
    lookingEn: '',
    contact: ''
  });
  
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Initialize proposals with foundational European-Mediterranean cooperation templates
  useEffect(() => {
    const saved = localStorage.getItem('aaia_community_proposals');
    if (saved) {
      try {
        setProposals(JSON.parse(saved));
        return;
      } catch (e) {
        console.error("Error loading saved proposals", e);
      }
    }

    const defaultProposals: ProposalItem[] = [
      {
        id: "foundational-1",
        isFoundational: true,
        name: "Eleni Georgiou",
        role: "Directora & Fundadora",
        org: "Hellenic Digital Equality Hub",
        country: "Grecia",
        title: {
          es: "Alfabetización en IA para colectivos vulnerables (Erasmus+)",
          en: "AI Literacy for Vulnerable Groups (Erasmus+)",
          de: "KI-Kompetenz für gefährdete Gruppen (Erasmus+)",
          fr: "Alphabétisation en IA pour les groupes vulnérables (Erasmus+)",
          it: "Alfabetizzazione all'IA per gruppi vulnerabili (Erasmus+)",
          ro: "Alfabetizarea în IA pentru grupuri vulnerabile (Erasmus+)"
        },
        desc: {
          es: "Buscamos transferir y adaptar metodologías de capacitación técnica básica en herramientas generativas para colectivos desempleados del sector turístico mediterráneo.",
          en: "We aim to transfer and adapt basic training methodologies in generative tools for unemployed cohorts in the Mediterranean tourism sector.",
          de: "Unser Ziel ist es, grundlegende Schulungsmethoden für generative Werkzeuge für arbeitslose Gruppen im mediterranen Tourismussektor zu übertragen und anzupassen.",
          fr: "Nous visons à transférer et adapter les méthodologies de formation de base aux outils génératifs pour les cohortes de chômeurs du secteur du tourisme méditerranéen.",
          it: "Miriamo a trasferire e adattare metodologie di formazione di base sugli strumenti generativi per coorti di disoccupati nel settore turistico mediterraneo.",
          ro: "Ne propunem să transferăm și să adaptăm metodologii de formare de bază în instrumente generative pentru grupurile de șomeri din sectorul turismului mediteranean."
        },
        lookingFor: {
          es: "Socio tecnológico en España con experiencia en interfaces accesibles y pedagogía aplicada.",
          en: "Technology partner in Spain with experience in accessible interfaces and applied pedagogy.",
          de: "Technologiepartner in Spanien mit Erfahrung in barrierefreien Schnittstellen und angewandter Pädagogik.",
          fr: "Partenaire technologique en Espagne ayant une expérience des interfaces accessibles et de la pédagogie appliquée.",
          it: "Partner tecnologico in Spagna con esperienza in interfacce accessibili e pedagogia applicata.",
          ro: "Partener tehnologic în Spania cu experiență în interfețe accesibile și pedagogie aplicată."
        },
        contact: "contact@hellenicdigitalequality.org",
        date: "Fundación"
      },
      {
        id: "foundational-2",
        isFoundational: true,
        name: "Beatriz Oliveira",
        role: "Co-fundadora",
        org: "Inovação Social Algarve",
        country: "Portugal",
        title: {
          es: "Detección de sesgos en algoritmos locales de empleo",
          en: "Bias detection in localized employment algorithms",
          de: "Erkennung von Verzerrungen in lokalen Beschäftigungsalgorithmen",
          fr: "Détection des biais dans les algorithmes locaux d'emploi",
          it: "Rilevamento dei bias negli algoritmi di impiego localizzati",
          ro: "Detectarea prejudecăților în algoritmii de angajare localizați"
        },
        desc: {
          es: "Iniciativa de gobernanza algorítmica participativa para evaluar y mitigar los sesgos de género en las plataformas automatizadas de ofertas de empleo rural.",
          en: "Participatory algorithmic governance initiative to evaluate and mitigate gender biases in automated rural job boards.",
          de: "Partizipative Initiative zur algorithmischen Governance zur Bewertung und Minderung von geschlechtsspezifischen Verzerrungen in automatisierten ländlichen Jobbörsen.",
          fr: "Initiative de gouvernance algorithmique participative pour évaluer et atténuer les biais de genre dans les plateformes automatisées d'emploi rural.",
          it: "Iniziativa di governance algoritmica partecipativa per valutare e mitigare i pregiudizi di genere nelle piattaforme automatizzate di lavoro rurale.",
          ro: "Inițiativă de guvernanță algoritmică participativă pentru evaluarea și atenuarea prejudecăților de gen în platformele automatizate de locuri de muncă rurale."
        },
        lookingFor: {
          es: "Expertas en auditoría ética de datos y profesionales de IA con experiencia en modelos de lenguaje natural.",
          en: "Experts in ethical data auditing and AI professionals with experience in natural language models.",
          de: "Experten für ethische Datenauditierung und KI-Spezialisten mit Erfahrung in Modellen der natürlichen Sprache.",
          fr: "Experts en audit éthique des données et professionnels de l'IA ayant une expérience des modèles de naturel.",
          it: "Esperti in auditing etico dei dati e professionisti dell'IA con esperienza nei modelli di linguaggio naturale.",
          ro: "Experți în auditarea etică a datelor și profesioniști în IA cu experiență în modele de limbaj natural."
        },
        contact: "cooperacao@inovacaosocialalgarve.pt",
        date: "Fundación"
      },
      {
        id: "foundational-3",
        isFoundational: true,
        name: "Daria Popescu",
        role: "Coordinadora de Proyectos",
        org: "Carpathian Digital Inclusion Initiative",
        country: "Rumanía",
        title: {
          es: "Guías didácticas sobre Inteligencia Artificial Explicable (XAI)",
          en: "Didactic guidelines on Explainable Artificial Intelligence (XAI)",
          de: "Didaktische Richtlinien zur erklärbaren künstlichen Intelligenz (XAI)",
          fr: "Directives didactiques sur l'intelligence artificielle explicable (XAI)",
          it: "Linee guida didattiche sull'intelligenza artificiale spiegabile (XAI)",
          ro: "Ghiduri didactice privind Inteligența Artificială Explicabilă (XAI)"
        },
        desc: {
          es: "Creación de un marco metodológico común adaptado a docentes de secundaria para desmitificar la IA en las aulas, promoviendo el pensamiento crítico ético.",
          en: "Creation of a common methodological framework adapted for high school teachers to demystify AI in classrooms, fostering ethical critical thinking.",
          de: "Schaffung eines gemeinsamen methodischen Rahmens für Sekundarschullehrer, um KI in Klassenzimmern zu entmystifizieren und ethisches kritisches Denken zu fördern.",
          fr: "Création d'un cadre méthodologique commun adapté aux enseignants du secondaire pour démystifier l'IA dans les classes, favorisant la pensée critique éthique.",
          it: "Creazione di un quadro metodologico comune adatto agli insegnanti delle scuole superiori per demistificare l'IA nelle aule, promuovendo il passaggio a un pensiero critico etico.",
          ro: "Crearea unui cadru metodologic comun adaptat profesorilor de liceu pentru a demistifica IA în sălile de clasă, promovând gândirea critică etică."
        },
        lookingFor: {
          es: "Asociaciones educativas españolas con experiencia en materiales curriculares interactivos sobre ética digital.",
          en: "Spanish educational associations with experience in interactive curricular materials on digital ethics.",
          de: "Spanische Bildungsverbände mit Erfahrung mit interaktiven Lehrplanmaterialien zur digitalen Ethik.",
          fr: "Associations éducatives espagnoles ayant une expérience des matériels curriculaires interactifs sur l'éthique numérique.",
          it: "Associazioni educative spagnole con esperienza in materiali curricolari interattivi sull'etica digitale.",
          ro: "Asociații educaționale spaniole cu experiență în materiale curriculare interactive privind etica digitală."
        },
        contact: "daria.popescu@carpathianinclusion.ro",
        date: "Fundación"
      }
    ];
    setProposals(defaultProposals);
    localStorage.setItem('aaia_community_proposals', JSON.stringify(defaultProposals));
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.org || !formData.contact || !formData.titleEs || !formData.descEs) {
      alert(lang === 'es' ? 'Por favor, rellene los campos obligatorios (*).' : 'Please fill in the required fields (*).');
      return;
    }

    const newProposal: ProposalItem = {
      id: "user-" + Date.now(),
      isFoundational: false,
      name: formData.name,
      role: formData.role || (lang === 'es' ? 'Representante' : 'Representative'),
      org: formData.org,
      country: formData.country,
      title: {
        es: formData.titleEs,
        en: formData.titleEn || formData.titleEs
      },
      desc: {
        es: formData.descEs,
        en: formData.descEn || formData.descEs
      },
      lookingFor: {
        es: formData.lookingEs,
        en: formData.lookingEn || formData.lookingEs
      },
      contact: formData.contact,
      date: new Date().toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US')
    };

    const updated = [newProposal, ...proposals];
    setProposals(updated);
    localStorage.setItem('aaia_community_proposals', JSON.stringify(updated));

    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setShowForm(false);
      // Reset form
      setFormData({
        name: '',
        role: '',
        org: '',
        country: 'España',
        titleEs: '',
        titleEn: '',
        descEs: '',
        descEn: '',
        lookingEs: '',
        lookingEn: '',
        contact: ''
      });
    }, 2000);
  };

  // AAIA Tech & Ethics Mentors
  const mentors: MentorProfile[] = [
    {
      name: "Fernando Nieto",
      expertise: {
        es: "Generación Audiovisual, Inteligencia Artificial Creativa y Publicidad de Impacto Social.",
        en: "Audiovisual Generation, Creative Artificial Intelligence and Social Impact Advertising.",
        de: "Audiovisuelle Erstellung, kreative künstliche Intelligenz und Werbung für soziale Auswirkungen.",
        fr: "Génération audiovisuelle, intelligence artificielle créative et publicité à impact social.",
        it: "Generazione audiovisiva, intelligenza artificiale creativa e pubblicità a impatto sociale.",
        ro: "Generare audiovizuală, inteligență artificială creativă și publicitate cu impact social."
      },
      role: "Creative Director & AI Audiovisual Specialist",
      languages: ["Spanish"],
      pic: "FN"
    },
    {
      name: "Hector Barbosa",
      expertise: {
        es: "Arquitectura Cloud, Integración de APIs de IA y Desarrollo de Plataformas de Impacto.",
        en: "Cloud Architecture, AI API Integration and Impact Platform Development.",
        de: "Cloud-Architektur, KI-API-Integration und Entwicklung von Plattformen mit sozialer Wirkung.",
        fr: "Architecture cloud, intégration d'API d'IA et développement de plateformes d'impact.",
        it: "Architettura cloud, integrazione di API di IA e sviluppo di piattaforme d'impatto.",
        ro: "Arhitectură cloud, integrare API-uri de IA și dezvoltare de platforme de impact."
      },
      role: "Senior Full-Stack Developer & Solutions Architect",
      languages: ["Spanish"],
      pic: "HB"
    },
    {
      name: "Diana Redondo",
      expertise: {
        es: "Estrategia de Comunicación, Divulgación Tecnológica y Redes de Impacto Social.",
        en: "Communication Strategy, Tech Outreach and Social Impact Networks.",
        de: "Kommunikationsstrategie, technologische Reichweite und soziale Impact-Netzwerke.",
        fr: "Stratégie de communication, vulgarisation technologique et réseaux d'impact social.",
        it: "Strategia di comunicazione, divulgazione tecnologica e reti di impatto sociale.",
        ro: "Strategie de comunicare, popularizare tehnologică și rețele de impact social."
      },
      role: "Communication & Impact Strategy Consultant",
      languages: ["Spanish", "English", "Deutsch"],
      pic: "DR"
    }
  ];

  const content = {
    es: {
      badge: "Comunidad y Mentoría",
      title: "El Network de Líderes",
      subtitle: "Mediterranean Women in AI & Impact",
      desc: "Un ecosistema de alianzas estratégicas para fundadoras de asociaciones, líderes del sector social y directivas que buscan co-diseñar soluciones con inteligencia artificial y ética en el arco mediterráneo.",
      tabNetwork: "Tablón de Alianzas y Cooperación",
      tabMentorship: "Programa de Mentoría Tecnológica",
      
      // Network section
      networkHeading: "Espacio de Encuentro Multilateral de Sinergias",
      networkSub: "No necesita una base de contactos previa para empezar. El 'Network' de Líderes actúa como un tablón de anuncios abierto donde asociaciones de España, Grecia, Turquía, Portugal y Rumanía publican sus necesidades técnicas para presentarse juntas a consorcios, validar herramientas y recibir ayuda altruista. ¡Publique la suya hoy mismo!",
      lookingLabel: "Buscando actualmente:",
      connectButton: "Escribir para colaborar",
      cardBadge: "Sinergia Propuesta",
      foundationalBadge: "Lanzamiento AAIA",
      
      // Bulletin Board Form
      formTitle: "Publicar propuesta en el Tablón de la Red",
      formSubtitle: "Rellene el formulario para que otras asociaciones y tecnólogos del ecosistema mediterráneo puedan ver su propuesta y ponerse en contacto de forma directa.",
      formRequiredFields: "Los campos marcados con (*) son obligatorios.",
      formName: "Su Nombre y Apellidos *",
      formRole: "Cargo / Función",
      formOrg: "Organización / Asociación *",
      formCountry: "País de Origen *",
      formTitleEs: "Título de la Propuesta (Español) *",
      formTitleEn: "Título de la Propuesta (Inglés - Opcional)",
      formDescEs: "Breve Descripción del Proyecto (Español) *",
      formDescEn: "Breve Descripción (Inglés - Opcional)",
      formLookingEs: "¿Qué perfil técnico o socio busca? (Español) *",
      formLookingEn: "¿Qué busca? (Inglés - Opcional)",
      formContact: "Email de Contacto Oficial *",
      formSubmitBtn: "Publicar Propuesta de Sinergia",
      formCancelBtn: "Cancelar",
      formSuccessMessage: "¡Propuesta publicada con éxito en el tablón!",
      
      // Empty Board
      emptyBoardTitle: "No hay propuestas de alianzas registradas.",
      emptyBoardDesc: "Sea la primera organización en proponer una alianza internacional para el desarrollo tecnológico.",

      // Mentorship section
      mentorshipHeading: "Tutorización Tecnológica y Ética para sus Proyectos",
      mentorshipSub: "Profesionales de la IA dentro de la AAIA asesoran de forma directa y altruista a asociaciones y ONGs internacionales en la estructuración de sus proyectos de impacto social.",
      mentorshipFeaturesTitle: "¿En qué consiste el acompañamiento técnico?",
      mentorshipFeatures: [
        {
          title: "Auditoría Ética Preliminar",
          desc: "Evaluamos si los sistemas de IA contemplados en su proyecto cumplen con la normativa europea de protección de datos (RGPD) y el AI Act."
        },
        {
          title: "Diseño de Plan de Trabajo Técnico",
          desc: "Ayudamos a redactar la sección técnica o metodológica de sus propuestas de financiación europea para asegurar solidez y viabilidad."
        },
        {
          title: "Estructura de Datos Inclusiva",
          desc: "Asesoramiento para evitar sesgos discriminatorios en la captación de información o el entrenamiento de modelos."
        }
      ],
      mentorsHeading: "Mentores de la AAIA a su Disposición",
      requestMentorshipBtn: "Solicitar Mentoría Tecnológica",
      offerMentorshipBtn: "Quiero ser Mentor/a de la Red",
      languagesLabel: "Idiomas de mentoría:",
      bottomHeading: "¿Quiere participar de forma multilateral?",
      bottomDesc: "El ecosistema promueve la copresentación a convocatorias europeas (Horizon Europe, Erasmus+, Creative Europe). Si su organización no tiene un proyecto técnico definido, le ayudamos a estructurarlo.",
      scheduleSessionBtn: "Agendar Sesión de Alianzas",
      howToRequestTitle: "¿Cómo solicitar el soporte?",
      howToRequestDesc: "Evaluamos su idea, el alcance técnico y le asignamos un/a profesional especialista del ecosistema de la AAIA en base a su necesidad idiomática y técnica.",
      contactLinkText: "Contactar"
    },
    en: {
      badge: "Community & Mentorship",
      title: "The Leaders' Network",
      subtitle: "Mediterranean Women in AI & Impact",
      desc: "An ecosystem of strategic alliances designed for association founders, social leaders, and executives seeking to co-design ethical AI solutions across the Mediterranean region.",
      tabNetwork: "Alliance & Cooperation Bulletin Board",
      tabMentorship: "Technical Mentorship Program",
      
      // Network section
      networkHeading: "Multilateral Synergy Meeting Point",
      networkSub: "You do not need a pre-existing contact list to start. The Leaders' Network acts as an open bulletin board where associations from Spain, Greece, Turkey, Portugal, and Romania post their technical needs to build joint consortia, validate tools, and find support. Post yours today!",
      lookingLabel: "Currently looking for:",
      connectButton: "Message to Collaborate",
      cardBadge: "Proposed Synergy",
      foundationalBadge: "AAIA Launch",

      // Bulletin Board Form
      formTitle: "Post Proposal on the Network Board",
      formSubtitle: "Fill out this form so other associations and technologists from the Mediterranean ecosystem can see your proposal and contact you directly.",
      formRequiredFields: "Fields marked with (*) are required.",
      formName: "Your Full Name *",
      formRole: "Position / Role",
      formOrg: "Organization / Association *",
      formCountry: "Country of Origin *",
      formTitleEs: "Proposal Title (Spanish) *",
      formTitleEn: "Proposal Title (English - Optional)",
      formDescEs: "Short Project Description (Spanish) *",
      formDescEn: "Short Description (English - Optional)",
      formLookingEs: "What technical profile/partner are you looking for? (Spanish) *",
      formLookingEn: "What are you looking for? (English - Optional)",
      formContact: "Official Contact Email *",
      formSubmitBtn: "Publish Synergy Proposal",
      formCancelBtn: "Cancel",
      formSuccessMessage: "Proposal published successfully on the board!",

      // Empty Board
      emptyBoardTitle: "No alliance proposals registered.",
      emptyBoardDesc: "Be the first organization to propose an international alliance for digital development.",

      // Mentorship section
      mentorshipHeading: "Technical & Ethical Guidance for your Projects",
      mentorshipSub: "AI experts and engineers from AAIA provide direct pro-bono advice and tutoring to international associations and NGOs to structure their social impact initiatives.",
      mentorshipFeaturesTitle: "What does the technical tutoring cover?",
      mentorshipFeatures: [
        {
          title: "Preliminary Ethical Audit",
          desc: "We review whether the AI systems planned for your proposal align with EU data protection rules (GDPR) and the European AI Act."
        },
        {
          title: "Technical Work Package Design",
          desc: "We assist in writing the technical or methodological sections of your European funding proposals to guarantee viability and quality."
        },
        {
          title: "Inclusive Data Structure",
          desc: "Advising on data architecture models that proactively mitigate discriminatory, cultural, or gender biases."
        }
      ],
      mentorsHeading: "Available AAIA Mentors",
      requestMentorshipBtn: "Request Technical Mentorship",
      offerMentorshipBtn: "Become a Mentor in the Network",
      languagesLabel: "Mentoring languages:",
      bottomHeading: "Do you want to participate multilaterally?",
      bottomDesc: "The ecosystem promotes joint submissions to European grants (Horizon Europe, Erasmus+, Creative Europe). If your organization doesn't have a defined technical roadmap, we help you structure it.",
      scheduleSessionBtn: "Schedule Alliances Session",
      howToRequestTitle: "How to request tutoring?",
      howToRequestDesc: "We evaluate your project idea, identify technical needs, and assign an AAIA expert based on language skills and technical requirements.",
      contactLinkText: "Connect"
    },
    de: {
      badge: "Gemeinschaft & Mentoring",
      title: "Das Netzwerk der Führungskräfte",
      subtitle: "Mediterranean Women in AI & Impact",
      desc: "Ein Ökosystem strategischer Allianzen für Vereinsgründerinnen, Führungskräfte im sozialen Sektor und Managerinnen, die ethische KI-Lösungen im Mittelmeerraum mitgestalten möchten.",
      tabNetwork: "Allianzen- & Kooperationsbörse",
      tabMentorship: "Technisches Mentoring-Programm",
      
      // Network section
      networkHeading: "Multilateraler Treffpunkt für Synergien",
      networkSub: "Sie benötigen keine bestehende Kontaktliste, um zu starten. Das Netzwerk der Führungskräfte fungiert als offenes Schwarzes Brett, auf dem Verbände aus Spanien, Griechenland, der Türkei, Portugal und Rumänien ihre technischen Bedürfnisse veröffentlichen, um gemeinsame Konsortien zu bilden, Tools zu validieren und Unterstützung zu finden. Veröffentlichen Sie Ihre noch heute!",
      lookingLabel: "Aktuell auf der Suche nach:",
      connectButton: "Nachricht senden, um zu kooperieren",
      cardBadge: "Vorgeschlagene Synergie",
      foundationalBadge: "AAIA Start",
      
      // Bulletin Board Form
      formTitle: "Vorschlag auf dem Netzwerk-Board veröffentlichen",
      formSubtitle: "Füllen Sie dieses Formular aus, damit andere Verbände und Technologen des Mittelmeer-Ökosystems Ihren Vorschlag sehen und Sie direkt kontaktieren können.",
      formRequiredFields: "Mit (*) markierte Felder sind Pflichtfelder.",
      formName: "Ihr vollständiger Name *",
      formRole: "Position / Rolle",
      formOrg: "Organisation / Verband *",
      formCountry: "Herkunftsland *",
      formTitleEs: "Titel des Vorschlags (Spanisch) *",
      formTitleEn: "Titel des Vorschlags (Englisch - Optional)",
      formDescEs: "Kurze Projektbeschreibung (Spanisch) *",
      formDescEn: "Kurze Beschreibung (Englisch - Optional)",
      formLookingEs: "Welches technische Profil/Partner suchen Sie? (Spanisch) *",
      formLookingEn: "Wonach suchen Sie? (Englisch - Optional)",
      formContact: "Offizielle Kontakt-E-Mail *",
      formSubmitBtn: "Synergievorschlag veröffentlichen",
      formCancelBtn: "Abbrechen",
      formSuccessMessage: "Vorschlag erfolgreich auf dem Board veröffentlicht!",
      
      // Empty Board
      emptyBoardTitle: "Keine Allianz-Vorschläge registriert.",
      emptyBoardDesc: "Seien Sie die erste Organisation, die eine internationale Allianz für digitale Entwicklung vorschlägt.",

      // Mentorship section
      mentorshipHeading: "Technische & ethische Beratung für Ihre Projekte",
      mentorshipSub: "KI-Experten und Ingenieure der AAIA beraten und betreuen ehrenamtlich internationale Verbände und NGOs bei der Strukturierung ihrer sozialen Initiativen.",
      mentorshipFeaturesTitle: "Was umfasst die technische Betreuung?",
      mentorshipFeatures: [
        {
          title: "Vorläufiges ethisches Audit",
          desc: "Wir prüfen ob die für Ihr Projekt geplanten KI-Systeme mit den EU-Datenschutzregeln (DSGVO) und dem AI Act übereinstimmen."
        },
        {
          title: "Gestaltung technischer Arbeitspakete",
          desc: "Wir unterstützen Sie bei der Ausarbeitung der technischen oder methodischen Abschnitte Ihrer europäischen Förderanträge, um deren Realisierbarkeit und Qualität zu garantieren."
        },
        {
          title: "Inklusive Datenstruktur",
          desc: "Beratung zu Datenarchitekturmodellen, die proaktiv diskriminierende, kulturelle oder geschlechtsspezifische Verzerrungen minimieren."
        }
      ],
      mentorsHeading: "Verfügbare AAIA-Mentoren",
      requestMentorshipBtn: "Technisches Mentoring anfordern",
      offerMentorshipBtn: "Mentor im Netzwerk werden",
      languagesLabel: "Mentoring-Sprachen:",
      bottomHeading: "Möchten Sie sich multilateral beteiligen?",
      bottomDesc: "Das Ökosystem fördert die gemeinsame Einreichung von Anträgen für europäische Zuschüsse (Horizon Europe, Erasmus+, Creative Europe). Wenn Ihr Verband über keinen definierten technischen Fahrplan verfügt, unterstützen wir Sie bei dessen Strukturierung.",
      scheduleSessionBtn: "Allianz-Sitzung vereinbaren",
      howToRequestTitle: "Wie kann man Unterstützung anfordern?",
      howToRequestDesc: "Wir bewerten Ihre Projektidee, identifizieren den technischen Bedarf und weisen Ihnen einen AAIA-Spezialisten zu, der auf Ihren sprachlichen und technischen Anforderungen basiert.",
      contactLinkText: "Kontaktieren"
    },
    fr: {
      badge: "Communauté & Mentorat",
      title: "Le Réseau des Leaders",
      subtitle: "Mediterranean Women in AI & Impact",
      desc: "Un écosystème d'alliances stratégiques conçu pour les fondatrices d'associations, les leaders du secteur social et les cadres cherchant à co-concevoir des solutions d'IA éthiques dans la région méditerranéenne.",
      tabNetwork: "Tableau d'Alliances & Coopération",
      tabMentorship: "Programme de Mentorat Technique",
      
      // Network section
      networkHeading: "Point de Rencontre Synergique Multilatéral",
      networkSub: "Vous n'avez pas besoin d'une liste de contacts préexistante pour commencer. Le Réseau des Leaders agit comme un tableau d'affichage ouvert où les associations d'Espagne, de Grèce, de Turquie, de Portugal et de Roumanie publient leurs besoins techniques pour construire des consortiums conjoints, valider des outils et trouver du soutien. Publiez le vôtre aujourd'hui !",
      lookingLabel: "Recherche actuellement :",
      connectButton: "Envoyer un message pour collaborer",
      cardBadge: "Synergie Proposée",
      foundationalBadge: "Lancement AAIA",
      
      // Bulletin Board Form
      formTitle: "Publier une proposition sur le tableau du réseau",
      formSubtitle: "Remplissez ce formulaire pour que les autres associations et technologues de l'écosystème méditerranéen puissent voir votre proposition et vous contacter directement.",
      formRequiredFields: "Les champs marqués d'une (*) sont obligatoires.",
      formName: "Votre nom complet *",
      formRole: "Poste / Rôle",
      formOrg: "Organisation / Association *",
      formCountry: "Pays d'origine *",
      formTitleEs: "Titre de la proposition (Espagnol) *",
      formTitleEn: "Titre de la proposition (Anglais - Optionnel)",
      formDescEs: "Brève description du projet (Espagnol) *",
      formDescEn: "Brève description (Anglais - Optionnel)",
      formLookingEs: "Quel profil technique/partenaire recherchez-vous ? (Espagnol) *",
      formLookingEn: "Que recherchez-vous ? (Anglais - Optionnel)",
      formContact: "E-mail de contact officiel *",
      formSubmitBtn: "Publier la proposition de synergie",
      formCancelBtn: "Annuler",
      formSuccessMessage: "Proposition publiée avec succès sur le tableau !",
      
      // Empty Board
      emptyBoardTitle: "Aucune proposition d'alliance enregistrée.",
      emptyBoardDesc: "Soyez la première organisation à proposer une alliance internationale pour le développement numérique.",

      // Mentorship section
      mentorshipHeading: "Accompagnement Technique & Éthique pour vos Projets",
      mentorshipSub: "Les experts en IA et ingénieurs de l'AAIA fournissent des conseils et du tutorat pro-bono directs aux associations internationales et aux ONG pour structurer leurs initiatives d'impact social.",
      mentorshipFeaturesTitle: "Que couvre le tutorat technique ?",
      mentorshipFeatures: [
        {
          title: "Audit éthique préliminaire",
          desc: "Nous vérifions si les systèmes d'IA prévus pour votre projet sont conformes aux règles de l'UE sur la protection des données (RGPD) et à l'AI Act."
        },
        {
          title: "Conception du plan de travail technique",
          desc: "Nous vous aidons à rédiger les sections techniques ou méthodologiques de vos propositions de financement européen pour garantir leur viabilité et leur qualité."
        },
        {
          title: "Structure de données inclusive",
          desc: "Conseils sur les modèles d'architecture de données qui atténuent de manière proactive les biais discriminatoires, culturels ou de genre."
        }
      ],
      mentorsHeading: "Mentors de l'AAIA Disponibles",
      requestMentorshipBtn: "Demander un Mentorat Technique",
      offerMentorshipBtn: "Devenir Mentor dans le Réseau",
      languagesLabel: "Langues de mentorat :",
      bottomHeading: "Voulez-vous participer de manière multilatérale ?",
      bottomDesc: "L'écosystème favorise la soumission conjointe de propositions aux subventions européennes (Horizon Europe, Erasmus+, Creative Europe). Si votre organisation n'a pas de feuille de route technique définie, nous vous aidons à la structurer.",
      scheduleSessionBtn: "Planifier une session d'alliances",
      howToRequestTitle: "Comment demander de l'aide ?",
      howToRequestDesc: "Nous évaluons votre idée de projet, identifions les besoins techniques et vous attribuons un expert de l'AAIA en fonction de vos besoins linguistiques et techniques.",
      contactLinkText: "Contacter"
    },
    it: {
      badge: "Comunità & Mentorship",
      title: "Il Network dei Leader",
      subtitle: "Mediterranean Women in AI & Impact",
      desc: "Un ecosistema di alleanze strategiche progettato per fondatrici di associazioni, leader del settore sociale e dirigenti che desiderano co-progettare soluzioni di IA etica nell'area mediterranea.",
      tabNetwork: "Bacheca delle Alleanze & Cooperazione",
      tabMentorship: "Programma di Mentorship Tecnologica",
      
      // Network section
      networkHeading: "Punto di Incontro Multilaterale per Sinergie",
      networkSub: "Non hai bisogno di una lista di contatti preesistente per iniziare. Il Network dei Leader agisce come una bacheca aperta dove le associazioni di Spagna, Grecia, Turchia, Portogallo e Romania pubblicano le proprie esigenze tecniche per presentarsi insieme a consorzi, validare strumenti e trovare supporto. Pubblica la tua proposta oggi stesso!",
      lookingLabel: "Attualmente alla ricerca di:",
      connectButton: "Invia un messaggio per collaborare",
      cardBadge: "Sinergia Proposta",
      foundationalBadge: "Lancio AAIA",
      
      // Bulletin Board Form
      formTitle: "Pubblica proposta sulla bacheca del Network",
      formSubtitle: "Compila questo modulo per consentire ad altre associazioni e tecnologi dell'ecosistema mediterraneo di visualizzare la tua proposta e contattarti direttamente.",
      formRequiredFields: "I campi contrassegnati da (*) sono obbligatori.",
      formName: "Nome e Cognome *",
      formRole: "Ruolo / Posizione",
      formOrg: "Organizzazione / Associazione *",
      formCountry: "Paese di Origine *",
      formTitleEs: "Titolo della Proposta (Spagnolo) *",
      formTitleEn: "Titolo della Proposta (Inglese - Opzionale)",
      formDescEs: "Breve Descrizione del Progetto (Spagnolo) *",
      formDescEn: "Breve Descrizione (Inglese - Opzionale)",
      formLookingEs: "Quale profilo tecnico/partner stai cercando? (Spagnolo) *",
      formLookingEn: "Cosa stai cercando? (Inglese - Opzionale)",
      formContact: "Email di Contatto Ufficiale *",
      formSubmitBtn: "Pubblica Proposta di Sinergia",
      formCancelBtn: "Annulla",
      formSuccessMessage: "Proposta pubblicata con successo sulla bacheca!",
      
      // Empty Board
      emptyBoardTitle: "Nessuna proposta di alleanza registrata.",
      emptyBoardDesc: "Sii la prima organizzazione a proporre un'alleanza internazionale per lo sviluppo digitale.",

      // Mentorship section
      mentorshipHeading: "Guida Tecnica & Etica per i tuoi Progetti",
      mentorshipSub: "Gli esperti di IA e gli ingegneri dell'AAIA forniscono consulenza e tutoraggio pro-bono a associazioni internazionali e ONG per strutturare le loro iniziative di impatto sociale.",
      mentorshipFeaturesTitle: "Cosa copre il tutoraggio tecnico?",
      mentorshipFeatures: [
        {
          title: "Audit etico preliminare",
          desc: "Verifichiamo se i sistemi di IA previsti per il tuo progetto sono conformi alle norme UE sulla protezione dei dati (GDPR) e all'AI Act."
        },
        {
          title: "Progettazione del piano di lavoro tecnico",
          desc: "Ti aiutiamo a redigere le sezioni tecniche o metodologiche delle tue proposte di finanziamento europeo per garantire fattibilità e qualità."
        },
        {
          title: "Struttura dei dati inclusiva",
          desc: "Consulenza sui modelli di architettura dei dati per mitigare in modo proattivo i pregiudizi discriminatori, culturali o di genere."
        }
      ],
      mentorsHeading: "Mentori dell'AAIA Disponibili",
      requestMentorshipBtn: "Richiedi Mentorship Tecnologica",
      offerMentorshipBtn: "Diventa un Mentore nel Network",
      languagesLabel: "Lingue di mentoring:",
      bottomHeading: "Vuoi partecipare in modo multilaterale?",
      bottomDesc: "L'ecosistema promuove la presentazione congiunta di proposte a finanziamenti europei (Horizon Europe, Erasmus+, Creative Europe). Se la tua organizzazione non ha una tabella di marcia tecnica definita, ti aiutiamo a strutturarla.",
      scheduleSessionBtn: "Pianifica sessione alleanze",
      howToRequestTitle: "Come richiedere supporto?",
      howToRequestDesc: "Valutiamo la tua idea di progetto, identifichiamo le esigenze tecniche e ti assegniamo un esperto dell'AAIA in base alle tue esigenze linguistiche e tecniche.",
      contactLinkText: "Contatta"
    },
    ro: {
      badge: "Comunitate și Mentorat",
      title: "Rețeaua Liderilor",
      subtitle: "Mediterranean Women in AI & Impact",
      desc: "Un ecosistem de alianțe strategice conceput pentru fondatoarele de asociații, liderii din sectorul social și directoarele care doresc să co-proiecteze soluții de IA etică în regiunea mediteraneană.",
      tabNetwork: "Panou de Alianțe și Cooperare",
      tabMentorship: "Program de Mentorat Tehnic",
      
      // Network section
      networkHeading: "Punct de Întâlnire Multilateral pentru Sinergii",
      networkSub: "Nu aveți nevoie de o listă de contacte preexistentă pentru a începe. Rețeaua Liderilor acționează ca un panou de afișaj deschis unde asociațiile din Spania, Grecia, Turcia, Portugalia și România își publică nevoile tehnice pentru a construi consorții comune, a valida instrumente și a găsi sprijin. Publicați propunerea dvs. astăzi!",
      lookingLabel: "În prezent caută:",
      connectButton: "Trimite un mesaj pentru colaborare",
      cardBadge: "Sinergie Propusă",
      foundationalBadge: "Lansare AAIA",
      
      // Bulletin Board Form
      formTitle: "Publică propunerea pe panoul rețelei",
      formSubtitle: "Completați acest formular pentru ca alte asociații și tehnologi din ecosistemul mediteranean să poată vedea propunerea dvs. și să vă contacteze direct.",
      formRequiredFields: "Câmpurile marcate cu (*) sunt obligatorii.",
      formName: "Numele și Prenumele dvs. *",
      formRole: "Funcție / Rol",
      formOrg: "Organizație / Asociație *",
      formCountry: "Țara de Origine *",
      formTitleEs: "Titlul Propunerii (Spaniolă) *",
      formTitleEn: "Titlul Propunerii (Engleză - Opțional)",
      formDescEs: "Scurtă Descriere a Proiectului (Spaniolă) *",
      formDescEn: "Scurtă Descriere (Engleză - Opzional)",
      formLookingEs: "Ce profil tehnic/partener căutați? (Spaniolă) *",
      formLookingEn: "Ce căutați? (Engleză - Opțional)",
      formContact: "E-mail de Contact Oficial *",
      formSubmitBtn: "Publică Propunerea de Sinergie",
      formCancelBtn: "Anulează",
      formSuccessMessage: "Propunere publicată cu succes pe panou!",
      
      // Empty Board
      emptyBoardTitle: "Nu sunt înregistrate propuneri de alianță.",
      emptyBoardDesc: "Fiți prima organizație care propune o alianță internațională pentru dezvoltare digitală.",

      // Mentorship section
      mentorshipHeading: "Îndrumare Tehnică și Etică pentru Proiectele dvs.",
      mentorshipSub: "Experții în IA și inginerii din cadrul AAIA oferă consultanță și mentorat pro-bono direct asociațiilor internaționale și ONG-urilor pentru structurarea inițiativelor lor de impact social.",
      mentorshipFeaturesTitle: "Ce acoperă mentoratul tehnic?",
      mentorshipFeatures: [
        {
          title: "Audit Etic Preliminar",
          desc: "Evaluăm dacă sistemele de IA planificate pentru proiectul dvs. respectă reglementările UE privind protecția datelor (GDPR) și AI Act."
        },
        {
          title: "Proiectarea Planului de Lucru Tehnic",
          desc: "Vă ajutăm să redactați secțiunile tehnice sau metodologice ale propunerilor de finanțare europeană pentru a asigura viabilitatea și calitatea acestora."
        },
        {
          title: "Structură de Date Inclusivă",
          desc: "Consiliere privind modelele de arhitectură a datelor care atenuează proactiv prejudecățile discriminatorii, culturale sau de gen."
        }
      ],
      mentorsHeading: "Mentori AAIA Disponibili",
      requestMentorshipBtn: "Solicită Mentorat Tehnic",
      offerMentorshipBtn: "Devino Mentor în Rețea",
      languagesLabel: "Limbi de mentorat:",
      bottomHeading: "Doriți să participați multilateral?",
      bottomDesc: "Ecosistemul promovează trimiterea comună de propuneri la granturi europene (Orizont Europa, Erasmus+, Europa Creativă). Dacă organizația dvs. nu are o foaie de parcurs tehnică definită, vă ajutăm să o structurați.",
      scheduleSessionBtn: "Programează Sesiune de Alianțe",
      howToRequestTitle: "Cum să solicitați asistență?",
      howToRequestDesc: "Evaluăm ideea dvs. de proiect, identificăm nevoile tehnice și vă desemnăm un expert AAIA pe baza cerințelor dvs. lingvistice și tehnice.",
      contactLinkText: "Contactează"
    }
  };

  const t = content[lang];

  return (
    <div className="py-24 bg-white dark:bg-[#020617] border-t border-slate-100 dark:border-slate-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Language & Navigation Header */}
        <div className="flex justify-between items-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            <span className="material-icons-round text-sm">groups</span>
            {t.badge}
          </span>
          
          <div className="flex flex-wrap gap-1 items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200/60 dark:border-slate-700/60 shadow-sm">
            {[
              { code: 'es', label: 'Español' },
              { code: 'en', label: 'English' },
              { code: 'de', label: 'Deutsch' },
              { code: 'fr', label: 'Français' },
              { code: 'it', label: 'Italiano' },
              { code: 'ro', label: 'Română' }
            ].map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code as any)}
                className={`px-2.5 py-1.5 text-xs font-black rounded-lg transition-all ${
                  lang === l.code 
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
            {t.subtitle}
          </p>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base">
            {t.desc}
          </p>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Dynamic Tab Selector */}
        <div className="flex justify-center mb-16">
          <div className="bg-slate-50 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm inline-flex w-full max-w-lg md:w-auto">
            <button
              onClick={() => setActiveTab('network')}
              className={`flex-1 md:flex-initial px-6 py-3.5 rounded-xl text-xs md:text-sm font-black transition-all flex items-center justify-center gap-2 ${
                activeTab === 'network'
                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg shadow-indigo-500/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600'
              }`}
            >
              <span className="material-icons-round text-base">dashboard_customize</span>
              {t.tabNetwork}
            </button>
            <button
              onClick={() => setActiveTab('mentorship')}
              className={`flex-1 md:flex-initial px-6 py-3.5 rounded-xl text-xs md:text-sm font-black transition-all flex items-center justify-center gap-2 ${
                activeTab === 'mentorship'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-blue-600'
              }`}
            >
              <span className="material-icons-round text-base">school</span>
              {t.tabMentorship}
            </button>
          </div>
        </div>

        {/* Tab content 1: Mediterranean Cooperation Bulletin Board */}
        {activeTab === 'network' && (
          <div className="space-y-12 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="max-w-3xl">
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-3">
                  {t.networkHeading}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  {t.networkSub}
                </p>
              </div>
              
              {!showForm && (
                <button
                  onClick={() => setShowForm(true)}
                  className="px-6 py-3.5 rounded-xl text-xs font-black bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/20 flex items-center gap-2 transition-colors shrink-0"
                >
                  <span className="material-icons-round text-base">add_circle</span>
                  {lang === 'es' ? "Proponer una Sinergia" : "Propose a Synergy"}
                </button>
              )}
            </div>

            {/* Dynamic Interactive Synergy Form */}
            {showForm && (
              <div className="bg-slate-50 dark:bg-slate-900/60 p-6 md:p-8 rounded-3xl border-2 border-dashed border-indigo-200 dark:border-indigo-950/80 animate-in slide-in-from-top-4 duration-300">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-lg font-black text-indigo-950 dark:text-indigo-300">
                      {t.formTitle}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {t.formSubtitle}
                    </p>
                  </div>
                  <button 
                    onClick={() => setShowForm(false)}
                    className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    <span className="material-icons-round text-xl">close</span>
                  </button>
                </div>

                {submitSuccess ? (
                  <div className="py-12 text-center text-emerald-600 dark:text-emerald-400 font-bold flex flex-col items-center gap-3">
                    <span className="material-icons-round text-5xl animate-bounce">check_circle</span>
                    <p className="text-lg">{t.formSuccessMessage}</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-xs font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">
                          {t.formName}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="p. ej. María Gacel"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-indigo-500/20"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">
                          {t.formRole}
                        </label>
                        <input
                          type="text"
                          value={formData.role}
                          onChange={(e) => setFormData({...formData, role: e.target.value})}
                          placeholder="p. ej. Co-directora"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-indigo-500/20"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">
                          {t.formOrg}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.org}
                          onChange={(e) => setFormData({...formData, org: e.target.value})}
                          placeholder="p. ej. Asociación Mujeres Tech"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-indigo-500/20"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">
                          {t.formCountry}
                        </label>
                        <select
                          value={formData.country}
                          onChange={(e) => setFormData({...formData, country: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-indigo-500/20"
                        >
                          <option value="España">España</option>
                          <option value="Grecia">Grecia</option>
                          <option value="Turquía">Turquía</option>
                          <option value="Portugal">Portugal</option>
                          <option value="Rumanía">Rumanía</option>
                          <option value="Internacional">Otro / Internacional</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">
                          {t.formContact}
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.contact}
                          onChange={(e) => setFormData({...formData, contact: e.target.value})}
                          placeholder="alianzas@asociacion.org"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-indigo-500/20"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">
                          {t.formTitleEs}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.titleEs}
                          onChange={(e) => setFormData({...formData, titleEs: e.target.value})}
                          placeholder="¿Qué proyecto o consorcio quiere armar?"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-indigo-500/20"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">
                          {t.formTitleEn}
                        </label>
                        <input
                          type="text"
                          value={formData.titleEn}
                          onChange={(e) => setFormData({...formData, titleEn: e.target.value})}
                          placeholder="Project title (English translation)"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-indigo-500/20"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">
                          {t.formDescEs}
                        </label>
                        <textarea
                          required
                          rows={3}
                          value={formData.descEs}
                          onChange={(e) => setFormData({...formData, descEs: e.target.value})}
                          placeholder="Describa el objetivo social y la idea del proyecto..."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-indigo-500/20"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">
                          {t.formDescEn}
                        </label>
                        <textarea
                          rows={3}
                          value={formData.descEn}
                          onChange={(e) => setFormData({...formData, descEn: e.target.value})}
                          placeholder="Describe the social goal and project idea in English..."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-indigo-500/20"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">
                          {t.formLookingEs}
                        </label>
                        <textarea
                          required
                          rows={2}
                          value={formData.lookingEs}
                          onChange={(e) => setFormData({...formData, lookingEs: e.target.value})}
                          placeholder="Buscamos mentores de IA, socios en Grecia para Erasmus+, etc."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-indigo-500/20"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">
                          {t.formLookingEn}
                        </label>
                        <textarea
                          rows={2}
                          value={formData.lookingEn}
                          onChange={(e) => setFormData({...formData, lookingEn: e.target.value})}
                          placeholder="We seek AI developers, academic partners, educational materials..."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-indigo-500/20"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <p className="text-[11px] text-slate-400">
                        {t.formRequiredFields}
                      </p>
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setShowForm(false)}
                          className="px-4 py-2.5 rounded-xl text-xs font-black text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          {t.formCancelBtn}
                        </button>
                        <button
                          type="submit"
                          className="px-6 py-2.5 rounded-xl text-xs font-black bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-500/20"
                        >
                          {t.formSubmitBtn}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            )}

            {/* Grid of Dynamic Proposals */}
            {proposals.length === 0 ? (
              <div className="p-12 text-center rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="material-icons-round text-5xl text-slate-300 dark:text-slate-700 mb-3 block">announcement</span>
                <h4 className="font-bold text-slate-800 dark:text-slate-200">{t.emptyBoardTitle}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t.emptyBoardDesc}</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {proposals.map((item) => (
                  <div 
                    key={item.id} 
                    className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-6 border border-slate-100 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-indigo-100 dark:hover:border-indigo-950/60 transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Meta information Header */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
                          {item.country}
                        </span>
                        
                        <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-extrabold flex items-center gap-1 ${
                          item.isFoundational 
                            ? 'bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400' 
                            : 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400'
                        }`}>
                          <span className="material-icons-round text-xs">
                            {item.isFoundational ? 'auto_awesome' : 'person_add'}
                          </span>
                          {item.isFoundational ? t.foundationalBadge : t.cardBadge}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="font-black text-slate-900 dark:text-white text-base leading-snug mb-3">
                        {item.title[lang] || item.title.es}
                      </h4>

                      {/* Proposal Description */}
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        {item.desc[lang] || item.desc.es}
                      </p>

                      {/* Looking For Sub-Box */}
                      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-xs">
                        <p className="font-black text-slate-900 dark:text-slate-100 mb-1.5 flex items-center gap-1">
                          <span className="material-icons-round text-indigo-600 text-sm">search</span>
                          {t.lookingLabel}
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic">
                          "{item.lookingFor[lang] || item.lookingFor.es}"
                        </p>
                      </div>
                    </div>

                    {/* Footer Contact Details */}
                    <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-[11px]">
                      <div>
                        <p className="font-black text-slate-900 dark:text-slate-300 leading-none">
                          {item.name}
                        </p>
                        <p className="text-[10px] text-slate-500 mt-0.5">
                          {item.role} @ {item.org}
                        </p>
                      </div>
                      <a 
                        href={`mailto:${item.contact}`}
                        className="px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 dark:bg-slate-800 dark:hover:bg-slate-700/80 text-indigo-600 dark:text-indigo-400 transition-colors font-black flex items-center gap-1"
                      >
                        <span className="material-icons-round text-xs">mail</span>
                        {t.contactLinkText}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Bottom Call to Action Grid */}
            <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-indigo-50 to-indigo-100/30 dark:from-slate-900 dark:to-indigo-950/20 border border-indigo-100/40 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="space-y-2 text-center md:text-left">
                <h4 className="text-lg font-black text-indigo-950 dark:text-indigo-300">
                  {t.bottomHeading}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl leading-relaxed">
                  {t.bottomDesc}
                </p>
              </div>
              <button
                onClick={onContactClick}
                className="px-6 py-3.5 rounded-xl text-xs font-black bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-500/20 shrink-0 flex items-center gap-1.5"
              >
                <span className="material-icons-round text-sm">support_agent</span>
                {t.scheduleSessionBtn}
              </button>
            </div>
          </div>
        )}

        {/* Tab content 2: Mentorship Program */}
        {activeTab === 'mentorship' && (
          <div className="space-y-16 animate-in fade-in duration-500">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight">
                  {t.mentorshipHeading}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                  {t.mentorshipSub}
                </p>

                <div className="space-y-5">
                  <h4 className="font-extrabold text-slate-900 dark:text-white text-base">
                    {t.mentorshipFeaturesTitle}
                  </h4>
                  
                  <div className="space-y-4">
                    {t.mentorshipFeatures.map((feat, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                          <span className="material-icons-round text-sm font-bold">check</span>
                        </div>
                        <div>
                          <h5 className="font-black text-sm text-slate-900 dark:text-white">{feat.title}</h5>
                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-0.5">{feat.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/5 rounded-3xl blur-2xl" />
                <div className="relative p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg text-center">
                  <span className="material-icons-round text-5xl text-blue-600 dark:text-blue-400 mb-4 inline-block">help_center</span>
                  <h4 className="font-black text-slate-900 dark:text-white text-lg mb-2">
                    {t.howToRequestTitle}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-6">
                    {t.howToRequestDesc}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={onContactClick}
                      className="px-5 py-3 rounded-xl bg-blue-600 text-white font-black text-xs hover:bg-blue-700 transition-colors shadow-sm"
                    >
                      {t.requestMentorshipBtn}
                    </button>
                    <button
                      onClick={onContactClick}
                      className="px-5 py-3 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 font-black text-xs hover:bg-slate-100 dark:hover:bg-slate-750 transition-colors"
                    >
                      {t.offerMentorshipBtn}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mentors Showcase */}
            <div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-8 flex items-center gap-2">
                <span className="material-icons-round text-blue-600 dark:text-blue-400">workspace_premium</span>
                {t.mentorsHeading}
              </h3>

              <div className="grid sm:grid-cols-3 gap-6">
                {mentors.map((mentor, index) => (
                  <div 
                    key={index}
                    className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-black text-sm flex items-center justify-center">
                        {mentor.pic}
                      </div>
                      <div>
                        <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">{mentor.name}</h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">{mentor.role}</p>
                      </div>
                    </div>
                    
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {mentor.expertise[lang] || mentor.expertise.es}
                    </p>

                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-500 flex items-center gap-1 font-bold">
                      <span className="material-icons-round text-xs text-blue-600">translate</span>
                      {t.languagesLabel} {mentor.languages.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default CommunityNetwork;
