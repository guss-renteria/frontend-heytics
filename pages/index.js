import Head from 'next/head'

import style from '../styles/home.module.css'

import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/images/ICON/deliver.svg' />
      </Head>

      <main className={ style.home }>
        <Header />
        <h1>Home</h1>
      </main>
    </div>
  )
}