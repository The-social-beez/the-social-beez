import React from 'react'
import styles from './AboutUs.module.css'

type Props = {}

const AboutUs = (props: Props) => {
  return (
    <section className={styles.about_us}>
      <h2 className={styles.about_us__h2}>ABOUT US</h2>
      <div className={styles.about_us__div}>
        <p>We are a <em>DIGITAL MARKETING AGENCY</em> led by <em>TRIO</em> a in
          Badlapur, Thane
        </p>
        <p>and we are eager to support and grow your brand.</p>
      </div>
    </section>
  )
}

export default AboutUs