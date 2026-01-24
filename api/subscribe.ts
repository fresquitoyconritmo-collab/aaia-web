
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
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Email no válido' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL || 'aaia.aragon@gmail.com';

    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'Error de configuración' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: 'Web AAIA <onboarding@resend.dev>',
      to: [toEmail],
      subject: `🔔 NUEVO SUSCRIPTOR: ${email}`,
      html: `
        <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px; padding: 20px;">
          <h2 style="color: #2563EB;">Nueva suscripción al boletín</h2>
          <p>Se ha registrado un nuevo correo desde el portal de la <strong>AAIA</strong>:</p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 5px; font-size: 18px; font-weight: bold; text-align: center;">
            ${email}
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Este email ha sido enviado automáticamente desde el sistema de suscripción de la web institucional.
          </p>
        </div>
      `,
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Error interno' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
