import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'am Gayasri</h1>
        <p className={styles.description}>
          Currently pursuing an Honors Degree in
          Software Engineering at SLIIT University. With a fervent passion for
          both full-stack development and mobile app development.   
        </p>
        <a className={styles.contactBtn} href="mailto:gayasripethum1@gmail.com">
          Contact me
        </a>
        <a className={styles.contactBtn} href="mailto:gayasripethum1@gmail.com">
          Download CV
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroImage.png")}
        alt="hero image"
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
