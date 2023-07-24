import React from 'react'
import styles from './Menu.module.css'
import { CgClose } from 'react-icons/cg'
import Link from 'next/link'
import { BsInstagram, BsTelephone } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { LuMail } from 'react-icons/lu'

type Props = {
  menuIsOpen: boolean,
  toggleMenu: () => void
}

const Menu = (props: Props) => {

  return (
    <div className={!props.menuIsOpen ? styles.menu_close : styles.menu}>
      <div className={styles.left}>
        <ul>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/about'}>About Us</Link>
          </li>
          <li>
            <Link href={'/services'}>Our Services</Link>
          </li>
          <li>
            <Link href={'/blog'}>Blog</Link>
          </li>
          <li>
            <Link href={'/contact'}>Contact Us</Link>
          </li>
        </ul>
      </div>

      <div className={styles.right}>
        <h3>Feel Free to Contact Us!</h3>
        <div className="socials">
          <ul>
            <li>
              <Link target='_blank' href={'https://www.instagram.com/thesocialbeez/'}><BsInstagram /></Link>
            </li>
            <li>
              <Link target='_blank' href={'https://www.facebook.com/'}><FaFacebookF /> </Link>
            </li>
            <li>
              <Link target='_blank' href={'mailto:thesocialbeez.in@gmail.com'}><LuMail /></Link>
            </li>
            <li>
              <Link target='_blank' href={'tel:+919011570451'}><BsTelephone /></Link>
            </li>
          </ul>

        </div>
      </div>


      <div className="absolute top-5 md:top-6 right-10 md:right-16 text-2xl sm:text-3xl md:text-4xl text-[#333333] flex items-center" onClick={props.toggleMenu}>
        <CgClose className="h-full cursor-pointer" />
      </div>
    </div>
  )
}

export default Menu