import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Booking = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.state?.tab || 'private');
  const navigate = useNavigate();

  useEffect(() => {
    // Load Google Calendar CSS
    const link = document.createElement('link');
    link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load Google Calendar JS
    const script = document.createElement('script');
    script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      initializeCalendars();
    };

    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  // Re-initialize when tab changes
  useEffect(() => {
    const timer = setTimeout(() => {
      initializeCalendars();
    }, 100);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const initializeCalendars = () => {
    if (!window.calendar || !window.calendar.schedulingButton) return;

    // Initialize Private Booking Button
    const privateContainer = document.getElementById('private-booking-container');
    if (privateContainer && activeTab === 'private') {
      privateContainer.innerHTML = '';
      window.calendar.schedulingButton.load({
        url: import.meta.env.VITE_GOOGLE_CALENDAR_PRIVATE_URL,
        color: '#F59E0B',
        label: 'Book an appointment',
        target: privateContainer,
      });
    }

    // Initialize Consultation Button
    const consultContainer = document.getElementById('consult-booking-container');
    if (consultContainer && activeTab === 'consultation') {
      consultContainer.innerHTML = '';
      window.calendar.schedulingButton.load({
        url: import.meta.env.VITE_GOOGLE_CALENDAR_CONSULT_URL,
        color: '#F59E0B',
        label: 'Book an appointment',
        target: consultContainer,
      });
    }
  };

  return (
    <div className="booking-page-v3">
      <div className="booking-wrapper">
        <header className="booking-header">
          <div className="badge">ELITE SCHEDULING</div>
          <h1>SECURE YOUR <br /><i>MOMENTUM.</i></h1>
          <p className="header-desc">Select your service type and secure your spot in the cartel. Performance begins with precision scheduling.</p>
        </header>

        <div className="booking-tabs">
          <button
            className={`tab-btn ${activeTab === 'classes' ? 'active' : ''}`}
            onClick={() => setActiveTab('classes')}
          >
            Classes
          </button>
          <button
            className={`tab-btn ${activeTab === 'private' ? 'active' : ''}`}
            onClick={() => setActiveTab('private')}
          >
            Private Bookings
          </button>
          <button
            className={`tab-btn ${activeTab === 'consultation' ? 'active' : ''}`}
            onClick={() => setActiveTab('consultation')}
          >
            Consultation
          </button>
        </div>

        <div className="tab-viewport">
          {activeTab === 'private' && (
            <div className="tab-pane animate-fade-up">
              <div className="portal-card">
                <div className="portal-visual">
                  <span className="material-symbols-outlined">event_available</span>
                </div>
                <h2>Private 1-on-1</h2>
                <p>Direct calendar access for personalized performance coaching. Tailored high-intensity training for you and your dog.</p>
                <div id="private-booking-container" className="google-btn-host"></div>
              </div>
            </div>
          )}

          {activeTab === 'classes' && (
            <div className="tab-pane animate-fade-up">
              <div className="portal-card placeholder-card">
                <div className="portal-visual">
                  <span className="material-symbols-outlined">groups</span>
                </div>
                <h2>Group Classes</h2>
                <p>Our group training sessions are scheduled seasonally. Check our programs page for upcoming intakes and enrollment dates.</p>
                <button className="btn-warm" onClick={() => navigate('/programs')}>View Programs</button>
              </div>
            </div>
          )}

          {activeTab === 'consultation' && (
            <div className="tab-pane animate-fade-up">
              <div className="portal-card">
                <div className="portal-visual">
                  <span className="material-symbols-outlined">quick_reference_all</span>
                </div>
                <h2>Initial Consultation</h2>
                <p>Mandatory for all new clients. A diagnostic session designed to audit your dog's foundation and map your customized path to mastery.</p>
                <div id="consult-booking-container" className="google-btn-host"></div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
                .booking-page-v3 {
                    min-height: 90vh;
                    background: #FFFFFF;
                    padding: 100px 40px;
                }
                .booking-wrapper {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .booking-header { margin-bottom: 60px; text-align: left; }
                .badge { 
                    display: inline-block; background: #FEF3C7; color: #D97706; 
                    padding: 8px 16px; border-radius: 50px; font-size: 10px; 
                    font-weight: 800; letter-spacing: 2px; margin-bottom: 24px;
                }
                .booking-header h1 { 
                    font-size: 80px; line-height: 0.85; letter-spacing: -4px; 
                    margin: 0 0 24px; color: #1a1a1a; 
                }
                .booking-header h1 i { color: #F59E0B; font-style: italic; }
                .header-desc { font-size: 20px; color: #666; max-width: 550px; line-height: 1.5; }

                .booking-tabs {
                    display: flex;
                    gap: 16px;
                    margin-bottom: 60px;
                    border-bottom: 1px solid #F0F0F0;
                    padding-bottom: 1px;
                }
                .tab-btn {
                    background: transparent;
                    border: none;
                    padding: 24px 0;
                    font-size: 14px;
                    font-weight: 800;
                    color: #9CA3AF;
                    cursor: pointer;
                    position: relative;
                    transition: color 0.3s;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }
                .tab-btn.active { color: #1a1a1a; }
                .tab-btn.active::after {
                    content: '';
                    position: absolute;
                    bottom: -1px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: #F59E0B;
                }
                .tab-btn:hover { color: #444; }

                .tab-pane { max-width: 800px; }
                .portal-card {
                    background: #1c1917;
                    padding: 80px 60px;
                    border-radius: 64px;
                    color: white;
                    box-shadow: 0 50px 100px rgba(0,0,0,0.15);
                }
                .portal-visual {
                    width: 80px; height: 80px; background: rgba(245, 158, 11, 0.1);
                    border-radius: 24px; display: flex; align-items: center; 
                    justify-content: center; margin-bottom: 40px;
                }
                .portal-visual span { font-size: 42px; color: #F59E0B; }
                
                .portal-card h2 { font-size: 42px; margin-bottom: 20px; letter-spacing: -1px; }
                .portal-card p { font-size: 18px; color: #888; line-height: 1.6; margin-bottom: 48px; }

                .google-btn-host { display: flex; justify-content: flex-start; min-height: 60px; }
                
                /* Google Booking Button Override */
                .google-btn-host button {
                    background: #F59E0B !important;
                    font-weight: 900 !important;
                    text-transform: uppercase !important;
                    letter-spacing: 2px !important;
                    padding: 22px 48px !important;
                    border-radius: 100px !important;
                    font-size: 13px !important;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
                    box-shadow: 0 15px 35px rgba(245, 158, 11, 0.3) !important;
                }
                .google-btn-host button:hover {
                    background: #D97706 !important;
                    transform: scale(1.05) translateY(-3px) !important;
                    box-shadow: 0 25px 50px rgba(217, 119, 6, 0.4) !important;
                }

                .btn-warm {
                    background: #F59E0B;
                    color: white;
                    border: none;
                    padding: 22px 48px;
                    border-radius: 100px;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    cursor: pointer;
                    transition: all 0.4s;
                }
                .btn-warm:hover {
                    background: #D97706;
                    transform: translateY(-3px);
                }

                .animate-fade-up {
                    animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @media (max-width: 768px) {
                    .booking-page-v3 { padding: 80px 20px; }
                    .booking-header h1 { font-size: 56px; }
                    .portal-card { padding: 40px; border-radius: 40px; }
                    .booking-tabs { overflow-x: auto; white-space: nowrap; }
                }
            `}</style>
    </div>
  );
};

export default Booking;
