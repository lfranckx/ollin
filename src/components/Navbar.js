import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';
import logo from '../images/ollin_black_500.png';

export default function Navbar(props) {
    const [active, setActive] = useState(false);
    const [location, setLocation] = useState("");

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
                <h1><img src={logo} alt='black logo' /></h1>
                <nav>
                    <ul>
                        <li><button>ABOUT</button></li>
                        <li><button>CONTACT</button></li>
                        <li><button>SIGN UP</button></li>
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