import React, { useState } from "react";
import styles from "./header.module.scss";
import logo from "../../assets/logo.png";
import Link from "next/link";
import AboutCard from "../AboutCard/AboutCard";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { FiUserPlus } from "react-icons/fi";
import br from "../../locales/pt-BR/header";
import usa from "../../locales/en//header";
import { useRouter } from "next/router";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  const [modal, setModal] = useState(false);
  const [nav, setNav] = useState(false);

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en-US" ? usa : br;

  const changeLanguage = (e:any) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <>
      <header className={styles.header}>
        <picture>
          <Link href="/">
            <Image src={logo} alt="easy code logo" />
          </Link>
        </picture>
        <nav>
          <ul>
            <div className={styles.dropdown}>
              <li className={styles.dropbtn}>{t.link1}</li>
              <div className={styles.dropdownContent}>
                <Link href="/FreeServices/ExplainCode">{t.sublink1}</Link>
                <Link href="/FreeServices/SummaryText">{t.sublink2}</Link>
                <Link href="/FreeServices/ProductNameGenerator">
                  {t.sublink3}
                </Link>
                <Link href="/FreeServices/CreateEssay">{t.sublink4}</Link>
                <Link href="/FreeServices/StudyNotes">{t.sublink5}</Link>
                <Link href="/FreeServices/InterviewQuestions">
                  {t.sublink6}
                </Link>
              </div>
            </div>
            <li onClick={() => setModal(!modal)}>{t.link2}</li>
            <Link href='/Login'><li>{t.link3}</li></Link>
            {modal === true ? (
              <div className={styles.aboutCard}>
                <MdClose
                  onClick={() => setModal(false)}
                  className={styles.iconX}
                />
                <AboutCard />
              </div>
            ) : (
              ""
            )}
          </ul>
        </nav>
        <div className={styles.btns}>
              <Link href='/Register'><button>Sign Up</button></Link>
          </div>
        <div className={styles.menu}>
          {nav ? (
            <AiOutlineClose
              className={styles.icon}
              onClick={() => setNav(false)}
            />
          ) : (
            <div className={styles.menuBurguer}>
              <AiOutlineMenu
                className={styles.icon}
                onClick={() => setNav(!nav)}
              />
            </div>
          )}
        </div>
      </header>
      <nav className={nav ? `${styles.menuMobile}` : `${styles.menuClose}`}>
        <div className={styles.mobileContainer}>
          <ul>
            <li>
              <Link href="/FreeServices/ExplainCode">{t.sublink1}</Link>
            </li>
            <li>
              <Link href="/FreeServices/SummaryText">{t.sublink2}</Link>
            </li>
            <li>
              <Link href="/FreeServices/ProductNameGenerator">
                {t.sublink3}
              </Link>
            </li>
            <li>
              <Link href="/FreeServices/CreateEssay">{t.sublink4}</Link>
            </li>
            <li>
              <Link href="/FreeServices/StudyNotes">{t.sublink5}</Link>
            </li>
            <li>
              <Link href="/FreeServices/InterviewQuestions">{t.sublink6}</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
