"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/ArticlesCarousel.module.css";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "L'excommunication expliquée",
    url: "/articles/excommunication",
    image: "/images/excommunication.jpg", // Assurez-vous que l'image existe dans /public/images/
  },
  {
    id: 2,
    title: "Se reconstruire après une exclusion",
    url: "/articles/reconstruction",
    image: "/images/reconstruction.jpg",
  },
  {
    id: 3,
    title: "Droits des excommuniés",
    url: "/articles/droits",
    image: "/images/droits.jpg",
  },
];

export default function ArticlesCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % articles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.title}>📰 Derniers Articles</h2>
      <div className={styles.carousel}>
        <Link href={articles[index].url} className={styles.articleLink}>
          <img
            src={articles[index].image}
            alt={articles[index].title}
            className={styles.articleImage}
          />
        </Link>
        <Link href={articles[index].url} className={styles.articleTitle}>
          {articles[index].title}
        </Link>
      </div>
    </div>
  );
}
