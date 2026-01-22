
import React from 'react';

interface TransparencyProps {
  onOpenStatutes: () => void;
}

const Transparency: React.FC<TransparencyProps> = ({ onOpenStatutes }) => {
  return (
    <section className="relative py-32 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
          alt="Transparent Tech" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest mb-6 border border-white/20">
            Gobierno Abierto
          </div>
          <h3 className="text-4xl font-extrabold text-white mb-6 leading-tight">Transparencia Radical</h3>
          <p className="text-slate-400 mb-10 text-lg leading-relaxed">
            Como organización sin ánimo de lucro, la confianza es nuestro activo más valioso. Compartimos públicamente nuestros estatutos, memorias anuales y el impacto real de cada euro invertido en Aragón.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={onOpenStatutes}
              className="bg-white text-slate-950 px-8 py-4 rounded-2xl font-black flex items-center gap-3 hover:bg-slate-200 transition-all hover:scale-105 shadow-xl"
            >
              <span className="material-icons-round">description</span>
              Estatutos AAIA
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-8 italic">Última actualización: Enero 2026 • Firmado digitalmente</p>
        </div>
      </div>
    </section>
  );
};

export default Transparency;
