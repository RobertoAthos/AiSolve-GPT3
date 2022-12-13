import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import SEO from "../../../Components/SEO";
import Header from "../../../Components/Header/Header";
import styles from "./summayText.module.scss";
import WriteMachine from "../../../Components/WriteMachine";
import Footer from "../../../Components/Footer/Footer";
import Loading from '../../../Components/Loading/Loading'
import copy from "copy-to-clipboard";  
import {MdOutlineFileCopy} from 'react-icons/md'
import { useRouter } from 'next/router';
import br from '../../../locales/pt-BR/SummaryText'
import usa from '../../../locales/en/SummaryText'
import Transition from "../../../Components/Transition";


export default function SummaryText() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyText, setCopyText] = useState('');
  
  const handleCopyText = (e:any)=>{
    setCopyText(e.target.value);
  }
  
  const copyToClipboard = () => {
     copy(result);
     setCopied(!copied)
  }

  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI,
  });
  const openai = new OpenAIApi(configuration);

  const summaryText = async () => {
    setLoading(true);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt + "\n\nTl;dr: ",
      temperature: 0.7,
      max_tokens: 1614,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 1,
    });
    console.log(response.data.choices[0].text);
    setResult(response.data.choices[0].text!);
    setLoading(false)
  };

  const router = useRouter()
  const {locale} = router
  const t = locale === 'en-US' ? usa : br;

  return (
    <>
      <SEO title={t.seo} desc="summarize your text" />
      <Header />
      <Transition direction="up">
      <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <div className={styles.heroText}>
              <h2>
                <WriteMachine text={t.title} />
              </h2>
              <p>
               {t.desc}
              </p>
            </div>
          </div>
        </section><main>
            <section className={styles.feature}>
              <div className={styles.featureContainer}>
                <div className={styles.box}>
                  <textarea
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={t.placeholder1} />
                  {loading ? (
                    <Loading/>
                  ) : (
                    <button onClick={summaryText}>Summarize text</button>
                  )}
                  <textarea
                    className={styles.result}
                    placeholder={t.placeholder2}
                    value={result}
                    onChange={handleCopyText}
                  />
                  <div className={styles.clipContainer}><button className={styles.clipboard} onClick={copyToClipboard}><MdOutlineFileCopy className={styles.icon}/>Copy OutPut</button></div>
                  {copied === true ? <span className={styles.contentCopied}>Content copied !</span> : ''}
                </div>
              </div>
            </section>
          </main>
      </Transition>
      <Footer />
    </>
  );
}
