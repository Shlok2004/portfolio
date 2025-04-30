import React from "react";
import styles from "./page.module.css";

export default function ResumePage() {
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

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Left Column */}
        <section className={styles.left}>
          <h2 className={styles.name}>Shlok Parekh</h2>
          <div className={styles.contact}>
            <p><strong>PHONE:</strong> 925-549-4470</p>
            <p>
              <strong>EMAIL:</strong>{" "}
              <a href="mailto:Shlok.kp22@gmail.com">Shlok.kp22@gmail.com</a>
            </p>
            <p>
              <strong>LINKEDIN:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/shlokparekh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                shlokparekh
              </a>
            </p>
          </div>
          <a
            href="/Parekh_Shlok_resume_1_2025.pdf"
            download
            className={styles.downloadBtn}
          >
            ↓ Download Resume
          </a>
        </section>

        {/* Right Column */}
        <section className={styles.right}>
          <div className={styles.block}>
            <h3>EDUCATION</h3>
            <ul>
              <li>
                <strong>Rutgers University</strong> (09 2022 – 01 2025)  
                New Brunswick, NJ — B.S. in Computer Science
              </li>
              <li>
                <strong>Bridgewater-Raritan HS</strong> (09 2018 – 06 2022)  
                Bridgewater, NJ — HS Diploma
                <ul className={styles.subList}>
                  <li>iStem Engineering Club Officer</li>
                  <li>Robotics Club Member</li>
                  <li>Football Team Member</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className={styles.block}>
            <h3>WORK EXPERIENCE</h3>
            <ul>
              <li>
                <strong>Apple</strong> (06 2024–Present) — Specialist, Bridgewater, NJ
                <ul className={styles.subList}>
                  <li>60% AppleCare attach rate on iPhone sales.</li>
                  <li>Built long-term customer relationships across the ecosystem.</li>
                  <li>Integrated accessories into Vision Pro demos; led closing crews.</li>
                  <li>Consistently exceeded store goals through proactivity.</li>
                </ul>
              </li>
              <li>
                <strong>Apple</strong> (10 2023–05 2024) — Seasonal Specialist, Bridgewater, NJ
                <ul className={styles.subList}>
                  <li>60% AppleCare attach, 100% NPS, weekly business intros.</li>
                  <li>Personalized solutions and continuous leadership feedback.</li>
                </ul>
              </li>
              <li>
                <strong>Best Buy (Geek Squad)</strong> (04 2023–10 2023) — Consultant, Bridgewater, NJ
                <ul className={styles.subList}>
                  <li>Sold 3–5 TotalTech memberships weekly, boosting sales 15–25%.</li>
                  <li>Managed critical device repairs and logistics.</li>
                </ul>
              </li>
              <li>
                <strong>Dunkin’</strong> (08 2021–07 2024) — Crewmember, Bridgewater, NJ
                <ul className={styles.subList}>
                  <li>Handled transactions, inventory, and customer service.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className={styles.block}>
            <h3>SKILLS</h3>
            <p>
              Java · C · C++ · Python · CSS · JavaScript · HTML · Communication ·
              Marketing · Web Dev · Diagnostics · Critical Thinking
            </p>
          </div>

          <div className={styles.block}>
            <h3>HOBBIES & ACTIVITIES</h3>
            <p>
              Full-stack dev · Building computers · Working on cars · Volunteering
            </p>
          </div>
        </section>
      </main>

      {/* Footer / Bottom Sub-Bar */}
      <footer className={styles.footer}>
        <div className={styles.backContainer}>
          <a href="/" className={styles.backLink}>← Back to Home</a>
        </div>
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
