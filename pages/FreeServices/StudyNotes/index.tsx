import React,{useState} from 'react'
import styles from './study.module.scss'
import Header from '../../../Components/Header/Header'
import SEO from '../../../Components/SEO'
import WriteMachine from '../../../Components/WriteMachine'
import Footer from '../../../Components/Footer/Footer'
import {Configuration, OpenAIApi} from 'openai'
import Loading from '../../../Components/Loading/Loading'
import copy from "copy-to-clipboard";  
import { MdOutlineFileCopy } from "react-icons/md";
import { useRouter } from 'next/router';
import br from '../../../locales/pt-BR/StudyNotes'
import usa from '../../../locales/en/StudyNotes'
import Transition from '../../../Components/Transition'

export default function StudyNotes() {

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
        apiKey: process.env.NEXT_PUBLIC_OPENAI
        });
        const openai = new OpenAIApi(configuration);

        const generateTopics = async() =>{
          setLoading(true)
            const response = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: `${t.prompt}` + prompt,
                temperature: 0.3,
                max_tokens: 150,
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
            <SEO title={t.seo} desc='generate topics to study'/>
            <Header/>
            <Transition direction='up'>
            <section className={styles.hero}>
            <div className={styles.heroContainer}>
            <div className={styles.heroText}>
              <h2>
                <WriteMachine text={t.title} />
              </h2>
              <p>{t.desc}</p>
            </div>
          </div>
            </section>

            <main>
                <section className={styles.feature}>
                    <div className={styles.featureContainer}>
                        <div className={styles.inputs}>
                          <div className={styles.box}>
                            <label>{t.label1}</label>
                            <input type='text'  onChange={e=>setPrompt(e.target.value)}/>
                            {loading ? <Loading/> : <button onClick={generateTopics}>Generate Topics</button>}
                          </div>
                          <span className={styles.line}></span>
                            <div className={styles.box}>
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
                    </div>
                </section>
            </main>
            </Transition>
            <Footer/>
        </>
  )
}
