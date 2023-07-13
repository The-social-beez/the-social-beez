// import Image from 'next/image'
import WhatsappIcon from '@/components/Whatsapp-icon/WhatsappIcon'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (<>
    <Head>
      <title>The Social Beez | Kick start your buisness growth!</title>
      <link rel="shortcut icon" href="favicon-comb.png" type="image/x-icon" />

      <meta name="title" content="Digital Marketing Agency in Badlapur - The SocialBeez" />
      <meta name="description" content="Meet the team behind The Social Beez; a Digital Marketing Agency in Badlapur, a dynamic group of three individuals passionate about helping businesses succeed in the digital landscape." />
    </Head>

    <main className="">
      <h1 className="text-2xl text-center font-bold">Home</h1>
    </main>
  </>
  )
}
