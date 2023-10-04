import React from 'react'
import styles from './Contact.module.css'

import Form from './Form'

type Props = {}

const ContactUs = (props: Props) => {
    return (
        <section className={`${styles.contact__section}`} id="contact-us">
            <div className="max-w-[1110px] mx-auto">
                <h2 className={`${styles.section_headers}`}><span className='text-[#fcb404]'>Contact</span> Us</h2>
                <div className={`${styles.contact__content}`}>
                    <div className={`${styles.left} mb-4`}>
                        Feel free to contact us. <br /><br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi libero, reprehenderit est ipsa
                        omnis eum quidem ratione tempore iusto eveniet.
                    </div>
                    <Form />
                </div>
            </div>
        </section>
    )
}

export default ContactUs