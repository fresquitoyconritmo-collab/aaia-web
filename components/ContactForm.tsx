
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: 'Información General',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.mensaje) return;
    
    // Simulación de envío
    setIsSubmitted(true);
    
    // Resetear después de unos segundos o dejar el mensaje de éxito
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: 'Información General',
        mensaje: ''
      });
    }, 10000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contacto" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">Contacta con Nosotros</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Estamos aquí para responder tus preguntas.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-0 bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-700">
          <div className="p-10 lg:p-16 relative">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center">
                  <span className="material-icons-round text-5xl">done_all</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black dark:text-white mb-2">¡Mensaje Recibido!</h3>
                  <p className="text-slate-500 dark:text-slate-400">Gracias por contactar con AAIA. Te responderemos en un plazo máximo de 48 horas laborales.</p>
                </div>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-primary font-bold hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wider">Nombre</label>
                    <input 
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm h-12 px-4" 
                      placeholder="Tu nombre" 
                      type="text" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wider">Email</label>
                    <input 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm h-12 px-4" 
                      placeholder="tu@email.com" 
                      type="email" 
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wider">Teléfono</label>
                    <input 
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm h-12 px-4" 
                      placeholder="+34 600 000 000" 
                      type="tel" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wider">Asunto</label>
                    <select 
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm h-12 px-4"
                    >
                      <option>Información General</option>
                      <option>Hacerse Socio</option>
                      <option>Prensa</option>
                      <option>Otro</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wider">Mensaje</label>
                  <textarea 
                    name="mensaje"
                    required
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm p-4" 
                    placeholder="Escribe tu mensaje aquí..." 
                    rows={5}
                  ></textarea>
                </div>
                <button className="w-full bg-primary text-white py-5 rounded-xl font-black text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-500/20 active:scale-95" type="submit">
                  Enviar mensaje
                  <span className="material-icons-round text-xl">send</span>
                </button>
              </form>
            )}
          </div>
          <div className="bg-slate-50 dark:bg-slate-900/50 p-10 lg:p-16 flex flex-col justify-between border-l border-slate-100 dark:border-slate-700">
            <div>
              <h3 className="text-2xl font-black mb-10 dark:text-white uppercase tracking-tight">Información de Contacto</h3>
              <div className="space-y-10">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-primary shadow-md shrink-0">
                    <span className="material-icons-round text-2xl">location_on</span>
                  </div>
                  <div>
                    <p className="font-black text-slate-900 dark:text-white text-lg mb-1">Dirección</p>
                    <p className="text-base text-slate-600 dark:text-slate-400">Calle Canfranc<br />50004 Zaragoza, Aragón</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-primary shadow-md shrink-0">
                    <span className="material-icons-round text-2xl">email</span>
                  </div>
                  <div>
                    <p className="font-black text-slate-900 dark:text-white text-lg mb-1">Email</p>
                    <a className="text-base text-primary font-bold hover:underline" href="mailto:aaia.aragon@gmail.com">aaia.aragon@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-primary shadow-md shrink-0">
                    <span className="material-icons-round text-2xl">phone</span>
                  </div>
                  <div>
                    <p className="font-black text-slate-900 dark:text-white text-lg mb-1">Teléfono</p>
                    <p className="text-base text-slate-600 dark:text-slate-400 font-medium">+34 618 168 463</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 bg-primary rounded-3xl p-8 text-white shadow-xl shadow-blue-500/10">
              <h4 className="font-black text-xl mb-4">Horario de Atención</h4>
              <div className="text-sm text-blue-100 space-y-2 font-medium">
                <p className="flex justify-between"><span>Lunes a Viernes</span> <span>9:00 - 18:00</span></p>
                <p className="flex justify-between"><span>Sábados</span> <span>10:00 - 14:00</span></p>
                <p className="flex justify-between text-blue-300"><span>Domingos</span> <span>Cerrado</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
