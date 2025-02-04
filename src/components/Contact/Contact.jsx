import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="src/assets/contact/emailIcon.png" alt="Email icon" />
          <a href="naveenvenkat58@gmail.com">naveenvenkat58@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src="src/assets/contact/linkedinIcon.png"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/naveen1609/">linkedin.com/naveen1609</a>
        </li>
        <li className={styles.link}>
          <img src="src/assets/contact/githubIcon.png" alt="Github icon" />
          <a href="https://github.com/naveen-1609">github.com/naveen-1609</a>
        </li>
      </ul>
    </footer>
  );
};
