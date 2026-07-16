import { createClient } from '@supabase/supabase-js';
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const supabase = createClient(
  process.env.SUPABASE_URL, 
  process.env.SUPABASE_SERVICE_ROLE_KEY // 🔑 Clave maestra de servicio, segura aquí
);

export default async function handler(req, res) {

  // 1. En Vercel usamos req.method
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { nombre, email, mensaje } = req.body;

  // Validación básica en el servidor
  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  try {

     // 1️⃣ Guardar en Supabase utilizando la conexión segura de backend
    const { error: dbError } = await supabase
      .from("mensajes")
      .insert([{ nombre, email, mensaje }]);

    if (dbError) {
      console.error("Error guardando en Supabase:", dbError);
      throw new Error("Error en la base de datos");
    }

    // 📩 1️⃣ Correo al dueño del sitio
    await resend.emails.send({
      from: "Mensaje nuevo del sitio <contacto@magicmomentscases.site>",
      to: "francisco99za@gmail.com",
      subject: "Nuevo mensaje desde el formulario de contacto",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <div style="background-color: #030712; padding: 25px; text-align: center;">
            <img src="https://magicmomentscases.site/logo.webp" alt="Magic Moments Cases" style="height: 50px; width: auto;">
          </div>
          <div style="padding: 30px; background-color: #ffffff;">
            <h2 style="color: #030712; margin-top: 0; font-size: 20px; border-bottom: 2px solid #db2777; padding-bottom: 10px; display: inline-block;">Nuevo mensaje recibido</h2>
            <div style="margin-top: 20px;">
              <p style="margin: 10px 0; color: #374151; font-size: 16px;"><strong style="color: #db2777;">Nombre:</strong> ${nombre}</p>
              <p style="margin: 10px 0; color: #374151; font-size: 16px;"><strong style="color: #db2777;">Email:</strong> ${email}</p>
              <div style="margin-top: 25px; padding: 20px; background-color: #f9fafb; border-left: 4px solid #db2777; border-radius: 4px;">
                <p style="margin: 0 0 10px 0; font-weight: bold; color: #030712;">Mensaje:</p>
                <p style="margin: 0; color: #4b5563; line-height: 1.6;">${mensaje}</p>
              </div>
            </div>
          </div>
        </div>`,
    });

    // 📩 2️⃣ Respuesta automática al usuario
    await resend.emails.send({
      from: "Magic Moments Cases <contacto@magicmomentscases.site>",
      to: email,
      subject: "Gracias por tu mensaje - Magic Moments Cases",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #f0f0f0; border-radius: 16px; overflow: hidden;">
          <div style="background-color: #030712; padding: 30px; text-align: center;">
            <img src="https://magicmomentscases.site/logo.webp" alt="Magic Moments Cases" style="height: 50px; width: auto;">
          </div>
          <div style="padding: 40px 30px; text-align: center;">
            <h2 style="color: #030712;">¡Hola, ${nombre}!</h2>
            <p style="color: #be185d; font-weight: 600;">Gracias por contactarnos.</p>
            <p>Hemos recibido tu solicitud correctamente y te responderemos lo antes posible.</p>
          </div>
        </div>`,
    });

    // 3. Respuesta de éxito estilo Vercel/Express
    return res.status(200).json({ message: "Correos enviados correctamente" });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error enviando correos" });
  }
}