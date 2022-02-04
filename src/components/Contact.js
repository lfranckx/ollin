import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
    const [messageSent, handleMessageSent] = useState(false);
    const [buttonState, handleButtonState] = useState('SEND MESSAGE')

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            message: '',
            reply_to: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().min(1, 'Name is too short').max(20, "20 maximum characters").required('* Required'),
            email: Yup.string().email("Invalid email").required("* Required"),
            phone: Yup.string().matches(phoneRegExp, `This doesn't look like a phone number`).required("* Required"),
            message: Yup.string().max(120, "120 maximum characters").required("* Required"),
            reply_to: Yup.string().min(2, 'Message is too short').email("Invalid email").required("* Required")
        }),
        onSubmit: (values) => {
            console.log('values', values);
            handleButtonState('SENDING MESSAGE')
            try {
                emailjs.send("service_a9og5hl", "template_9uozpwi", values, "user_4ZnH44kohKcJmQhnL2VGX").then(() => {
                    console.log('email sent');
                    handleButtonState('MESSAGE SENT');
                    handleMessageSent(true);
                })
            } catch {

            }
            
        }
    })

    return (
        <>
            <form id='contact-form' onSubmit={formik.handleSubmit}>
                <div className='flex'>
                    <div className="label">
                        <label htmlFor="name" id='name'></label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder='NAME'
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            autoComplete="off"
                        />
                    </div>
                    <div className={formik.errors.name ? 'error active' : 'error'}>
                        {formik.errors.name}
                    </div>

                    <div className="label">
                        <label htmlFor="email" id='email'></label>
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="EMAIL"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            autoComplete="off"
                        />
                    </div>
                    <div className={formik.errors.email ? 'error active' : 'error'}>
                        {formik.errors.email}
                    </div>

                    <div className="label">
                        <label htmlFor="phone" id='phone'></label>
                    </div>
                    <div>
                        <input
                            type="tel"
                            name="phone"
                            placeholder='PHONE'
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                        />
                    </div>
                    <div className={formik.errors.phone ? 'error active' : 'error'}>
                        {formik.errors.phone}
                    </div>

                    <div className="label">
                        <label htmlFor="message" id='message'></label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="message"
                            placeholder='MESSAGE'
                            onChange={formik.handleChange}
                            value={formik.values.message}
                            autoComplete="off"
                        />
                    </div>
                    <div className={formik.errors.message ? 'error active' : 'error'}>
                        {formik.errors.message}
                    </div>
                </div>

                <button disabled={formik.isSubmitting} className="btn" type="submit">
                    {buttonState}
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

export default Contact;