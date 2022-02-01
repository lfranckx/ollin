import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Contact() {
    const [messageSent, handleMessageSent] = useState(false);
    const serviceNum = process.env.REACT_APP_SERVICE_NUM;
    const templateNum = process.env.REACT_APP_TEMPLATE_NUM;
    const userId = process.env.REACT_APP_USER_ID;

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(serviceNum, templateNum, e.target, userId)
            .then(res => {
                handleMessageSent(true);
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <form id='contact-form' onSubmit={sendEmail}>
                <div className='flex'>
                    <div className="label">
                        <label htmlFor="name" id='name'></label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder='NAME'
                        />
                    </div>

                    <div className="label">
                        <label htmlFor="email" id='email'></label>
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="EMAIL"
                        />
                    </div>

                    <div className="label">
                        <label htmlFor="phone" id='phone'></label>
                    </div>
                    <div>
                        <input
                            type="tel"
                            name="phone"
                            placeholder='PHONE'
                        />
                    </div>

                    <div className="label">
                        <label htmlFor="message" id='message'></label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="message"
                            placeholder='MESSAGE'
                        />
                    </div>
                </div>

                <button className="btn" type="submit">
                    SEND
                </button>                        
            </form>

            <div className={ messageSent ? 'ty-wrap active' : 'ty-wrap' } >
                <p>
                    Thank you, we will be in touch shortly. In the meantime you can follow us <a href='https://www.instagram.com/ollinsalon/?hl=en' target='_blank' rel="noreferrer noopener">@ollinsalon</a>
                </p>
            </div>
        </>
    )
}