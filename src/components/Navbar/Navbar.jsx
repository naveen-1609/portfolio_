import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

import menuIcon from "/src/assets/nav/menuIcon.png";
import closeIcon from "/src/assets/nav/closeIcon.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(false);

  // ✅ Detect Scroll to Show Menu Button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowMenuIcon(true);
      } else {
        setShowMenuIcon(false);
        setMenuOpen(false); // Close menu when scrolling up
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={styles.navbar}>
      {/* ✅ Website Title */}
      <a className={styles.title} href="/">
        Naveen Venkat Y
      </a>

      {/* ✅ Menu Button (Appears on Scroll) */}
      {showMenuIcon && (
        <img
          className={styles.menuBtn}
          src={menuOpen ? closeIcon : menuIcon}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      )}

      {/* ✅ Navigation Menu */}
      <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
};
