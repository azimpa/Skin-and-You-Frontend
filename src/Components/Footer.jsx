import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="get-in-touch">
                    <h2>GET IN TOUCH</h2>
                    <p>Let's Connect and Make Your Vision a Reality. Reach Out Today!</p>
                    <p>
                        <span className="icon">📍</span> Skin & You Clinic, 115 B Mittal Court, Nariman Point, Mumbai - 21.
                    </p>
                    <p>
                        <span className="icon">✉️</span> helpdesk@skinandyou.in
                    </p>
                    <p>
                        <span className="icon">📞</span> +91 99200 33331
                    </p>
                </div>

                <div className="quick-links">
                    <h2>QUICK LINKS</h2>
                    <ul>
                        <li>Treatments</li>
                        <li>Skin & Faq</li>
                        <li>Photogallery</li>
                        <li>Blogs</li>
                        <li>About us</li>
                        <li>How to Prepare for an appointment</li>
                    </ul>
                </div>

                <div className="newsletter">
                    <h2>NEWSLETTER</h2>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Your Email Address" />
                        <button>SIGN UP</button>
                    </div>
                    <h3>FOLLOW US</h3>
                    <div className="social-icons">
                        <span className="icon">f</span>
                        <span className="icon">t</span>
                        <span className="icon">▶</span>
                        <span className="icon">📷</span>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2024. All Rights Reserved.</p>
                <p>Designed by Asim P A</p>
            </div>
        </footer>
    );
};

export default Footer;