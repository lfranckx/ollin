import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignUpForm = () => {

    const submitForm = (values) => {
        console.log(values);
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
                        // disabled={!Formik.invalid || !Formik.dirty}
                        className='btn' 
                        type='submit'>SEND</button>
                </Form>
            </Formik>
        </>
    )
}

export default SignUpForm;