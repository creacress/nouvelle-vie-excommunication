"use client";
import styles from "@/styles/Sidebar.module.css";
import ArticlesCarousel from "./ArticlesCarousel";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.widget}>
        <h2 className={styles.widgetTitle}>📰 Derniers Articles</h2>
        <ArticlesCarousel />
      </div>
    </aside>
  );
}
