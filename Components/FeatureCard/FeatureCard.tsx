import React from 'react'
import Image, { StaticImageData } from 'next/image'
import styles from './featureCard.module.scss'

interface Props{
  img: string | StaticImageData,
  alt: string,
  title: string,
  desc: string,
  button: string
}

export default function FeatureCard(props:Props) {
  return (
    <div className={styles.card}>
        <picture><Image src={props.img} alt={props.alt}/></picture>
        <label>{props.title}</label>
        <p>{props.desc}</p>
        <button>View {props.button}</button>
    </div>
  )
}
