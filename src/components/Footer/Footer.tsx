import React from 'react'
import styles from './Footer.module.css'
type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className={styles.footer}>
            <div className="text-center text-white p-2">
                Copyright &copy; 2022. All Rights Reserved By The Social Beez
            </div>
        </footer>
    )
}

export default Footer