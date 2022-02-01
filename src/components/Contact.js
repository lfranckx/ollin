import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Contact() {
    const [messageSent, handleMessageSent] = useState(false);
    const [errorMessage, handleErrorMessage] = useState("");
    const serviceNum = process.env.REACT_APP_SERVICE_NUM;
    const templateNum = process.env.REACT_APP_TEMPLATE_NUM;
    const userId = process.env.REACT_APP_USER_ID;

    // function sendEmail(e) {
    //     e.preventDefault();

    //     emailjs.sendForm(serviceNum, templateNum, e.target, userId)
    //         .then(res => {
    //             handleMessageSent(true);
    //         })
    //         .catch(err => console.log(err));
    // }

    const submitForm = (values) => {
        console.log(values);
        emailjs.sendForm(serviceNum, templateNum, values, userId)
            .then(res => {
                handleMessageSent(true);
            })
            .catch(err => console.log(err));
    }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const contactFormSchema = Yup.object().shape({
        name: Yup.string().min(2, "Name is too short").max(50, "Name is too long").required("Required"),
        email: Yup.string().email("Please use a valid email").required("Required"),
        phone: Yup.string().matches(phoneRegExp, "Sorry, that doesn't appear to be a phone number").required("Required"),
        message: Yup.string().min(2, "Sorry, your message seems a little short").max(200, "200 maximum characters allowed").required("Required")
    })

    return (
        <>
            {/* <form id='contact-form' onSubmit={sendEmail}>
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
            </form> */}
            <Formik 
                initialValues={{ name: "", email: "", phone: "", message: ""}} 
                validationSchema={contactFormSchema}
                onSubmit={submitForm}
            >
                <Form id='contact-form'>
                    <div className='flex'>
                        
                        <div className="label">
                            <label htmlFor="name" id='name'></label>
                        </div>
                        <div>
                            <Field
                                name="name"
                                placeholder='NAME'
                            />
                        </div>
                        <div>
                            <ErrorMessage component="div" className='error' name='name' />
                        </div>
                        
                        <div className="label">
                            <label htmlFor="email" id='email'></label>
                        </div>
                        <div>
                            <Field
                                name="email"
                                placeholder="EMAIL"
                            />
                        </div>
                        <div>
                            <ErrorMessage component="div" className='error' name='email' />
                        </div>

                        <div className="label">
                            <label htmlFor="phone" id='phone'></label>
                        </div>
                        <div>
                            <Field
                                name="phone"
                                placeholder='PHONE'
                            />
                        </div>
                        <div>
                            <ErrorMessage component="div" className='error' name='phone' />
                        </div>

                        <div className="label">
                            <label htmlFor="message" id='message'></label>
                        </div>
                        <div>
                            <Field
                                name="message"
                                placeholder='MESSAGE'
                            />
                        </div>
                        <div>
                            <ErrorMessage component="div" className='error' name='message' />
                        </div>
                    </div>

                    <button className="btn" type="submit">
                        SEND
                    </button>    
                </Form>
            </Formik>

            <div className={ messageSent ? 'ty-wrap active' : 'ty-wrap' } >
                <p>
                    Thank you, we will be in touch shortly. In the meantime you can follow us <a href='https://www.instagram.com/ollinsalon/?hl=en' target='_blank' rel="noreferrer noopener">@ollinsalon</a>
                </p>
            </div>
        </>
    )
}