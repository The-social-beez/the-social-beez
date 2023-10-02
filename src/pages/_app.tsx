import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import WhatsappIcon from '@/feature/Whatsapp-button/WhatsappIcon'
import CallIcon from '@/feature/Call-button/CallIcon'
import '@/styles/globals.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    <WhatsappIcon />
    <CallIcon />
  </>
}
