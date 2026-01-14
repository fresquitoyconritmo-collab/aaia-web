
import React from 'react';

interface BusinessTrainingDetailViewProps {
  onBack: () => void;
  onContact: () => void;
}

const BusinessTrainingDetailView: React.FC<BusinessTrainingDetailViewProps> = ({ onBack, onContact }) => {
  return (
    <div className="bg-slate-50 dark:bg-[#020617] min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Navigation Bar */}
        <div className="flex justify-between items-center mb-12">
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary font-bold transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-icons-round">arrow_back</span>
            </div>
            Volver al catálogo
          </button>
          
          <button 
            onClick={onContact}
            className="bg-primary text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
          >
            <span className="material-icons-round text-lg">business_center</span>
            Solicitar para mi Empresa
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-black mb-6 uppercase tracking-widest border border-emerald-200 dark:border-emerald-800">
            Módulo Formativo 02
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight uppercase tracking-tighter">
            PRODUCTIVIDAD Y <br/>
            <span className="text-primary">EMPRESA EN ARAGÓN</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium">
            Transformación digital mediante IA Generativa para optimizar la competitividad de Pymes, autónomos y emprendedores del territorio aragonés.
          </p>
        </div>

        {/* Course Modules Grid */}
        <div className="grid gap-12">
          
          {/* Module 2.1 */}
          <div className="group bg-white dark:bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:border-emerald-500/20 transition-all duration-500 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-emerald-500/10 transition-colors"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 rounded-3xl flex items-center justify-center shadow-inner">
                    <span className="material-icons-round text-3xl">trending_up</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">2.1. IA Generativa para la Productividad</h2>
                    <p className="text-emerald-600 font-bold">Optimización profesional y ahorro de costes</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <span className="material-icons-round text-sm">schedule</span> 4 Horas
                  </span>
                  <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <span className="material-icons-round text-sm">store</span> Pymes y Emprendedores
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Objetivo del taller
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      Implementar herramientas de IA realistas y accesibles para optimizar tiempos y elevar la calidad de los resultados en las tareas diarias del negocio.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Metodología
                    </h4>
                    <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800/50">
                      <p className="text-emerald-800 dark:text-emerald-200 font-bold text-sm mb-1 uppercase">Learning by doing</p>
                      <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed text-sm">
                        Los asistentes trabajan con sus propios casos de negocio durante la sesión, saliendo con herramientas configuradas y listas para usar.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 dark:bg-emerald-950 p-8 rounded-3xl text-white shadow-xl">
                  <h4 className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-6">Bloques de contenido</h4>
                  <ul className="space-y-5">
                    {[
                      "Prompt Engineering: El arte de pedirle cosas a la IA con precisión estratégica.",
                      "Herramientas clave: Redacción de textos persuasivos, creación de imágenes y automatización inteligente de correos.",
                      "Análisis de retorno: Ahorro de costes operativos y mejora continua de procesos internos."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="material-icons-round text-emerald-500">bolt</span>
                        <span className="text-sm font-medium text-slate-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Case / Teaser */}
        <div className="mt-16 bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-100 dark:border-slate-800">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
              <span className="material-icons-round text-4xl">rocket</span>
            </div>
            <div className="flex-grow">
              <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2 uppercase">Impacto en el Negocio</h4>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                Nuestras empresas piloto han reportado una reducción de hasta el 40% en tiempos de gestión administrativa tras aplicar estas técnicas. La IA en Aragón no es solo futuro, es rentabilidad hoy.
              </p>
            </div>
            <button 
              onClick={onContact}
              className="w-full md:w-auto px-10 py-4 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-lg whitespace-nowrap"
            >
              Pedir Presupuesto Pyme
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessTrainingDetailView;
