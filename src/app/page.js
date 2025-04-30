import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      {/* High Bar (Name) */}
      <header className={styles.highBar}>
        <h1 className={styles.highBarName}>Shlok Parekh</h1>
      </header>

      {/* Top Bar (Tagline) */}
      <div className={styles.topBar}>
        <p className={styles.tagline}>
          Computer Science Student | Expected Graduation: Jan 2025
        </p>
      </div>

      {/* Main Content */}
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroImageWrapper}>
            <Image
              src="/Shlok.jpeg"
              alt="Group photo"
              width={600}
              height={400}
              className={styles.heroImage}
            />
          </div>
          <div className={styles.heroText}>
            <h2 className={styles.animatedTitle}>Hello! I’m Shlok</h2>
            <p>Welcome to my portfolio!</p>
            <a href="/resume" className={styles.cta}>View Resume</a>
          </div>
        </section>

        {/* Feature Cards */}
        <section className={styles.cards}>
          <a href="/about" className={styles.card}>
            <h3>About Me</h3>
            <p>Learn more about my background and experience.</p>
          </a>
          <a href="/contact" className={styles.card}>
            <h3>Contact</h3>
            <p>Get in touch with me.</p>
          </a>
          <a
            href="https://www.linkedin.com/in/shlokparekh/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <Image
              src="/LinkedINlogo.png"
              alt="LinkedIn"
              width={40}
              height={40}
            />
            <h3>LinkedIn</h3>
            <p>Connect with me.</p>
          </a>
          <a href="/resume" className={styles.card}>
            <h3>Resume</h3>
            <p>Download my resume.</p>
          </a>
        </section>
      </main>

      {/* Footer with links */}
      <footer className={styles.footer}>
        <nav className={styles.footerNav}>
          <a href="/about" className={styles.footerLink}>About Me</a>
          <a href="/contact" className={styles.footerLink}>Contact</a>
          <a href="/resume" className={styles.footerLink}>Resume</a>
        </nav>
        <p className={styles.copy}>© {new Date().getFullYear()} Shlok Parekh</p>
      </footer>
    </div>
  );
}