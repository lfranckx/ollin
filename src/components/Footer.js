import React from 'react';

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
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="EMAIL"
                                />
                            </div>
                        </form>
                    </div>
                    <div className='social-links'>
                        <ul>
                            <li><i className="fab fa-facebook-f"></i></li>
                            <li><i className="fab fa-instagram"></i></li>
                            <li><i className="fab fa-pinterest-p"></i></li>
                            <li><i className="fab fa-youtube"></i></li>
                        </ul>
                    </div>
                </div>
                <div className='locations'>
                    <ul>
                        <li>
                            <h3>Miami</h3>
                            <h4>(786)536-9090</h4>
                        </li>
                        <li>
                            <h3>Los Angeles</h3>
                            <h4>(424)204-9095</h4>
                        </li>
                        <li>
                            <h3>Mexico City</h3>
                            <h4>Coming Soon</h4>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}