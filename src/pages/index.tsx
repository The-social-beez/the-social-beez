// import Image from 'next/image'
import AboutUs from '@/components/AboutUs/AboutUs'
import Header from '@/components/Header/Header'
import WorkProcess from '@/components/WorkProcess/WorkProcess'
// import WhatsappIcon from '@/components/Whatsapp-icon/WhatsappIcon'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (<>
    <Head>
      <title>The Social Beez | Kickstart your brand!</title>
      <link rel="shortcut icon" href="favicon-comb.png" type="image/x-icon" />

      <meta name="title" content="Digital Marketing Agency in Badlapur - The SocialBeez" />
      <meta name="description" content="Meet the team behind The Social Beez; a Digital Marketing Agency in Badlapur, a dynamic group of three individuals passionate about helping businesses succeed in the digital landscape." />
    </Head>

    <main>
      <Header />
      <AboutUs />
      <WorkProcess />
    </main>
  </>
  )
}
