import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import video from '../images/moon.mp4';
import logo from '../images/ollin_cream_1000.png';
import '../styles/Homepage.scss';
import Contact from '../components/Contact';

export default function Homepage() {
    const [scrollPos, setScrollPos] = useState(0);
    const handleScroll = () => setScrollPos(window.pageYOffset);
  
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return(
        <>
            <header id='hero'>
                <video 
                    src={video}
                    autoPlay
                    loop
                    muted
                />

                <h1>
                    <img src={logo} alt='cream logo' />
                </h1>
            </header>
            <main id='main'>
                <div className='section-wrap' >
                    <section id='about' className='section' >
                        <div className={ scrollPos >= 500  ? 'content active' : 'content'}>
                            <h2>ABOUT</h2>
                            <p>
                                "Ollin" is a capturing word that translates to "movement" or "motion". Ollin represents the cyclical movement of 
                                nature with respect to the four directions. A fundamental concept of Aztec/Mexica cosmetology, a guide for everyday 
                                life and decisions. The objective is to constantly strive for balance, even when there is struggle.
                            </p>
                            <p>
                                Ollin salon is a creative space with the primary goal to help you embrace who you are and help you align with your inner 
                                potential. Ollin's story is a way of being and self-care that should be a way of life.
                            </p>

                            <div className='btn-wrap'>
                                <Link className='btn' activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={100}>Contact us</Link>
                            </div>
                        </div>
                    </section>
                    <section id='contact' className='section'>
                        <div className={scrollPos >= 1400  ? 'content active' : 'content'}>
                            <h2>CONTACT</h2>
                            <Contact />
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}