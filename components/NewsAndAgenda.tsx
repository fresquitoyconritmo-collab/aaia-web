
import React, { useState } from 'react';

const NewsAndAgenda: React.FC = () => {
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
        // El mensaje de éxito se mantiene para que el usuario lo vea bien
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
                { type: "Conferencia", color: "blue", title: "IA y Futuro del Trabajo en Aragón", date: "15 Feb 2026 - 10:00", loc: "ZGZ" },
                { type: "Taller", color: "purple", title: "IA para Mayores: Primeros Pasos", date: "22 Feb 2026 - 16:00", loc: "25 plazas" },
                { type: "Mesa Redonda", color: "orange", title: "Ética en IA: Retos 2026", date: "25 Abril 2026 - 18:30", loc: "Centro Cívico Universidad" }
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
                <div className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">12 Ene 2026 • Institucional</div>
                <h4 className="font-bold text-lg dark:text-white group-hover:text-primary transition-colors mb-3 leading-tight">Se funda la Asociación Aragonesa de Inteligencia Artificial</h4>
                <a className="text-primary font-bold text-sm hover:underline flex items-center gap-1" href="#">Leer más <span className="material-icons-round text-sm">arrow_right_alt</span></a>
              </article>
              <hr className="border-slate-200 dark:border-slate-800" />
              <article className="group cursor-pointer">
                <div className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">24 Febrero 2026 • Formación</div>
                <h4 className="font-bold text-lg dark:text-white group-hover:text-primary transition-colors mb-3 leading-tight">Preparando el programa piloto de alfabetización digital</h4>
                <a className="text-primary font-bold text-sm hover:underline flex items-center gap-1" href="#">Leer más <span className="material-icons-round text-sm">arrow_right_alt</span></a>
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
                  <h4 className="text-3xl font-black mb-2 uppercase tracking-tighter">¡Ya estás dentro!</h4>
                  <p className="text-blue-100 mt-2 font-medium max-w-xs">Hemos registrado tu suscripción. Prepárate para recibir lo mejor de la IA en Aragón.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-xs font-black uppercase tracking-widest bg-white/10 hover:bg-white/20 px-6 py-2 rounded-full transition-colors"
                  >
                    Suscribir otro email
                  </button>
                </div>
              ) : status === 'error' ? (
                <div className="flex flex-col items-center justify-center py-6 animate-in shake duration-300 text-center relative z-10">
                  <span className="material-icons-round text-6xl mb-4 text-red-300">error_outline</span>
                  <h4 className="text-2xl font-bold">Vaya, algo ha fallado</h4>
                  <p className="text-blue-100 mt-2">No hemos podido procesar tu email en este momento.</p>
                  <button onClick={() => setStatus('idle')} className="mt-6 bg-white text-primary px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all">Reintentar ahora</button>
                </div>
              ) : (
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <span className="material-icons-round">mail</span>
                    </div>
                    <h4 className="text-2xl font-black uppercase tracking-tight">Únete al boletín</h4>
                  </div>
                  <p className="text-blue-100 mb-8 font-medium leading-relaxed">
                    Recibe convocatorias, noticias exclusivas y nuestra agenda mensual sin spam.
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
                          PROCESANDO
                        </>
                      ) : (
                        'SUSCRIBIRME'
                      )}
                    </button>
                  </form>
                  <p className="text-[10px] text-blue-200/60 mt-4 font-medium uppercase tracking-widest text-center sm:text-left">
                    Respetamos tu privacidad. Un solo clic para darte de baja.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 border-t border-slate-200 dark:border-slate-900 pt-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h4 className="text-slate-900 dark:text-white font-black mb-3 text-lg uppercase tracking-tight">Gestión Transparente de Fondos</h4>
          <p className="text-slate-500 dark:text-slate-500 text-sm max-w-4xl mx-auto leading-relaxed font-medium">
            De acuerdo con el artículo 38 de nuestros estatutos, AAIA se compromete a la transparencia absoluta en la gestión de cualquier fondo público que pueda recibir, publicando de forma accesible y comprensible el destino de cada recurso en nuestro portal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsAndAgenda;
