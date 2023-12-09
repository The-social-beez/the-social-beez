import { AboutUs, ContactUs, Header, OurServices, WorkProcess } from '@/components';

export default function Home() {
  return (
    <>
      {/* <Head>
        <meta name="google-site-verification" content="LBM0Y_Wpd5Rz7aFny3csEeuRTlz7YVMyVcEyyJ6T4zM" />
      </Head> */}
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
