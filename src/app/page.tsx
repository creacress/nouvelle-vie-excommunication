import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import ArticlesCarousel from "@/components/carousel/ArticlesCarousel";
import AdminAccess from "@/components/AdminAccess/AdminAccess";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

export const revalidate = 86400;

export const metadata = {
  title: "Crise de Conscience – Nouvelle vie après l’excommunication",
  description:
    "Soutien, entraide et accompagnement pour les personnes excommuniées. Rejoignez une communauté solidaire et engagée.",
  robots: "index, follow",
  openGraph: {
    title: "Crise de Conscience – Nouvelle vie après l’excommunication",
    description:
      "Soutien, entraide et accompagnement pour les personnes excommuniées. Rejoignez une communauté solidaire.",
    url: "https://tonsite.com",
    siteName: "Crise de Conscience",
    type: "website",
    images: [
      {
        url: "https://tonsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Crise de Conscience – Nouvelle vie après l’excommunication",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crise de Conscience",
    description:
      "Une nouvelle vie après l’excommunication. Rejoignez notre communauté solidaire.",
    images: ["https://tonsite.com/og-image.jpg"],
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qu’est-ce que l’excommunication ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L’excommunication est une exclusion d’une personne d’une communauté religieuse, souvent accompagnée d’un rejet social et familial."
      }
    },
    {
      "@type": "Question",
      "name": "Qui peut bénéficier de votre aide ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Toute personne ayant été excommuniée, quelle que soit sa religion ou son expérience personnelle."
      }
    },
    {
      "@type": "Question",
      "name": "Quels types de soutien offrez-vous ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous offrons un accompagnement moral, juridique, psychologique ainsi qu’un espace de discussion privé."
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      <Head>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      </Head>

      <Header />
      <main className={styles.container}>
        <section className={styles.hero}>
          <h1 className={styles.title}>
            <span className={styles.mainTitle}>Crise de Conscience</span>
            <span className={styles.subTitle}>Une nouvelle vie après l’excommunication</span>
          </h1>
          <p className={styles.text}>
            Briser le silence, reconstruire sa vie. Nous accompagnons chaque personne excommuniée vers un avenir digne et libre.
          </p>
          <div className={styles.buttonContainer}>
            <Link href="/about" className={styles.button}>Découvrir</Link>
            <Link href="/forum/chat" className={styles.chatButton}>
              Accéder au Chat PIMO 🔒
            </Link>
          </div>
        </section>

        <ArticlesCarousel />
        <AdminAccess />

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Notre Mission</h2>
          <p className={styles.text}>
            Offrir un soutien moral, juridique et social pour aider les personnes à reprendre le contrôle de leur vie.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Nos Actions</h2>
          <ul className={styles.list}>
            <li>💡 Ateliers de reconstruction</li>
            <li>⚖️ Aide juridique personnalisée</li>
            <li>🤝 Écoute et entraide communautaire</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Rejoignez notre communauté</h2>
          <p className={styles.text}>
            Que vous ayez besoin d’aide ou que vous souhaitiez aider, vous êtes les bienvenus.
          </p>
          <Link href="/contact" className={styles.button}>
            Nous Contacter
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
