import React from 'react';
import { useLanguage } from './LanguageContext';

interface MembershipProps {
  onNavigateContact?: () => void;
}

const Membership: React.FC<MembershipProps> = ({ onNavigateContact }) => {
  const { t } = useLanguage();

  const honorFeatures = [
    t({
      es: 'Beneficios exclusivos de red',
      en: 'Exclusive network benefits',
      de: 'Exklusive Netzwerk-Vorteile',
      fr: 'Avantages exclusifs du réseau',
      it: 'Benefici esclusivi di rete',
      ro: 'Beneficii exclusive de rețea'
    }),
    t({
      es: 'Distinción institucional',
      en: 'Institutional distinction',
      de: 'Institutionelle Auszeichnung',
      fr: 'Distinction institutionnelle',
      it: 'Distinzione istituzionale',
      ro: 'Distincție instituțională'
    }),
    t({
      es: 'Voz en comités de ética',
      en: 'Voice in ethics committees',
      de: 'Stimme in Ethikkommissionen',
      fr: 'Voix dans les comités d\'éthique',
      it: 'Voce nei comitati etici',
      ro: 'Voce în comitetele de etică'
    }),
    t({
      es: 'Representación en congresos',
      en: 'Representation at congresses',
      de: 'Vertretung auf Kongressen',
      fr: 'Représentation aux congrès',
      it: 'Rappresentanza a congressi',
      ro: 'Reprezentare la congrese'
    })
  ];

  const protectorFeatures = [
    t({
      es: 'Financiación directa de talleres',
      en: 'Direct funding of workshops',
      de: 'Direkte Förderung von Workshops',
      fr: 'Financement direct des ateliers',
      it: 'Finanziamento diretto di workshop',
      ro: 'Finanțare directă a atelierelor'
    }),
    t({
      es: 'Logotipo en web y eventos',
      en: 'Logo on website and events',
      de: 'Logo auf Website und Veranstaltungen',
      fr: 'Logo sur le site web et événements',
      it: 'Logo su sito web ed eventi',
      ro: 'Siglă pe site-ul web și la evenimente'
    }),
    t({
      es: 'Certificado de contribución ética',
      en: 'Ethical contribution certificate',
      de: 'Zertifikat für ethischen Beitrag',
      fr: 'Certificat de contribution éthique',
      it: 'Certificato di contributo etico',
      ro: 'Certificat de contribuție etică'
    }),
    t({
      es: 'Acceso anticipado a informes',
      en: 'Early access to reports',
      de: 'Vorzeitiger Zugriff auf Berichte',
      fr: 'Accès anticipé aux rapports',
      it: 'Accesso anticipato ai report',
      ro: 'Acces timpuriu la rapoarte'
    })
  ];

  return (
    <section id="unete" className="py-32 bg-white dark:bg-[#020617] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">
            {t({
              es: "Construye el futuro con nosotros",
              en: "Build the future with us",
              de: "Bauen Sie die Zukunft mit uns",
              fr: "Construisez l'avenir avec nous",
              it: "Costruisci il futuro con noi",
              ro: "Construiește viitorul cu noi"
            })}
          </h2>
          <p className="mt-4 text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            {t({
              es: "Tanto si eres un profesional de la IA como si acabas de descubrirla, hay un lugar para ti en nuestra comunidad.",
              en: "Whether you are an AI professional or have just discovered it, there is a place for you in our community.",
              de: "Egal, ob Sie ein KI-Profi sind oder diese gerade erst entdeckt haben, in unserer Community ist Platz für Sie.",
              fr: "Que vous soyez un professionnel de l'IA ou que vous veniez de la découvrir, il y a une place pour vous dans notre communauté.",
              it: "Che tu sia un professionista dell'IA o che tu l'abbia appena scoperta, c'è un posto per te nella nostra comunità.",
              ro: "Indiferent dacă ești un profesionist în IA sau abia ai descoperit-o, există un loc pentru tine în comunitatea noastră."
            })}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto relative">
          {/* Accent circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

          {/* Socio de Honor */}
          <div className="group bg-gradient-to-br from-primary to-indigo-700 p-1 rounded-[3rem] shadow-2xl transition-transform hover:-translate-y-2 duration-500">
            <div className="bg-primary/10 h-full w-full rounded-[2.9rem] p-10 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10 flex-grow">
                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-xl">
                  <span className="material-icons-round text-3xl text-primary">auto_awesome</span>
                </div>
                <h3 className="text-3xl font-black text-white mb-2">
                  {t({
                    es: "Socio de Honor",
                    en: "Honorary Member",
                    de: "Ehrenmitglied",
                    fr: "Membre d'Honneur",
                    it: "Socio d'Onore",
                    ro: "Membru de Onoare"
                  })}
                </h3>
                <p className="text-blue-100/80 mb-10 font-medium">
                  {t({
                    es: "Reconocimiento a trayectorias que impulsan la IA en Aragón.",
                    en: "Recognition of professional paths that drive AI in Aragon.",
                    de: "Anerkennung für Werdegänge, die die KI in Aragonien vorantreiben.",
                    fr: "Reconnaissance des parcours professionnels qui stimulent l'IA en Aragon.",
                    it: "Riconoscimento a percorsi professionali che promuovono l'IA in Aragona.",
                    ro: "Recunoașterea parcursurilor profesionale care stimulează IA în Aragon."
                  })}
                </p>
                <ul className="space-y-5 mb-12 text-blue-50">
                  {honorFeatures.map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-sm font-semibold">
                      <span className="material-icons-round text-white bg-blue-400/30 rounded-full p-1 text-xs">done</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                onClick={onNavigateContact}
                className="relative z-10 w-full bg-white text-primary py-5 rounded-2xl font-black text-lg hover:shadow-2xl transition-all active:scale-95 text-center block"
              >
                {t({
                  es: "Solicitar acceso",
                  en: "Request Access",
                  de: "Zugang anfordern",
                  fr: "Demander l'accès",
                  it: "Richiedi Accesso",
                  ro: "Solicită Acces"
                })}
              </button>
            </div>
          </div>

          {/* Socio Protector */}
          <div className="group bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col relative">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 text-primary rounded-3xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
              <span className="material-icons-round text-3xl">favorite</span>
            </div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2">
              {t({
                es: "Socio Protector",
                en: "Sponsoring Member",
                de: "Fördermitglied",
                fr: "Membre Protecteur",
                it: "Socio Sostenitore",
                ro: "Membru Susținător"
              })}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mb-10 font-medium">
              {t({
                es: "Apoyo financiero para nuestros proyectos de impacto social.",
                en: "Financial support for our social impact projects.",
                de: "Finanzielle Unterstützung für unsere Projekte mit sozialer Wirkung.",
                fr: "Soutien financier pour nos projets d'impact social.",
                it: "Supporto finanziario per i nostri progetti di impatto sociale.",
                ro: "Sprijin financiar pentru proiectele noastre cu impact social."
              })}
            </p>
            <ul className="space-y-5 mb-12 text-slate-600 dark:text-slate-300 flex-grow">
              {protectorFeatures.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-sm font-semibold">
                  <span className="material-icons-round text-primary bg-blue-50 dark:bg-blue-900/30 rounded-full p-1 text-xs">done</span>
                  {item}
                </li>
              ))}
            </ul>
            <button 
              onClick={onNavigateContact}
              className="w-full bg-slate-900 dark:bg-white dark:text-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:opacity-90 transition-all active:scale-95 shadow-xl text-center block"
            >
              {t({
                es: "Convertirse en Protector",
                en: "Become a Sponsor",
                de: "Fördermitglied werden",
                fr: "Devenir Protecteur",
                it: "Diventa un Sostenitore",
                ro: "Devină Membru Susținător"
              })}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
