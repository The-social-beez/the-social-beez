// import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (<>
    <Head>
      <title>The Social Beez | Kick start your buisness growth!</title>
      <link rel="shortcut icon" href="favicon-comb.png" type="image/x-icon" />

    </Head>

    <main className="">
      <div className="my-custom-class">
        myclass
      </div>
      <h1 className="text-2xl text-center font-bold">Hello</h1>
    </main>
  </>
  )
}
