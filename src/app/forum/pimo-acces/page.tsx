"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/Pimo.module.css";

export default function PimoAccess() {
  const [pseudo, setPseudo] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const submitAccessRequest = async () => {
    if (!pseudo.trim() || !code.trim()) {
      setMessage("Tous les champs sont requis.");
      return;
    }

    const res = await fetch(
      "/api/forum/pimo-access?pseudo=" + pseudo + "&code=" + code
    );
    const data = await res.json();

    if (data.authorized) {
      localStorage.setItem("pseudo", pseudo);
      localStorage.setItem("pimoAccess", "true");
      router.push("/forum/pimo");
    } else {
      setMessage("Code incorrect ou accès refusé.");
    }
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>🔒 Accès au Forum PIMO</h1>
      <p className={styles.description}>
        Cet espace est strictement réservé aux PIMO. Vous devez fournir un
        **code d’accès** pour entrer.
      </p>

      <input
        type="text"
        className={styles.input}
        placeholder="Votre pseudo"
        value={pseudo}
        onChange={(e) => setPseudo(e.target.value)}
      />
      <input
        type="password"
        className={styles.input}
        placeholder="Code d'accès"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={submitAccessRequest} className={styles.button}>
        Valider l'accès
      </button>

      {message && <p className={styles.message}>{message}</p>}
    </main>
  );
}
