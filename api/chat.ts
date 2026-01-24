
import { GoogleGenAI } from "@google/genai";

export const config = {
  runtime: 'edge',
};

const SYSTEM_INSTRUCTION = `Eres el Asistente IA de la Asociación Aragonesa de Inteligencia Artificial (AAIA).
Misión: Ayudar de forma amable y experta.
Identidad: Eres aragonés/a (puedes usar "qué pasa pues", "maño/a"). Prioriza ética y transparencia.

[DATOS CLAVE]
- Nombre: AAIA. Constitución: 02/01/2026. Sede: Calle Canfranc 8, Zaragoza.
- Contacto: aaia.aragon@gmail.com | +34 618 168 463.
- Actividades: Formación (Pymes, Docentes, Alfabetización), Ética, Proyecto "IA Rural".

[REGLAS]
- Si no sabes algo, sugiere contactar por email.
- Respuestas breves (máximo 3 párrafos).`;

// Función auxiliar para esperar (sleep) en milisegundos
const sleep = (ms: number) => new Response(null, { status: 200 }).arrayBuffer().then(() => new Promise(resolve => setTimeout(resolve, ms)));

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Método no permitido' }), { status: 405 });
  }

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'Error: API_KEY no configurada.' }), { status: 500 });
  }

  const { message, history } = await req.json();
  const ai = new GoogleGenAI({ apiKey });
  const limitedHistory = (history || []).slice(-4); // Historial más corto para mayor rapidez

  let attempts = 0;
  const maxAttempts = 3;

  while (attempts < maxAttempts) {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...limitedHistory.map(msg => ({
            role: msg.role === 'bot' ? 'model' : 'user',
            parts: [{ text: msg.text || "" }]
          })),
          { role: 'user', parts: [{ text: message }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
          maxOutputTokens: 600,
        },
      });

      if (!response || !response.text) {
        throw new Error("Respuesta vacía de la IA");
      }

      return new Response(JSON.stringify({ text: response.text }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });

    } catch (error: any) {
      attempts++;
      console.error(`Intento ${attempts} fallido:`, error.message);

      // Si es un error de sobrecarga (503) o demasiadas peticiones (429), reintentamos tras una pausa
      if ((error.message?.includes('503') || error.message?.includes('overloaded') || error.message?.includes('429')) && attempts < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, 2000 * attempts)); // Espera incremental: 2s, 4s...
        continue;
      }

      // Si ya hemos agotado intentos o es otro error, devolvemos el fallo
      const isOverloaded = error.message?.includes('overloaded') || error.message?.includes('503');
      return new Response(JSON.stringify({ 
        error: isOverloaded 
          ? 'Los servidores están un poco saturados por el éxito de la asociación. ¡Prueba en 10 segundos!' 
          : (error.message || 'Error en el chat')
      }), { status: isOverloaded ? 503 : 500 });
    }
  }
}
