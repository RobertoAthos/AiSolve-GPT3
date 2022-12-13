import React from 'react'
import styles from  './sidebar.module.scss'
import Link from 'next/dist/client/link'
import {AiFillCode,AiOutlineQuestionCircle, AiFillHome} from 'react-icons/ai'
import {BiText,BiCode} from 'react-icons/bi'
import {MdOutlineTopic} from 'react-icons/md'
import {BsReverseLayoutTextSidebarReverse} from 'react-icons/bs'
import {GiPerspectiveDiceSixFacesRandom} from 'react-icons/gi'

export default function SideBar() {
  return (
    <nav className={styles.menuSidebar}>
        <ul>
            <li>
                <Link  href='/Dashboard'  >
                  <i className={styles.icon}><AiFillHome/></i>
                    <span className={styles.menuTexto}>
                        Dashboard
                    </span>
                </Link>
              
            </li>
            <li>
                <Link  href=''  >
                  <i className={styles.icon}><AiFillCode/></i>
                    <span className={styles.menuTexto}>
                        Explicar Código
                    </span>
                </Link>
              
            </li>
            <li className={styles.hasSubnav}>
                <Link href=''>
                    <i className={styles.icon}><BiText/></i>
                    <span className={styles.menuTexto}>Resumir Textos</span>
                </Link>
                
            </li>
            
            <li className={styles.hasSubnav}>
                <Link href=''>
                   <i className={styles.icon}><BsReverseLayoutTextSidebarReverse/></i>
                    <span className={styles.menuTexto}>Criar Redações</span>
                </Link>
                
            </li>
            <li className={styles.hasSubnav}>
                <Link href=''>
                   <i className={styles.icon}><MdOutlineTopic/></i>
                    <span className={styles.menuTexto}>Tópicos para estudar</span>
                </Link>
               
            </li>
            
            
            <li>
               <Link href=''> 
                   <i className={styles.icon}><GiPerspectiveDiceSixFacesRandom/></i>
                    <span className={styles.menuTexto}>Gerar nomes de produtos</span>
                </Link>
            </li>
        
            <li>
                <Link href=''>
                   <i className={styles.icon}><AiOutlineQuestionCircle/></i>
                    <span className={styles.menuTexto}> Questões de Entrevista </span>
                </Link>
            </li>
            <li>
                <Link href=''>
                   <i className={styles.icon}><AiOutlineQuestionCircle/></i>
                    <span className={styles.menuTexto}> Gerador de logos </span>
                </Link>
            </li>
        
        </ul>
        <ul className="logout">
            
            <li>
               <Link href=''> 
                    <i className={styles.icon}></i>
                    <span className={styles.menuTexto}> Sair</span>
                </Link>
            </li>
        </ul>
</nav>
  )
}
