'use server'

import nodemailer from 'nodemailer';

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export async function sendContactEmail(formData: ContactFormData) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: process.env.NEXT_PUBLIC_EMAIL_USER,
            pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: process.env.NEXT_PUBLIC_EMAIL_USER,
            to: 'rodridega@gmail.com', // Tu dirección de email
            subject: `Nuevo mensaje desde tu Portfolio de ${formData.name}`,
            text: `
        Nombre: ${formData.name}
        Email: ${formData.email}
        Mensaje: ${formData.message}
      `,
        });

        return { success: true, message: 'Email enviado con éxito' };
    } catch (error) {
        console.error('Error al enviar el email:', error);
        return { success: false, message: 'Error al enviar el email' };
    }
}