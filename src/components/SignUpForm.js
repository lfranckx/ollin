import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const SignUpForm = () => {

    const [message, handleMessage] = useState('');

    const submitForm = async (values) => {
        const { email } = values;

        try {
            const payload = {
                email_address: email,
                id: 'ollin'
            };

            await axios.post("https://serene-journey-81970.herokuapp.com/", payload);
            handleMessage("Thank you for signing up. You'll be the first to know about everything Ollin.");

        } catch (error) {
            handleMessage(error.message);
        }
    }

    const SignUpSchema = Yup.object().shape({
        email: Yup.string().email("* Invalid email").required("* Required")
    })

    return (
        <>
            <Formik
                initialValues={{ email: ''}}
                validationSchema={SignUpSchema}
                onSubmit={submitForm}
            >
                <Form>
                    <label htmlFor='email' id='email'></label>
                    <Field name='email' placeholder='EMAIL' />
                    <ErrorMessage component="div" className='error' name='email' />
                    
                    <button 
                        className='btn' 
                        type='submit'>SEND</button>
                </Form>
            </Formik>
            {message && <div className='message'>{message}</div>}
        </>
    )
}

export default SignUpForm;