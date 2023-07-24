// import Link from 'next/link'
import { HiMenuAlt1 } from 'react-icons/hi'
import React, { useState } from 'react'
import Menu from '../Menu/Menu'

type navbarProps = {}

export default function Navbar({ }: navbarProps) {

  const [menuIsOpen, setMenuIsOpen] = useState(false)
  // const setScrollY = () => {
  //   if (!document.body.classList.contains('overflow-y-hidden')) {
  //     document.body.classList.add("overflow-y-hidden");
  //   } else {
  //     document.body.classList.remove("overflow-y-hidden");
  //   }
  // }

  const toggleMenu = () => {
    if(!menuIsOpen){
      document.body.classList.add("overflow-y-hidden");
      console.log("Should open now "+menuIsOpen)
      setMenuIsOpen(!menuIsOpen)
    } else{
      document.body.classList.remove("overflow-y-hidden");
      console.log("Should close now "+menuIsOpen)
      setMenuIsOpen(!menuIsOpen)
    }
  }

  return (
    <div>
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
      <Menu menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />

    </div>
  )
}