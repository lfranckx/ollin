import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
    const [messageSent, handleMessageSent] = useState(false);
    const [buttonState, handleButtonState] = useState('SEND');
    const [errorMessage, handleErrorMessage] = useState('');
    
    const serviceNum = process.env.REACT_APP_SERVICE_NUM;
    const templateNum = process.env.REACT_APP_TEMPLATE_NUM;
    const userId = process.env.REACT_APP_USER_ID;
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    
    const submitForm = (values) => {
        console.log(values);
        handleButtonState('SENDING')
        try {
            emailjs.send(serviceNum, templateNum, values, userId)
            .then(res => {
                    handleMessageSent(true);
                    handleButtonState('MESSAGE SENT');
                }
            )
        } catch (error) {
            console.log(error.message);
            handleErrorMessage(error.message);
        }
    }

    const contactFormSchema = Yup.object().shape({
        name: Yup.string().min(1, 'Name is too short').max(20, "20 maximum characters").required('* Required'),
        email: Yup.string().email("Invalid email").required("* Required"),
        phone: Yup.string().matches(phoneRegExp, `This doesn't look like a phone number`).required("* Required"),
        message: Yup.string().max(120, "120 maximum characters").required("* Required"),
    })

    return (
        <>
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
                        {buttonState}
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