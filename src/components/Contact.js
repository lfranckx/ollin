import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
    const [messageSuccess, toggleMessageSuccess] = useState(false);
    const [buttonState, handleButtonState] = useState('SEND');
    const [buttonDisabled, handleButtonDisabled] = useState(false);
    const [message, handleMessage] = useState('');
        
    const submitForm = (values) => {
        handleButtonState('SENDING')
        const newValues = {
            email: values.email,
            message: values.message,
            name: values.name,
            phone: values.phone,
            reply_to: values.email
        }

        try {
            emailjs.send("service_a9og5hl", "template_9uozpwi", newValues, "user_4ZnH44kohKcJmQhnL2VGX")
            .then(res => {
                    toggleMessageSuccess(true);
                    handleButtonState('MESSAGE SENT');
                    handleButtonDisabled(true);
                }
            )
        } catch (error) {
            handleMessage(error.message);
        }
    }
    
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const contactFormSchema = Yup.object().shape({
        name: Yup.string().min(2, '* Name is too short').max(20, "* 20 maximum characters").required('* Required'),
        email: Yup.string().email("* Invalid email").required("* Required"),
        phone: Yup.string().matches(phoneRegExp, `* This doesn't look like a phone number`).max(10, '* Phone number is too long').required("* Required"),
        message: Yup.string().min(2, "* Message is too short").max(300, "* 300 maximum characters").required("* Required"),
    })

    return (
        <>
            <Formik 
                initialValues={{ name: "", email: "", phone: "", message: "" }} 
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

                    <button className="btn" type="submit" disabled={buttonDisabled}>
                        {buttonState}
                    </button>    
                </Form>
            </Formik>

            {message && <div className='message'>{message}</div>}

            <div className={ messageSuccess ? 'ty-wrap active' : 'ty-wrap' } >
                <p>
                    Thank you, we will be in touch shortly. In the meantime you can follow us <a href='https://www.instagram.com/ollinsalon/?hl=en' target='_blank' rel="noreferrer noopener">@ollinsalon</a>
                </p>
            </div>
        </>
    )
}

export default Contact;