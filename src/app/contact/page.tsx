import { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import styles from "@/styles/Contact.module.css";
import Link from "next/link";
import Script from "next/script";
import ContactForm from "@/components/ContactForm/ContactForm"; // Import du composant Client

export const metadata: Metadata = {
  title: "Contact | Nouvelle Vie après l’Excommunication",
  description:
    "Besoin d'aide ou de conseils ? Contactez notre association pour recevoir du soutien et des informations sur nos actions.",
  openGraph: {
    title: "Contact | Nouvelle Vie après l’Excommunication",
    description:
      "Notre équipe est là pour vous accompagner. Envoyez-nous un message via le formulaire de contact.",
    url: "https://ton-site.com/contact",
    type: "website",
  },
};

// Données structurées JSON-LD
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "mainEntity": {
    "@type": "Organization",
    "name": "Nouvelle Vie après l’Excommunication",
    "url": "https://ton-site.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33 7 66 02 96 32",
      "email": "contact-association-excommunication@webcresson.com",
      "contactType": "customer service",
      "areaServed": "FR",
      "availableLanguage": ["French", "English"]
    }
  }
};

export default function Contact() {
  return (
    <>
      <Header />
      {/* Injection des données structurées JSON-LD */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <main className={styles.container}>
        <section className={styles.content}>
          <h1 className={styles.title}>Contactez-nous</h1>
          <p className={styles.text}>
            Vous avez une question ou besoin d’aide ? Contactez-nous via le formulaire ci-dessous
            ou par email.
          </p>

          {/* Formulaire placé dans un composant client */}
          <ContactForm />

          <p className={styles.contactInfo}>
            📧 Email : <a href="mailto:contact@ton-site.com">contact-association-excommunication@webcresson.com</a><br />
            📞 Téléphone : <a href="tel:+33766029632">+33 7 66 02 96 32</a>
          </p>
          <Link href="/" className={styles.backButton}>Retour à l'accueil</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
