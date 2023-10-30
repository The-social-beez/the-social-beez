import AboutUs from '@/components/AboutUs/AboutUs'
import ContactUs from '@/components/Contact form/Contact'
import Header from '@/components/Header/Header'
// import Navbar from '@/components/Navbar/Navbar'
import OurServices from '@/components/OurServices/OurServices'
import WorkProcess from '@/components/WorkProcess/WorkProcess'
import Head from 'next/head'
// import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="LBM0Y_Wpd5Rz7aFny3csEeuRTlz7YVMyVcEyyJ6T4zM" />
      </Head>
      <main className='bg-wheat'>
        <Header />
        <AboutUs />
        <WorkProcess />
        <OurServices />
        <ContactUs />
      </main>
    </>
  )
}
