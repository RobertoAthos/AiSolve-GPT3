import React,{useContext} from 'react'
import Header2 from '../../Components/Header2/Header'
import SEO from '../../Components/SEO'
import SideBar from '../../Components/SideBar'
import { AuthContext } from '../../Context/AuthContext'
import Login from '../Login'
import styles from './dashboard.module.scss'


export default function Dashboard() {

    const auth = useContext(AuthContext)

  return (
    <>
      {!auth.user ? (
        <Login/>
      ) : (
        <>
          <SEO title='Dashboard'/>
          <Header2/>
          <SideBar/>
          <section className={styles.background}>
              <h1>Aoba</h1>
              <p>{auth.user.email}</p>
          </section>
        </>
      )}
    </>
  )
}
