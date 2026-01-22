
import React from 'react';

interface AreasOfActionProps {
  onNavigateTraining?: () => void;
  onNavigateNews?: () => void;
  onNavigateContact?: () => void;
}

const AreasOfAction: React.FC<AreasOfActionProps> = ({ 
  onNavigateTraining, 
  onNavigateNews, 
  onNavigateContact 
}) => {
  const areas = [
    { 
      icon: "school", 
      title: "Formación", 
      desc: "Cursos, talleres y programas educativos en IA para todos los niveles de la sociedad.", 
      bg: "bg-blue-500", 
      action: onNavigateTraining 
    },
    { 
      icon: "campaign", 
      title: "Divulgación", 
      desc: "Eventos públicos y conferencias para acercar la IA a la comunidad aragonesa.", 
      bg: "bg-indigo-500", 
      action: onNavigateNews 
    },
    { 
      icon: "build", 
      title: "Asesoramiento", 
      desc: "Consultoría especializada para empresas e instituciones que desean ser éticas.", 
      bg: "bg-purple-500", 
      action: onNavigateContact 
    },
    { 
      icon: "lightbulb", 
      title: "Innovación", 
      desc: "Proyectos piloto y colaboraciones de I+D aplicados a problemas regionales.", 
      bg: "bg-emerald-500", 
      action: onNavigateContact 
    }
  ];

  return (
    <section className="py-32 bg-slate-50 dark:bg-[#020617] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Nuestra Hoja de Ruta</h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg">
            Impactamos en Aragón a través de cuatro dimensiones estratégicas diseñadas para el crecimiento inclusivo.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area, idx) => (
            <div key={idx} className="group bg-white dark:bg-slate-900/50 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 glass-panel">
              <div className={`w-16 h-16 ${area.bg} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                <span className="material-icons-round text-3xl">{area.icon}</span>
              </div>
              <h4 className="text-xl font-bold dark:text-white mb-4">{area.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{area.desc}</p>
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => area.action && area.action()} 
                  className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform"
                >
                  Ver detalles <span className="material-icons-round text-sm">east</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasOfAction;
