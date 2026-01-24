
import React from 'react';

interface AboutViewProps {
  onBack: () => void;
  onContact: () => void;
}

const AboutView: React.FC<AboutViewProps> = ({ onBack, onContact }) => {
  return (
    <div className="bg-slate-50 dark:bg-[#020617] min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Navegación */}
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
        </div>

        {/* Encabezado */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-400 text-xs font-black mb-6 uppercase tracking-widest border border-blue-200 dark:border-blue-800">
            Sobre Nosotros
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight uppercase tracking-tighter">
            Nuestra <span className="text-primary">Junta Directiva</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto font-medium leading-relaxed">
            La Asociación Aragonesa de Inteligencia Artificial (AAIA) es gestionada por un equipo multidisciplinar que combina perfiles técnicos, educativos e institucionales. Nuestra Junta Directiva trabaja de forma altruista para liderar el desarrollo responsable de la IA en Aragón, actuando como puente entre la tecnología y la sociedad.
          </p>
        </div>

        {/* Sección Perfiles */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            {
              role: "Presidencia",
              name: "Fernando Nieto",
              desc: "Consultor experto en IA Generativa y comunicación digital con más de 15 años de experiencia técnica y docente. Su perfil aporta la credibilidad técnica y educativa necesaria para la visión estratégica de la entidad.",
              icon: "psychology"
            },
            {
              role: "Secretaría",
              name: "Diana Cuadrado",
              desc: "Perfil especializado en relaciones institucionales, comunicación y política pública, encargada de la gestión de eventos y la vinculación con la administración.",
              icon: "account_balance"
            },
            {
              role: "Tesorería",
              name: "Pablo Lázaro",
              desc: "Responsable de la gestión económica y administrativa, velando por la transparencia y la estabilidad financiera de la asociación.",
              icon: "payments"
            }
          ].map((member, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 text-primary rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                <span className="material-icons-round text-3xl">{member.icon}</span>
              </div>
              <h4 className="text-primary font-black text-xs uppercase tracking-[0.2em] mb-2">{member.role}</h4>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 leading-tight">{member.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                {member.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Sección Funciones */}
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-12 uppercase tracking-tight flex items-center gap-4">
              <span className="material-icons-round text-primary text-4xl">gavel</span>
              Funciones Principales
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  title: "Gestión y Dirección",
                  text: "Dirigir las actividades sociales y llevar la gestión económica y administrativa de la asociación."
                },
                {
                  title: "Ejecución y Admisión",
                  text: "Ejecutar los acuerdos de la Asamblea General y resolver sobre la admisión de nuevas personas socias."
                },
                {
                  title: "Alianzas Estratégicas",
                  text: "Acordar la participación en consorcios, convenios y alianzas con entidades públicas y privadas para el cumplimiento de nuestros fines."
                },
                {
                  title: "Ética y Supervisión",
                  text: "Impulsar la creación de órganos especializados, como el Comité Consultivo de Ética en Inteligencia Artificial."
                }
              ].map((func, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 shrink-0"></div>
                  <div>
                    <h4 className="font-black text-lg mb-2 text-blue-400 uppercase tracking-tight">{func.title}</h4>
                    <p className="text-slate-400 font-medium text-sm leading-relaxed">{func.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 dark:text-slate-500 font-medium mb-8">
            Nuestra Junta Directiva trabaja de forma altruista para liderar el desarrollo responsable de la IA en Aragón.
          </p>
          <button 
            onClick={onContact}
            className="px-10 py-4 bg-primary text-white rounded-2xl font-black hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-500/20"
          >
            Contactar con la directiva
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
