import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '@/components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Amazon - Clone</title>
        <meta name="description" content="Amazon - Clone" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
