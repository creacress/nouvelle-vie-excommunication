import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Configuration du transporteur SMTP avec Hostinger
const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER || "", // Récupère depuis GitHub Actions
      pass: process.env.SMTP_PASS || "",
    },
  });
  

// Fonction pour gérer la requête POST
export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Tous les champs sont obligatoires." }, { status: 400 });
    }

    // Configuration de l'email à envoyer
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: "contact-association-excommunication@webcresson.com", // L'email de réception
      subject: "Nouveau message depuis le formulaire de contact",
      text: `Nom: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      html: `<p><strong>Nom:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: "Email envoyé avec succès !" }, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
    return NextResponse.json({ error: "Erreur lors de l'envoi du message." }, { status: 500 });
  }
}
