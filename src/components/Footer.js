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
                            <div className='input-wrap'>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="EMAIL"
                                />
                            </div>

                            <button className='btn'>Send</button>
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
            </footer>
        </div>
    )
}