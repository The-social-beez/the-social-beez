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
                    <div className={`${styles.left} mb-4 lg:px-4 text-justify`}>
                        Don&apos;t hesitate to reach out to us! <br /><br />
                        We value your inquiries and are here to assist you. Whether you have questions, feedback, or need support, we&apos;re always available to help.<br /><br /> Feel free to contact us at any time; we look forward to hearing from you.
                    </div>
                    <Form />
                </div>
            </div>
        </section>
    )
}

export default ContactUs