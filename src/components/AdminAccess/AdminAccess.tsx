"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function AdminAccess() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    const validToken = process.env.NEXT_PUBLIC_ADMIN_TOKEN;
    if (adminToken === validToken) setIsAdmin(true);
  }, []);

  return (
    <section className={styles.section}>
      {isAdmin ? (
        <>
          <p className={styles.adminText}>🎛️ Espace Administrateur</p>
          <Link href="/forum/admin/pimo-access" className={styles.adminButton}>
            Gérer les accès PIMO 🔑
          </Link>
        </>
      ) : (
        <>
          <p className={styles.adminText}>🔑 Espace réservé aux administrateurs</p>
          <Link href="/admin/login" className={styles.adminButton}>
            Se connecter
          </Link>
        </>
      )}
    </section>
  );
}
