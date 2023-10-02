// import Link from 'next/link'
import { HiMenuAlt1 } from 'react-icons/hi'
import React, { useEffect, useState } from 'react'
import Menu from '../Menu/Menu'
import { useAnimation } from 'framer-motion'

type navbarProps = {}

export default function Navbar({ }: navbarProps) {

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const menuOpenControl = useAnimation();

  const menuAnimations = (open: boolean) => {
    if (open) {
      menuOpenControl.start({
        scale: 1,
        opacity: 1,
        height: '100vh',
        width: '100vw',
        transition: { type: 'sprring', duration: 0.6, bounce: 0.3 }
      })
    }
    if (!open) {
      menuOpenControl.start({
        scale: 0,
        opacity: 0,
        height: 0,
        width: 0,
        transition: { type: 'sprring', duration: 0.6, bounce: 0.3 }
      })
    }
  }

  const toggleMenu = () => {
    if (menuIsOpen == false) {
      document.body.classList.add("overflow-y-hidden");
      // console.log("Should open now " + menuIsOpen)
      setMenuIsOpen(true)
      menuAnimations(true)
    } else {
      document.body.classList.remove("overflow-y-hidden");
      // console.log("Should close now " + menuIsOpen)
      setMenuIsOpen(false)
      menuAnimations(false)
    }
  }

  return (
    <>
      <header id="header" className="absolute z-10 top-0 left-0 right-0 w-full">
        <nav className="p-4 md:p-6 px-6 md:px-12 flex justify-between">
          <div className="logo text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            THESOCIALBEEZ
          </div>
          <div className="menu-btn text-2xl sm:text-3xl md:text-4xl text-white flex items-center" onClick={toggleMenu}>
            <HiMenuAlt1 className="h-full cursor-pointer" />
          </div>
        </nav>
      </header>
      <Menu menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} menuOpenControl={menuOpenControl} />

    </>
  )
}