import React from 'react'
import {AppProps} from 'next/app'
import '../styles/globals.css'
import {DefaultSeo} from 'next-seo'
import SEO from '../../next-seo.json'
import {Header} from 'components/Header'
import {Footer} from 'components/Footer'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
