
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="bg-primary py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold text-white mb-4">Formación Personalizada</h3>
        <p className="text-blue-100 text-lg mb-10">¿Necesitas un programa formativo específico para tu organización o colectivo? Diseñamos cursos a medida.</p>
        <a className="inline-block bg-white text-primary px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all hover:scale-105" href="#contacto">
          Contactar para formación personalizada
        </a>
      </div>
    </section>
  );
};

export default CTASection;
