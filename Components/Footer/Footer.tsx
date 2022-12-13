import React from 'react'
import styles from  './footer.module.scss'
import Link from 'next/link'
import openai from '../../assets/openai.png'
import Image from 'next/image'

export default function Footer() {
  return (
   <footer className={styles.footer}>
        <div className={styles.footerContainer}>
            <div>
            <div><h1>TASKIFY</h1></div>
            <nav>
              <h4>Features</h4>
                <ul className={styles.navFeatures}>
                    <li><Link href='/FreeServices/ExplainCode'>Explain Code</Link></li>
                    <li><Link href='/FreeServices/SummaryText'>Summary Text</Link></li>
                   <li> <Link href='/FreeServices/ProductNameGenerator'>Product Name Generator</Link></li>
                   <li> <Link href='/FreeServices/CreateEssay'>Create Essay</Link></li>
                    <li><Link href='/FreeServices/StudyNotes'>Study Notes</Link></li>
                   <li> <Link href='/FreeServices/InterviewQuestions'>Interview Questions</Link></li>
                </ul>
            </nav>
            </div>
            <div className={styles.openai}>
              <Image src={openai} alt='openai logo'/>
              <label>Powered by</label>
            </div>
        </div>
   </footer>
  )
}