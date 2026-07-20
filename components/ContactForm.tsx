import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';

const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: 'Información General',
    mensaje: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.mensaje) return;
    
    setStatus('submitting');
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ 
          nombre: '', 
          email: '', 
          telefono: '', 
          asunto: t({
            es: 'Información General',
            en: 'General Information',
            de: 'Allgemeine Informationen',
            fr: 'Informations Générales',
            it: 'Informazioni Generali',
            ro: 'Informații Generale'
          }), 
          mensaje: '' 
        });
      } else {
        throw new Error(result.error || 'Error al enviar el mensaje');
      }
    } catch (error: any) {
      console.error("Error de envío:", error);
      setErrorMessage(
        error.message || 
        t({
          es: 'Lo sentimos, ha ocurrido un error técnico. Por favor, inténtalo de nuevo más tarde o escríbenos directamente a aaia.aragon@gmail.com',
          en: 'Sorry, a technical error occurred. Please try again later or write to us directly at aaia.aragon@gmail.com',
          de: 'Leider ist ein technischer Fehler aufgetreten. Bitte versuchen Sie es später noch einmal oder schreiben Sie uns direkt an aaia.aragon@gmail.com',
          fr: 'Désolé, une erreur technique est survenue. Veuillez réessayer plus tard ou nous écrire directement à aaia.aragon@gmail.com',
          it: 'Siamo spiacenti, si è verificato un errore tecnico. Riprova più tardi o scrivici direttamente a aaia.aragon@gmail.com',
          ro: 'Ne pare rău, a apărut o eroare tehnică. Vă rugăm să încercați din nou mai târziu sau să ne scrieți direct la aaia.aragon@gmail.com'
        })
      );
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contacto" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-400 text-[10px] font-black mb-4 uppercase tracking-[0.2em] border border-blue-100 dark:border-blue-800">
            {t({
              es: "Estamos a tu disposición",
              en: "We are at your service",
              de: "Wir stehen Ihnen zur Verfügung",
              fr: "Nous sommes à votre disposition",
              it: "Siamo a tua disposizione",
              ro: "Vă stăm la dispoziție"
            })}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
            {t({
              es: "Contacta con Nosotros",
              en: "Contact Us",
              de: "Kontaktieren Sie uns",
              fr: "Contactez-nous",
              it: "Contattaci",
              ro: "Contactează-ne"
            })}
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t({
              es: "Resolvemos tus dudas sobre IA, inscripciones y colaboraciones en Aragón.",
              en: "We solve your doubts about AI, registrations, and collaborations in Aragon.",
              de: "Wir beantworten Ihre Fragen zu KI, Anmeldungen und Kooperationen in Aragonien.",
              fr: "Nous répondons à vos questions sur l'IA, les inscriptions et les collaborations en Aragon.",
              it: "Risolviamo i tuoi dubbi su IA, iscrizioni e collaborazioni in Aragona.",
              ro: "Vă răspundem la întrebări despre IA, înscrieri și colaborări în Aragon."
            })}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-0 bg-white dark:bg-slate-800 rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-700">
          {/* Form Panel */}
          <div className="p-10 lg:p-16 relative">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center shadow-inner">
                  <span className="material-icons-round text-5xl">verified</span>
                </div>
                <div>
                  <h3 className="text-3xl font-black dark:text-white mb-2">
                    {t({
                      es: "¡Mensaje Enviado!",
                      en: "Message Sent!",
                      de: "Nachricht gesendet!",
                      fr: "Message envoyé !",
                      it: "Messaggio inviato!",
                      ro: "Mesaj Trimis!"
                    })}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    {t({
                      es: "Gracias por contactar con AAIA. Hemos recibido tu consulta correctamente y te responderemos a la brevedad.",
                      en: "Thank you for contacting AAIA. We have received your query correctly and we will reply as soon as possible.",
                      de: "Vielen Dank für Ihre Kontaktaufnahme mit AAIA. Wir haben Ihre Anfrage erhalten und werden Ihnen so schnell wie möglich antworten.",
                      fr: "Merci d'avoir contacté l'AAIA. Nous avons bien reçu votre demande et nous vous répondrons dans les plus brefs délais.",
                      it: "Grazie per aver contattato AAIA. Abbiamo ricevuto la tua richiesta correttamente e ti risponderemo al più presto.",
                      ro: "Vă mulțumim că ați contactat AAIA. Am primit solicitarea dvs. și vă vom răspunde în cel mai scurt timp posibil."
                    })}
                  </p>
                </div>
                <button 
                  onClick={() => setStatus('idle')}
                  className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all"
                >
                  {t({
                    es: "Enviar otro mensaje",
                    en: "Send another message",
                    de: "Eine weitere Nachricht senden",
                    fr: "Envoyer un autre message",
                    it: "Invia un altro messaggio",
                    ro: "Trimite un alt mesaj"
                  })}
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {status === 'error' && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-2xl text-red-600 dark:text-red-400 text-sm font-medium animate-in slide-in-from-top-2">
                    <div className="flex gap-3">
                      <span className="material-icons-round text-lg">error_outline</span>
                      <p>{errorMessage}</p>
                    </div>
                  </div>
                )}
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 mb-2 uppercase tracking-widest">
                      {t({
                        es: "Nombre completo",
                        en: "Full name",
                        de: "Vollständiger Name",
                        fr: "Nom complet",
                        it: "Nome completo",
                        ro: "Nume complet"
                      })}
                    </label>
                    <input 
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className="w-full rounded-2xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm h-14 px-5 font-medium transition-all disabled:opacity-50" 
                      placeholder={t({
                        es: "Ej. Juan Pérez",
                        en: "e.g., John Doe",
                        de: "z.B. Max Mustermann",
                        fr: "ex. Jean Dupont",
                        it: "es. Mario Rossi",
                        ro: "ex. Ion Popescu"
                      })} 
                      type="text" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 mb-2 uppercase tracking-widest">
                      {t({
                        es: "Correo Electrónico",
                        en: "Email Address",
                        de: "E-Mail-Adresse",
                        fr: "Adresse e-mail",
                        it: "Indirizzo Email",
                        ro: "Adresă de e-mail"
                      })}
                    </label>
                    <input 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className="w-full rounded-2xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm h-14 px-5 font-medium transition-all disabled:opacity-50" 
                      placeholder="tu@email.com" 
                      type="email" 
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 mb-2 uppercase tracking-widest">
                      {t({
                        es: "Teléfono de contacto",
                        en: "Contact phone",
                        de: "Kontakttelefon",
                        fr: "Téléphone de contact",
                        it: "Telefono di contatto",
                        ro: "Telefon de contact"
                      })}
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 material-icons-round text-slate-400 text-xl">phone</span>
                      <input 
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                        className="w-full rounded-2xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm h-14 pl-12 pr-5 font-medium transition-all disabled:opacity-50" 
                        placeholder="+34 600 000 000" 
                        type="tel" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 mb-2 uppercase tracking-widest">
                      {t({
                        es: "Motivo de consulta",
                        en: "Reason for inquiry",
                        de: "Anfragegrund",
                        fr: "Motif de la demande",
                        it: "Motivo della richiesta",
                        ro: "Motivul solicitării"
                      })}
                    </label>
                    <select 
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className="w-full rounded-2xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm h-14 px-5 font-medium transition-all appearance-none disabled:opacity-50"
                    >
                      <option value="Información General">
                        {t({
                          es: "Información General",
                          en: "General Information",
                          de: "Allgemeine Informationen",
                          fr: "Informations Générales",
                          it: "Informazioni Generali",
                          ro: "Informații Generale"
                        })}
                      </option>
                      <option value="Hacerse Socio">
                        {t({
                          es: "Hacerse Socio",
                          en: "Become a Member",
                          de: "Mitglied werden",
                          fr: "Devenir Membre",
                          it: "Diventa un Socio",
                          ro: "Deving Membru"
                        })}
                      </option>
                      <option value="Empresas y Formación">
                        {t({
                          es: "Empresas y Formación",
                          en: "Business & Training",
                          de: "Unternehmen & Weiterbildung",
                          fr: "Entreprises & Formation",
                          it: "Aziende e Formazione",
                          ro: "Companii și Formare"
                        })}
                      </option>
                      <option value="Prensa / Medios">
                        {t({
                          es: "Prensa / Medios",
                          en: "Press & Media",
                          de: "Presse & Medien",
                          fr: "Presse / Médias",
                          it: "Stampa / Media",
                          ro: "Presă / Media"
                        })}
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 mb-2 uppercase tracking-widest">
                    {t({
                      es: "Tu Mensaje",
                      en: "Your Message",
                      de: "Ihre Nachricht",
                      fr: "Votre Message",
                      it: "Il tuo Messaggio",
                      ro: "Mesajul tău"
                    })}
                  </label>
                  <textarea 
                    name="mensaje"
                    required
                    value={formData.mensaje}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    className="w-full rounded-2xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm p-5 font-medium transition-all disabled:opacity-50" 
                    placeholder={t({
                      es: "Cuéntanos cómo podemos ayudarte...",
                      en: "Tell us how we can help you...",
                      de: "Sagen Sie uns, wie wir Ihnen helfen können...",
                      fr: "Dites-nous comment nous pouvons vous aider...",
                      it: "Dicci come possiamo aiutarti...",
                      ro: "Spune-ne cum te putem ajuta..."
                    })} 
                    rows={4}
                  ></textarea>
                </div>
                <button 
                  className={`w-full bg-primary text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 active:scale-95 disabled:opacity-70 ${status === 'submitting' ? 'animate-pulse' : ''}`} 
                  type="submit"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    t({
                      es: "Enviando...",
                      en: "Sending...",
                      de: "Wird gesendet...",
                      fr: "Envoi en cours...",
                      it: "Invio in corso...",
                      ro: "Se trimite..."
                    })
                  ) : (
                    t({
                      es: "Enviar Mensaje",
                      en: "Send Message",
                      de: "Nachricht senden",
                      fr: "Envoyer le Message",
                      it: "Invia Messaggio",
                      ro: "Trimite Mesajul"
                    })
                  )}
                  <span className="material-icons-round text-xl">send</span>
                </button>
              </form>
            )}
          </div>

          {/* Info Panel */}
          <div className="relative bg-slate-900 overflow-hidden flex flex-col border-l border-slate-800">
            <div className="absolute inset-0 opacity-20 group">
              <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1000" 
                alt="IA Contact" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
            </div>

            <div className="relative z-10 p-10 lg:p-16 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-black mb-10 text-white uppercase tracking-tight">
                  {t({
                    es: "Información de Contacto",
                    en: "Contact Information",
                    de: "Kontaktinformationen",
                    fr: "Informations de Contact",
                    it: "Informazioni di Contatto",
                    ro: "Informații de Contact"
                  })}
                </h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-primary shadow-xl shrink-0">
                      <span className="material-icons-round text-2xl">location_on</span>
                    </div>
                    <div>
                      <p className="font-black text-white text-lg mb-1">
                        {t({
                          es: "Dirección Física",
                          en: "Physical Address",
                          de: "Physische Adresse",
                          fr: "Adresse Physique",
                          it: "Indirizzo Fisico",
                          ro: "Adresă Fizică"
                        })}
                      </p>
                      <p className="text-base text-slate-400 font-medium">Calle Canfranc, 8<br />50004 Zaragoza, Aragón</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-primary shadow-xl shrink-0">
                      <span className="material-icons-round text-2xl">email</span>
                    </div>
                    <div>
                      <p className="font-black text-white text-lg mb-1">
                        {t({
                          es: "Email Directo",
                          en: "Direct Email",
                          de: "Direkte E-Mail",
                          fr: "E-mail Direct",
                          it: "Email Diretta",
                          ro: "E-mail Direct"
                        })}
                      </p>
                      <a className="text-base text-primary font-bold hover:underline" href="mailto:aaia.aragon@gmail.com">aaia.aragon@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-primary shadow-xl shrink-0">
                      <span className="material-icons-round text-2xl">phone</span>
                    </div>
                    <div>
                      <p className="font-black text-white text-lg mb-1">
                        {t({
                          es: "Teléfono",
                          en: "Phone",
                          de: "Telefon",
                          fr: "Téléphone",
                          it: "Telefono",
                          ro: "Telefon"
                        })}
                      </p>
                      <p className="text-base text-slate-400 font-medium">+34 618 168 463</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-white/5 backdrop-blur-lg border border-white/10 rounded-[2.5rem] p-8 text-white shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-icons-round text-primary">schedule</span>
                  <h4 className="font-black text-xl">
                    {t({
                      es: "Atención al Público",
                      en: "Public Hours",
                      de: "Öffnungszeiten",
                      fr: "Heures d'Ouverture",
                      it: "Orari al Pubblico",
                      ro: "Program cu Publicul"
                    })}
                  </h4>
                </div>
                <div className="text-sm text-slate-300 space-y-3 font-medium">
                  <p className="flex justify-between border-b border-white/10 pb-2">
                    <span>
                      {t({
                        es: "Lunes a Viernes",
                        en: "Monday to Friday",
                        de: "Montag bis Freitag",
                        fr: "Lundi au Vendredi",
                        it: "Lunedì a Venerdì",
                        ro: "Luni până Vineri"
                      })}
                    </span> 
                    <span className="text-white font-bold">9:00 - 18:00</span>
                  </p>
                  <p className="flex justify-between border-b border-white/10 pb-2">
                    <span>
                      {t({
                        es: "Sábados",
                        en: "Saturdays",
                        de: "Samstags",
                        fr: "Samedis",
                        it: "Sabato",
                        ro: "Sâmbătă"
                      })}
                    </span> 
                    <span className="text-white font-bold">10:00 - 14:00</span>
                  </p>
                  <p className="flex justify-between text-slate-500 italic">
                    <span>
                      {t({
                        es: "Domingos",
                        en: "Sundays",
                        de: "Sonntags",
                        fr: "Dimanches",
                        it: "Domenica",
                        ro: "Duminică"
                      })}
                    </span> 
                    <span>
                      {t({
                        es: "Cerrado",
                        en: "Closed",
                        de: "Geschlossen",
                        fr: "Fermé",
                        it: "Chiuso",
                        ro: "Închis"
                      })}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
