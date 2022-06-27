import Head from 'next/head'

import style from '../styles/home.module.css'

import Header from '../components/Header'
import Top from '../components/Top'
import Body from '../components/Body'
import FloatingButton from '../components/FloatingButton'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Front end | Heytics</title>
        <meta name='description' content='front end de prueba' />
        <link rel='icon' href='/images/ICON/deliver.svg' />
      </Head>

      <main id='root' className={ style.home }>
        <Header />
        <Top />
        <Body />
        <FloatingButton />
     </main>
    </div>
  )
}
