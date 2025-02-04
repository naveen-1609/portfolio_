import React from "react";
import history from "../../data/history.json";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" /> */}
            <div className={styles.aboutItemText}>
              <h2>Data Scientist</h2>
              <p>
                <ul>
                <li>Developed a Language Translating Message Application to remove language barriers. </li>
                <li>Developed a Ticket Automation System to reduce the manual effort and increase the efficiency.</li>
                <li>Developed a Stock Prediction pipeline that can predic stock price with more than 80% accuracy.</li>
                </ul>
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" /> */}
            <div className={styles.aboutItemText}>
              <h2>Data Engineer</h2>
              <p>
                <ul>
                <li>Automated 4 end to end ETL pipelines using IICS ensuring data privacy to reduce the mannual workload and increase the work efficiency.</li>
                <li>Deployed and Maintained more than 3 data pipelines in production environment of IICS. </li>
                <li>Built a sophesticated data pipeline harnesing the power of AWS that streams the stock data in real time and stores it in S3 which then used by Sagemaker to predict the stock price.</li>
                </ul>
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Achievements</h3>
              <p>
                <ul>
                <li>Honored with AI & Data Pioneer Award for solving business problems using AI which contributed to 20% increase in revenue.</li>
                <li>Honored with Cognizant Bronze Cheers Award for my outstanding performance and contribution to the success of the project.</li>
                </ul>
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Leadership</h3>
              <p>
                <ul>
                  <li>Led a team of 5 to develop end to end ETL pipelines using IICS.</li>
                  <li>Lead a team of 3 to integrate a Chat bot into an existing applicaiton.</li>
                </ul>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
