import React from 'react'
import './AboutUs.css'
import localFont from 'next/font/local'
const myFont = localFont({ src: 'GlacialIndifference-Regular.otf' })

import { Josefin_Sans } from 'next/font/google'
const josefin_Sans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['700']
})

type Props = {}

const AboutUs = (props: Props) => {
  return (
    <section id="aboutus" className={`about_us`}>
      <h2 className={`about_us__h2`}>ABOUT US</h2>
      <div className={`about_us__div`}>
        <p>We are a <em className={josefin_Sans.className}>DIGITAL MARKETING AGENCY</em> led by <em className={josefin_Sans.className}>TRIO</em> a in
          Badlapur, Thane
        </p>
        <p>and we are eager to support and grow your brand.</p>
      </div>
    </section>
  )
}

export default AboutUs