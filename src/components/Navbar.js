import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';
import logo from '../images/ollin_black_500.png';

export default function Navbar(props) {
    const [active, setActive] = useState(false);
    console.log(active);
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
                <nav>

                </nav>
            </div>
        </div>
    )
}