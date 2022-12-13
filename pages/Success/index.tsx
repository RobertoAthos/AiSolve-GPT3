import React from 'react'
import SEO from '../../Components/SEO'
import styles from './success.module.scss'
import Link from 'next/link'
import {FaRegSmileBeam} from 'react-icons/fa'
import Transition from '../../Components/Transition'

export default function Success() {
  return (
  <>
    <SEO title='Pagamento Concluído'/>
      <main className={styles.body}>
          <section>
              <Transition direction='left'>
                <div className={styles.boxSuccess}>
                    <h2>Obrigado <FaRegSmileBeam/></h2>
                    <p>Sua Assinatura foi concluida com êxito !</p>
                    <Link href='/Dashboard'>Clique aqui para acessar sua conta.</Link>
                </div>
              </Transition>
          </section>
      </main>
  </>
  )
}
