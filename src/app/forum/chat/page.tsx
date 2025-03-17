"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/Chat.module.css";

export default function ChatPage() {
  const [hasAccess, setHasAccess] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const pimoCode = localStorage.getItem("pimoCode");
    if (!pimoCode) {
      router.push("/forum/access-request");
    } else {
      setHasAccess(true);
    }
  }, []);

  const sendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  if (!hasAccess) return null;

  return (
    <main className={styles.chatContainer}>
      <h1 className={styles.chatTitle}>💬 Chat Sécurisé des PIMO</h1>
      <p className={styles.chatText}>
        Cet espace est réservé aux PIMO validés. Vous pouvez discuter
        anonymement et en toute sécurité.
      </p>

      <div className={styles.chatBox}>
        <div className={styles.chatMessages}>
          {messages.map((msg, index) => (
            <div key={index} className={styles.chatMessage}>
              {msg}
            </div>
          ))}
        </div>

        <input
          type="text"
          placeholder="Écrivez votre message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.chatInput}
        />

        <button onClick={sendMessage} className={styles.chatButton}>
          Envoyer ✉️
        </button>
      </div>
    </main>
  );
}
