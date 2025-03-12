import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import styles from "@/styles/Resources.module.css";
import Link from "next/link";

export default function Resources() {
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
            <li><Link href="/articles">Articles et Guides</Link></li>
            <li><Link href="/temoignages">Témoignages</Link></li>
            <li><Link href="/assistance">Assistance Juridique et Psychologique</Link></li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
