"use client";
import { useEffect, useState } from "react";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import ArticlesCarousel from "@/components/carousel/ArticlesCarousel";

export default function Home() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    const validToken = process.env.NEXT_PUBLIC_ADMIN_TOKEN;
    if (adminToken && adminToken === validToken) {
      setIsAdmin(true);
    }
  }, []);

  return (
    <>
      <Header />
      <main className={styles.container}>
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <h1 className={styles.title}>
            <span className={styles.mainTitle}>Crise de Conscience</span>
            <span className={styles.subTitle}>
              Nouvelle Vie après l’Excommunication
            </span>
          </h1>
          <p className={styles.text}>
            Accompagner, soutenir et défendre les personnes excommuniées pour
            leur offrir un nouveau départ.
          </p>

          <div className={styles.buttonContainer}>
            <Link href="/about" className={styles.button}>
              En savoir plus
            </Link>
            <Link href="/forum/chat" className={styles.chatButton}>
              Accéder au Chat PIMO 🔒
            </Link>
          </div>
        </section>

        <ArticlesCarousel />

        {/* SECTION ADMIN */}
        {isAdmin ? (
          <div className={styles.adminPanel}>
            <p className={styles.adminText}>🎛️ Accès Administrateur</p>
            <Link
              href="/forum/admin/pimo-access"
              className={styles.adminButton}
            >
              Gérer les Codes PIMO 🔑
            </Link>
          </div>
        ) : (
          <div className={styles.adminPanel}>
            <p className={styles.adminText}>🔑 Vous êtes administrateur ?</p>
            <Link href="/admin/login" className={styles.adminButton}>
              Connexion Admin
            </Link>
          </div>
        )}

        {/* AUTRES SECTIONS */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Notre Mission</h2>
          <p className={styles.text}>
            Nous offrons un soutien psychologique, juridique et social pour
            aider les excommuniés à se reconstruire.
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
            Vous souhaitez contribuer ou bénéficier de notre aide ? Rejoignez
            notre communauté solidaire dès aujourd’hui.
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
