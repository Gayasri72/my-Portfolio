import React from 'react';
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'am Gayasri</h1>
            <p className={styles.description}>I'am a fullstack developer with 5 years of experience in MERN</p>
            <a className={styles.contactBtn} href="mailto:gayasripethum1@gmail.com">Contact me</a>
        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="hero image" />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}
