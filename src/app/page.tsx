"use client";
import { useEffect } from "react";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import ArticlesCarousel from "@/components/carousel/ArticlesCarousel";

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll(`.${styles.section}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <>
      <Header />
      <main className={styles.container}>
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <h1 className={styles.title}>
            <span className={styles.mainTitle}>Crise de Conscience</span>
            <br />
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
            <Link href="/forum" className={styles.chatButton}>
              💬 Rejoindre le Chat PIMO
            </Link>
          </div>
        </section>

        {/* SECTIONS DYNAMIQUES */}
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

        <ArticlesCarousel />
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
