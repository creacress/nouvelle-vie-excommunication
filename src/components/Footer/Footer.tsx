import styles from "@/styles/Footer.module.css";
import Link from "next/link";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} Nouvelle Vie après l’Excommunication. Tous droits réservés.
      </p>
      <nav className={styles.footerNav}>
        <Link href="/about">À Propos</Link>
        <Link href="/ressources">Ressources</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </footer>
  );
}
