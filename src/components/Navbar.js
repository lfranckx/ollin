import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.scss';

export default function Navbar(props) {
    const [active, setActive] = useState(false);

    return (
        <div id='nav-wrap'>
            <div 
                className='toggler'
                onClick={() => {setActive(!active)}}
            >
                <div 
                    className={`hamburger ${active ? 'active' : ''}`}
                >
                    <div className='line'></div>
                </div>
            </div>
            
            <div className={`menu ${active ? 'show' : ''}`}>
                <div className='logo-link-wrap'>
                    <Link activeClass="active" to="hero" spy={true} smooth={true} offset={0} duration={0}
                        onClick={() => {setActive(false)}}>
                        <h1><img src='https://ollin-salon.s3.us-east-2.amazonaws.com/ollin_black_500.png' alt='black logo' /></h1>
                    </Link>
                </div>

                <nav>
                    <ul>
                        <li>
                            <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={0}
                                onClick={() => {setActive(false)}}
                            >
                                ABOUT
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={0}
                                onClick={() => {setActive(false)}}
                            >
                                CONTACT
                            </Link>
                        </li>
                        <li>
                            <a href='https://johnnyramirez.com/booking/'
                                target={'_blank'}
                                rel="noreferrer noopener"
                            >
                                BOOKING
                            </a>
                        </li>
                        <li>
                            <Link activeClass="active" to="footer" spy={true} smooth={true} offset={0} duration={0}
                                onClick={() => {setActive(false)}}
                            >
                                SIGN UP
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className='locations'>
                    <ul>
                        <li>
                            <h3>Los Angeles  <a href='tel:424-204-9095' rel="noreferrer noopener">(424)204-9095</a></h3>
                        </li>
                        <li>
                            <h3>Miami <a href='tel:786-536-9090' rel="noreferrer noopener">(786)536-9090</a></h3>
                        </li>
                        <li>
                            <h3>Mexico City <span>Coming Soon</span></h3>
                        </li>
                    </ul>
                    <h3 className='note'>To book an appointment with one of our stylists here at Ollin salon, please call to schedule your service.</h3>
                </div>
            </div>
        </div>
    )
}