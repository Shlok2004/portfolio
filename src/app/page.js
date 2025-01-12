import Image from "next/image";
import styles from "./page.module.css";






export default function Home() {
  return (
    
    <div>
      

    <nav className={styles.highBar}>


    <a className={styles.highBarName}>
            Shlok Parekh
          </a>

    </nav>
      {/* Top Bar */}
      
      <nav className={styles.topBar}>
      
      <div className={styles.highBarItems}>
        <p>
          <a href="/about" className={styles.topLink}>
            About Me
          </a>
          

          <a href="/contact" className={styles.topLink}>
            Contact
          </a>

          <a href="/resume" className={styles.topLink}>
            Resume
          </a>
         
         
        
          </p>
      </div>  
      </nav>
      
      
    

    <main className={styles.main}>
      
        <h1 className={styles.Title}>
          Hello!
        </h1>
        <p>
          I am Shlok!
          
        </p>
        <p>Welcome to my portfolio!</p>
        <div>
          <a
            href="https://www.linkedin.com/in/shlokparekh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            <Image
              src="/LinkedINlogo.png"
              
              className={styles.vercelLogo}
              width={50.}
              height={50}
              priority
            />
          </a>
        </div>
      
      
      

     

      <div>
        <Image
          
          src="/GunFam.jpeg"
          alt="Car"
          width={450}
          height={600}
        />
      </div>
      

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
    </div>
    
  );
}
