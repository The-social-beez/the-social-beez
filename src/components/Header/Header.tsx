// import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import styles from './Header.module.css'

type headerProps = {}

export default function Header({ }: headerProps) {

  const leftRef = useRef(null);

  const [leftWidth, setLeftWidth] = useState(50.45)

  const handleMove = (e: any) => {
    setLeftWidth(e.clientX / window.innerWidth * 100);
  }

  useEffect(() => {
    document.getElementById('header')!.addEventListener('mousemove', (e)=>{
      setLeftWidth(e.clientX / window.innerWidth * 100);
    })
  }, [])
  

  return (
    <>
      <div onMouseMove={handleMove} onTouchMove={handleMove} className="h-[80vh] md:h-[100vh]">
        <div ref={leftRef} style={{ width: `${leftWidth}%` }} className={styles.side + " " + styles.left_side}>
          <h2 className={styles.title}>
            KICKSTART YOUR
            <span className={styles.fancy}> BRAND </span>
            WITH THESOCIALBEEZ
          </h2>
        </div>

        <div className={styles.side + " " + styles.right_side}>
          <h2 className={styles.title}>
            KICKSTART YOUR
            <span className={styles.fancy}> ब्रँड </span>
            WITH THESOCIALBEEZ
          </h2>
        </div>
      </div>
    </>
  )
}