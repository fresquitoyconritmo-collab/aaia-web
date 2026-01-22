
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const GEM_CONFIG = {
  systemInstruction: `Eres el Asistente IA de la Asociación Aragonesa de Inteligencia Artificial (AAIA).
  Propósito: Ayudar a los usuarios con dudas sobre la asociación, sus fines, socios y estatutos.
  Fines: Promoción de formación, atención a colectivos prioritarios (tercera edad, juventud, mujeres), divulgación ética e investigación en Aragón.
  Naturaleza: Sin ánimo de lucro, fundada en Zaragoza el 2 de enero de 2026.
  
  Reglas de oro:
  - Saluda cálidamente y menciona que eres el asistente de la AAIA.
  - Responde de forma directa, amable y con identidad aragonesa.
  - No inventes información. Si no sabes algo, sugiere contactar a aaia.aragon@gmail.com.
  - Mantén las respuestas breves (máximo 3 párrafos).
  - Si preguntan por estatutos, diles que pueden verlos en la sección de Transparencia del portal.`,
  modelId: 'gemini-3-flash-preview' 
};

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: '¡Hola! Soy el asistente de AAIA. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Referencia para mantener la sesión de chat activa
  const chatSessionRef = useRef<any>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    const userMsg = input.trim();
    if (!userMsg || isLoading) return;

    // Validación de API Key
    if (!process.env.API_KEY || process.env.API_KEY === "undefined") {
      setMessages(prev => [...prev, 
        { role: 'user', text: userMsg },
        { role: 'bot', text: "Error de configuración: No se ha detectado la clave de API en el servidor. Por favor, contacta con el administrador." }
      ]);
      setInput('');
      return;
    }

    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      // Inicializar chat si no existe
      if (!chatSessionRef.current) {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        chatSessionRef.current = ai.chats.create({
          model: GEM_CONFIG.modelId,
          config: {
            systemInstruction: GEM_CONFIG.systemInstruction,
            temperature: 0.7,
          }
        });
      }

      const response = await chatSessionRef.current.sendMessage({ message: userMsg });
      const botText = response.text || "No he podido generar una respuesta. Por favor, inténtalo de nuevo.";
      
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Lo siento, mi conexión se ha interrumpido. Por favor, comprueba que la API Key esté correctamente configurada en Vercel." }]);
      // Limpiar chat en caso de error crítico para permitir reintento limpio
      chatSessionRef.current = null;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      {/* Ventana de Chat */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[550px] bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden border border-slate-200 dark:border-slate-800 animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-primary p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="material-icons-round">smart_toy</span>
              </div>
              <div>
                <h4 className="font-bold">Asistente AAIA</h4>
                <p className="text-[10px] opacity-80 uppercase tracking-widest font-bold">En línea</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-lg p-1 transition-colors">
              <span className="material-icons-round">close</span>
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-4 bg-slate-50/50 dark:bg-slate-950/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-tr-none shadow-md' 
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-100 dark:border-slate-700 rounded-tl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                  <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <div className="flex gap-2 bg-slate-100 dark:bg-slate-800 rounded-xl p-1 pr-3">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Pregunta sobre la asociación..."
                className="flex-grow bg-transparent border-none focus:ring-0 text-sm py-2 px-3 text-slate-800 dark:text-white"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors disabled:opacity-50"
              >
                <span className="material-icons-round text-sm">send</span>
              </button>
            </div>
            <p className="text-[10px] text-center text-slate-400 mt-2 font-medium italic">Powered by Gemini • Asociación Aragonesa de IA</p>
          </div>
        </div>
      )}

      {/* Botón Flotante */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 group relative"
      >
        <span className="material-icons-round text-3xl group-hover:rotate-12 transition-transform">
          {isOpen ? 'close' : 'forum'}
        </span>
      </button>
    </div>
  );
};

export default AIAssistant;
