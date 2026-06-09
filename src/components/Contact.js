import React, { useState, useRef, useEffect } from 'react';
import * as emailjs from 'emailjs-com';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
    const SITE_KEY = '6LdZHhUtAAAAAHSH5aAZ-8QNlQqs1s2xWs_r8d1Z';
    const [messageSuccess, toggleMessageSuccess] = useState(false);
    const [buttonState, handleButtonState] = useState('SEND');
    const [buttonDisabled, handleButtonDisabled] = useState(false);
    const [message, handleMessage] = useState('');

    const loadTime = useRef(Date.now());
    const [captchaToken, setCaptchaToken] = useState('');
    const recaptchaRef = useRef(null);
    

    useEffect(() => {
        if (!window.grecaptcha) {
            const script = document.createElement('script');
            script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
        }
        const interval = setInterval(() => {
            if (window.grecaptcha && window.grecaptcha.render && recaptchaRef.current && !recaptchaRef.current.hasChildNodes()) {
                window.grecaptcha.render(recaptchaRef.current, {
                    sitekey: SITE_KEY,
                    theme: 'dark',
                    callback: (token) => setCaptchaToken(token),
                    'expired-callback': () => setCaptchaToken('')
                });
                clearInterval(interval);
            }
        }, 300);
        return () => clearInterval(interval);
    }, []);

    const submitForm = (values) => {
        if (values.company) return;                          // honeypot
        if (Date.now() - loadTime.current < 3000) return;    // time-trap
        if (!captchaToken) {                                 // reCAPTCHA
            handleMessage('Please confirm you are not a robot.');
            return;
        }

        handleButtonState('SENDING')
        const newValues = {
            email: values.email,
            message: values.message,
            name: values.name,
            phone: values.phone,
            reply_to: values.email,
            'g-recaptcha-response': captchaToken
        }

        emailjs.send("service_a9og5hl", "template_9uozpwi", newValues, "user_4ZnH44kohKcJmQhnL2VGX")
            .then(res => {
                toggleMessageSuccess(true);
                handleButtonState('MESSAGE SENT');
                handleButtonDisabled(true);
            })
            .catch(error => {
                handleMessage(error.text || error.message || 'Something went wrong.');
            });
    }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const contactFormSchema = Yup.object().shape({
        name: Yup.string().min(2, '* Name is too short').max(20, "* 20 maximum characters").required('* Required'),
        email: Yup.string().email("* Invalid email").required("* Required"),
        phone: Yup.string().matches(phoneRegExp, `* This doesn't look like a phone number`).max(10, '* Phone number is too long').required("* Required"),
        message: Yup.string().min(2, "* Message is too short").max(1000, "* 1000 maximum characters").required("* Required"),
    })

    return (
        <>
            <Formik 
                initialValues={{ name: "", email: "", phone: "", message: "", company: "" }}
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

                        <div>
                            <p className='sms-disclaimer'>
                                By entering your phone number, you are agreeing to receive text messages from
                                us. Message frequency may vary. Message &amp; data rates may apply. Reply HELP
                                for more information. You can reply STOP to opt-out.
                            </p>
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

                        <Field
                            type="text"
                            name="company"
                            className="hp-field"
                            tabIndex="-1"
                            autoComplete="off"
                        />
                    </div>

                     <div className='recaptcha-wrap' ref={recaptchaRef}></div>

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