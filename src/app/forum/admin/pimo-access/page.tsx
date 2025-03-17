"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/Admin.module.css";

interface PimoAccess {
  _id: string;
  pseudo: string;
  code: string;
  status: string;
}

export default function AdminPimoAccess() {
  const [codes, setCodes] = useState<PimoAccess[]>([]);
  const [newCode, setNewCode] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/forum/pimo-access")
      .then((res) => res.json())
      .then((data) => setCodes(data));
  }, []);

  const addCode = async () => {
    if (!newCode.trim()) return;
    
    const res = await fetch("/api/forum/pimo-access", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: newCode }),
    });

    const data = await res.json();
    setMessage(data.message || data.error);
  };

  const updateStatus = async (code: string, status: string) => {
    await fetch("/api/forum/pimo-access", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, status }),
    });

    setCodes(codes.map((c) => (c.code === code ? { ...c, status } : c)));
  };

  const deleteCode = async (code: string) => {
    await fetch("/api/forum/pimo-access", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });

    setCodes(codes.filter((c) => c.code !== code));
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>🔑 Gestion des Codes PIMO</h1>

      <div className={styles.addCode}>
        <input type="text" placeholder="Nouveau code" value={newCode} onChange={(e) => setNewCode(e.target.value)} />
        <button onClick={addCode}>Ajouter</button>
      </div>

      {message && <p className={styles.message}>{message}</p>}

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Pseudo</th>
            <th>Code</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {codes.map((c) => (
            <tr key={c._id}>
              <td>{c.pseudo}</td>
              <td>{c.code}</td>
              <td>
                <select value={c.status} onChange={(e) => updateStatus(c.code, e.target.value)}>
                  <option value="pending">En attente</option>
                  <option value="approved">Validé</option>
                  <option value="rejected">Rejeté</option>
                </select>
              </td>
              <td>
                <button onClick={() => deleteCode(c.code)}>❌ Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
