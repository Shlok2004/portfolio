import React from "react";
import styles from "./page.module.css";

export default function Page() {
  
    return(
 <div>
  <main className={styles.main}>
  <p>
    LinkedIn : <a href="https://www.linkedin.com/in/shlokparekh/" className={styles.topLink} target="_blank" rel="noopener noreferrer">
                    <h2>LinkedIn <span>-&gt;</span></h2>
                    <p>My LinkedIn Page!</p>
                  </a>
    Email : shlok.kp22@gmail.com
    Phone : 925-549-4470
  </p>
  
 
   
  <a href="/ " className={styles.topLink}>Back</a>


</main>
    </div>
    






    );
  }