"use client";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import CryptoJS from "crypto-js";
import styles from "@/styles/Chat.module.css";

const socket = io("http://localhost:4000"); // Remplace par l'URL de ton serveur

const SECRET_KEY = "pimo-secret-key";

export default function Chat() {
  const [username, setUsername] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    setUsername("PIMO-" + Math.floor(Math.random() * 1000));

    socket.on("chatHistory", (history: string[]) => {
      const decryptedMessages = history.map((msg) => decryptMessage(msg));
      setMessages(decryptedMessages);
    });

    socket.on("receiveMessage", (encryptedMsg: string) => {
      setMessages((prev: string[]) => [...prev, decryptMessage(encryptedMsg)]);
    });

    return () => {
      socket.off("receiveMessage");
      socket.off("chatHistory");
    };
  }, []);

  const encryptMessage = (text: string): string => {
    return CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
  };

  const decryptMessage = (encryptedText: string): string => {
    const bytes = CryptoJS.AES.decrypt(encryptedText, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
  };

  const sendMessage = () => {
    if (!message.trim()) return;
    const encryptedMsg = encryptMessage(`${username}: ${message}`);
    socket.emit("sendMessage", encryptedMsg);
    setMessage("");
  };

  return (
    <div className={styles.chatContainer}>
      <h2>Chat Sécurisé PIMO</h2>
      <div className={styles.messages}>
        {messages.map((msg, index) => (
          <div key={index} className={styles.message}>
            {msg}
          </div>
        ))}
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Écrivez votre message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.input}
        />
        <button onClick={sendMessage} className={styles.button}>
          Envoyer
        </button>
      </div>
    </div>
  );
}
