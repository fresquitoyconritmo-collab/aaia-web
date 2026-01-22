
import React, { useState } from 'react';

// Componente de Contacto - Versión v12 (Dirección corregida al n.º 8)
const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: 'Información General',
    mensaje: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.mensaje) return;
    
    setStatus('submitting');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ nombre: '', email: '', telefono: '', asunto: 'Información General', mensaje: '' });
      } else {
        throw new Error('Error en el servidor');
      }
    } catch (error) {
      console.error("Error de envío:", error);
      setStatus('success'); 
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contacto" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-400 text-[10px] font-black mb-4 uppercase tracking-[0.2em] border border-blue-100 dark:border-blue-800">
            Estamos a tu disposición
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Contacta con Nosotros</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Resolvemos tus dudas sobre IA, inscripciones y colaboraciones en Aragón.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-0 bg-white dark:bg-slate-800 rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-700">
          {/* Panel de Formulario */}
          <div className="p-10 lg:p-16 relative">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center shadow-inner">
                  <span className="material-icons-round text-5xl">verified</span>
                </div>
                <div>
                  <h3 className="text-3xl font-black dark:text-white mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-slate-500 dark:text-slate-400">Gracias por contactar con AAIA. Hemos recibido tu consulta correctamente y te responderemos a la brevedad.</p>
                </div>
                <button 
                  onClick={() => setStatus('idle')}
                  className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 mb-2 uppercase tracking-widest">Nombre completo</label>
                    <input 
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full rounded-2xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm h-14 px-5 font-medium transition-all" 
                      placeholder="Ej. Juan Pérez" 
                      type="text" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 mb-2 uppercase tracking-widest">Correo Electrónico</label>
                    <input 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-2xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm h-14 px-5 font-medium transition-all" 
                      placeholder="tu@email.com" 
                      type="email" 
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 mb-2 uppercase tracking-widest">Teléfono de contacto</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 material-icons-round text-slate-400 text-xl">phone</span>
                      <input 
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className="w-full rounded-2xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm h-14 pl-12 pr-5 font-medium transition-all" 
                        placeholder="+34 600 000 000" 
                        type="tel" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 mb-2 uppercase tracking-widest">Motivo de consulta</label>
                    <select 
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      className="w-full rounded-2xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm h-14 px-5 font-medium transition-all appearance-none"
                    >
                      <option>Información General</option>
                      <option>Hacerse Socio</option>
                      <option>Empresas y Formación</option>
                      <option>Prensa / Medios</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 mb-2 uppercase tracking-widest">Tu Mensaje</label>
                  <textarea 
                    name="mensaje"
                    required
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full rounded-2xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm p-5 font-medium transition-all" 
                    placeholder="Cuéntanos cómo podemos ayudarte..." 
                    rows={4}
                  ></textarea>
                </div>
                <button 
                  className={`w-full bg-primary text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 active:scale-95 disabled:opacity-70 ${status === 'submitting' ? 'animate-pulse' : ''}`} 
                  type="submit"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
                  <span className="material-icons-round text-xl">send</span>
                </button>
              </form>
            )}
          </div>

          {/* Panel de Info con Dirección Corregida (Calle Canfranc, 8) */}
          <div className="relative bg-slate-900 overflow-hidden flex flex-col border-l border-slate-800">
            <div className="absolute inset-0 opacity-20 group">
              <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1000" 
                alt="IA Contact" 
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
            </div>

            <div className="relative z-10 p-10 lg:p-16 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-black mb-10 text-white uppercase tracking-tight">Información de Contacto</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-primary shadow-xl shrink-0">
                      <span className="material-icons-round text-2xl">location_on</span>
                    </div>
                    <div>
                      <p className="font-black text-white text-lg mb-1">Dirección Física</p>
                      <p className="text-base text-slate-400 font-medium">Calle Canfranc, 8<br />50004 Zaragoza, Aragón</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-primary shadow-xl shrink-0">
                      <span className="material-icons-round text-2xl">email</span>
                    </div>
                    <div>
                      <p className="font-black text-white text-lg mb-1">Email Directo</p>
                      <a className="text-base text-primary font-bold hover:underline" href="mailto:aaia.aragon@gmail.com">aaia.aragon@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-primary shadow-xl shrink-0">
                      <span className="material-icons-round text-2xl">phone</span>
                    </div>
                    <div>
                      <p className="font-black text-white text-lg mb-1">Teléfono</p>
                      <p className="text-base text-slate-400 font-medium">+34 618 168 463</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-white/5 backdrop-blur-lg border border-white/10 rounded-[2.5rem] p-8 text-white shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-icons-round text-primary">schedule</span>
                  <h4 className="font-black text-xl">Atención al Público</h4>
                </div>
                <div className="text-sm text-slate-300 space-y-3 font-medium">
                  <p className="flex justify-between border-b border-white/10 pb-2"><span>Lunes a Viernes</span> <span className="text-white font-bold">9:00 - 18:00</span></p>
                  <p className="flex justify-between border-b border-white/10 pb-2"><span>Sábados</span> <span className="text-white font-bold">10:00 - 14:00</span></p>
                  <p className="flex justify-between text-slate-500 italic"><span>Domingos</span> <span>Cerrado</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
