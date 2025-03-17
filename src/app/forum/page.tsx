"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/styles/Forum.module.css";

// 🔹 Définition du type `Post`
interface Post {
  _id: string;
  username: string;
  category: string;
  title: string;
  content: string;
  createdAt: string;
}

export default function Forum() {
  const [posts, setPosts] = useState<Post[]>([]); // ✅ Initialisé vide

  useEffect(() => {
    fetch("/api/forum")
      .then((res) => res.json())
      .then((data: Post[]) => setPosts(data))
      .catch((err) => console.error("Erreur de récupération des posts", err));
  }, []);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>💬 Forum Ouvert</h1>
      <p className={styles.description}>
        Posez vos questions et échangez avec la communauté.
      </p>
      <Link href="/forum/new" className={styles.newPostButton}>
        + Ajouter un Post
      </Link>

      {/* 🔹 Si aucun post n'est récupéré, afficher un message */}
      {posts.length === 0 ? (
        <p className={styles.noPosts}>Aucun post pour le moment.</p>
      ) : (
        <div className={styles.posts}>
          {posts.map((post) => (
            <div key={post._id} className={styles.post}>
              <h2>{post.title}</h2>
              <p>{post.content.substring(0, 150)}...</p>
              <Link href={`/forum/${post._id}`} className={styles.readMore}>Lire plus</Link>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
