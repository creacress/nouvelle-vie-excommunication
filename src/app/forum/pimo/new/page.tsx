"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/Pimo.module.css";

export default function NewPimoPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [role, setRole] = useState("Simple membre");
  const [category, setCategory] = useState("Fuites d'informations");
  const router = useRouter();

  const submitPost = async () => {
    if (!title.trim() || !content.trim()) return alert("Tous les champs sont requis.");

    const pseudo = localStorage.getItem("pseudo") || "Anonyme";

    await fetch("/api/forum/pimo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pseudo, role, category, title, content }),
    });

    router.push("/forum/pimo");
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>📝 Nouveau Post PIMO</h1>
      <label>Rôle :</label>
      <select value={role} onChange={(e) => setRole(e.target.value)} className={styles.select}>
        <option value="Ancien">Ancien</option>
        <option value="Béthélite">Béthélite</option>
        <option value="Simple membre">Simple membre</option>
      </select>

      <label>Catégorie :</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)} className={styles.select}>
        <option value="Fuites d'informations">Fuites d'informations</option>
        <option value="Stratégies">Stratégies</option>
        <option value="Gestion des pressions">Gestion des pressions</option>
      </select>

      <input className={styles.input} type="text" placeholder="Titre" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea className={styles.textarea} placeholder="Écrivez votre message..." value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={submitPost} className={styles.button}>Publier</button>
    </main>
  );
}
