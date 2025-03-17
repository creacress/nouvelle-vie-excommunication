"use client";
import { ArticlesCarousel } from "@/components/carousel/ArticlesCarousel";
import styles from "@/styles/Sidebar.module.css";

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
