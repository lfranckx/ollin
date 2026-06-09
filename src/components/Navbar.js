import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import '../styles/Navbar.scss';

export default function Navbar() {
    const [active, setActive] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    const navItem = (target, label) => {
        if (isHome) {
            return (
                <ScrollLink
                    activeClass="active" to={target} spy={true} smooth={true}
                    offset={0} duration={0}
                    onClick={() => setActive(false)}
                >
                    {label}
                </ScrollLink>
            );
        }
        return (
            <RouterLink
                to={`/?scrollTo=${target}`}
                onClick={() => setActive(false)}
            >
                {label}
            </RouterLink>
        );
    };

    return (
        <div id='nav-wrap'>
            <div
                className='toggler'
                onClick={() => { setActive(!active); }}
            >
                <div className={`hamburger ${active ? 'active' : ''}`}>
                    <div className='line'></div>
                </div>
            </div>

            <div className={`menu ${active ? 'show' : ''}`}>
                <div className='logo-link-wrap'>
                    {isHome ? (
                        <ScrollLink to="hero" spy={true} smooth={true} offset={0} duration={0}
                            onClick={() => setActive(false)}>
                            <h1><img src='https://ollin-salon.s3.us-east-2.amazonaws.com/ollin_black_500.png' alt='black logo' /></h1>
                        </ScrollLink>
                    ) : (
                        <RouterLink to="/" onClick={() => setActive(false)}>
                            <h1><img src='https://ollin-salon.s3.us-east-2.amazonaws.com/ollin_black_500.png' alt='black logo' /></h1>
                        </RouterLink>
                    )}
                </div>

                <nav>
                    <ul>
                        <li>{navItem('about', 'ABOUT')}</li>
                        <li>{navItem('contact', 'BOOK A STYLIST')}</li>
                        <li>
                            <a href='https://johnnyramirez.com/booking/' target='_blank' rel="noreferrer noopener">
                                BOOK WITH JOHNNY
                            </a>
                        </li>
                        <li>{navItem('footer', 'SIGN UP')}</li>
                    </ul>
                </nav>

                <div className='locations'>
                    <ul>
                        <li>
                            <h3>Ollin Los Angeles  <a href='tel:424-204-9095' rel="noreferrer noopener">(424)204-9095</a></h3>
                        </li>
                        <li>
                            <h3>Ollin Miami <a href='tel:786-536-9090' rel="noreferrer noopener">(786)536-9090</a></h3>
                        </li>
                    </ul>
                    <h3 className='note'>To book an appointment with one of our stylists here at Ollin salon, please call to schedule your service.</h3>
                </div>
            </div>
        </div>
    );
}