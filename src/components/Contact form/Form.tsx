"use client";
import React, { useEffect, useState } from 'react';
import styles from './Contact.module.css';
import { sendMessage } from '@/feature/action';
import { experimental_useFormStatus } from 'react-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

type Props = {}

const Form = (props: Props) => {
    const [contactData, setContactData] = useState({
        fullName: "",
        email: "",
        message: ""
    })
    const [shouldSubmit, setShouldSubmit] = useState(false)

    function handleChange(e: any) {
        setContactData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const checkFormShouldSubmit = (e?: any | undefined, setssValue?: string) => {
        if (!setssValue) {
            if ((e.target.name === 'fullName' && e.target.value.trim().length < 2) || contactData.email.trim().length < 6) {
                setShouldSubmit(false)
            } else if ((e.target.name === 'email' && e.target.value.trim().length < 6) || contactData.fullName.trim().length < 2) {
                setShouldSubmit(false)
            }
            else {
                setShouldSubmit(true)
            }
        } else {
            setShouldSubmit(false)
        }
    }

    const setToast = (message: string, success: boolean) => {
        success ?
            toast.success(message, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            }) : toast.error(message, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
    }

    return (
        <>
            <form
                action={async formData => {
                    let { fullName, email, message } = contactData

                    if (fullName.trim().length >= 2 && email.trim().length >= 6) {
                        let formResponse = await sendMessage(formData)
                        setToast(formResponse.message, formResponse.success)
                        setContactData({
                            fullName: "",
                            email: "",
                            message: ""
                        })
                        checkFormShouldSubmit(false, "false")
                        // console.log(formResponse)
                    }
                }}
                id="contact-form"
                className={`${styles.right} ${styles.contact_form}`}>

                <div className={styles.contact__inpgrid}>
                    <div className="mb-4">
                        {/* <!-- <label className="input-label" for="name">Full name</label> --> */}
                        <input value={contactData.fullName} onKeyUp={e => checkFormShouldSubmit(e)} onChange={e => handleChange(e)} className={`${styles.contact_input}`} type="text" name="fullName" id="name" placeholder="Full Name" required={true} autoComplete="on" />
                    </div>

                    <div className="mb-4">
                        {/* <!-- <label className="input-label" for="email">E-mail address</label> --> */}
                        <input value={contactData.email} onKeyUp={e => checkFormShouldSubmit(e)} onChange={e => handleChange(e)} className={`${styles.contact_input}`} type="email" name="email" id="email" placeholder="E-mail Address" required={true} autoComplete="on" />
                    </div>
                </div>

                <div className="mb-4">
                    {/* <!-- <textarea className="contact_input" name="message" id="message" placeholder=" "> --> */}
                    {/* <!-- <label className="input-label" for="message">Your message</label> --> */}
                    <textarea value={contactData.message} onKeyUp={e => checkFormShouldSubmit(e)} onChange={e => handleChange(e)} className={`${styles.contact_input}`} name="message" id="message" rows={6} placeholder="Your Message"></textarea>
                </div>

                <div className="submit">
                    <Button shouldSubmit={shouldSubmit} />
                </div>
            </form>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>

    )
}

const Button = ({ shouldSubmit }: { shouldSubmit: boolean }) => {
    const { pending } = experimental_useFormStatus();
    return (
        <button disabled={!shouldSubmit} type="submit" className={`btn btn-submit ${shouldSubmit ? 'grayscale-0' : 'grayscale cursor-not-allowed'}`}>{pending ? 'SENDING...' : 'SEND MESSAGE'}</button>
    )
}

export default Form