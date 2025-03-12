"use client"; // Permet d'utiliser useState

import { useState } from "react";
import styles from "@/styles/Contact.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Votre message a été envoyé !");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Nom
        <input
          type="text"
          name="name"
          className={styles.input}
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label className={styles.label}>
        Email
        <input
          type="email"
          name="email"
          className={styles.input}
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label className={styles.label}>
        Message
        <textarea
          name="message"
          className={styles.textarea}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </label>
      <button type="submit" className={styles.button}>Envoyer</button>
    </form>
  );
}
