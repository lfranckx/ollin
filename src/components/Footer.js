import React from 'react';
import '../styles/Footer.scss';

export default function Footer() {
    return (
        <div id='footer'>
            <footer>
                <div className='flex-wrap'>
                    <div className='newsletter'>
                        <h3>NEWSLETTER</h3>
                        <form>
                            <div className="label">
                                <label htmlFor="email"></label>
                            </div>
                            <div className='input-wrap'>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="EMAIL"
                                />
                            </div>

                            <button className='btn'>SEND</button>
                        </form>
                    </div>

                    <div className='social-links'>
                        <ul>
                            <li><a href='https://www.facebook.com/Livedincolor/' target="_blank" rel="noreferrer noopener"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href='https://www.instagram.com/johnnyramirez/' target="_blank" rel="noreferrer noopener"><i className="fab fa-instagram"></i></a></li>
                            <li><a href='https://www.pinterest.com/JohnnyRamirez1/' target="_blank" rel="noreferrer noopener"><i className="fab fa-pinterest-p"></i></a></li>
                            <li><a href='https://www.youtube.com/c/JohnnyRamirezColor' target="_blank" rel="noreferrer noopener"><i className="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div className='locations'>
                    <ul>
                        <li>
                            <h3>Los Angeles <a href='tel:424-204-9095' rel="noreferrer noopener">(424)204-9095</a></h3>
                        </li>
                        <li>
                            <h3>Miami <a href='tel:786-536-9090' rel="noreferrer noopener">(786)536-9090</a></h3>
                        </li>
                        <li>
                            <h3>Mexico City <a>Coming Soon</a></h3>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}