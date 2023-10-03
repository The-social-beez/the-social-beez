import AboutUs from '@/components/AboutUs/AboutUs'
import Header from '@/components/Header/Header'
// import Navbar from '@/components/Navbar/Navbar'
import OurServices from '@/components/OurServices/OurServices'
import WorkProcess from '@/components/WorkProcess/WorkProcess'
// import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-wheat'>
      <Header />
      <AboutUs />
      <WorkProcess />
      <OurServices />
    </main>
  )
}
