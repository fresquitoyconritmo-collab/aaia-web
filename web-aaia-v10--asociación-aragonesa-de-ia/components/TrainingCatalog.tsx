
import React from 'react';

interface TrainingCatalogProps {
  onOpenDetail?: () => void;
  onOpenBusinessDetail?: () => void;
  onOpenEducationDetail?: () => void;
}

const TrainingCatalog: React.FC<TrainingCatalogProps> = ({ onOpenDetail, onOpenBusinessDetail, onOpenEducationDetail }) => {
  const courses = [
    {
      id: "alfabetizacion",
      icon: "menu_book",
      title: "Alfabetización y Uso Responsable",
      desc: "Programas diseñados para que cualquier persona pueda comprender y utilizar la IA de forma segura.",
      features: ["Conceptos básicos de IA", "Herramientas cotidianas", "Privacidad y seguridad"],
      isPopular: false
    },
    {
      id: "empresas",
      icon: "business_center",
      title: "Productividad para Empresas",
      desc: "Formación especializada para profesionales que desean integrar la IA en sus procesos.",
      features: ["IA aplicada a la productividad", "Automatización de tareas", "Análisis de datos empresariales"],
      isPopular: true
    },
    {
      id: "educacion",
      icon: "school",
      title: "IA en la Educación",
      desc: "Capacitación para docentes y estudiantes en el uso pedagógico de la IA.",
      features: ["IA como herramienta", "Personalización del aprendizaje", "Pensamiento crítico"],
      isPopular: false
    }
  ];

  return (
    <section id="formacion" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Catálogo de Formación</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Oferta formativa diseñada para democratizar el acceso a la IA y preparar a personas, empresas e instituciones.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div key={idx} className={`flex flex-col p-8 rounded-2xl border transition-all hover:shadow-xl relative ${course.isPopular ? 'bg-slate-50 dark:bg-slate-800 border-primary/20' : 'bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700'}`}>
              {course.isPopular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] px-3 py-1 rounded-bl-xl font-bold uppercase tracking-wider">Popular</div>
              )}
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 text-primary rounded-lg flex items-center justify-center mb-6">
                <span className="material-icons-round">{course.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">{course.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 flex-grow">
                {course.desc}
              </p>
              <ul className="space-y-4 mb-10 text-sm text-slate-600 dark:text-slate-300">
                {course.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="material-icons-round text-primary text-base">check_circle</span>
                    {f}
                  </li>
                ))}
              </ul>
              
              {course.id === 'alfabetizacion' ? (
                <button 
                  onClick={onOpenDetail}
                  className="w-full py-3 bg-primary text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors text-center block shadow-lg shadow-blue-500/20"
                >
                  Ver Oferta Detallada
                </button>
              ) : course.id === 'empresas' ? (
                <button 
                  onClick={onOpenBusinessDetail}
                  className="w-full py-3 bg-primary text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors text-center block shadow-lg shadow-blue-500/20"
                >
                  Ver Oferta Detallada
                </button>
              ) : course.id === 'educacion' ? (
                <button 
                  onClick={onOpenEducationDetail}
                  className="w-full py-3 bg-primary text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors text-center block shadow-lg shadow-blue-500/20"
                >
                  Ver Oferta Detallada
                </button>
              ) : (
                <a href="#contacto" className="w-full py-3 bg-primary text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors text-center block">
                  Solicitar información
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingCatalog;
