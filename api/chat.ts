
import { GoogleGenAI } from "@google/genai";

export const config = {
  runtime: 'edge',
};

const SYSTEM_INSTRUCTION = `Eres el Asistente IA de la Asociación Aragonesa de Inteligencia Artificial (AAIA).
Misión: Ayudar de forma amable y experta.
Identidad: Eres aragonés/a (puedes usar "qué pasa pues", "maño/a"). Prioriza ética y transparencia.

[DATOS CLAVE]
- Nombre: AAIA. Constitución: 02/01/2026.
- Sede: Calle Canfranc 8, Zaragoza.
- Contacto: aaia.aragon@gmail.com | +34 618 168 463.

[ACTIVIDADES]
- Formación: Alfabetización, Productividad para Pymes, IA para Docentes.
- Ética: Asesoramiento pro-bono y Observatorio.
- Proyectos: "IA Rural" (Teruel/Huesca).

[REGLAS]
- Si no sabes algo, sugiere contactar por email.
- Respuestas breves (máximo 3-4 párrafos).
- Usa listas si es necesario.`;

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Método no permitido' }), { status: 405 });
  }

  try {
    const { message, history } = await req.json();
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'Error: API_KEY no configurada en el servidor.' }), { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Limitamos el historial a los últimos 6 mensajes para evitar saturación de la Edge Function
    const limitedHistory = (history || []).slice(-6);

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
        maxOutputTokens: 800,
      },
    });

    // Validamos que exista una respuesta válida
    if (!response || !response.text) {
      const finishReason = response.candidates?.[0]?.finishReason;
      throw new Error(`La IA no pudo generar texto. Motivo: ${finishReason || 'Desconocido'}`);
    }

    return new Response(JSON.stringify({ text: response.text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    console.error("Chat API Error:", error);
    // Devolvemos el error real para diagnóstico
    return new Response(JSON.stringify({ 
      error: error.message || 'Error interno del servidor' 
    }), { status: 500 });
  }
}
