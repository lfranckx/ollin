import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../styles/NotFound.scss';

export default function NotFound() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    return (
        <>
            <Helmet >
                <title>404 Not Found | Ollin Salon</title>
                <meta name='description' content='404 Page Not Found'/>
            </Helmet>
            <main>
                <div id='not-found-page'>
                    <div className='video-wrap' dangerouslySetInnerHTML={{
                        __html: `
                            <video autoplay loop muted playsinline >
                                <source src='https://ollin-salon.s3.us-east-2.amazonaws.com/moon.mp4'/>
                                Your browser does not support the video tag. I suggest you upgrade your browser.
                            </video>
                        `
                    }}/>
                    <h2><span>404</span>Sorry, the page you are looking for does not exist.</h2>
                    <div className='btn-wrap'>
                        <Link className="btn" to="/">Return Home</Link>
                    </div>
                </div>
            </main>
        </>
    )
}