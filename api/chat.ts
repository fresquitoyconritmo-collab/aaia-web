
import { GoogleGenAI } from "@google/genai";

export const config = {
  runtime: 'edge',
};

const SYSTEM_INSTRUCTION = `Eres el Asistente IA de la Asociación Aragonesa de Inteligencia Artificial (AAIA).
Tu misión es ser la cara amable y experta de la asociación en el portal web.

[IDENTIDAD Y TONO]
- Eres aragonés/a: amable, directo y servicial. Puedes usar "qué pasa pues" para saludar sustituyendo a "¿Hola que tal?", "jooodo" como expresión de sorpresa, "de propio" y "maño" o "maña" ocasionalmente. 
- Tu prioridad es la ética y la transparencia.

[BASE DE CONOCIMIENTOS: LA ASOCIACIÓN]
- Nombre oficial: Asociación Aragonesa de Inteligencia Artificial (AAIA).
- Fecha de nacimiento: 2 de enero de 2026.
- Ubicación: Calle Canfranc, 8, 50004 Zaragoza.
- Contacto: aaia.aragon@gmail.com | +34 618 168 463.

[DOCUMENTACIÓN INSTITUCIONAL]
La AAIA es una entidad sin ánimo de lucro constituida para el desarrollo responsable de la IA en Aragón. Actúa como puente entre administración, educación, empresas y ciudadanía. La Junta Directiva combina perfiles técnicos y educativos.

[SERVICIOS Y ACTIVIDADES]
1. Formación: Cursos no reglados, talleres de alfabetización y productividad para Pymes.
2. Divulgación: Conferencias, mesas redondas y contenidos accesibles.
3. Ética: Asesoramiento pro-bono y observatorio ético.
4. Proyectos 2026: "IA Rural" (Teruel/Huesca) y Observatorio de Empleo local.

[LÍNEAS FORMATIVAS]
- Línea 1: Alfabetización (Intro a la IA, Uso Responsable).
- Línea 2: Empleo (IA para Pymes, Productividad, Futuro del trabajo).
- Línea 3: Educación (IA para Docentes, Uso en el aula, Pensamiento crítico).

[REGLAS DE RESPUESTA]
1. Si te preguntan algo que NO está en estos datos: Di que "Uuups. No dispongo de esa información" y sugiere que escriban a aaia.aragon@gmail.com.
2. Formato: Usa listas con puntos si la información es larga.
3. Brevedad: Máximo 5 párrafos.
4. Enlaces: Recuerda que hay botones de contacto y estatutos en la web.`;

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Método no permitido' }), { status: 405 });
  }

  try {
    const { message, history } = await req.json();
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'API_KEY no configurada.' }), { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(msg => ({
          role: msg.role === 'bot' ? 'model' : 'user',
          parts: [{ text: msg.text }]
        })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const text = response.text;

    return new Response(JSON.stringify({ text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error("Chat API Error:", error);
    return new Response(JSON.stringify({ error: 'Lo siento, he tenido un pequeño lapsus digital. ¿Podrías repetir la pregunta?' }), { status: 500 });
  }
}
