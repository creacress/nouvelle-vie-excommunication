import styles from "@/styles/Header.module.css";
import Link from "next/link";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href="/" className={styles.logo}>Nouvelle Vie</Link>
        <nav className={styles.nav}>
          <Link href="/about">À Propos</Link>
          <Link href="/ressources">Ressources</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        {/* Menu mobile */}
        <button className={styles.menuButton}>☰</button>
      </div>
    </header>
  );
}