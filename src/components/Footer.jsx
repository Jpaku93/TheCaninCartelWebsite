import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="footer-section">
            <div className="footer-container">
                {/* Column 1: Logo, Info and Social */}
                <div className="footer-column info-column">
                    <div className="brand-header">
                        <div className="footer-logo-box">
                            <img src="/WhiteLogo.png" alt="Canine Cartel Logo" className="footer-logo-img" />
                        </div>
                        <div className="brand-content">
                            <h2 className="brand-title">CANINE CARTEL</h2>
                            <p className="brand-desc">Dedicated to creating harmony between dogs and their humans through expert education across South Western Sydney.</p>
                        </div>
                    </div>

                    <div className="info-grid">
                        <div className="info-group">
                            <h4>CONTACT</h4>
                            <a href="https://www.google.com/maps/search/?api=1&query=South+Western+Sydney+NSW" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <span className="material-symbols-outlined">location_on</span> South Western Sydney, NSW
                            </a>
                            <a href="tel:0428077817" className="contact-link">
                                <span className="material-symbols-outlined">call</span> 0428 077 817
                            </a>
                            <a href="mailto:info@thecaninecartel.com.au" className="contact-link">
                                <span className="material-symbols-outlined">mail</span> info@thecaninecartel.com.au
                            </a>
                            <a href="https://instagram.com/the_caninecartel" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <span className="material-symbols-outlined">photo_camera</span> @the_caninecartel
                            </a>
                        </div>

                        <div className="links-group">
                            <h4>EXPLORE</h4>
                            <div className="quick-links">
                                <a href="#" onClick={(e) => { e.preventDefault(); navigate('/method'); }}>About Douglas</a>
                                <a href="#" onClick={(e) => { e.preventDefault(); navigate('/classes'); }}>Training Programs</a>
                                <a href="#" onClick={(e) => { e.preventDefault(); navigate('/classes', { state: { scrollTo: 'faq' } }); }}>FAQS</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Column 2: Form and Title */}
                <div className="footer-column form-column">
                    <div className="column-header">
                        <h2>Get in touch</h2>
                        <p>Book a slot for our next training cycle in SW Sydney. Let's work together to help your dog thrive.</p>
                    </div>

                    <form className="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="owner-name">OWNER NAME</label>
                                <input type="text" id="owner-name" name="owner-name" placeholder="Full Name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">PHONE NUMBER</label>
                                <input type="tel" id="phone" name="phone" placeholder="0400 000 000" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="dog-breed">DOG NAME/BREED</label>
                                <input type="text" id="dog-breed" name="dog-breed" placeholder="e.g. Beagle" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="behaviors">PRIMARY BEHAVIORS</label>
                            <textarea id="behaviors" name="behaviors" placeholder="Describe the behavior..." required></textarea>
                        </div>
                        <button type="submit" className="btn-submit">SEND MESSAGE</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="copyright">© 2024 CANINECARTEL. ALL RIGHTS RESERVED.</p>
            </div>

            <style>{`
                .footer-section {
                    padding: 100px 80px 60px;
                    background: #2D1F17; /* Darkest brown from palette */
                    color: white;
                }
                .footer-container {
                    max-width: 1300px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 1.1fr 1fr;
                    gap: 100px;
                }
                
                /* Column Styles */
                .footer-column {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                }
                
                .column-header h2 {
                    color: white;
                    font-size: 48px;
                    margin: 0 0 16px 0;
                }
                .column-header p {
                    color: rgba(255,255,255,0.7);
                    font-size: 16px;
                    margin-bottom: 40px;
                    max-width: 500px;
                }

                /* Form Styles */
                .contact-form {
                    padding: 0;
                    border: none;
                }
                .form-row {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                }
                .form-group {
                    margin-bottom: 24px;
                }
                .form-group label {
                    display: block;
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 1.5px;
                    margin-bottom: 10px;
                    color: var(--secondary-color);
                }
                .form-group input, .form-group textarea {
                    width: 100%;
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 12px;
                    padding: 16px;
                    color: white;
                    font-family: inherit;
                    transition: var(--transition);
                }
                .form-group input:focus, .form-group textarea:focus {
                    border-color: var(--secondary-color);
                    background: rgba(255,255,255,0.08);
                    outline: none;
                }
                .btn-submit {
                    width: 100%;
                    background: var(--secondary-color);
                    color: white;
                    padding: 20px;
                    border-radius: 12px;
                    font-weight: 800;
                    letter-spacing: 2px;
                    font-size: 13px;
                    margin-top: 8px;
                    transition: var(--transition);
                    box-shadow: 0 4px 15px rgba(200, 169, 126, 0.2);
                }
                .btn-submit:hover {
                    background: #d4b88e;
                    transform: translateY(-4px);
                    box-shadow: 0 12px 24px rgba(200, 169, 126, 0.4);
                }
                .btn-submit:active {
                    transform: scale(0.97) translateY(0);
                }

                @media (min-width: 992px) {
                    .info-column {
                        align-items: flex-start;
                        text-align: left;
                    }
                    .brand-header {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        text-align: left;
                        gap: 40px;
                        margin-bottom: 60px;
                    }
                    .info-group .contact-link {
                        justify-content: flex-start;
                    }
                    .footer-logo-box {
                        flex-shrink: 0;
                    }
                    .quick-links {
                        align-items: flex-start;
                    }
                    .brand-title {
                        font-size: 32px;
                    }
                }
                .footer-logo-img {
                    height: 120px;
                    width: auto;
                    display: block;
                }
                .logo-icon-dark {
                    background: var(--secondary-color);
                    color: white;
                    width: 44px;
                    height: 44px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 900;
                    font-size: 18px;
                }
                .brand-header {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    gap: 20px;
                    margin-bottom: 40px;
                }
                .brand-title {
                    font-size: 24px;
                    letter-spacing: 2px;
                    color: white;
                    margin-bottom: 8px;
                    font-family: 'Playfair Display', serif;
                }
                .brand-desc {
                    font-size: 14px;
                    line-height: 1.6;
                    color: rgba(255,255,255,0.6);
                    max-width: 450px;
                }

                .info-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 48px;
                }
                @media (min-width: 992px) {
                    .info-grid {
                        grid-template-columns: 1fr 1fr;
                        gap: 32px;
                    }
                }

                .info-grid h4 {
                    font-size: 11px;
                    letter-spacing: 2px;
                    color: var(--secondary-color);
                    margin-bottom: 20px;
                    font-weight: 800;
                }

                .info-group {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .contact-link {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    color: rgba(255,255,255,0.8);
                    font-weight: 600;
                    transition: var(--transition);
                    text-decoration: none;
                }
                .contact-link:hover {
                    color: var(--secondary-color);
                    padding-left: 8px;
                }
                .contact-link .material-symbols-outlined {
                    color: var(--secondary-color);
                }



                .quick-links {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .quick-links a {
                    color: rgba(255,255,255,0.8);
                    font-weight: 600;
                    transition: var(--transition);
                }
                .quick-links a:hover {
                    color: var(--secondary-color);
                    padding-left: 8px;
                }

                .footer-bottom {
                    margin-top: 80px;
                    padding-top: 32px;
                    border-top: 1px solid rgba(255,255,255,0.05);
                    text-align: center;
                }
                .copyright {
                    font-size: 10px;
                    letter-spacing: 1px;
                    color: rgba(255,255,255,0.3);
                }

                /* Mobile Optimization */
                @media (max-width: 991px) {
                    .footer-container {
                        grid-template-columns: 1fr;
                        gap: 60px;
                    }
                    .column-header h2 {
                        font-size: 36px;
                    }
                    .form-row {
                        grid-template-columns: 1fr;
                    }
                    .footer-section {
                        padding: 60px 20px;
                    }
                    .brand-desc {
                        margin-bottom: 40px;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
