import React from 'react';
import { useHistory } from 'react-router';
import emailjs from 'emailjs-com';


export default function Contact() {
    const history = useHistory();
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_if54qk7', 'template_5f9yjza', e.target, 'user_4ZnH44kohKcJmQhnL2VGX')
            .then(res => {
                history.push('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <form id='contact-form' onSubmit={sendEmail}>
                <div className='flex'>
                    <div className="label">
                        <label htmlFor="name"></label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder='NAME'
                        />
                    </div>

                    <div className="label">
                        <label htmlFor="email"></label>
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="EMAIL"
                        />
                    </div>

                    <div className="label">
                        <label htmlFor="phone"></label>
                    </div>
                    <div>
                        <input
                            type="tel"
                            name="phone"
                            placeholder='PHONE'
                        />
                    </div>

                    <div className="label">
                        <label htmlFor="message"></label>
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
        </>
    )
}