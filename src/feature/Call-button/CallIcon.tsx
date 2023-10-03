import React from 'react'
import { FaPhone } from "react-icons/fa6";
import styles from './CallIcon.module.css'
import Link from 'next/link';

type Props = {}

function CallIcon({ }: Props) {
  return (
    <div className={styles.whatsapp_icon}>
      <Link target="_blank" href={'tel:+919011570451'}>
        <button>
          <FaPhone />
        </button>
      </Link>
    </div>
  )
}

export default CallIcon