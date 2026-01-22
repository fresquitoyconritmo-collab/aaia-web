
import React from 'react';

interface TrainingDetailViewProps {
  onBack: () => void;
  onContact: () => void;
}

const TrainingDetailView: React.FC<TrainingDetailViewProps> = ({ onBack, onContact }) => {
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
            <span className="material-icons-round text-lg">edit_calendar</span>
            Solicitar esta formación
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-400 text-xs font-black mb-6 uppercase tracking-widest border border-blue-200 dark:border-blue-800">
            Módulo Formativo 01
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
            ALFABETIZACIÓN Y <br/>
            <span className="text-primary">CIUDADANÍA DIGITAL</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium">
            Capacitación integral diseñada para reducir la brecha tecnológica y fomentar una ciudadanía crítica en la era de la inteligencia artificial.
          </p>
        </div>

        {/* Course Modules Grid */}
        <div className="grid gap-12">
          
          {/* Module 1.1 */}
          <div className="group bg-white dark:bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-primary/10 transition-colors"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 text-primary rounded-3xl flex items-center justify-center shadow-inner">
                    <span className="material-icons-round text-3xl">lightbulb</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">1.1. Introducción a la IA</h2>
                    <p className="text-primary font-bold">¿Qué es y cómo nos afecta?</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <span className="material-icons-round text-sm">schedule</span> 2 Horas
                  </span>
                  <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <span className="material-icons-round text-sm">groups</span> Ciudadanía General
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span> Objetivo del curso
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      Desmitificar la IA, reduciendo el miedo tecnológico y fomentando una base crítica para su comprensión.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400"></span> Metodología
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      Exposición visual dinámica con ejemplos prácticos en tiempo real y ronda de preguntas interactiva para resolver dudas inmediatas.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900 dark:bg-black p-8 rounded-3xl text-white shadow-xl">
                  <h4 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-6">Contenidos del programa</h4>
                  <ul className="space-y-5">
                    {[
                      "Definición sencilla: del algoritmo a la red neuronal.",
                      "IA en la vida cotidiana (recomendaciones, mapas, salud).",
                      "El futuro del trabajo y la convivencia con máquinas."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="material-icons-round text-blue-500">check_circle</span>
                        <span className="text-sm font-medium text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Module 1.2 */}
          <div className="group bg-white dark:bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-indigo-500/10 transition-colors"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-3xl flex items-center justify-center shadow-inner">
                    <span className="material-icons-round text-3xl">gavel</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">1.2. Uso Responsable y Ético</h2>
                    <p className="text-indigo-600 dark:text-indigo-400 font-bold">Criterios para el entorno profesional</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <span className="material-icons-round text-sm">schedule</span> 3 Horas
                  </span>
                  <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <span className="material-icons-round text-sm">badge</span> Profesionales y Docentes
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-500"></span> Objetivo del taller
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      Dotar de criterios éticos sólidos para el uso de herramientas de IA en entornos profesionales y personales, alineado con el RGPD.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-400"></span> Metodología
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      Análisis participativo de casos reales y debates guiados sobre dilemas éticos actuales y futuros en la administración y educación.
                    </p>
                  </div>
                </div>

                <div className="bg-indigo-950 p-8 rounded-3xl text-white shadow-xl shadow-indigo-900/20">
                  <h4 className="text-xs font-black text-indigo-300 uppercase tracking-widest mb-6">Bloques temáticos</h4>
                  <ul className="space-y-5">
                    {[
                      "Privacidad y protección de datos (RGPD aplicado a la IA).",
                      "Sesgos algorítmicos y estrategias de detección.",
                      "Transparencia radical y propiedad intelectual en modelos generativos."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="material-icons-round text-indigo-400">verified_user</span>
                        <span className="text-sm font-medium text-indigo-100">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-16 bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <span className="material-icons-round">info</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md font-medium">
              Esta oferta formativa puede ser adaptada para instituciones públicas, ayuntamientos o asociaciones sectoriales en todo el territorio aragonés.
            </p>
          </div>
          <button 
            onClick={onContact}
            className="w-full md:w-auto px-10 py-4 bg-primary text-white rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            Contactar para Presupuesto
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainingDetailView;
