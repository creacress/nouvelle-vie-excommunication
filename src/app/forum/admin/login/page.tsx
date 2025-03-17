"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/Login.module.css";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    const adminToken = process.env.NEXT_PUBLIC_ADMIN_TOKEN; // Récupération correcte
    if (password === adminToken) {
      localStorage.setItem("adminToken", password);
      router.push("/forum/admin/pimo-access");
    } else {
      setError("Mot de passe incorrect.");
    }
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>🔐 Connexion Admin</h1>
      <input
        type="password"
        className={styles.input}
        placeholder="Mot de passe admin"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className={styles.button}>Se connecter</button>
      {error && <p className={styles.error}>{error}</p>}
    </main>
  );
}
