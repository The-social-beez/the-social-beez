import React from 'react'
import { BsWhatsapp } from "react-icons/bs";
import styles from './WhatsappIcon.module.css'
import Link from 'next/link';

type Props = {}

function WhatsappIcon({ }: Props) {
  return (
    <div className={styles.whatsapp_icon}>
      <Link aria-label="Contact us on whatsapp" target="_blank" href="https://wa.me/919011570451">
        <button id="whatsapp">
          {/* <i className="fa-brands fa-whatsapp"></i> */}
          {/* <FontAwesomeIcon icon="fa-brands fa-whatsapp" /> */}
          <BsWhatsapp />
        </button>
      </Link>
    </div>
  )
}

export default WhatsappIcon