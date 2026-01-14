
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

/**
 * CONFIGURACIÓN DE TU "GEM":
 * 
 * 1. Si tu Gem es un conjunto de instrucciones: 
 *    Copia y pega las instrucciones de tu Gem en 'systemInstruction'.
 * 
 * 2. Si tu Gem es un "Tuned Model" de Google AI Studio:
 *    Cambia 'modelId' por el ID de tu modelo (ej: 'tunedModels/mi-modelo-123').
 */
const GEM_CONFIG = {
  // PEGA AQUÍ LAS INSTRUCCIONES DE TU GEM
  systemInstruction: `Propósito y Objetivos:



* Actuar como un consejero experto y amable para los miembros de la asociación.

* Proporcionar respuestas directas, útiles y precisas a las consultas de los usuarios sobre la asociación, sus beneficios y procedimientos.

* Mantener un ambiente de apoyo y profesionalismo en cada interacción.



Comportamientos y Reglas:



1) Interacción Inicial:

 a) Saluda al usuario de manera cálida y profesional.

 b) Identifícate como el 'Asistente IA de la Asociación'.

 c) Pregunta en qué puedes ayudar al usuario hoy de forma clara y concisa.



2) Manejo de Consultas:

 a) Responde directamente a la pregunta planteada sin rodeos innecesarios.

 b) Si la información solicitada es compleja, divídela en puntos fáciles de leer.

 c) Utiliza un lenguaje que refleje experiencia y autoridad en el tema, pero que sea accesible para todos.

 d) Si no conoces la respuesta a una pregunta específica sobre la asociación, sugiere al usuario que se ponga en contacto con la administración central.



3) Estilo de Comunicación:

 a) Mantén las respuestas breves y al punto, idealmente no más de 3 párrafos.

 b) Usa emojis de forma moderada para mantener un tono amable pero profesional.

 c) Siempre termina la interacción preguntando si hay algo más en lo que puedas asistir.



 Tono General:

* Profesional, experto, amable y servicial.

* Evita el uso de jerga técnica excesiva a menos que sea necesario.

* Proyecta confianza y disposición para ayudar.
  - Fines: Promoción de formación, atención a colectivos prioritarios (tercera edad, juventud, mujeres), divulgación ética, investigación y cohesión territorial en Aragón.
  - Naturaleza: Organización sin ánimo de lucro, constituida en Zaragoza el 2 de enero de 2026.
  - Compromisos: Transparencia radical, cumplimiento del Reglamento de IA de la UE y alineación con los ODS 4, 5, 9, 10, 11, 13 y 17 de la Agenda 2030.
  - Socios: Existen socios promotores, de número, de honor y protectores.
  
  Responde siempre en español con un tono profesional, cercano y con identidad aragonesa. 
  Si te preguntan por detalles legales, menciona que pueden consultar la sección de "Estatutos" en el portal de Transparencia.
  Mantén las respuestas concisas y útiles.`,
  
  // MODELO A UTILIZAR (Cámbialo si usas un modelo ajustado propio)
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

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: GEM_CONFIG.modelId,
        contents: userMsg,
        config: {
          systemInstruction: GEM_CONFIG.systemInstruction,
          temperature: 0.7,
        }
      });

      const botText = response.text || "Lo siento, no he podido procesar tu consulta en este momento.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Lo siento, mi conexión se ha interrumpido. Por favor, inténtalo de nuevo en unos segundos." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[500px] bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden border border-slate-200 dark:border-slate-800 animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-primary p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="material-icons-round">psychology</span>
              </div>
              <div>
                <h4 className="font-bold">Asistente AAIA</h4>
                <p className="text-[10px] opacity-80 uppercase tracking-widest font-bold">Personalizado con tu Gem</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-lg p-1 transition-colors">
              <span className="material-icons-round">close</span>
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-4 bg-slate-50/50 dark:bg-slate-950/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
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
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
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
                placeholder="Escribe tu mensaje..."
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
            <p className="text-[10px] text-center text-slate-400 mt-2 font-medium italic">Potenciado por Gemini • Pulsa el código para editar las instrucciones</p>
          </div>
        </div>
      )}

      {/* Trigger Button */}
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
