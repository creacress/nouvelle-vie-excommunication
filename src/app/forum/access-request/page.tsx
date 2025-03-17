"use client";
import { useState } from "react";
import styles from "@/styles/AccessRequest.module.css";

export default function AccessRequest() {
  const [pseudo, setPseudo] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const requestAccess = async () => {
    const res = await fetch("/api/forum/pimo-access", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pseudo, code }),
    });

    const data = await res.json();
    if (data.error) {
      setMessage(`❌ ${data.error}`);
    } else {
      localStorage.setItem("pimoCode", code);
      setMessage("✅ Accès validé ! Redirection...");
      setTimeout(() => {
        window.location.href = "/forum/chat";
      }, 2000);
    }
  };

  return (
    <main className={styles.accessContainer}>
      <h1 className={styles.accessTitle}>🔑 Demande d'Accès PIMO</h1>
      <p className={styles.accessText}>
        Veuillez entrer votre pseudo et le code d'accès fourni par un
        administrateur.
      </p>

      <div className={styles.accessForm}>
        <input
          type="text"
          placeholder="Votre pseudo"
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
          className={styles.accessInput}
        />

        <input
          type="text"
          placeholder="Code d'accès"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className={styles.accessInput}
        />

        <button onClick={requestAccess} className={styles.accessButton}>
          Demander l'accès
        </button>

        {message && (
          <p
            className={`${styles.accessMessage} ${
              message.includes("✅") ? styles.success : styles.error
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </main>
  );
}
