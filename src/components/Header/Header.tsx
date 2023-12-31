// import Link from 'next/link'
"use client"
import React, { useEffect, useRef, useState, RefObject } from 'react'
import './Header.css'
import { Montserrat } from 'next/font/google'

const mont_serrat = Montserrat({
  subsets: ['latin'],
  weight: ['700']
})

import { Permanent_Marker } from 'next/font/google'
const permanent_Marker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400'
})

import { Tiro_Devanagari_Marathi } from 'next/font/google'
const tiro_Devanagari_Marathi = Tiro_Devanagari_Marathi({
  subsets: ['latin'],
  weight: '400'
})

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
    if (isMoving && e.touches[0].clientX / window.innerWidth * 100 < 100) {
      setLeftWidth(e.touches[0].clientX / window.innerWidth * 100);
    }
  }

  useEffect(() => {
    document.getElementById('header')!.addEventListener('mousemove', (e) => {
      setLeftWidth(e.clientX / window.innerWidth * 100);
    })
    // document.body.classList.add('bg-wheat');
  }, [])


  return (
    <section id="banner">
      <div ref={containerRef} onMouseMove={handleMove} onTouchStart={() => setIsMoving(true)} onTouchMove={handleTouchMove} onTouchEnd={() => setIsMoving(false)} className="h-[80vh] md:h-[100vh]">
        <div style={{ width: `${leftWidth}%` }} className={`left_side`}>
          <h2 className={`${mont_serrat.className} title`}>KICKSTART YOUR<span className={`${permanent_Marker.className} fancy`}> BRAND </span>WITH THESOCIALBEEZ
          </h2>
        </div>

        <div className={`right_side`}>
          <h2 className={`${mont_serrat.className} title`}>
            KICKSTART YOUR
            <span className={`${tiro_Devanagari_Marathi.className} fancy`}> ब्रँड </span>
            WITH THESOCIALBEEZ
          </h2>
        </div>
      </div>
    </section>
  )
}