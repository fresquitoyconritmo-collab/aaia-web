import React from 'react';
import { useLanguage } from './LanguageContext';

interface AboutViewProps {
  onBack: () => void;
  onContact: () => void;
}

const AboutView: React.FC<AboutViewProps> = ({ onBack, onContact }) => {
  const { t } = useLanguage();

  const boardMembers = [
    {
      role: t({
        es: "Presidencia",
        en: "Presidency",
        de: "Präsidentschaft",
        fr: "Présidence",
        it: "Presidenza",
        ro: "Președinție"
      }),
      name: "Fernando Nieto",
      desc: t({
        es: "Consultor experto en IA Generativa y comunicación digital con más de 15 años de experiencia técnica y docente. Su perfil aporta la credibilidad técnica y educativa necesaria para la visión estratégica de la entidad.",
        en: "Expert consultant in Generative AI and digital communication with over 15 years of technical and teaching experience. His profile brings the technical and educational credibility necessary for the strategic vision of the entity.",
        de: "Experte für generative KI und digitale Kommunikation mit über 15 Jahren technischer und pädagogischer Erfahrung. Sein Profil bringt die nötige technische und pädagogische Glaubwürdigkeit für die strategische Vision des Vereins.",
        fr: "Consultant expert en IA Générative et communication numérique avec plus de 15 ans d'expérience technique et d'enseignement. Son profil apporte la crédibilité technique et éducative nécessaire à la vision stratégique de l'entité.",
        it: "Consulente esperto in IA Generativa e comunicazione digitale con oltre 15 anni di esperienza tecnica e didattica. Il suo profilo apporta la credibilità tecnica ed educativa necessaria per la visione strategica dell'ente.",
        ro: "Consultant expert în IA Generativă și comunicare digitală cu peste 15 ani de experiență tehnică și didactică. Profilul său aduce credibilitatea tehnică și educațională necesară viziunii strategice a entității."
      }),
      icon: "psychology"
    },
    {
      role: t({
        es: "Secretaría",
        en: "Secretariat",
        de: "Sekretariat",
        fr: "Secrétariat",
        it: "Segreteria",
        ro: "Secretariat"
      }),
      name: "Diana Redondo",
      desc: t({
        es: "Perfil especializado en relaciones institucionales, comunicación y política pública, encargada de la gestión de eventos y la vinculación con la administración.",
        en: "Specialized in institutional relations, communication, and public policy, in charge of event management and relations with public administrations.",
        de: "Spezialisiert auf institutionelle Beziehungen, Kommunikation und öffentliche Ordnung, verantwortlich für das Eventmanagement und die Verbindung zur Verwaltung.",
        fr: "Spécialisée dans les relations institutionnelles, la communication et les politiques publiques, chargée de la gestion des événements et de la liaison avec l'administration.",
        it: "Specializzata in relazioni istituzionali, comunicazione e politiche pubbliche, responsabile della gestione degli eventi e dei rapporti con la pubblica amministrazione.",
        ro: "Specializată în relații instituționale, comunicare și politici publice, responsabilă cu gestionarea evenimentelor și legătura cu administrația publică."
      }),
      icon: "account_balance"
    },
    {
      role: t({
        es: "Tesorería",
        en: "Treasury",
        de: "Schatzmeisterei",
        fr: "Trésorerie",
        it: "Tesoreria",
        ro: "Trezorerie"
      }),
      name: "Pablo Lázaro",
      desc: t({
        es: "Responsable de la gestión económica y administrativa, velando por la transparencia y la estabilidad financiera de la asociación.",
        en: "Responsible for economic and administrative management, ensuring the transparency and financial stability of the association.",
        de: "Verantwortlich für die wirtschaftliche und administrative Leitung, um Transparenz und finanzielle Stabilität des Vereins zu gewährleisten.",
        fr: "Responsable de la gestion économique et administrative, veillant à la transparence et à la stabilité financière de l'association.",
        it: "Responsabile della gestione economica e amministrativa, garantendo la trasparenza e la stabilità finanziaria dell'associazione.",
        ro: "Responsabil cu gestionarea economică și administrativă, asigurând transparența și stabilitatea financiară a asociației."
      }),
      icon: "payments"
    }
  ];

  const coreFunctions = [
    {
      title: t({
        es: "Gestión y Dirección",
        en: "Management & Direction",
        de: "Leitung & Verwaltung",
        fr: "Gestion & Direction",
        it: "Gestione e Direzione",
        ro: "Management și Direcție"
      }),
      text: t({
        es: "Dirigir las actividades sociales y llevar la gestión económica y administrativa de la asociación.",
        en: "Direct social activities and manage the economic and administrative processes of the association.",
        de: "Leitung der gesellschaftlichen Aktivitäten und Führung der wirtschaftlichen und administrativen Verwaltung des Vereins.",
        fr: "Diriger les activités sociales et assurer la gestion économique et administrative de l'association.",
        it: "Dirigere le attività sociali e gestire gli aspetti economici e amministrativi dell'associazione.",
        ro: "Conducerea activităților sociale și gestionarea economică și administrativă a asociației."
      })
    },
    {
      title: t({
        es: "Ejecución y Admisión",
        en: "Execution & Admission",
        de: "Ausführung & Aufnahme",
        fr: "Exécution & Admission",
        it: "Esecuzione e Ammissione",
        ro: "Executare și Admitere"
      }),
      text: t({
        es: "Ejecutar los acuerdos de la Asamblea General y resolver sobre la admisión de nuevas personas socias.",
        en: "Execute the resolutions of the General Assembly and resolve the admission of new members.",
        de: "Ausführung der Beschlüsse der Mitgliederversammlung und Entscheidung über die Aufnahme neuer Mitglieder.",
        fr: "Exécuter les résolutions de l'Assemblée Générale et statuer sur l'admission des nouveaux membres.",
        it: "Eseguire le delibere dell'Assemblea Generale e decidere sull'ammissione di nuovi soci.",
        ro: "Executarea hotărârilor Adunării Generale și deciderea admiterii de noi membri."
      })
    },
    {
      title: t({
        es: "Alianzas Estratégicas",
        en: "Strategic Alliances",
        de: "Strategische Allianzen",
        fr: "Alliances Stratégiques",
        it: "Alleanze Strategiche",
        ro: "Alianțe Strategice"
      }),
      text: t({
        es: "Acordar la participación en consorcios, convenios y alianzas con entidades públicas y privadas para el cumplimiento de nuestros fines.",
        en: "Agree on participation in consortia, agreements, and alliances with public and private entities to fulfill our purposes.",
        de: "Beschlussfassung über die Teilnahme an Konsortien, Vereinbarungen und Allianzen mit öffentlichen und privaten Einrichtungen zur Erfüllung unserer Zwecke.",
        fr: "Convenir de la participation à des consortiums, accords et alliances avec des entités publiques et privées pour la réalisation de nos buts.",
        it: "Concordare la partecipazione a consorzi, accordi e alleanze con enti pubblici e privati per il raggiungimento dei nostri scopi.",
        ro: "Stabilirea participării la consorții, acorduri și alianțe cu entități publice și private pentru îndeplinirea scopurilor noastre."
      })
    },
    {
      title: t({
        es: "Ética y Supervisión",
        en: "Ethics & Supervision",
        de: "Ethik & Aufsicht",
        fr: "Éthique & Supervision",
        it: "Etica e Supervisione",
        ro: "Etică și Supraveghere"
      }),
      text: t({
        es: "Impulsar la creación de órganos especializados, como el Comité Consultivo de Ética en Inteligencia Artificial.",
        en: "Promote the creation of specialized bodies, such as the Advisory Committee on Ethics in Artificial Intelligence.",
        de: "Förderung der Einrichtung spezialisierter Gremien, wie des Beratenden Ausschusses für Ethik in der Künstlichen Intelligenz.",
        fr: "Promouvoir la création d'organes spécialisés, tels que le Comité consultatif d'éthique en Intelligence Artificielle.",
        it: "Promuovere la creazione di organi specializzati, come il Comitato Consultivo per l'Etica nell'Intelligenza Artificiale.",
        ro: "Promovarea creării de organisme specializate, cum ar fi Comitetul Consultativ de Etică în Inteligența Artificială."
      })
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#020617] min-h-screen pt-24 pb-20 px-4 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary font-bold transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-icons-round">arrow_back</span>
            </div>
            {t({
              es: "Volver al inicio",
              en: "Back to home",
              de: "Zurück zur Startseite",
              fr: "Retour à l'accueil",
              it: "Torna alla home",
              ro: "Înapoi la prima pagină"
            })}
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-400 text-xs font-black mb-6 uppercase tracking-widest border border-blue-200 dark:border-blue-800">
            {t({
              es: "Sobre Nosotros",
              en: "About Us",
              de: "Über uns",
              fr: "À Propos de Nous",
              it: "Chi Siamo",
              ro: "Despre Noi"
            })}
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight uppercase tracking-tighter">
            {t({
              es: "Nuestra ",
              en: "Our ",
              de: "Unser ",
              fr: "Notre ",
              it: "La Nostra ",
              ro: "Consiliul Nostru "
            })}
            <span className="text-primary">
              {t({
                es: "Junta Directiva",
                en: "Board of Directors",
                de: "Vorstand",
                fr: "Conseil d'Administration",
                it: "Consiglio Direttivo",
                ro: "Director"
              })}
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto font-medium leading-relaxed">
            {t({
              es: "La Asociación Aragonesa de Inteligencia Artificial (AAIA) es gestionada por un equipo multidisciplinar que combina perfiles técnicos, educativos e institucionales. Nuestra Junta Directiva trabaja de forma altruista para liderar el desarrollo responsable de la IA en Aragón, actuando como puente entre la tecnología y la sociedad.",
              en: "The Aragonese Association of Artificial Intelligence (AAIA) is managed by a multidisciplinary team combining technical, educational, and institutional profiles. Our Board of Directors works altruistically to lead the responsible development of AI in Aragon, acting as a bridge between technology and society.",
              de: "Die Aragonesische Vereinigung für Künstliche Intelligenz (AAIA) wird von einem multidisziplinären Team geleitet, das technische, pädagogische und institutionelle Profile vereint. Unser Vorstand arbeitet uneigennützig daran, die verantwortungsvolle Entwicklung der KI in Aragonien voranzutreiben und fungiert als Brücke zwischen Technologie und Gesellschaft.",
              fr: "L'Association Aragonaise d'Intelligence Artificielle (AAIA) est gérée par une équipe pluridisciplinaire alliant profils techniques, éducatifs et institutionnels. Notre Conseil d'Administration œuvre bénévolement pour mener le développement responsable de l'IA en Aragon, agissant comme un pont entre la technologie et la société.",
              it: "L'Associazione Aragonese di Intelligenza Artificiale (AAIA) è gestita da un team multidisciplinare che unisce profili tecnici, educativi e istituzionali. Il nostro Consiglio Direttivo opera in modo altruistico per guidare lo sviluppo responsabile dell'IA in Aragona, fungendo da ponte tra tecnologia e società.",
              ro: "Asociația Aragoneză de Inteligență Artificială (AAIA) este administrată de o echipă multidisciplinară care combină profile tehnice, educaționale și instituționale. Consiliul nostru Director lucrează în mod altruist pentru a conduce dezvoltarea responsabilă a IA în Aragon, acționând ca o punte între tehnologie și societate."
            })}
          </p>
        </div>

        {/* Profiles Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {boardMembers.map((member, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 text-primary rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                <span className="material-icons-round text-3xl">{member.icon}</span>
              </div>
              <h4 className="text-primary font-black text-xs uppercase tracking-[0.2em] mb-2">{member.role}</h4>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 leading-tight">{member.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                {member.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Functions Section */}
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-12 uppercase tracking-tight flex items-center gap-4">
              <span className="material-icons-round text-primary text-4xl">gavel</span>
              {t({
                es: "Funciones Principales",
                en: "Primary Functions",
                de: "Hauptfunktionen",
                fr: "Fonctions Principales",
                it: "Funzioni Principali",
                ro: "Funcții Principale"
              })}
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              {coreFunctions.map((func, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 shrink-0"></div>
                  <div>
                    <h4 className="font-black text-lg mb-2 text-blue-400 uppercase tracking-tight">{func.title}</h4>
                    <p className="text-slate-400 font-medium text-sm leading-relaxed">{func.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 dark:text-slate-500 font-medium mb-8">
            {t({
              es: "Nuestra Junta Directiva trabaja de forma altruista para liderar el desarrollo responsable de la IA en Aragón.",
              en: "Our Board of Directors works altruistically to lead the responsible development of AI in Aragon.",
              de: "Unser Vorstand arbeitet uneigennützig daran, die verantwortungsvolle Entwicklung der KI in Aragonien anzuführen.",
              fr: "Notre Conseil d'Administration œuvre bénévolement pour mener le développement responsable de l'IA en Aragon.",
              it: "Il nostro Consiglio Direttivo opera in modo altruistico per guidare lo sviluppo responsabile dell'IA in Aragona.",
              ro: "Consiliul nostru Director lucrează în mod altruist pentru a conduce dezvoltarea responsabilă a IA în Aragon."
            })}
          </p>
          <button 
            onClick={onContact}
            className="px-10 py-4 bg-primary text-white rounded-2xl font-black hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-500/20"
          >
            {t({
              es: "Contactar con la directiva",
              en: "Contact the board",
              de: "Vorstand kontaktieren",
              fr: "Contacter le conseil",
              it: "Contatta il consiglio directivo",
              ro: "Contactează consiliul director"
            })}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
