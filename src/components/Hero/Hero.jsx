import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Naveen</h1>
        <p className={styles.description}>
          I'm a Data Scientist with 3+ years of experience using Python, SQL, Machine Learning,
          Generative Ai, and Data Engineering. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:naveenvenkat@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="src\assets\hero\profile.png"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
