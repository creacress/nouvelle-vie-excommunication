import { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import styles from "@/styles/About.module.css";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "À Propos | Nouvelle Vie après l’Excommunication",
  description:
    "Découvrez l'association Nouvelle Vie après l’Excommunication, notre mission et notre engagement envers ceux qui ont été exclus pour leur offrir un nouveau départ.",
  openGraph: {
    title: "À Propos | Nouvelle Vie après l’Excommunication",
    description:
      "Nous aidons les excommuniés à reconstruire leur vie avec un soutien moral, social et juridique.",
    url: "https://ton-site.com/about",
    type: "website",
  },
};
// Données structurées JSON-LD
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qui peut rejoindre l'association ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Toute personne ayant été excommuniée ou souhaitant apporter son soutien peut nous rejoindre gratuitement."
        }
      },
      {
        "@type": "Question",
        "name": "Quels types de soutien offrez-vous ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous offrons un soutien psychologique, social et juridique aux excommuniés pour les aider à reconstruire leur vie."
        }
      },
      {
        "@type": "Question",
        "name": "Comment puis-je contribuer à votre cause ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vous pouvez devenir bénévole, faire un don ou partager nos ressources pour sensibiliser davantage de personnes."
        }
      }
    ]
  };

export default function About() {
  return (
    <>
      <Header />
      {/* Données structurées injectées pour Google */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className={styles.container}>
        <section className={styles.content}>
          <h1 className={styles.title}>À Propos de l'Association</h1>
          <p className={styles.text}>
            <strong>Nouvelle Vie après l’Excommunication</strong> est une association
            dédiée à l’accompagnement des personnes excommuniées. Nous offrons
            un soutien psychologique, social et juridique pour les aider à
            reconstruire leur vie en toute sérénité.
          </p>
          <p className={styles.text}>
            🌍 Nos actions :
          </p>
          <ul className={styles.list}>
            <li>🤝 Mise en relation avec un réseau de soutien</li>
            <li>📚 Accès à des ressources et conseils juridiques</li>
            <li>🎤 Sensibilisation du public aux conséquences de l’excommunication</li>
          </ul>
          <p className={styles.text}>
            Chacun mérite une nouvelle chance. Rejoignez notre cause et aidons 
            ensemble ceux qui en ont besoin !
          </p>
          <div className={styles.buttons}>
            <Link href="/" className={styles.button}>
              Retour à l'accueil
            </Link>
            <Link href="/contact" className={styles.secondaryButton}>
              Nous Contacter
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
