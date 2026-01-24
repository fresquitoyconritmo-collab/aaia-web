
import React, { useState } from 'react';

const NewsAndAgenda: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <section id="actualidad" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">Actualidad y Agenda</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Mantente informado sobre nuestras actividades y eventos.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h3 className="flex items-center gap-3 text-2xl font-bold mb-10 dark:text-white">
              <span className="material-icons-round text-primary text-3xl">calendar_month</span>
              Próximas Actividades
            </h3>
            <div className="space-y-10 relative">
              <div className="absolute left-[7px] top-2 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800"></div>
              
              {[
                { type: "Conferencia", color: "blue", title: "IA y Futuro del Trabajo en Aragón", date: "15 Feb 2026 - 10:00", loc: "Auditorio ZGZ" },
                { type: "Taller", color: "purple", title: "IA para Mayores: Primeros Pasos", date: "22 Feb 2026 - 16:00", loc: "25 plazas" },
                { type: "Mesa Redonda", color: "orange", title: "Ética en IA: Retos 2026", date: "1 Mar 2026 - 18:30", loc: "Unizar" }
              ].map((act, idx) => (
                <div key={idx} className="pl-8 relative">
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary border-4 border-slate-50 dark:border-slate-950 z-10"></div>
                  <span className={`inline-block px-3 py-1 bg-${act.color}-100 dark:bg-${act.color}-900/40 text-${act.color}-600 dark:text-${act.color}-400 text-xs font-black rounded-lg mb-3`}>{act.type}</span>
                  <h4 className="font-bold text-xl dark:text-white mb-2 leading-snug">{act.title}</h4>
                  <div className="text-sm text-slate-500 dark:text-slate-500 mt-2 flex flex-wrap gap-6">
                    <span className="flex items-center gap-1.5"><span className="material-icons-round text-lg">schedule</span> {act.date}</span>
                    <span className="flex items-center gap-1.5"><span className="material-icons-round text-lg">location_on</span> {act.loc}</span>
                  </div>
                  <a href="#contacto" className="mt-5 text-sm font-bold text-primary hover:text-blue-700 transition-colors uppercase tracking-wider block">Inscribirme</a>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="flex items-center gap-3 text-2xl font-bold mb-10 dark:text-white">
              <span className="material-icons-round text-primary text-3xl">newspaper</span>
              Sala de Prensa
            </h3>
            <div className="space-y-8 mb-12">
              <article className="group cursor-pointer">
                <div className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">8 Ene 2026 • Institucional</div>
                <h4 className="font-bold text-lg dark:text-white group-hover:text-primary transition-colors mb-3 leading-tight">AAIA firma convenio de colaboración con la Universidad de Zaragoza</h4>
                <a className="text-primary font-bold text-sm hover:underline flex items-center gap-1" href="#">Leer más <span className="material-icons-round text-sm">arrow_right_alt</span></a>
              </article>
              <hr className="border-slate-200 dark:border-slate-800" />
              <article className="group cursor-pointer">
                <div className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">20 Dic 2025 • Formación</div>
                <h4 className="font-bold text-lg dark:text-white group-hover:text-primary transition-colors mb-3 leading-tight">Lanzamiento del programa piloto de alfabetización digital</h4>
                <a className="text-primary font-bold text-sm hover:underline flex items-center gap-1" href="#">Leer más <span className="material-icons-round text-sm">arrow_right_alt</span></a>
              </article>
            </div>
            <div className="bg-primary rounded-3xl p-8 text-white shadow-xl shadow-blue-500/20 relative overflow-hidden">
              {subscribed ? (
                <div className="flex flex-col items-center justify-center py-6 animate-in zoom-in duration-300">
                  <span className="material-icons-round text-5xl mb-4">check_circle</span>
                  <h4 className="text-2xl font-bold">¡Gracias por suscribirte!</h4>
                  <p className="text-blue-100 mt-2">Pronto recibirás nuestras novedades.</p>
                </div>
              ) : (
                <>
                  <h4 className="text-2xl font-bold mb-3">Suscríbete a nuestro boletín</h4>
                  <p className="text-blue-100 mb-8 font-medium">Recibe las últimas noticias y eventos directamente en tu correo.</p>
                  <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubscribe}>
                    <input 
                      className="flex-grow rounded-xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-300 border-none placeholder-slate-400 font-medium" 
                      placeholder="tu@email.com" 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit" className="bg-blue-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition-all hover:scale-105 shrink-0">Suscribir</button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 border-t border-slate-200 dark:border-slate-900 pt-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h4 className="text-slate-900 dark:text-white font-black mb-3 text-lg">Gestión de Fondos Públicos</h4>
          <p className="text-slate-500 dark:text-slate-500 text-sm max-w-4xl mx-auto leading-relaxed">
            De acuerdo con el artículo 38 de nuestros estatutos, AAIA se compromete a la transparencia absoluta en la gestión de cualquier fondo público que pueda recibir, publicando de forma accesible y comprensible el destino de cada recurso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsAndAgenda;
