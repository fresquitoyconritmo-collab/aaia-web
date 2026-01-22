
import React from 'react';

interface MissionProps {
  onNavigateTraining?: () => void;
  onNavigateNews?: () => void;
  onNavigateContact?: () => void;
  onNavigateEthics?: () => void;
}

const Mission: React.FC<MissionProps> = ({ 
  onNavigateTraining, 
  onNavigateNews, 
  onNavigateContact,
  onNavigateEthics
}) => {
  const pillars = [
    {
      icon: "school",
      title: "Formación e Investigación",
      description: "Impulsamos el talento aragonés mediante programas educativos y estudios científicos en IA.",
      color: "bg-blue-500",
      accent: "text-blue-500",
      action: onNavigateTraining
    },
    {
      icon: "diversity_1",
      title: "Divulgación y Brecha Digital",
      description: "Acercamos la IA a la sociedad y trabajamos para que nadie se quede atrás, especialmente los colectivos en riesgo de exclusión.",
      color: "bg-indigo-500",
      accent: "text-indigo-500",
      action: onNavigateNews
    },
    {
      icon: "gavel",
      title: "Asesoramiento Ético",
      description: "Guiamos a empresas e instituciones para que implementen una Inteligencia Artificial responsable y transparente.",
      color: "bg-purple-500",
      accent: "text-purple-500",
      action: onNavigateEthics
    },
    {
      icon: "hub",
      title: "Innovación Regional",
      description: "Desarrollamos proyectos piloto e I+D aplicados a resolver problemas reales de nuestro territorio.",
      color: "bg-emerald-500",
      accent: "text-emerald-500",
      action: onNavigateContact
    }
  ];

  return (
    <section id="mision" className="py-32 bg-white dark:bg-[#020617] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -mr-48 -mt-24 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -ml-48 -mb-24 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-400 text-xs font-black mb-6 uppercase tracking-widest border border-blue-100 dark:border-blue-800">
            Nuestro Propósito
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
            Nuestra <span className="text-primary">Misión</span>
          </h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-400 text-xl font-medium leading-relaxed">
            Impulsar el desarrollo y uso responsable de la Inteligencia Artificial en Aragón, garantizando su acceso equitativo y su aplicación ética para fortalecer nuestro territorio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="group bg-slate-50 dark:bg-slate-900/50 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 flex flex-col h-full"
            >
              <div className={`w-16 h-16 ${pillar.color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                <span className="material-icons-round text-3xl">{pillar.icon}</span>
              </div>
              
              <h3 className="text-xl font-black mb-4 text-slate-900 dark:text-white leading-tight">
                {pillar.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium mb-8 flex-grow">
                {pillar.description}
              </p>
              
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                <button 
                  onClick={() => pillar.action && pillar.action()}
                  className={`flex items-center gap-2 font-black text-xs uppercase tracking-widest transition-all ${pillar.accent} hover:translate-x-1`}
                >
                  Ver detalles 
                  <span className="material-icons-round text-sm">east</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Institutional commitment badge */}
        <div className="mt-24 p-10 bg-slate-900 dark:bg-slate-800/50 rounded-[3rem] text-center relative overflow-hidden border border-slate-800 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm shrink-0">
              <span className="material-icons-round text-white text-4xl">verified</span>
            </div>
            <div className="text-left">
              <h4 className="text-white text-xl font-black mb-2 uppercase tracking-tight">Compromiso con el Reglamento de la UE</h4>
              <p className="text-slate-400 text-sm max-w-2xl font-medium">
                Todas nuestras acciones están alineadas con la Ley de Inteligencia Artificial de la Unión Europea y los Objetivos de Desarrollo Sostenible de la Agenda 2030.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
