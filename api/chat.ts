
import { GoogleGenAI } from "@google/genai";

export const config = {
  runtime: 'edge',
};

const SYSTEM_INSTRUCTION = `Eres el Asistente IA de la Asociación Aragonesa de Inteligencia Artificial (AAIA).
Propósito: Ayudar a los usuarios con dudas sobre la asociación, sus fines, socios y estatutos.
Fines: Promoción de formación, atención a colectivos prioritarios (tercera edad, juventud, mujeres), divulgación ética e investigación en Aragón.
Naturaleza: Sin ánimo de lucro, fundada en Zaragoza el 2 de enero de 2026.

Reglas de oro:
- Saluda cálidamente y menciona que eres el asistente de la AAIA.
- Responde de forma directa, amable y con identidad aragonesa (puedes usar alguna expresión local muy sutil como "¡Hola! ¿En qué te puedo ayudar, maño/a?").
- No inventes información. Si no sabes algo, sugiere contactar a aaia.aragon@gmail.com.
- Mantén las respuestas breves (máximo 3 párrafos).
- Si preguntan por estatutos, diles que pueden verlos en la sección de Transparencia del portal.`;

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Método no permitido' }), { status: 405 });
  }

  try {
    const { message, history } = await req.json();
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'La API_KEY no está configurada en Vercel. Ve a Settings -> Environment Variables y añade API_KEY.' }), { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        { role: 'user', parts: [{ text: SYSTEM_INSTRUCTION }] },
        ...history.map(msg => ({
          role: msg.role === 'bot' ? 'model' : 'user',
          parts: [{ text: msg.text }]
        })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        temperature: 0.7,
      }
    });

    const text = response.text;

    return new Response(JSON.stringify({ text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error("Chat API Error:", error);
    return new Response(JSON.stringify({ error: 'Hubo un error procesando tu solicitud. Por favor, inténtalo de nuevo.' }), { status: 500 });
  }
}
