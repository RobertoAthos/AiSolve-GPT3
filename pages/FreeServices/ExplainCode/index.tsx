import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import Header from "../../../Components/Header/Header";
import card from "../../../assets/card.png";
import styles from "./explainCode.module.scss";
import Loading from "../../../Components/Loading/Loading";
import Footer from "../../../Components/Footer/Footer";
import SEO from "../../../Components/SEO";
import copy from "copy-to-clipboard";  
import { MdOutlineFileCopy } from "react-icons/md";
import { useRouter } from 'next/router';
import br from '../../../locales/pt-BR/ExplainCode'
import usa from '../../../locales/en/ExplainCode'
import Transition from "../../../Components/Transition";

export default function ExplainCode() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
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

  const translateCode = async () => {
    setLoading(true);
    const response = await openai.createCompletion({
      model: "code-davinci-002",
      prompt: prompt + `\n\n"""\n${t.prompt}\n1`, 
      temperature: 0,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: ['"""'],
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
      <SEO title={t.seo} desc="code explanation" />
      <Header />
      <Transition direction="up">
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroText}>
            <h2>
              {t.title}
            </h2>
            <p>
             {t.desc}
            </p>
          </div>
        </div>
      </section>
      <main>
        <section className={styles.translation}>
          <div className={styles.translationContainer}>
            <div className={styles.boxArea}>
              <div className={styles.box}>
                <label>{t.label1}</label>
                <textarea
                  onChange={(e) => setPrompt(e.target.value)}
                  className={styles.code}
                  placeholder="
        Ex: function sum(a,b){
          return a + b
        }

        console.log(sum(3,5))

        "
                />
                <div className={styles.loading}>
                  {loading ? (
                    <Loading/>
                  ) : (
                    <button onClick={translateCode}>Translate code</button>
                  )}
                </div>
              </div>
              <span className={styles.line}></span>
              <div className={styles.box}>
                <label>{t.label2}</label>
                <textarea
                  className={styles.result}
                  value={result}
                  onChange={handleCopyText}
                />
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
      <Footer />
    </>
  );
}
