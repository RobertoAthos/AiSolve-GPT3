import Head from 'next/head'
import React from "react";
import SEO from "../Components/SEO";
import Header from "../Components/Header/Header";
import styles from "../styles/Home.module.scss";
import WriteMachine from "../Components/WriteMachine";
import FeatureCard from "../Components/FeatureCard/FeatureCard";
import code from "../assets/layers.png";
import text from "../assets/text.png";
import product from "../assets/add.png";
import notes from "../assets/edit-text.png";
import study from "../assets/task-list.png";
import interview from "../assets/discussion.png";
import Link from "next/link";
import { useRouter } from "next/router";
import br from '../locales/pt-BR/home'
import usa from '../locales/en/home'
import windows from '../assets/windows.png'
import mac from '../assets/mac.png'
import Image from 'next/image';
import desktop from '../assets/desktopimg.png'
import Transition from '../Components/Transition';

export default function Home() {

  const router = useRouter()
  const {locale} = router
  const t = locale === 'en-US' ? usa : br;

  return (
   <>
    <SEO title= {t.seo}/>
    <Header />
    <Transition direction='left'>
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroText}>
          <h2>
            <WriteMachine text={t.title} />
          </h2>
          <p>
            {t.desc}
          </p>
          <span>All for free !</span>
        </div>
      </div>
    </section>
    <main>
    <section className={styles.feature}>
    <div className={styles.featureContainer}>
      <h2>{t.title2}</h2>
      <div className={styles.card}>
        <Link href="/FreeServices/ExplainCode">
          <FeatureCard
            img={code}
            alt="code image"
            title={t.cardTitle1}
            desc={t.cardDesc1}
            button={t.cardTitle1}
          />
        </Link>
        <Link href="/FreeServices/InterviewQuestions">
          <FeatureCard
            img={interview}
            alt="interview image"
            title={t.cardTitle2}
            desc={t.cardDesc2}
            button={t.cardTitle2}
          />
        </Link>
        <Link href="/FreeServices/ProductNameGenerator">
          <FeatureCard
            img={product}
            alt="Product image"
            title={t.cardTitle3}
            desc={t.cardDesc3}
            button={t.cardTitle3}
          />
        </Link>
        <Link href="/FreeServices/CreateEssay">
          <FeatureCard
            img={notes}
            alt="Note image"
            title={t.cardTitle4}
            desc={t.cardDesc4}
            button={t.cardTitle4}
          />
        </Link>
        <Link href="/FreeServices/StudyNotes">
          <FeatureCard
            img={study}
            alt="Study image"
            title={t.cardTitle5}
            desc={t.cardDesc5}
            button={t.cardTitle5}
          />
        </Link>
        <Link href="/FreeServices/SummaryText">
          <FeatureCard
            img={text}
            alt="Summary image"
            title={t.cardTitle6}
            desc={t.cardDesc6}
            button={t.cardTitle6}
          />
        </Link>
      </div>
    </div>
  </section>

  <section className={styles.desktop}>
      <div className={styles.desktopContainer}>
        <div className={styles.desktopText}>
            <h2>Faça o Download do nosso App para Desktop !</h2>
            <span>Versão Beta 1.0</span>
            <div className={styles.ops}>
                <picture><Image src={windows} alt='windows logo'/></picture>
                <picture><Image src={mac} alt='mac logo'/></picture>
            </div>
        </div>
        <div className={styles.desktopAppImg}>
            <picture><Image src={desktop} alt='desktop app'/></picture>
        </div>
      </div>
  </section>
    </main>
    </Transition>
    </>
  )
}
