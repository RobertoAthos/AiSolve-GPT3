import React from 'react'
import logo from '../../assets/logo.png'
import Image from 'next/image'
import styles from  './header2.module.scss'

export default function Header2() {
  return (
    <header className={styles.header}>
        <picture><Image src={logo} alt='logo'/></picture>
    </header>
  )
}
