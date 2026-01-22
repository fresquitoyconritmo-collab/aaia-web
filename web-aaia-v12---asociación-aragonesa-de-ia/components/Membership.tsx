
import React from 'react';

interface MembershipProps {
  onNavigateContact?: () => void;
}

const Membership: React.FC<MembershipProps> = ({ onNavigateContact }) => {
  return (
    <section id="unete" className="py-32 bg-white dark:bg-[#020617] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">Construye el futuro con nosotros</h2>
          <p className="mt-4 text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Tanto si eres un profesional de la IA como si acabas de descubrirla, hay un lugar para ti en nuestra comunidad.
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
                <h3 className="text-3xl font-black text-white mb-2">Socio de Honor</h3>
                <p className="text-blue-100/80 mb-10 font-medium">Reconocimiento a trayectorias que impulsan la IA en Aragón.</p>
                <ul className="space-y-5 mb-12 text-blue-50">
                  {['Beneficios exclusivos de red', 'Distinción institucional', 'Voz en comités de ética', 'Representación en congresos'].map((item, i) => (
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
                Solicitar acceso
              </button>
            </div>
          </div>

          {/* Socio Protector */}
          <div className="group bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col relative">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 text-primary rounded-3xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
              <span className="material-icons-round text-3xl">favorite</span>
            </div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Socio Protector</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-10 font-medium">Apoyo financiero para nuestros proyectos de impacto social.</p>
            <ul className="space-y-5 mb-12 text-slate-600 dark:text-slate-300 flex-grow">
              {['Financiación directa de talleres', 'Logotipo en web y eventos', 'Certificado de contribución ética', 'Acceso anticipado a informes'].map((item, i) => (
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
              Convertirse en Protector
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
