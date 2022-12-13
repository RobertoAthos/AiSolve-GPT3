import React from 'react'
import styles from './about.module.scss'

export default function AboutCard() {
  return (
    <div className={styles.overlay}>
       <div className={styles.cardContainer}>
        <div className={styles.card}>
        <h3>About the Company</h3>
        <p>we are a start up focused on solving daily problems with AI solutions, making your job, studing or anotations way more easy and practice.</p>
        </div>
       </div>
    </div>
  )
}
