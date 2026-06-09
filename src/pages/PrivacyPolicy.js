import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/PrivacyPolicy.scss';

export default function PrivacyPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Privacy Policy | Ollin Salon</title>
                <meta name='description' content='Privacy Policy for Ollin Salon describing how we collect, use, and share information.' />
            </Helmet>
            <main id='privacy-policy-page'>
                <div className='pp-hero'>
                    <h1>Privacy Policy</h1>
                </div>
                <div className='content'>
                    <div className='content-header'>
                        <h2 className='content-title'>Privacy Policy</h2>
                        <p className='last-updated'>Last Updated: June 09, 2026</p>
                    </div>

                    <p>
                        This Privacy Policy describes how Ollin Salon ("we," "us," or "our"), with locations
                        in Beverly Hills, Miami, and New York City, collects, uses, and shares information from
                        individuals who visit our website, use our services, or otherwise interact with us
                        ("Consumers"). We are committed to protecting your privacy and ensuring the security
                        of your Personally Identifiable Information (PII). Please read this Privacy Policy
                        carefully to understand how we handle your information.
                    </p>

                    <p>
                        By accessing or using our website or services, you consent to the practices described
                        in this Privacy Policy.
                    </p>

                    <h2>1. Information We Collect</h2>
                    <p>We collect the following types of information:</p>
                    <p>
                        <strong>Personal Information:</strong> When you visit our website or use our services,
                        we may collect personal information that you provide to us voluntarily. This may
                        include your name, email address, phone number, and any other information you choose
                        to provide.
                    </p>
                    <p className='highlight'>
                        We may use your Personal Data to contact you with newsletters, marketing, and/or
                        promotional materials that may be of interest to you. By entering your phone number,
                        you are agreeing to receive text messages from us. Message frequency may vary. Message
                        &amp; data rates may apply. Reply HELP for more information. You can reply STOP or
                        UNSUBSCRIBE to opt-out.
                    </p>
                    <p>
                        <strong>Automatically Collected Information:</strong> We may also collect certain
                        information automatically when you use our website, such as your IP address, browser
                        type, device type, and the pages you visit.
                    </p>
                    <p>
                        <strong>Cookies:</strong> We may use cookies and similar technologies to collect
                        information about your browsing behavior.
                    </p>

                    <h2>2. How We Use Your Information</h2>
                    <p>We use the information we collect for the following purposes:</p>
                    <p>
                        <strong>Providing Services:</strong> We may use your information to provide you with
                        our salon services and to respond to your inquiries.
                    </p>
                    <p>
                        <strong>Communication:</strong> We may use your contact information to send you
                        important updates and promotional materials. You can opt out of receiving promotional
                        communications at any time.
                    </p>
                    <p>
                        <strong>Website Improvement:</strong> We may use your information to analyze and
                        improve our website's functionality, content, and user experience.
                    </p>

                    <h2>3. Sharing Your Information</h2>
                    <p>
                        We do not share or sell your Personally Identifiable Information to third parties for
                        marketing purposes.
                    </p>
                    <p className='highlight'>
                        No mobile information or personally identifiable information will be shared with third
                        parties/affiliates for marketing/promotional purposes.
                    </p>
                    <p>However, we may share your information in the following circumstances:</p>
                    <p>
                        <strong>Business Operations:</strong> We may share your information with third-party
                        service providers who assist us in performing essential business functions, such as
                        payment processing, customer support, and website maintenance.
                    </p>
                    <p>
                        <strong>Compliance with Legal Requirements:</strong> We may disclose your information
                        when required by law or to comply with legal processes.
                    </p>
                    <p>
                        <strong>Sale or Merger:</strong> In the event of a sale, merger, or acquisition of our
                        business, we may transfer your information to the acquiring company, but your data
                        will continue to be protected in accordance with this Privacy Policy.
                    </p>

                    <h2>4. Your Choices and Rights</h2>
                    <p>You have the following rights regarding your information:</p>
                    <p>
                        <strong>Access:</strong> You can request access to the personal information we hold
                        about you.
                    </p>
                    <p>
                        <strong>Rectification:</strong> You can request corrections to inaccuracies in your
                        personal information.
                    </p>
                    <p>
                        <strong>Deletion:</strong> You can request the deletion of your personal information,
                        subject to legal obligations.
                    </p>
                    <p>
                        <strong>Data Portability:</strong> You can request a copy of your personal information
                        in a structured, machine-readable format.
                    </p>

                    <h2>5. Changes to this Privacy Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time to reflect changes in our
                        practices or for other operational, legal, or regulatory reasons. We will post the
                        updated Privacy Policy on our website, and the "Last Updated" date at the top of this
                        page will be revised accordingly. We encourage you to review this Privacy Policy
                        periodically to stay informed about how we are protecting your information.
                    </p>

                    <h2>6. Contact Us</h2>
                    <p>
                        If you have any questions or concerns about this Privacy Policy or our data practices,
                        please contact us at:
                    </p>
                    <p className='contact-block'>
                        <strong>Ollin Salon</strong><br />
                        Email: <a href='mailto:info@ollinsalon.com'>info@ollinsalon.com</a><br /><br />
                        <strong>Beverly Hills</strong><br />
                        8912 W Olympic Blvd, Beverly Hills, CA 90211<br />
                        <a href='tel:424-204-9095'>(424) 204-9095</a><br /><br />
                        <strong>Miami</strong><br />
                        7207 SW 42nd St, Miami, FL 33155<br />
                        <a href='tel:786-536-9090'>(786) 536-9090</a>
                    </p>

                    <div className='tcr-resources'>
                        <div className='tcr-links'>
                            <p><em>For additional information about TCR compliance, please check out the links below:</em></p>
                            <p>
                                <a href='https://support.boulevard.io/en/articles/8319345-tcr-registration-checklist' target='_blank' rel='noreferrer noopener'>Boulevard Support Article</a>
                            </p>
                            <p>
                                <a href='https://www.ctia.org/the-wireless-industry/industry-commitments/messaging-interoperability-sms-mms' target='_blank' rel='noreferrer noopener'>CTIA Messaging Principles &amp; Best Practices</a>
                            </p>
                        </div>
                        <div className='tcr-video'>
                            <iframe
                                src='https://www.youtube.com/embed/hi3A0dBXdEo'
                                title='TCR Registration'
                                frameBorder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}