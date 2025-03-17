"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/Forum.module.css";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Général");
  const router = useRouter();

  const submitPost = async () => {
    if (!title.trim() || !content.trim()) return alert("Remplissez tous les champs");

    await fetch("/api/forum", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "Anonyme", category, title, content }),
    });

    router.push("/forum");
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>📝 Nouveau Post</h1>
      <input
        className={styles.input}
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className={styles.textarea}
        placeholder="Écrivez votre message..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={submitPost} className={styles.button}>Publier</button>
    </main>
  );
}
