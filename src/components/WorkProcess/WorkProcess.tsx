import React from 'react'
import styles from './WorkProcess.module.css'
import Image from 'next/image'

type Props = {}

const WorkProcess = (props: Props) => {
  return (
    <section id="workprocess" className={styles.workprocess}>

      <div className={styles.left}>
        <h4>WHAT IS THE WORK PROCESS ?</h4>
      </div>

      <div className={styles.right}>
        <div className={styles.cardCover}>
          <Image priority={false} className={styles.beePath1} height={200} width={150} src={'/bee_path-removebg-preview.png'} alt={''} />

          <div className={styles.cards + ' bg-[#25bdbe]'}>
            <p className={styles.front}>MEET-UP</p>
            <p className={styles.back}>&ldquo;Connect, Collaborate, and Conquer the Digital World with Our Meetup!&rdquo;</p>
          </div>
        </div>

        <div className={styles.cardCover}>
          <div className={styles.cards + ' bg-[#ff738e]'}>
            <p className={styles.front}>DISCUSS</p>
            <p className={styles.back}>&ldquo;Unlock Insights, Spark Ideas, and Drive Success through Discussions&rdquo;</p>
          </div>
        </div>

        <div className={styles.cardCover}>
          <Image priority={false} className={styles.beePath2} height={200} width={150} src={'/bee_path-removebg-preview.png'} alt={''} />

          <div className={styles.cards + ' bg-[#ff738e]'}>
            <p className={styles.front}>SHARE POA</p>
            <p className={styles.back}>&ldquo;Collaborate, Brainstorm, and Chart Your Path to Marketing Success&rdquo;</p>
          </div>
        </div>

        <div className={styles.cardCover}>
          <div className={styles.cards + ' bg-[#FFA53B]'}>
            <p className={styles.front}>REVISE</p>
            <p className={styles.back}>&ldquo;Discover, Pivot, and Supercharge Your Marketing Strategies&rdquo;</p>
          </div>
        </div>

        <div className={styles.cardCover}>
          <Image priority={false} className={styles.beePath3} height={200} width={150} src={'/bee_path-removebg-preview.png'} alt={''} />

          <div className={styles.cards + ' bg-[#25bdbe]'}>
            <p className={styles.front}>APPROVAL</p>
            <p className={styles.back}>&ldquo;Give the Grant approval, Propel, and Achieve Marketing Greatness&rdquo;</p>
          </div>
        </div>

        <div className={styles.cardCover}>
          <div className={styles.cards + ' bg-[#FFD93B]'}>
            <p className={styles.front}>LAUNCH</p>
            <p className={styles.back}>&ldquo;Kickstart, Innovate, and Illuminate the Digital Sphere&rdquo;</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkProcess