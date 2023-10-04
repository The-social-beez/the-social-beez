import React from 'react'
import styles from './Menu.module.css'
import { CgClose } from 'react-icons/cg'
import Link from 'next/link'
import { BsInstagram, BsTelephone } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { LuMail } from 'react-icons/lu'
import { AnimationControls, motion } from 'framer-motion'

type Props = {
  menuIsOpen: boolean,
  toggleMenu: () => void,
  menuOpenControl: AnimationControls
}

const Menu = ({ menuIsOpen, toggleMenu, menuOpenControl }: Props) => {

  const menuBlocksVarient = {
    visible: {
      scale: menuIsOpen ? 1 : 0,
      opacity: menuIsOpen ? 1 : 0,
    },
    hidden: {
      scale: 0,
      opacity: 0
    }
  }

  const unOrderedList = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: menuIsOpen ? 1 : 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    }
  }

  const listItem = {
    hidden: {
      x: '-200%',
    },
    visible: {
      x: 0,
    }
  }

  return (
    <motion.div className={styles.menu}
    initial={{
      scale: 0,
      opacity: 0,
      height: 0,
      width: 0,
    }}
      animate={menuOpenControl}>

      <motion.div className={styles.left}
        initial='hidden'
        animate='visible'
        variants={menuBlocksVarient}
        transition={{ duration: 0.6 }}>

        <motion.ul variants={unOrderedList} animate='visible' initial='hidden'>
          <motion.li variants={listItem}>
            <Link aria-label="Home" onClick={() => toggleMenu()} href={'/'}>Home</Link>
          </motion.li>

          <motion.li variants={listItem}>
            <Link aria-label="About us" onClick={() => toggleMenu()} href={'/about'}>About Us</Link>
          </motion.li>

          <motion.li variants={listItem}>
            <Link aria-label="Our services" onClick={() => toggleMenu()} href={'/services'}>Our Services</Link>
          </motion.li>

          <motion.li variants={listItem}>
            <Link aria-label="Our blogs" onClick={() => toggleMenu()} href={'/blog'}>Blog</Link>
          </motion.li>

          <motion.li variants={listItem}>
            <Link aria-label="Contact us" onClick={() => toggleMenu()} href={'/contact'}>Contact Us</Link>
          </motion.li>

        </motion.ul>
      </motion.div>

      <motion.div className={styles.right}
        initial='hidden'
        animate='visible'
        variants={menuBlocksVarient}
        transition={{
          duration: 0.6
        }}>
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
      </motion.div>


      <div className="absolute top-5 md:top-6 right-10 md:right-16 text-2xl sm:text-3xl md:text-4xl text-[#ededed] md:text-[#333333] flex items-center" onClick={toggleMenu}>
        <CgClose className="h-full cursor-pointer" />
      </div>
    </motion.div>
  )
}

export default Menu