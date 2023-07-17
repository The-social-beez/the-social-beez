// import Link from 'next/link'
import {HiMenuAlt1} from 'react-icons/hi'
import React from 'react'

type navbarProps = {}

export default function Navbar({ }: navbarProps) {
  return (
    <div>
      <header className="absolute z-10 top-0 left-0 right-0">
        <nav className="p-4 md:p-6 px-6 md:px-12 flex justify-between">
          <div className="logo text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            THESOCIALBEEZ
          </div>
          <div className="menu-btn text-2xl sm:text-3xl md:text-4xl text-white flex items-center">
            <HiMenuAlt1 className="h-full cursor-pointer" />
          </div>
        </nav>
      </header>
    </div>
  )
}