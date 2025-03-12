import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nouvelle Vie après l’Excommunication - Accueil",
  description: "Nouvelle Vie après l’Excommunication accompagne, soutient et défend les personnes excommuniées pour leur offrir un nouveau départ.",
  keywords: "excommunication, aide, soutien, association, reconstruction, droits",
  authors: [{ name: "Nouvelle Vie après l’Excommunication" }],
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qu'est-ce que l'association Nouvelle Vie après l’Excommunication ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nouvelle Vie après l’Excommunication est une association dédiée à l’accompagnement et au soutien des personnes excommuniées."
        }
      },
      {
        "@type": "Question",
        "name": "Quels types d’aide proposez-vous ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous offrons un soutien psychologique, juridique et un réseau d’entraide pour aider les excommuniés à se reconstruire."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />
      <main className={styles.container}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Nouvelle Vie après l’Excommunication</h1>
          <p className={styles.text}>
            Accompagner, soutenir et défendre les personnes excommuniées pour leur offrir un nouveau départ.
          </p>
          <Link href="/about" className={styles.button}>En savoir plus</Link>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Notre Mission</h2>
          <p className={styles.text}>
            Nous offrons un soutien psychologique, juridique et social pour aider les excommuniés à se reconstruire.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Comment nous aidons</h2>
          <ul className={styles.list}>
            <li>💡 Ateliers de reconstruction et de résilience</li>
            <li>⚖️ Assistance juridique et conseils</li>
            <li>🤝 Communauté d'entraide et de soutien</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Rejoignez-nous</h2>
          <p className={styles.text}>
            Vous souhaitez contribuer ou bénéficier de notre aide ?
            Rejoignez notre communauté solidaire dès aujourd’hui.
          </p>
          <Link href="/contact" className={styles.button}>Nous Contacter</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}