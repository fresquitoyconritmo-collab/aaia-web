import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';

const NewsAndAgenda: React.FC = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [email, setEmail] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === 'loading') return;

    setStatus('loading');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (error) {
      console.error("Error al suscribir:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const activities = [
    {
      type: t({
        es: "Conferencia",
        en: "Conference",
        de: "Konferenz",
        fr: "Conférence",
        it: "Conferenza",
        ro: "Conferință"
      }),
      color: "blue",
      title: t({
        es: "IA y Futuro del Trabajo en Aragón",
        en: "AI and Future of Work in Aragon",
        de: "KI und die Zukunft der Arbeit in Aragonien",
        fr: "L'IA et l'avenir du travail en Aragon",
        it: "IA e il futuro del lavoro in Aragona",
        ro: "IA și viitorul muncii în Aragon"
      }),
      date: t({
        es: "15 Feb 2026 - 10:00",
        en: "Feb 15, 2026 - 10:00",
        de: "15. Feb. 2026 - 10:00",
        fr: "15 fév. 2026 - 10h00",
        it: "15 feb 2026 - 10:00",
        ro: "15 feb 2026 - 10:00"
      }),
      loc: t({
        es: "Auditorio ZGZ",
        en: "ZGZ Auditorium",
        de: "ZGZ-Auditorium",
        fr: "Auditorium ZGZ",
        it: "Auditorium ZGZ",
        ro: "Auditoriu ZGZ"
      })
    },
    {
      type: t({
        es: "Taller",
        en: "Workshop",
        de: "Workshop",
        fr: "Atelier",
        it: "Workshop",
        ro: "Atelier"
      }),
      color: "purple",
      title: t({
        es: "IA para Mayores: Primeros Pasos",
        en: "AI for Seniors: First Steps",
        de: "KI für Senioren: Erste Schritte",
        fr: "L'IA pour les seniors : premiers pas",
        it: "IA per gli anziani: primi passi",
        ro: "IA pentru seniori: Primii pași"
      }),
      date: t({
        es: "22 Feb 2026 - 16:00",
        en: "Feb 22, 2026 - 16:00",
        de: "22. Feb. 2026 - 16:00",
        fr: "22 fév. 2026 - 16h00",
        it: "22 feb 2026 - 16:00",
        ro: "22 feb 2026 - 16:00"
      }),
      loc: t({
        es: "25 plazas",
        en: "25 seats",
        de: "25 Plätze",
        fr: "25 places",
        it: "25 posti",
        ro: "25 locuri"
      })
    },
    {
      type: t({
        es: "Mesa Redonda",
        en: "Roundtable",
        de: "Runder Tisch",
        fr: "Table ronde",
        it: "Tavola rotonda",
        ro: "Masă rotundă"
      }),
      color: "orange",
      title: t({
        es: "Ética en IA: Retos 2026",
        en: "Ethics in AI: 2026 Challenges",
        de: "Ethik in der KI: Herausforderungen 2026",
        fr: "Éthique de l'IA : les défis de 2026",
        it: "Etica nell'IA: sfide 2026",
        ro: "Etica în IA: Provocările anului 2026"
      }),
      date: t({
        es: "1 Mar 2026 - 18:30",
        en: "Mar 1, 2026 - 18:30",
        de: "1. März 2026 - 18:30",
        fr: "1er mars 2026 - 18h30",
        it: "1 mar 2026 - 18:30",
        ro: "1 mar 2026 - 18:30"
      }),
      loc: t({
        es: "Unizar",
        en: "Unizar (University)",
        de: "Unizar (Universität)",
        fr: "Unizar",
        it: "Unizar",
        ro: "Unizar"
      })
    }
  ];

  return (
    <section id="actualidad" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">
            {t({
              es: "Actualidad y Agenda",
              en: "News and Agenda",
              de: "Aktuelles und Agenda",
              fr: "Actualités et Agenda",
              it: "Attualità e Agenda",
              ro: "Actualități și Agendă"
            })}
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            {t({
              es: "Mantente informado sobre nuestras actividades y eventos.",
              en: "Stay informed about our activities and events.",
              de: "Bleiben Sie über unsere Aktivitäten und Veranstaltungen auf dem Laufenden.",
              fr: "Restez informé de nos activités et événements.",
              it: "Rimani informato sulle nostre attività ed eventi.",
              ro: "Fii la curent cu activitățile și evenimentele noastre."
            })}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Activities Left */}
          <div>
            <h3 className="flex items-center gap-3 text-2xl font-bold mb-10 dark:text-white">
              <span className="material-icons-round text-primary text-3xl">calendar_month</span>
              {t({
                es: "Próximas Actividades",
                en: "Upcoming Activities",
                de: "Kommende Aktivitäten",
                fr: "Prochaines Activités",
                it: "Prossime Attività",
                ro: "Următoarele Activități"
              })}
            </h3>
            <div className="space-y-10 relative">
              <div className="absolute left-[7px] top-2 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800"></div>
              
              {activities.map((act, idx) => (
                <div key={idx} className="pl-8 relative">
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary border-4 border-slate-50 dark:border-slate-950 z-10"></div>
                  <span className={`inline-block px-3 py-1 bg-${act.color}-100 dark:bg-${act.color}-900/40 text-${act.color}-600 dark:text-${act.color}-400 text-xs font-black rounded-lg mb-3`}>
                    {act.type}
                  </span>
                  <h4 className="font-bold text-xl dark:text-white mb-2 leading-snug">{act.title}</h4>
                  <div className="text-sm text-slate-500 dark:text-slate-500 mt-2 flex flex-wrap gap-6">
                    <span className="flex items-center gap-1.5">
                      <span className="material-icons-round text-lg">schedule</span> {act.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="material-icons-round text-lg">location_on</span> {act.loc}
                    </span>
                  </div>
                  <a href="#contacto" className="mt-5 text-sm font-bold text-primary hover:text-blue-700 transition-colors uppercase tracking-wider block">
                    {t({
                      es: "Inscribirme",
                      en: "Register",
                      de: "Anmelden",
                      fr: "S'inscrire",
                      it: "Iscriviti",
                      ro: "Înscrie-mă"
                    })}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Press Room Right */}
          <div>
            <h3 className="flex items-center gap-3 text-2xl font-bold mb-10 dark:text-white">
              <span className="material-icons-round text-primary text-3xl">newspaper</span>
              {t({
                es: "Sala de Prensa",
                en: "Press Room",
                de: "Pressebereich",
                fr: "Salle de Presse",
                it: "Sala Stampa",
                ro: "Cameră de Presă"
              })}
            </h3>
            <div className="space-y-8 mb-12">
              <article className="group cursor-pointer">
                <div className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">
                  {t({
                    es: "8 Ene 2026 • Institucional",
                    en: "Jan 8, 2026 • Institutional",
                    de: "8. Jan. 2026 • Institutionell",
                    fr: "8 janv. 2026 • Institutionnel",
                    it: "8 gen 2026 • Istituzionale",
                    ro: "8 ian 2026 • Instituțional"
                  })}
                </div>
                <h4 className="font-bold text-lg dark:text-white group-hover:text-primary transition-colors mb-3 leading-tight">
                  {t({
                    es: "AAIA firma convenio de colaboración con la Universidad de Zaragoza",
                    en: "AAIA signs collaboration agreement with the University of Zaragoza",
                    de: "AAIA unterzeichnet Kooperationsvereinbarung mit der Universität Saragossa",
                    fr: "L'AAIA signe un accord de collaboration avec l'Université de Saragosse",
                    it: "AAIA firma un accordo di collaborazione con l'Università di Saragozza",
                    ro: "AAIA semnează un acord de colaborare cu Universitatea din Zaragoza"
                  })}
                </h4>
                <a className="text-primary font-bold text-sm hover:underline flex items-center gap-1" href="#actualidad">
                  {t({
                    es: "Leer más",
                    en: "Read more",
                    de: "Mehr lesen",
                    fr: "En savoir plus",
                    it: "Leggi di più",
                    ro: "Citește mai mult"
                  })} <span className="material-icons-round text-sm">arrow_right_alt</span>
                </a>
              </article>
              <hr className="border-slate-200 dark:border-slate-800" />
              <article className="group cursor-pointer">
                <div className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">
                  {t({
                    es: "20 Dic 2025 • Formación",
                    en: "Dec 20, 2025 • Training",
                    de: "20. Dez. 2025 • Weiterbildung",
                    fr: "20 déc. 2025 • Formation",
                    it: "20 dic 2025 • Formazione",
                    ro: "20 dec 2025 • Formare"
                  })}
                </div>
                <h4 className="font-bold text-lg dark:text-white group-hover:text-primary transition-colors mb-3 leading-tight">
                  {t({
                    es: "Lanzamiento del programa piloto de alfabetización digital",
                    en: "Launch of the digital literacy pilot program",
                    de: "Start des Pilotprojekts zur digitalen Kompetenz",
                    fr: "Lancement du programme pilote d'alphabétisation numérique",
                    it: "Lancio del programma pilota di alfabetizzazione digitale",
                    ro: "Lansarea programului pilot de alfabetizare digitală"
                  })}
                </h4>
                <a className="text-primary font-bold text-sm hover:underline flex items-center gap-1" href="#actualidad">
                  {t({
                    es: "Leer más",
                    en: "Read more",
                    de: "Mehr lesen",
                    fr: "En savoir plus",
                    it: "Leggi di più",
                    ro: "Citește mai mult"
                  })} <span className="material-icons-round text-sm">arrow_right_alt</span>
                </a>
              </article>
            </div>

            {/* Newsletter Card */}
            <div className="bg-primary rounded-[2.5rem] p-10 text-white shadow-2xl shadow-blue-500/20 relative overflow-hidden min-h-[300px] flex flex-col justify-center transition-all duration-500">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24 blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/20 rounded-full -ml-16 -mb-16 blur-2xl"></div>
              
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-6 animate-in zoom-in duration-500 text-center relative z-10">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl text-primary animate-bounce">
                    <span className="material-icons-round text-5xl">check_circle</span>
                  </div>
                  <h4 className="text-3xl font-black mb-2 uppercase tracking-tighter">
                    {t({
                      es: "¡Ya estás dentro!",
                      en: "You are in!",
                      de: "Sie sind angemeldet!",
                      fr: "Vous y êtes !",
                      it: "Sei iscritto!",
                      ro: "Te-ai înscris!"
                    })}
                  </h4>
                  <p className="text-blue-100 mt-2 font-medium max-w-xs">
                    {t({
                      es: "Hemos registrado tu suscripción. Prepárate para recibir lo mejor de la IA en Aragón.",
                      en: "We have registered your subscription. Get ready to receive the best of AI in Aragon.",
                      de: "Wir haben Ihr Abonnement registriert. Machen Sie sich bereit für das Beste aus KI in Aragonien.",
                      fr: "Nous avons enregistré votre inscription. Préparez-vous à recevoir le meilleur de l'IA en Aragon.",
                      it: "Abbiamo registrato la tua iscrizione. Preparati a ricevere il meglio dell'IA in Aragona.",
                      ro: "Ți-am înregistrat abonarea. Pregătește-te să primești cele mai bune noutăți din IA în Aragon."
                    })}
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-xs font-black uppercase tracking-widest bg-white/10 hover:bg-white/20 px-6 py-2 rounded-full transition-colors"
                  >
                    {t({
                      es: "Suscribir otro email",
                      en: "Subscribe another email",
                      de: "Weitere E-Mail abonnieren",
                      fr: "Inscrire une autre adresse",
                      it: "Iscrivi un'altra email",
                      ro: "Abonează un alt e-mail"
                    })}
                  </button>
                </div>
              ) : status === 'error' ? (
                <div className="flex flex-col items-center justify-center py-6 animate-in shake duration-300 text-center relative z-10">
                  <span className="material-icons-round text-6xl mb-4 text-red-300">error_outline</span>
                  <h4 className="text-2xl font-bold">
                    {t({
                      es: "Vaya, algo ha fallado",
                      en: "Oops, something went wrong",
                      de: "Hoppla, etwas ist schiefgelaufen",
                      fr: "Oups, un problème est survenu",
                      it: "Oops, qualcosa è andato storto",
                      ro: "Ups, a apărut o eroare"
                    })}
                  </h4>
                  <p className="text-blue-100 mt-2">
                    {t({
                      es: "No hemos podido procesar tu email en este momento.",
                      en: "We could not process your email at this time.",
                      de: "Wir konnten Ihre E-Mail-Adresse derzeit nicht verarbeiten.",
                      fr: "Nous n'avons pas pu traiter votre e-mail pour le moment.",
                      it: "Non è stato possibile elaborare la tua email in questo momento.",
                      ro: "Nu am putut procesa adresa dvs. de e-mail în acest moment."
                    })}
                  </p>
                  <button onClick={() => setStatus('idle')} className="mt-6 bg-white text-primary px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all">
                    {t({
                      es: "Reintentar ahora",
                      en: "Retry now",
                      de: "Jetzt wiederholen",
                      fr: "Ressayer maintenant",
                      it: "Riprova ora",
                      ro: "Reîncearcă acum"
                    })}
                  </button>
                </div>
              ) : (
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <span className="material-icons-round">mail</span>
                    </div>
                    <h4 className="text-2xl font-black uppercase tracking-tight">
                      {t({
                        es: "Únete al boletín",
                        en: "Join the newsletter",
                        de: "Newsletter abonnieren",
                        fr: "Rejoindre le bulletin",
                        it: "Iscriviti alla newsletter",
                        ro: "Alătură-te buletinului"
                      })}
                    </h4>
                  </div>
                  <p className="text-blue-100 mb-8 font-medium leading-relaxed">
                    {t({
                      es: "Recibe convocatorias, noticias exclusivas y nuestra agenda mensual sin spam.",
                      en: "Receive funding calls, exclusive news, and our monthly newsletter without spam.",
                      de: "Erhalten Sie Förderaufrufe, exklusive Neuigkeiten und unseren monatlichen Newsletter spamfrei.",
                      fr: "Recevez les appels, des nouvelles exclusives et notre agenda mensuel sans spam.",
                      it: "Ricevi bandi, notizie esclusive e la nostra agenda mensile senza spam.",
                      ro: "Primește apeluri de proiecte, știri exclusive și agenda noastră lunară, fără spam."
                    })}
                  </p>
                  <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubscribe}>
                    <div className="flex-grow relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 material-icons-round text-slate-400">alternate_email</span>
                      <input 
                        className={`w-full rounded-2xl pl-12 pr-5 py-4 text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-300 border-none placeholder-slate-400 font-bold transition-all shadow-inner ${status === 'loading' ? 'opacity-50' : 'opacity-100'}`} 
                        placeholder="tu@email.com" 
                        type="email" 
                        required
                        disabled={status === 'loading'}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <button 
                      type="submit" 
                      disabled={status === 'loading'}
                      className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black hover:bg-black transition-all hover:scale-105 shrink-0 flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100 shadow-xl"
                    >
                      {status === 'loading' ? (
                        <>
                          <span className="material-icons-round animate-spin">sync</span>
                          {t({
                            es: "PROCESANDO",
                            en: "PROCESSING",
                            de: "WIRD VERARBEITET",
                            fr: "TRAITEMENT",
                            it: "ELABORAZIONE",
                            ro: "SE PROCESEAZĂ"
                          })}
                        </>
                      ) : (
                        t({
                          es: "SUSCRIBIRME",
                          en: "SUBSCRIBE",
                          de: "ABONNIEREN",
                          fr: "S'INSCRIRE",
                          it: "ISCRIVITI",
                          ro: "ABONEAZĂ-MĂ"
                        })
                      )}
                    </button>
                  </form>
                  <p className="text-[10px] text-blue-200/60 mt-4 font-medium uppercase tracking-widest text-center sm:text-left">
                    {t({
                      es: "Respetamos tu privacidad. Un solo clic para darte de baja.",
                      en: "We respect your privacy. One click to unsubscribe.",
                      de: "Wir respektieren Ihre Privatsphäre. Abmeldung mit nur einem Klick.",
                      fr: "Nous respectons votre vie privée. Un seul clic pour vous désinscrire.",
                      it: "Rispettiamo la tua privacy. Un solo clic per disiscriverti.",
                      ro: "Îți respectăm confidențialitatea. Te poți dezabona cu un singur clic."
                    })}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-24 border-t border-slate-200 dark:border-slate-900 pt-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h4 className="text-slate-900 dark:text-white font-black mb-3 text-lg uppercase tracking-tight">
            {t({
              es: "Gestión Transparente de Fondos",
              en: "Transparent Fund Management",
              de: "Transparente Fondsverwaltung",
              fr: "Gestion Transparente des Fonds",
              it: "Gestione Trasparente dei Fondi",
              ro: "Gestionarea Transparentă a Fondurilor"
            })}
          </h4>
          <p className="text-slate-500 dark:text-slate-500 text-sm max-w-4xl mx-auto leading-relaxed font-medium">
            {t({
              es: "De acuerdo con el artículo 38 de nuestros estatutos, AAIA se compromete a la transparencia absoluta en la gestión de cualquier fondo público que pueda recibir, publicando de forma accesible y comprensible el destino de cada recurso en nuestro portal.",
              en: "According to Article 38 of our statutes, AAIA is committed to absolute transparency in the management of any public funds that may be received, publishing the destination of each resource in an accessible and understandable manner on our portal.",
              de: "Gemäß Artikel 38 unserer Satzung verpflichtet sich AAIA zu absoluter Transparenz bei der Verwaltung aller öffentlichen Mittel, die eingehen, und veröffentlicht die Verwendung aller Ressourcen auf leicht zugängliche und verständliche Weise auf unserem Portal.",
              fr: "Conformément à l'article 38 de nos statuts, l'AAIA s'engage à une transparence absolue dans la gestion de tous les fonds publics qu'elle pourrait recevoir, en publiant de manière accessible et compréhensible la destination de chaque ressource sur son portail.",
              it: "In conformità con l'articolo 38 del nostro statuto, AAIA si impegna a garantire l'assoluta trasparenza nella gestione dei fondi pubblici eventualmente ricevuti, pubblicando in modo accessibile e comprensibile la destinazione di ciascuna risorsa sul nostro portale.",
              ro: "În conformitate cu articolul 38 din statutul nostru, AAIA se angajează la o transparență absolută în gestionarea oricăror fonduri publice pe care le-ar putea primi, publicând într-un mod accesibil și ușor de înțeles destinația fiecărei resurse pe portalul nostru."
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsAndAgenda;
