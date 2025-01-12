import React from "react";
import styles from "./page.module.css";

export default function Page() {

  return (
   
      <main className={styles.main}>

        <div className={styles.left}>

          <h1 className={styles.center}>
            Shlok Parekh
          </h1>



          <div>
            CONTACT
            PHONE:
            925-549-4470


            EMAIL:
            Shlok.kp22@gmail.com
          </div>
        </div>

        <div className={styles.right}>

          <h1> right</h1>


        </div>





        <div className={styles.splitBottom}>
          <table className={styles.resumeTable}>
            <tbody>
              <tr>
                <td>
                  <h2>SHLOK PAREKH</h2>
                  <p>Sophomore @ Rutgers University New Brunswick SAS</p>
                  <p>Computer Science Major</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>PROFILE</h3>
                  <p>College student who is responsible and ambitious...</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>HOBBIES</h3>
                  <ul>
                    <li>Coding</li>
                    <li>Repairing Hardware / Building Computers</li>
                    <li>Working on Cars</li>
                    <li>Gaming</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>EDUCATION</h3>
                  <ul>
                    <li>
                      Bridgewater-Raritan High School (BRHS) [September 2018] – [June 2022]
                    </li>
                    <li>Rutgers University New Brunswick [September 2022] – [Present]</li>
                    <li>Raritan Valley Community College [June 2023] – [August 2023]</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>WORK EXPERIENCE</h3>
                  <ul>
                    <li>Dunkin’ [Employee] [August 2021] – [Present]</li>
                    <li>Apple [Seasonal Specialist] [November 2022] – [January 2023]</li>
                    <li>Best Buy [Geek Squad] [April 2023] – [October 2023]</li>
                    <li>Apple [Seasonal Specialist] [October 2023] – [Present]</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>SKILLS</h3>
                  <p>Java, JavaScript, C++, Python, Gaming, Communication, Analytical Skills, Marketing, Engineering, Strategy, Consultation, Repair, Diagnostics, Critical thinking, Multitasking, Fast paced.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.linkedin.com/in/shlokparekh/" className={styles.topLink} target="_blank" rel="noopener noreferrer">
                    <h2>LinkedIn <span>-&gt;</span></h2>
                    <p>My LinkedIn Page!</p>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/ " className={styles.topLink}>Back</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>


        <div className={styles.filler}>


        </div>
      </main>
    
     
    

      





  )
}