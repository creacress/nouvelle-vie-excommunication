"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/Pimo.module.css";

export default function PimoForum() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const pseudo = localStorage.getItem("pseudo");
    const hasAccess = localStorage.getItem("pimoAccess") === "true";

    if (!pseudo || !hasAccess) {
      router.push("/forum/pimo-access");
      return;
    }

    fetch(`/api/forum/pimo-access?pseudo=${pseudo}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.authorized) {
          localStorage.removeItem("pimoAccess");
          router.push("/forum/pimo-access");
        } else {
          setIsAuthorized(true);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return <p className={styles.loading}>Vérification en cours...</p>;
  if (!isAuthorized) return null;

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>🔒 Forum PIMO</h1>
      <p className={styles.description}>Bienvenue dans l’espace sécurisé.</p>
      {/* Ici on pourra afficher les posts */}
    </main>
  );
}
