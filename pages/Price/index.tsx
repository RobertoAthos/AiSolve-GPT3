import Link from 'next/link'
import React,{useEffect} from 'react'
import SEO from '../../Components/SEO'
import styles from './pricePage.module.scss'
import {IoChevronBackSharp} from 'react-icons/io5'
import Transition from '../../Components/Transition'
import PriceCard from '../../Components/PriceCard/PriceCard'
import Header2 from '../../Components/Header2/Header'

export default function Price({products}) {

  return (
   <>
    <SEO title='Planos'/>
    <Header2/>
    <section className={styles.body}>
        <div className={styles.backbtn}><Link href='/'><IoChevronBackSharp/>menu</Link></div>
        <Transition direction='left'>
       <main className={styles.priceContainer}>
            <PriceCard products={products.data}/>
        </main>
        </Transition>
    </section>
   </>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/products`);
  const products = await res.json();

  // Pass data to the page via props
  return { props: { products } };
}
