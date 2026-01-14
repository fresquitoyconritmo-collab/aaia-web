
import React from 'react';

const EthicsSection: React.FC = () => {
  const cards = [
    { icon: "elderly", title: "Tercera Edad", desc: "Programas para reducir la brecha digital y facilitar el acceso a herramientas de IA que mejoren la calidad de vida." },
    { icon: "face", title: "Juventud", desc: "Iniciativas para preparar a las nuevas generaciones en el uso crítico y responsable de la IA." },
    { icon: "female", title: "Mujeres", desc: "Acciones específicas para promover la participación femenina en IA y combatir la brecha de género." }
  ];

  return (
    <section id="etica" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Compromiso y Ética</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">Nuestro compromiso firme con la inclusión, la ética y el desarrollo sostenible.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border-t-4 border-primary hover:shadow-md transition-shadow">
              <span className="material-icons-round text-4xl text-primary mb-4">{card.icon}</span>
              <h4 className="font-bold text-xl mb-3 dark:text-white">{card.title}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-primary rounded-3xl p-10 text-white shadow-xl shadow-blue-500/20">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-icons-round text-3xl">security</span>
              <h3 className="text-2xl font-bold">IA Ética y Responsable</h3>
            </div>
            <p className="text-blue-50 text-base leading-relaxed mb-8">
              En AAIA, nos comprometemos a promover una Inteligencia Artificial que respete los derechos fundamentales. Trabajamos bajo los principios del Reglamento de IA de la UE.
            </p>
            <div className="bg-blue-600/40 p-5 rounded-xl text-sm text-blue-50 border border-white/20">
              Revisión continua de nuestras prácticas para garantizar el cumplimiento de nuestros estándares.
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-icons-round text-3xl text-primary">public</span>
              <h3 className="text-2xl font-bold">Compromiso Territorial</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8">
              AAIA nace y trabaja para Aragón. Nuestro objetivo es fortalecer el ecosistema tecnológico regional, retener talento local y posicionar a nuestra comunidad.
            </p>
            <div className="bg-slate-50 dark:bg-slate-800 p-5 rounded-xl text-sm text-primary font-bold border border-slate-100 dark:border-slate-700">
              Aragón como laboratorio de innovación responsable en IA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EthicsSection;
