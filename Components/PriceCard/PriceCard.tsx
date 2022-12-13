import React from 'react'
import styles from './price.module.scss'
import { loadStripe } from "@stripe/stripe-js";
import SEO from '../SEO';
import Image from 'next/image'
import Header2 from '../Header2/Header';

loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE}`
);

export default function PriceCard({products}) {
  return (
    <>
      <SEO title='Planos'/>
       {products.length ? (
        <ul className={styles.products}>
          {products.map((product:any) => (
            <li key={product.id}>
              <form action="/api/checkout_sessions" method="POST">
                <Image 
                  src={product.images[0]} 
                  alt={product.name}
                  width={300}
                  height={200}
                  priority={true}
                />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <button type="submit" role="link" className={styles.link}>
                  Escolher Plano
                </button>
                <input
                  type="hidden"
                  name="priceId"
                  value={product.default_price}
                />
              </form>
            </li>
          ))}
        </ul>
      ) : (
        <div>No products</div>
      )}
    </>
  );
}
