import React from 'react'
import Head from 'next/head'

interface Props{
  title: string,
  desc?: string
}

export default function SEO(props:Props) {
  return (
    <Head>
        <title>Taskify | {props.title}</title>
        <meta name="description" content={props.desc} />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
