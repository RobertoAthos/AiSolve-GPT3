import React from 'react'
import styles from './loading.module.scss'

export default function Loading() {
  return (
    <div className={styles.Loading}><span className={styles.ldsEllipsis}><div></div><div></div><div></div><div></div></span></div>
  )
}
