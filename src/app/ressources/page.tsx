"use client";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import styles from "@/styles/Resources.module.css";
import Link from "next/link";

const testimonials = [
  { name: "Jean", text: "Grâce à Nouvelle Vie, j’ai retrouvé confiance en moi et j’ai pu reconstruire ma vie." },
  { name: "Sarah", text: "L'accompagnement psychologique m'a énormément aidée à aller de l'avant." },
  { name: "David", text: "Un soutien juridique essentiel qui m’a permis de comprendre mes droits." },
];

export default function Resources() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <main className={styles.container}>
        <section className={styles.content}>
          <h1 className={styles.title}>Ressources et Aide</h1>
          <p className={styles.text}>
            Retrouvez ici des articles, des témoignages et des outils pour 
            accompagner les personnes excommuniées dans leur reconstruction.
          </p>
          <ul className={styles.resourceList}>
            <li><Link href="/articles">📖 Articles et Guides</Link></li>
            <li><Link href="/temoignages">🗣️ Témoignages</Link></li>
            <li><Link href="/assistance">⚖️ Assistance Juridique et Psychologique</Link></li>
          </ul>
        </section>

        {/* Ressources spécifiques par religion */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Comprendre l'ostracisme religieux</h2>
          <ul className={styles.resourceList}>
            <li><Link href="/temoins-de-jehovah">⛪ Témoins de Jéhovah</Link></li>
            <li><Link href="/mormons">📜 Mormons</Link></li>
            <li><Link href="/scientologie">🌐 Scientologie</Link></li>
            <li><Link href="/islam">🕌 Islam (Exclusion sociale)</Link></li>
            <li><Link href="/autres-religions">✡️ Autres communautés</Link></li>
          </ul>
        </section>

        {/* Témoignages dynamiques */}
        <section className={styles.testimonials}>
          <h2 className={styles.subtitle}>Témoignages</h2>
          <div className={styles.card}>
            <p className={styles.text}>"{testimonials[index].text}"</p>
            <p className={styles.name}>- {testimonials[index].name}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
