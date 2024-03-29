import React from 'react';
import '../styles/Footer.scss';
import SignUpForm from './SignUpForm';

export default function Footer() {
    return (
        <div id='footer'>
            <footer>
                <div className='flex-wrap'>
                    <div className='newsletter'>
                        <h3>NEWSLETTER</h3>
                        <SignUpForm />
                    </div>

                    <div className='social-links'>
                        <ul>
                            <li><a href='https://www.facebook.com/Livedincolor/' target="_blank" rel="noreferrer noopener"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href='https://www.instagram.com/johnnyramirez/' target="_blank" rel="noreferrer noopener"><i className="fab fa-instagram"></i></a></li>
                            <li><a href='https://www.pinterest.com/JohnnyRamirez1/' target="_blank" rel="noreferrer noopener"><i className="fab fa-pinterest-p"></i></a></li>
                            <li><a href='https://www.youtube.com/c/JohnnyRamirezColor' target="_blank" rel="noreferrer noopener"><i className="fab fa-youtube"></i></a></li>
                        </ul>

                        <div className='copyright-content'>
                            <small>Managed by <a href='https://socialarthouse.com' rel="noreferrer noopener" target='_blank'>Social Art House</a></small>
                            <small>Website designed and developed by <a href='https://lfxmedia.io' rel="noreferrer noopener" target='_blank'>LFX Media</a></small>
                        </div>
                    </div>
                </div>

                <div className='locations'>
                    <ul>
                        <li>
                            <h3>Ollin Los Angeles <a href='tel:424-204-9095' rel="noreferrer noopener">(424)204-9095</a></h3>
                        </li>
                        <li>
                            <h3>Ollin Miami <a href='tel:786-536-9090' rel="noreferrer noopener">(786)536-9090</a></h3>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}