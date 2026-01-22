
import React from 'react';

interface EducationTrainingDetailViewProps {
  onBack: () => void;
  onContact: () => void;
}

const EducationTrainingDetailView: React.FC<EducationTrainingDetailViewProps> = ({ onBack, onContact }) => {
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
            <span className="material-icons-round text-lg">school</span>
            Solicitar para mi Centro
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-black mb-6 uppercase tracking-widest border border-purple-200 dark:border-purple-800">
            Módulo Formativo 03
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight uppercase tracking-tighter">
            EDUCACIÓN E <br/>
            <span className="text-primary">INNOVACIÓN DOCENTE</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium">
            Capacitación para transformar el sistema educativo aragonés, empoderando a docentes y estudiantes con un uso crítico y creativo de la IA.
          </p>
        </div>

        {/* Course Modules Grid */}
        <div className="grid gap-12">
          
          {/* Module 3.1 */}
          <div className="group bg-white dark:bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:border-purple-500/20 transition-all duration-500 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-purple-500/10 transition-colors"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-purple-50 dark:bg-purple-900/20 text-purple-600 rounded-3xl flex items-center justify-center shadow-inner">
                    <span className="material-icons-round text-3xl">menu_book</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">3.1. IA Generativa aplicada al Aula</h2>
                    <p className="text-purple-600 font-bold">Transformación de la labor docente</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <span className="material-icons-round text-sm">schedule</span> 6 Horas
                  </span>
                  <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <span className="material-icons-round text-sm">badge</span> Profesores de FP, Primaria y Secundaria
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-500"></span> Objetivo del curso
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      Transformar la labor docente mediante la creación eficiente de materiales y una gestión del aula adaptada a los nuevos retos tecnológicos.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-400"></span> Metodología
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      Taller práctico e intensivo de creación de materiales curriculares reales, diseñados para ser aplicados en el aula de forma inmediata.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900 dark:bg-purple-950 p-8 rounded-3xl text-white shadow-xl">
                  <h4 className="text-xs font-black text-purple-400 uppercase tracking-widest mb-6">Bloques de contenido</h4>
                  <ul className="space-y-5">
                    {[
                      "Diseño de situaciones de aprendizaje y unidades didácticas con IA de apoyo.",
                      "Nuevos modelos de evaluación competencial: evolucionando más allá del examen tradicional.",
                      "Uso ético y guiado de la IA por parte del alumnado: límites y posibilidades pedagógicas."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="material-icons-round text-purple-500">auto_fix_high</span>
                        <span className="text-sm font-medium text-slate-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Module 3.2 */}
          <div className="group bg-white dark:bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:border-blue-500/20 transition-all duration-500 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-blue-500/10 transition-colors"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-3xl flex items-center justify-center shadow-inner">
                    <span className="material-icons-round text-3xl">psychology</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">3.2. Pensamiento Crítico</h2>
                    <p className="text-blue-600 font-bold">Ciudadanía Digital Segura</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <span className="material-icons-round text-sm">schedule</span> 3 Horas
                  </span>
                  <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <span className="material-icons-round text-sm">groups</span> Estudiantes de FP y Universidad
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span> Objetivo del taller
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      Fomentar un uso consciente, ético y seguro de la Inteligencia Artificial entre los nativos digitales, dotándoles de herramientas de verificación.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400"></span> Metodología
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      Gamificación basada en retos grupales de detección y análisis de contenidos generados por IA, fomentando la competitividad sana y el aprendizaje activo.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900 dark:bg-blue-950 p-8 rounded-3xl text-white shadow-xl">
                  <h4 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-6">Contenidos clave</h4>
                  <ul className="space-y-5">
                    {[
                      "Deepfakes y desinformación: Herramientas y protocolos para verificar contenidos multimedia.",
                      "Derechos digitales y huella tecnológica: Conciencia sobre la soberanía del dato.",
                      "La IA como aliada creativa: Fomentando la creación frente al consumo pasivo de tecnología."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="material-icons-round text-blue-500">fact_check</span>
                        <span className="text-sm font-medium text-slate-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing / Contact Section */}
        <div className="mt-16 bg-gradient-to-br from-purple-600 to-blue-700 p-1 rounded-[3rem] shadow-2xl">
          <div className="bg-white dark:bg-slate-900 rounded-[2.9rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600">
                <span className="material-icons-round text-3xl">history_edu</span>
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-900 dark:text-white uppercase">Mejora la calidad educativa</h4>
                <p className="text-slate-500 dark:text-slate-400 font-medium">Lleva la innovación de la AAIA a tu centro escolar o facultad.</p>
              </div>
            </div>
            <button 
              onClick={onContact}
              className="w-full md:w-auto px-12 py-5 bg-purple-600 text-white rounded-2xl font-bold hover:bg-purple-700 transition-all shadow-xl shadow-purple-500/20 active:scale-95"
            >
              Contactar para Talleres
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationTrainingDetailView;
