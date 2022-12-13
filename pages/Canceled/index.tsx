import React from 'react'
import SEO from '../../Components/SEO'
import Transition from '../../Components/Transition'
import styles from './cancel.module.scss'
import {BiSad} from 'react-icons/bi'
import Link from 'next/link'

export default function Canceled() {
  return (
    <>
    <SEO title='Pagamento Concluído'/>
      <main className={styles.body}>
          <section>
              <Transition direction='left'>
                <div className={styles.boxSuccess}>
                    <h2>Que Pena <BiSad/></h2>
                    <p>Tem certeza que quer cancelar sua assinatura ?</p>
                    <Link href='/'>Clique aqui para voltar ao menu.</Link>
                </div>
              </Transition>
          </section>
      </main>
    </>
  )
}
