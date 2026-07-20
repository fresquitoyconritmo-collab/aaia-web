import React from 'react';
import { useLanguage } from './LanguageContext';

const CTASection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-primary py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold text-white mb-4">
          {t({
            es: "Formación Personalizada",
            en: "Custom Training",
            de: "Maßgeschneiderte Schulung",
            fr: "Formation Personnalisée",
            it: "Formazione Personalizzata",
            ro: "Instruire Personalizată"
          })}
        </h3>
        <p className="text-blue-100 text-lg mb-10">
          {t({
            es: "¿Necesitas un programa formativo específico para tu organización o colectivo? Diseñamos cursos a medida.",
            en: "Do you need a specific training program for your organization or group? We design custom courses.",
            de: "Benötigen Sie ein bestimmtes Schulungsprogramm für Ihre Organisation oder Gruppe? Wir entwerfen maßgeschneiderte Kurse.",
            fr: "Avez-vous besoin d'un programme de formation spécifique pour votre organisation ou groupe ? Nous concevons des cours sur mesure.",
            it: "Hai bisogno di un programma formativo specifico per la tua organizzazione o gruppo? Progettiamo corsi su misura.",
            ro: "Aveți nevoie de un program specific de instruire pentru organizația sau grupul dvs.? Proiectăm cursuri la comandă."
          })}
        </p>
        <a 
          className="inline-block bg-white text-primary px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all hover:scale-105" 
          href="#contacto"
        >
          {t({
            es: "Contactar para formación personalizada",
            en: "Contact us for custom training",
            de: "Kontakt für maßgeschneiderte Schulung",
            fr: "Nous contacter pour une formation sur mesure",
            it: "Contattaci per una formazione personalizzata",
            ro: "Contactați-ne pentru instruire personalizată"
          })}
        </a>
      </div>
    </section>
  );
};

export default CTASection;
