import { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import styles from "@/styles/About.module.css";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "À Propos | Crise de Conscience",
  description:
    "Découvrez l'association Crise de Conscience, notre mission et notre engagement envers ceux qui ont été exclus pour leur offrir un nouveau départ.",
  openGraph: {
    title: "À Propos | Crise de Conscience",
    description:
      "Nous aidons les excommuniés à reconstruire leur vie avec un soutien moral, social et juridique.",
    url: "https://ton-site.com/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "À Propos | Crise de Conscience",
    description:
      "Découvrez notre mission auprès des excommuniés. Soutien moral, juridique et social.",
    images: ["https://ton-site.com/og-about.jpg"],
  },
};

// Données structurées JSON-LD
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qui peut rejoindre l'association ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Toute personne ayant été excommuniée ou souhaitant apporter son soutien peut nous rejoindre gratuitement.",
      },
    },
    {
      "@type": "Question",
      name: "Quels types de soutien offrez-vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous offrons un soutien psychologique, social et juridique aux excommuniés pour les aider à reconstruire leur vie.",
      },
    },
    {
      "@type": "Question",
      name: "Comment puis-je contribuer à votre cause ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vous pouvez devenir bénévole, faire un don ou partager nos ressources pour sensibiliser davantage de personnes.",
      },
    },
  ],
};

export default function About() {
  return (
    <>
      <Header />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className={styles.container}>
        {/* Présentation */}
        <section className={styles.content}>
          <h1 className={styles.title}>À Propos de l'Association</h1>
          <p className={styles.text}>
            <strong>Crise de Conscience</strong> est une association dédiée à l’accompagnement
            des personnes excommuniées. Nous offrons un soutien psychologique, social et
            juridique pour les aider à reconstruire leur vie en toute sérénité.
          </p>
        </section>

        {/* Mission */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Notre Mission</h2>
          <p className={styles.text}>
            Nous nous engageons à accompagner les personnes excommuniées avec bienveillance.
          </p>
          <ul className={styles.list}>
            <li>🤝 <strong>Réseau de soutien :</strong> Mise en relation avec d'anciens excommuniés</li>
            <li>⚖️ <strong>Assistance juridique :</strong> Conseils pour faire face aux difficultés légales</li>
            <li>🧠 <strong>Accompagnement psychologique :</strong> Thérapies et groupes de parole</li>
            <li>📚 <strong>Ressources :</strong> Accès à des guides pratiques et témoignages</li>
          </ul>
        </section>

        {/* Valeurs */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Nos Valeurs</h2>
          <ul className={styles.list}>
            <li>💙 <strong>Empathie :</strong> Écoute attentive et bienveillance</li>
            <li>🤝 <strong>Respect :</strong> Reconnaissance de la dignité de chacun</li>
            <li>🌟 <strong>Solidarité :</strong> Un engagement collectif pour avancer ensemble</li>
          </ul>
        </section>

        {/* Call To Action */}
        <div className={styles.buttons}>
          <Link href="/" className={styles.button}>
            Retour à l'accueil
          </Link>
          <Link href="/contact" className={styles.secondaryButton}>
            Nous Contacter
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
