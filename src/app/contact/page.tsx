import { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import styles from "@/styles/Contact.module.css";
import Link from "next/link";
import Script from "next/script";
import ContactForm from "@/components/ContactForm/ContactForm";

export const metadata: Metadata = {
  title: "Nous contacter | Crise de Conscience",
  description:
    "Contactez notre association pour recevoir du soutien et des informations sur nos actions.",
  openGraph: {
    title: "Nous contacter | Crise de Conscience",
    description:
      "Notre équipe est à votre écoute. Remplissez le formulaire pour nous envoyer votre message.",
    url: "https://ton-site.com/contact",
    type: "website",
  },
};

// Données structurées JSON-LD
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "Organization",
    name: "Crise de Conscience",
    url: "https://ton-site.com",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33 7 66 02 96 32",
      email: "contact-association-excommunication@webcresson.com",
      contactType: "customer service",
      areaServed: "FR",
      availableLanguage: ["French", "English"],
    },
  },
};

export default function Contact() {
  return (
    <>
      <Header />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <main className={styles.container}>
        <section className={styles.content}>
          <h1 className={styles.title}>Nous contacter</h1>
          <p className={styles.text}>
            Si vous avez une question, un témoignage ou si vous avez besoin
            d’aide, vous pouvez nous écrire via ce formulaire. Nous répondrons à
            votre demande dans les meilleurs délais.
          </p>

          {/* 🔥 FORMULAIRE DE CONTACT */}
          <ContactForm />

          <p className={styles.contactInfo}>
            📧 Email :{" "}
            <a href="mailto:contact-association-excommunication@webcresson.com">
              contact-association-excommunication@webcresson.com
            </a>
            <br />
            📞 Téléphone : <a href="tel:+33766029632">+33 7 66 02 96 32</a>
          </p>
          <Link href="/" className={styles.backButton}>
            Retour à l'accueil
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
