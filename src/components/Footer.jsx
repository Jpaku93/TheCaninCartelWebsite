import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className="footer-elite">
            <div className="footer-wrap">
                <div className="footer-main-grid">
                    <div className="col-visual">
                        <img src="/WhiteLogo.png" alt="Canine Cartel Logo" className="footer-giant-logo" />
                    </div>

                    <div className="col-brand">
                        <div className="brand-logo">
                            CANINE<b>CARTEL</b>
                        </div>
                        <p className="brand-desc">Results Driven Education for the Modern Canine Handlers. Peak Performance for every dog.</p>
                        <div className="brand-social">
                            <span className="material-symbols-outlined">photo_camera</span>
                            <span className="material-symbols-outlined">share</span>
                        </div>
                    </div>

                    <div className="col-links">
                        <h4>SITE MAP</h4>
                        <Link to="/programs">PROGRAMS</Link>
                        <Link to="/about">ABOUT</Link>
                        <Link to="/booking">BOOKING</Link>
                    </div>

                    <div className="col-contact">
                        <h4>CONTACT</h4>
                        <p><span className="material-symbols-outlined">call</span> 0428 077 817</p>
                        <p><span className="material-symbols-outlined">mail</span> caninecartel@gmail.com</p>
                    </div>

                    <div className="col-list">
                        <h4>GET STARTED</h4>
                        <p>Join the elite cohort of handlers and start your transformation today.</p>
                        <button className="mailing-list-btn" onClick={() => navigate('/booking')}>Secure Your Consult</button>
                    </div>
                </div>
                <div className="footer-bottom-line">
                    <p>© 2024 CANINE CARTEL. DESIGNED FOR PERFORMANCE.</p>
                </div>
            </div>

            <style>{`
                .footer-elite {
                    background: #101010;
                    color: white;
                    padding: 100px 40px 40px;
                }
                .footer-wrap {
                    max-width: 1100px;
                    margin: 0 auto;
                    padding: 0 40px;
                }
                .footer-main-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.5fr 1fr 1fr 2fr;
                    gap: 40px;
                    padding-bottom: 80px;
                    border-bottom: 1px solid rgba(255,255,255,0.05);
                    align-items: stretch;
                }
                @media (max-width: 991px) {
                    .footer-main-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
                    .col-visual { display: none; }
                }
                @media (max-width: 600px) {
                    .footer-main-grid { grid-template-columns: 1fr; }
                }

                .brand-logo { 
                    font-size: 20px; 
                    letter-spacing: 2px; 
                    margin-bottom: 24px; 
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .brand-logo b { color: #F59E0B; }
                .brand-desc { color: #666; font-size: 14px; line-height: 1.6; max-width: 320px; margin-bottom: 32px; }
                .brand-social { display: flex; gap: 20px; color: #666; }

                .col-visual { 
                    display: flex; 
                    align-items: center; 
                    justify-content: flex-start; 
                }
                .footer-giant-logo {
                    height: 100%;
                    max-height: 150px;
                    width: auto;
                    object-fit: contain;
                    opacity: 0.6;
                    transition: opacity 0.3s;
                }
                .footer-giant-logo:hover { opacity: 1; }

                .col-links, .col-contact, .col-list { display: flex; flex-direction: column; }
                h4 { color: #F59E0B; font-size: 11px; font-weight: 800; letter-spacing: 2px; margin-bottom: 32px; }
                
                .col-links a { color: #888; font-size: 13px; font-weight: 700; margin-bottom: 16px; text-decoration: none; transition: color 0.3s; }
                .col-links a:hover { color: #F59E0B; }

                .col-contact p { display: flex; items-center; gap: 12px; color: #666; font-size: 13px; font-weight: 700; margin-bottom: 16px; }
                .col-contact .material-symbols-outlined { color: #F59E0B; font-size: 18px; }

                .col-list p { color: #666; font-size: 13px; margin-bottom: 24px; }
                .mailing-list-btn {
                    background: #F59E0B; color: white; padding: 20px; border-radius: 50px;
                    font-weight: 900; font-size: 12px; letter-spacing: 2px; width: 100%;
                    text-transform: uppercase;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    border: none;
                    cursor: pointer;
                }
                .mailing-list-btn:hover {
                    background: #D97706;
                    transform: scale(1.02) translateY(-3px);
                    box-shadow: 0 15px 30px rgba(245, 158, 11, 0.3);
                }

                .footer-bottom-line { padding-top: 40px; text-align: center; }
                .footer-bottom-line p { color: #444; font-size: 10px; font-weight: 800; letter-spacing: 1.5px; }
            `}</style>
        </footer>
    );
};

export default Footer;
