"use client";
import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/Header.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, Home, Info, BookOpen, Mail } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Ferme le menu si on clique en dehors
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href="/" className={styles.logo}>
          Crise de Conscience
        </Link>

        {/* Bouton Hamburger */}
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Ouvrir le menu"
          aria-expanded={isOpen}
        >
          <Menu size={28} />
        </button>

        {/* Sidebar Mobile */}
        <AnimatePresence>
          {isOpen && (
            <>
              <div className={styles.backdrop} onClick={closeMenu} />
              <motion.nav
                className={styles.sidebar}
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className={styles.closeButton} onClick={closeMenu}>
                  <X size={28} />
                </button>
                <ul className={styles.menuList}>
                  <li>
                    <Link href="/">
                      <Home size={20} /> Accueil
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <Info size={20} /> À Propos
                    </Link>
                  </li>
                  <li>
                    <Link href="/ressources">
                      <BookOpen size={20} /> Ressources
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <Mail size={20} /> Contact
                    </Link>
                  </li>
                </ul>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
