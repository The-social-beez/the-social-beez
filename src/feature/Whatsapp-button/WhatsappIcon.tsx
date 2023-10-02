import React from 'react'
import { BsWhatsapp } from "react-icons/bs";
import styles from './WhatsappIcon.module.css'

type Props = {}

function WhatsappIcon({ }: Props) {
  return (
    <div className={styles.whatsapp_icon}>
      <button>
        <a target="_blank" href="https://wa.me/919011570451">
          {/* <i className="fa-brands fa-whatsapp"></i> */}
          {/* <FontAwesomeIcon icon="fa-brands fa-whatsapp" /> */}
          <BsWhatsapp />
        </a>
      </button>
    </div>
  )
}

export default WhatsappIcon