"use client";
import { useState } from "react";
import styles from "@/styles/ContactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Assistance",
    message: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    // Vérifie si c'est une checkbox avant d'utiliser "checked"
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Veuillez accepter notre politique de confidentialité.");
      return;
    }
    alert("Message envoyé !");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Nom *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={styles.input}
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={styles.input}
          placeholder="Votre email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="subject" className={styles.label}>
          Sujet *
        </label>
        <select
          id="subject"
          name="subject"
          className={styles.input}
          value={formData.subject}
          onChange={handleChange}
        >
          <option value="Assistance">Demande d’assistance</option>
          <option value="Témoignage">Partager un témoignage</option>
          <option value="Juridique">Question juridique</option>
          <option value="Autre">Autre</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          className={styles.textarea}
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroupCheckbox}>
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          required
        />
        <label htmlFor="consent" className={styles.label}>
          J'accepte la{" "}
          <a href="/politique-confidentialite">politique de confidentialité</a>.
        </label>
      </div>

      <button type="submit" className={styles.button}>
        Envoyer
      </button>
    </form>
  );
}
