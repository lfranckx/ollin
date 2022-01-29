import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.scss';
import logo from '../images/ollin_black_500.png';

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
                <Link activeClass="active" to="hero" spy={true} smooth={true} offset={0} duration={0}
                    onClick={() => {setActive(false)}}>
                    <h1><img src={logo} alt='black logo' /></h1>
                </Link>
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
                            <h3>Miami <span>(786)536-9090</span></h3>
                        </li>
                        <li>
                            <h3>Los Angeles <span>(424)204-9095</span></h3>
                        </li>
                        <li>
                            <h3>Mexico City <span>Coming Soon</span></h3>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}