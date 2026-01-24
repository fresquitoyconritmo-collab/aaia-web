
import React from 'react';

interface FooterProps {
  onNavigateHome?: () => void;
  onNavigateMission?: () => void;
  onNavigateTraining?: () => void;
  onNavigateNews?: () => void;
  onNavigateMembership?: () => void;
  onNavigateStatutes?: () => void;
}

const Footer: React.FC<FooterProps> = ({
  onNavigateHome,
  onNavigateMission,
  onNavigateTraining,
  onNavigateNews,
  onNavigateMembership,
  onNavigateStatutes
}) => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-20 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6 text-white">
              <img 
                src="https://raw.githubusercontent.com/Asociacion-Aragonesa-IA/web/main/public/logo_aaia.png" 
                alt="AAIA Logo" 
                className="h-10 w-auto brightness-125"
              />
              <span className="font-black text-2xl tracking-tighter">AAIA</span>
            </div>
            <p className="mb-8 text-slate-400 leading-relaxed font-medium">Asociación Aragonesa de Inteligencia Artificial. Promoviendo el desarrollo ético y responsable de la IA en todo el territorio.</p>
            <div className="flex gap-5">
              <a className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all font-bold" href="#" title="Facebook"><span className="material-icons-round text-xl">facebook</span></a>
              <a className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary transition-all font-bold" href="#" title="LinkedIn">LI</a>
              <a className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-black transition-all font-bold" href="#" title="TikTok">TK</a>
              <a className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600 transition-all font-bold" href="#" title="YouTube">YT</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Navegación</h4>
            <ul className="space-y-4 font-medium">
              <li><button onClick={onNavigateHome} className="hover:text-primary transition-colors text-left w-full">Inicio</button></li>
              <li><button onClick={onNavigateMission} className="hover:text-primary transition-colors text-left w-full">Misión</button></li>
              <li><button onClick={onNavigateTraining} className="hover:text-primary transition-colors text-left w-full">Formación</button></li>
              <li><button onClick={onNavigateNews} className="hover:text-primary transition-colors text-left w-full">Actualidad</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Participa</h4>
            <ul className="space-y-4 font-medium">
              <li><button onClick={onNavigateMembership} className="hover:text-primary transition-colors text-left w-full">Hazte Socio</button></li>
              <li><button className="hover:text-primary transition-colors text-left w-full">Voluntariado</button></li>
              <li><button className="hover:text-primary transition-colors text-left w-full">Colabora con Proyectos</button></li>
              <li><button className="hover:text-primary transition-colors text-left w-full">Donaciones</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-4 font-medium">
              <li><button onClick={onNavigateStatutes} className="hover:text-primary transition-colors text-left w-full">Estatutos</button></li>
              <li><button className="hover:text-primary transition-colors text-left w-full">Política de Privacidad</button></li>
              <li><button className="hover:text-primary transition-colors text-left w-full">Aviso Legal</button></li>
              <li><button className="hover:text-primary transition-colors text-left w-full">Código Ético</button></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 font-medium">© 2026 Asociación Aragonesa de Inteligencia Artificial. Todos los derechos reservados.</p>
          <div className="flex items-center gap-3 text-slate-400 font-bold text-xs uppercase tracking-widest">
            <span>Desarrollado con IA Ética</span>
            <span className="material-icons-round text-primary">smart_toy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
