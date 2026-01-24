
import { Resend } from 'resend';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Método no permitido' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { nombre, email, telefono, asunto, mensaje } = await req.json();

    // Validación básica
    if (!nombre || !email || !mensaje) {
      return new Response(JSON.stringify({ error: 'Por favor, rellena todos los campos obligatorios.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    // Si no hay variable CONTACT_EMAIL, usamos el de la asociación por defecto
    const toEmail = process.env.CONTACT_EMAIL || 'aaia.aragon@gmail.com';

    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'Falta la configuración de API Key en el servidor.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const resend = new Resend(apiKey);

    // Envío del correo
    const { data, error } = await resend.emails.send({
      from: 'Web AAIA <onboarding@resend.dev>',
      to: [toEmail],
      reply_to: email, // Esto permite responder directamente al usuario que escribió
      subject: `[WEB CONTACTO] ${asunto} - ${nombre}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <div style="background-color: #2563EB; padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.025em;">NUEVO MENSAJE AAIA</h1>
          </div>
          <div style="padding: 40px; background-color: #ffffff;">
            <p style="color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 800; margin-bottom: 24px; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">Datos del remitente</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f8fafc; color: #64748b; font-size: 14px; width: 30%;"><strong>Nombre</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f8fafc; color: #1e293b; font-size: 15px; font-weight: 600;">${nombre}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f8fafc; color: #64748b; font-size: 14px;"><strong>Email</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f8fafc; color: #1e293b; font-size: 15px;"><a href="mailto:${email}" style="color: #2563EB; text-decoration: none; font-weight: 600;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f8fafc; color: #64748b; font-size: 14px;"><strong>Teléfono</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f8fafc; color: #1e293b; font-size: 15px;">${telefono || 'No proporcionado'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f8fafc; color: #64748b; font-size: 14px;"><strong>Asunto</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f8fafc; color: #1e293b; font-size: 15px; font-weight: 600;">${asunto}</td>
              </tr>
            </table>
            
            <p style="color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 800; margin-top: 32px; margin-bottom: 12px;">Contenido del mensaje</p>
            <div style="background-color: #f8fafc; padding: 24px; border-radius: 12px; color: #334155; line-height: 1.6; font-size: 15px; border: 1px solid #f1f5f9;">
              ${mensaje.replace(/\n/g, '<br>')}
            </div>
            
            <div style="margin-top: 40px; text-align: center;">
               <a href="mailto:${email}" style="display: inline-block; background-color: #2563EB; color: #ffffff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px; transition: background-color 0.2s;">Responder al usuario</a>
            </div>
          </div>
          <div style="background-color: #f8fafc; padding: 24px; text-align: center; color: #94a3b8; font-size: 11px; border-top: 1px solid #f1f5f9;">
            Enviado desde el formulario de contacto oficial de <strong>Asociación Aragonesa de IA</strong>.<br>
            Configuración de destino: ${toEmail}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return new Response(JSON.stringify({ error: `Error de Resend: ${error.message}. Asegúrate de que el destinatario (${toEmail}) coincide con tu cuenta de Resend.` }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true, id: data?.id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: 'Error interno al procesar el envío.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
