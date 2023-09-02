import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}