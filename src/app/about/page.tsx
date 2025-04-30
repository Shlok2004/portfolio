import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* High Bar (Name) */}
      <header className={styles.highBar}>
        <h1 className={styles.highBarName}>Shlok Parekh</h1>
      </header>

      {/* Top Bar (Tagline) */}
      <nav className={styles.topBar}>
        <p className={styles.tagline}>
          Software Engineering Student • AI & Algorithms Enthusiast
        </p>
      </nav>

      {/* Main Hero Section */}
      <main className={styles.mainContent}>
        <div className={styles.heroSection}>
          <div className={styles.textBlock}>
            <h2 className={styles.fadeInUp}>About Me</h2>
            <p className={styles.fadeInUpDelay1}>
              Welcome to the page all about me!
            </p>
            <p className={styles.fadeInUpDelay2}>
              I’m a junior at Rutgers University–New Brunswick, pursuing a
              B.S. in Computer Science.
            </p>
          </div>
          <div className={styles.imageBlock}>
            <Image
              src="/GunFam.jpeg"
              alt="Group photo"
              width={450}
              height={600}
              className={styles.popIn}
            />
          </div>
        </div>
      </main>

      {/* Footer / Bottom Sub-Bar */}
      <footer className={styles.footer}>
        <div className={styles.backContainer}>
          <a href="/" className={styles.backLink}>
            ← Back to Home
          </a>
        </div>
        <nav className={styles.footerNav}>
          <a href="/about" className={styles.footerLink}>
            About Me
          </a>
          <a href="/contact" className={styles.footerLink}>
            Contact
          </a>
          <a href="/resume" className={styles.footerLink}>
            Resume
          </a>
        </nav>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Shlok Parekh
        </p>
      </footer>
    </div>
  );
}
