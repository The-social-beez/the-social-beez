// import Link from 'next/link'
import React, { useEffect, useRef, useState, RefObject } from 'react'
import styles from './Header.module.css'

type headerProps = {}

export default function Header({ }: headerProps) {

  const containerRef: RefObject<HTMLDivElement> = useRef(null);

  const [leftWidth, setLeftWidth] = useState(50.45)
  const [isMoving, setIsMoving] = useState(false)

  const handleMove = (e: any) => {
    setLeftWidth(e.clientX / window.innerWidth * 100);
    // console.log(containerRef.current.parentElement)
  }

  const handleTouchMove = (e: any) => {
    if (isMoving  &&  e.touches[0].clientX / window.innerWidth * 100 < 100) {
        setLeftWidth(e.touches[0].clientX / window.innerWidth * 100);
    }
  }

  useEffect(() => {
    document.getElementById('header')!.addEventListener('mousemove', (e) => {
      setLeftWidth(e.clientX / window.innerWidth * 100);
    })
  }, [])


  return (
    <>
      <div ref={containerRef} onMouseMove={handleMove} onTouchStart={() => setIsMoving(true)} onTouchMove={handleTouchMove} onTouchEnd={() => setIsMoving(false)} className="h-[80vh] md:h-[100vh]">
        <div style={{ width: `${leftWidth}%` }} className={styles.side + " " + styles.left_side}>
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