import React,{useState} from 'react'
import styles from './register.module.scss'
import SEO from '../../Components/SEO'
import Image from 'next/image'
import img from '../../assets/img-01.png'
import {MdSupervisorAccount, MdPassword} from 'react-icons/md'
import { useRouter } from 'next/router'
import {useAuth} from '../../Context/AuthContext'
import Link from 'next/link'
import Loading from '../../Components/Loading/Loading'
import Transition from '../../Components/Transition'


export default function Register() { 

    const {signUp} = useAuth()
    const[formError,setFormError] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[loading,setLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async(e:any)=>{
        e.preventDefault()
        setLoading(true)
        try {
            await signUp(email,password)
            router.push('/Price')
        } catch (error) {
            console.log(error.message)
            setLoading(false)
        }
    }


  return (
    <>
    <SEO title='Register'/>
    <section className={styles.body}>
        <div className={styles.limiter}>
    <div className={styles.containerLogin100}>
    <Transition direction='up'>
        <div className={styles.wrapLogin100}>
            <div className={styles.login100Pic} data-tilt>
                <Image src={img} alt="IMG"/>
            </div>

            <form className={styles.login100Form} onSubmit={handleSubmit}>
                <span className={styles.login100FormTitle}>
                    Register
                </span>

                <div className={styles.wrapInput100} data-validate = "Valid email is required: ex@abc.xyz">
                    <input className={styles.input100} value={email} type="text"  placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
                    <span className={styles.focusInput100}></span>
                    <span className={styles.symbolInput100}>
                        <i><MdSupervisorAccount/></i>
                    </span>
                </div>

                <div className={styles.wrapInput100} data-validate = "Password is required">
                    <input className={styles.input100} value={password} type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                    <span className={styles.focusInput100}></span>
                    <span className={styles.symbolInput100}>
                        <i><MdPassword/></i>
                    </span>
                </div>
                
                <div className={styles.containerLogin100FormBtn}>
                   {loading ? <Loading/> :  <button type='submit' className={styles.login100FormBtn}>
                        Create Account
                    </button>}
                    <Link href='/Login'>Já tem conta ? Então faça o login</Link>
                </div>
            </form>
        </div>
        </Transition>
    </div>
</div>
    </section>
    </>

  )
}
