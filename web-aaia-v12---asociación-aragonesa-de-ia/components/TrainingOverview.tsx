
import React from 'react';

interface TrainingOverviewProps {
  onBack: () => void;
  onContact: () => void;
}

const TrainingOverview: React.FC<TrainingOverviewProps> = ({ onBack, onContact }) => {
  return (
    <div className="bg-slate-50 dark:bg-[#020617] min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Navigation Bar */}
        <div className="flex justify-between items-center mb-12">
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary font-bold transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
              <span className="material-icons-round">arrow_back</span>
            </div>
            Volver al inicio
          </button>
          
          <button 
            onClick={onContact}
            className="bg-primary text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
          >
            <span className="material-icons-round text-lg">contact_support</span>
            Contactar para formación
          </button>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-20 bg-white dark:bg-slate-900 p-12 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tighter">
              Oferta Formativa <span className="text-primary">Inicial</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto font-medium leading-relaxed">
              Concebida como formación no reglada, de carácter institucional, divulgativo y aplicado, orientada a generar alfabetización, confianza y capacidad de uso responsable de la IA en Aragón.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              {['Flexibles y Escalables', 'Adaptables a Convocatorias', 'Acciones Piloto Replicables'].map((tag, i) => (
                <span key={i} className="px-6 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-xs font-black uppercase tracking-widest border border-slate-200 dark:border-slate-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Lines Container */}
        <div className="space-y-24">
          
          {/* LÍNEA 1 */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg">
                <span className="material-icons-round text-3xl">auto_stories</span>
              </div>
              <div>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Línea 1 · Alfabetización y Uso Responsable</h2>
                <p className="text-blue-600 font-bold uppercase text-sm tracking-widest">Objetivo: Comprensión accesible y crítica</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <TrainingCard 
                num="1.1"
                title="Introducción a la Inteligencia Artificial"
                subtitle="Qué es y cómo nos afecta"
                format="Charla / Sesión Divulgativa"
                duration="1,5 – 2 horas"
                audience="Ciudadanía, Asociaciones, Entidades Públicas"
                contents={["Qué es y qué no es la IA", "Usos cotidianos y reales", "Riesgos, límites y ética", "Impacto social y laboral"]}
                color="blue"
              />
              <TrainingCard 
                num="1.2"
                title="Uso responsable y ético de la IA"
                subtitle="Principios y marco normativo"
                format="Taller participativo"
                duration="3 horas"
                audience="Administración Pública, Docentes, Empresas"
                contents={["Principios éticos de la IA", "Sesgos y responsabilidad", "Marco normativo básico", "Buenas prácticas"]}
                color="blue"
              />
            </div>
          </section>

          {/* LÍNEA 2 */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center shadow-lg">
                <span className="material-icons-round text-3xl">business_center</span>
              </div>
              <div>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Línea 2 · IA, Empleo y Empresa</h2>
                <p className="text-emerald-600 font-bold uppercase text-sm tracking-widest">Objetivo: Tejido productivo y competitividad</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <TrainingCard 
                num="2.1"
                title="IA para Pymes y Emprendedores"
                format="Taller Práctico"
                duration="4 horas"
                audience="Pymes, Autónomos, Emprendedores"
                contents={["IA en el ecosistema Pyme", "Casos de uso reales", "Herramientas accesibles", "Errores habituales"]}
                color="emerald"
              />
              <TrainingCard 
                num="2.2"
                title="IA Generativa y Productividad"
                format="Taller Práctico"
                duration="4 horas"
                audience="Personal Administrativo, Técnicos, Empresas"
                contents={["Texto, imagen y automatización", "Casos prácticos dirigidos", "Uso responsable"]}
                color="emerald"
              />
              <TrainingCard 
                num="2.3"
                title="IA y Futuro del Empleo"
                format="Jornada / Mesa Redonda"
                duration="2 – 3 horas"
                audience="Orientadores, Jóvenes, Recualificación"
                contents={["Transformación del mercado", "Nuevos perfiles", "Competencias clave"]}
                color="emerald"
              />
            </div>
          </section>

          {/* LÍNEA 3 */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 bg-purple-600 text-white rounded-2xl flex items-center justify-center shadow-lg">
                <span className="material-icons-round text-3xl">school</span>
              </div>
              <div>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Línea 3 · IA y Educación</h2>
                <p className="text-purple-600 font-bold uppercase text-sm tracking-widest">Objetivo: Innovación pedagógica y crítica</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <TrainingCard 
                num="3.1"
                title="Introducción a la IA para Docentes"
                format="Taller Formativo"
                duration="4 horas"
                audience="Primaria, Secundaria, FP, Universidad"
                contents={["IA en la educación actual", "Oportunidades y riesgos", "Cambios metodológicos"]}
                color="purple"
              />
              <TrainingCard 
                num="3.2"
                title="IA Generativa aplicada al Aula"
                format="Taller Práctico"
                duration="6 horas"
                audience="Docentes, Formadores"
                contents={["Diseño de actividades", "Evaluación y IA", "Uso ético con alumnado"]}
                color="purple"
              />
              <TrainingCard 
                num="3.3"
                title="IA, Pensamiento Crítico y Ciudadanía"
                format="Taller / Charla participativa"
                duration="3 horas"
                audience="Jóvenes, Estudiantes"
                contents={["IA y desinformación", "Uso consciente", "Derechos digitales"]}
                color="purple"
              />
            </div>
          </section>
        </div>

        {/* Transversal Section */}
        <div className="mt-32 grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl -mr-20 -mt-20"></div>
            <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
              <span className="material-icons-round text-primary">campaign</span>
              Formatos Transversales
            </h3>
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-lg mb-2">Jornadas Institucionales</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Media jornada o jornada completa enfocada en la sensibilización y el posicionamiento estratégico para instituciones.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Programas Piloto</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Iniciativas de 10-20 horas para experimentación profunda, evaluación de impacto y escalabilidad territorial.</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-12 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-center">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase mb-6">Observaciones Clave</h3>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                <span className="material-icons-round text-primary">check_circle</span>
                Adaptabilidad total a convocatorias públicas.
              </li>
              <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                <span className="material-icons-round text-primary">check_circle</span>
                Modulación de contenidos por nivel y colectivo.
              </li>
              <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                <span className="material-icons-round text-primary">check_circle</span>
                Certificación por la Asociación Aragonesa de IA.
              </li>
            </ul>
            <button 
              onClick={onContact}
              className="w-full bg-slate-900 dark:bg-white dark:text-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:opacity-90 transition-all shadow-xl"
            >
              Solicitar Catálogo PDF
            </button>
          </div>
        </div>

        <div className="mt-20 text-center text-slate-400 text-sm font-medium">
          <p>Asociación Aragonesa de Inteligencia Artificial</p>
          <p>Formación, divulgación y colaboración para una IA responsable en Aragón.</p>
        </div>
      </div>
    </div>
  );
};

interface CardProps {
  num: string;
  title: string;
  subtitle?: string;
  format: string;
  duration: string;
  audience: string;
  contents: string[];
  color: 'blue' | 'emerald' | 'purple';
}

const TrainingCard: React.FC<CardProps> = ({ num, title, subtitle, format, duration, audience, contents, color }) => {
  const colorMap = {
    blue: "border-blue-100 dark:border-blue-900/50 hover:border-blue-500/30",
    emerald: "border-emerald-100 dark:border-emerald-900/50 hover:border-emerald-500/30",
    purple: "border-purple-100 dark:border-purple-900/50 hover:border-purple-500/30",
  };

  const textMap = {
    blue: "text-blue-600",
    emerald: "text-emerald-600",
    purple: "text-purple-600",
  };

  return (
    <div className={`bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border ${colorMap[color]} shadow-sm transition-all hover:shadow-xl group`}>
      <div className="flex justify-between items-start mb-6">
        <span className={`text-4xl font-black opacity-10 ${textMap[color]} group-hover:opacity-20 transition-opacity`}>{num}</span>
        <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 ${textMap[color]}`}>
          {format}
        </span>
      </div>
      <h3 className="text-xl font-black text-slate-900 dark:text-white mb-1 leading-tight">{title}</h3>
      {subtitle && <p className={`text-sm font-bold mb-4 ${textMap[color]}`}>{subtitle}</p>}
      
      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-2 text-xs text-slate-500 font-bold">
          <span className="material-icons-round text-sm">schedule</span> {duration}
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500 font-bold">
          <span className="material-icons-round text-sm">groups</span> {audience}
        </div>
      </div>

      <div className="pt-6 border-t border-slate-50 dark:border-slate-800">
        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Contenidos clave</h4>
        <ul className="space-y-2">
          {contents.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
              <span className={`material-icons-round text-sm ${textMap[color]}`}>play_arrow</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrainingOverview;
