import React,{useState} from 'react'
import {OpenAIApi, Configuration} from 'openai'
import WriteMachine from '../../../Components/WriteMachine';
import Header from '../../../Components/Header/Header';
import Footer from '../../../Components/Footer/Footer';
import SEO from '../../../Components/SEO'
import styles from './essay.module.scss'
import Loading from '../../../Components/Loading/Loading';
import copy from "copy-to-clipboard";  
import { MdOutlineFileCopy } from "react-icons/md";
import { useRouter } from 'next/router';
import br from '../../../locales/pt-BR/createEssay'
import usa from '../../../locales/en/createEssay'
import Transition from '../../../Components/Transition';

export default function CreateEssay() {

    const[prompt,setPrompt] = useState('')
    const[result,setResult] = useState('')
    const[loading,setLoading] = useState(false)
    const[copied,setCopied] = useState(false)
    const [copyText, setCopyText] = useState("");

    const handleCopyText = (e:any) => {
      setCopyText(e.target.value);
    };

    const copyToClipboard = () => {
      copy(result);
      setCopied(!copied)
    };


    const configuration = new Configuration({
      apiKey: process.env.NEXT_PUBLIC_OPENAI,
      });
      const openai = new OpenAIApi(configuration);
      
     const createEssay = async()=>{
         setLoading(true)
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${t.prompt}` + prompt + "\n",
            temperature: 0.7,
            max_tokens: 4000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });
          console.log(response.data.choices[0].text)
          setResult(response.data.choices[0].text!)
          setLoading(false)
     }

     const router = useRouter()
     const {locale} = router
     const t = locale === 'en-US' ? usa : br;

  return (
   <>
   <SEO title={t.seo} desc='create any essays'/>
   <Header/>
   <Transition direction='up'>
   <section className={styles.hero}>
       <div className={styles.heroContainer}>
           <div className={styles.heroText}>
             <h2><WriteMachine text={t.title}/></h2>
             <p>{t.desc} </p>
           </div>
       </div>
   </section>
   <main>
     <section className={styles.feature}>
     <div className={styles.featureContainer}>
       <div className={styles.inputs}>
           <label>{t.label}</label>
           <input type='text' onChange={e=>setPrompt(e.target.value)} placeholder='Ex: Politic'/>
           {loading ? <Loading/> : <button onClick={createEssay}>{t.button}</button>} 
           <label>{t.label2}</label>
           <textarea value={result} onChange={handleCopyText}/>
           <div className={styles.clipContainer}>
                  <button
                    className={styles.clipboard}
                    onClick={copyToClipboard}
                  >
                    <MdOutlineFileCopy className={styles.icon} />
                    Copy OutPut
                  </button>
                  {copied === true ? <span className={styles.contentCopied}>Content copied !</span> : ''}
                </div>        
       </div>
     </div>
     </section>
   </main>
   </Transition>
   <Footer/>
   </>
  )
}
