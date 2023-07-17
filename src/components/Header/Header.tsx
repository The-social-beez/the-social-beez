// import Link from 'next/link'
import React, { useRef, useState } from 'react'
import styles from './Header.module.css'

type headerProps = {}

export default function Header({ }: headerProps) {

  const leftRef = useRef(null);

  const [leftWidth, setLeftWidth] = useState(50.45)

  const handleMove = (e: any) => {
    setLeftWidth(e.clientX / window.innerWidth * 100);
  }

  return (
    <>
      <div onMouseMove={handleMove} onTouchMove={handleMove} className="h-[100vh] w">
        <div ref={leftRef} style={{width:`${leftWidth}%`}} className={styles.side + " " + styles.left_side}>
          <h2 className={styles.title}>
            KICKSTART YOUR
            <span className={styles.fancy}> BUSINESS </span>
            {/* <br /> */}
            WITH THESOCIALBEEZ
          </h2>
        </div>

        <div className={styles.side + " " + styles.right_side}>
          <h2 className={styles.title}>
            KICKSTART YOUR
            <span className={styles.fancy}> GROWTH </span>
            {/* <br /> */}
            WITH THESOCIALBEEZ
          </h2>
        </div>
        <div className={styles.side}>
          {/* <h2 className={styles.title}>
            KICK START YOUR BUSINESS
            <span className="fancy">worse</span>
            WITH THE SOCIAL BEEZ
          </h2> */}
        </div>
      </div>
    </>
  )
}