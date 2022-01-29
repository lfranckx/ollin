import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
    const [messageSent, handleMessageSent] = useState(false);

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_a9og5hl', 'template_9uozpwi', e.target, 'user_4ZnH44kohKcJmQhnL2VGX')
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

            {messageSent && (<div className={ messageSent ? 'ty-wrap active' : 'ty-wrap' } style={props}>
                <p>
                    Thank you, we will be in touch shortly. In the meantime you can follow us <a href='https://www.instagram.com/ollinsalon/?hl=en' target='_blank' rel="noreferrer noopener">@ollinsalon</a>
                </p>
            </div>)}
        </>
    )
}