import React from 'react';
import { useNavigate } from 'react-router-dom';

const Method = () => {
  const navigate = useNavigate();

  const methodology = [
    {
      icon: "thumb_up",
      title: "Positive Reinforcement",
      desc: "Focusing on reward-based systems to build confidence and desire to please. We set your dog up for success, ensuring learning comes from a place of focus, not fear."
    },
    {
      icon: "health_and_safety",
      title: "Holistic Approach",
      desc: "Training the mind, the body, and the spirit of your dog. We address social, behavioral, and environmental factors to ensure long-lasting, stable results."
    }
  ];

  const credentials = [
    { icon: "workspace_premium", label: "PRO DOG TRAINER ACCREDITATION" },
    { icon: "school", label: "CANINE BEHAVIORAL STUDIES" },
    { icon: "volunteer_activism", label: "REACTIVE DOG SPECIALIST" },
    { icon: "psychology", label: "ELITE PACK MANAGEMENT" }
  ];

  const graduates = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="method-page animate-fade-in">
      {/* Hero Profile Section */}
      <section className="profile-hero-section">
        <div className="profile-card-ultra interactive-card">
          <div className="profile-image-box">
            <img src="/DogTrainer5.jpg" alt="Douglas Davenport" />
            <div className="profile-image-shine"></div>
          </div>
          <div className="profile-text-content">
            <span className="profile-badge-gold">THE MASTER TRAINER</span>
            <h1>Douglas <br />Davenport</h1>
            <p className="profile-title-text">Principal Consultant & Training Architect</p>

            <div className="profile-quote-box glass-effect">
              <span className="quote-mark-icon material-symbols-outlined">format_quote</span>
              <p>"Our mission is to bridge the communication gap between human and canine. We don't just teach obedience; we build elite partnerships."</p>
            </div>

            <div className="profile-connect-row">
              <a href="tel:0428077817" className="connect-item glow-interact">
                <span className="material-symbols-outlined">call</span>
                <span>0428 077 817</span>
              </a>
              <a href="mailto:caninecartel@gmail.com" className="connect-item glow-interact">
                <span className="material-symbols-outlined">mail</span>
                <span>caninecartel@gmail.com</span>
              </a>
              <div className="connect-item glow-interact">
                <span className="material-symbols-outlined">alternate_email</span>
                <span>@thedavenport</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Cartel Method Section */}
      <section className="method-overview-section">
        <div className="method-header-box">
          <span className="method-label">THE PHILOSOPHY</span>
          <h2>THE CARTEL METHOD</h2>
          <p>A premium blueprint for the modern guardian. We don't just train dogs — we cultivate elite partnerships through science and instinct.</p>
        </div>
        <div className="method-cards-grid">
          {methodology.map((item, i) => (
            <div className="method-item-card interactive-card" key={i}>
              <div className="method-card-icon-glow">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="method-card-shine"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Credentials Section Highlights Index */}
      <section className="credentials-outer-box">
        <div className="dark-mastery-card interactive-card">
          <div className="mastery-inner">
            <span className="mastery-tag">MASTERY & CREDENTIALS</span>
            <h2>The Standard of Excellence</h2>
            <div className="mastery-grid-interactive">
              {credentials.map((item, i) => (
                <div className="mastery-item interactive-card" key={i}>
                  <div className="mastery-icon-box">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
            <p className="mastery-footer-text">Always advancing through the latest in canine psychology and behavioral science to ensure we provide the most effective training methods available.</p>
          </div>
        </div>
      </section>

      {/* Success Story Highlights */}
      <section className="featured-success-section">
        <div className="success-header-row">
          <h2>SUCCESS SPOTLIGHT</h2>
          <div className="success-divider-line"></div>
        </div>

        <div className="success-story-card-premium interactive-card">
          <div className="story-media-split">
            <div className="media-block before-after-interactive">
              <img src="/DogTrainer5.jpg" alt="Result" className="story-main-img" />
              <div className="label-overlay-left">THE PROBLEM</div>
              <div className="label-overlay-right">SOLUTION</div>
              <div className="interactive-slider-preview"></div>
            </div>
          </div>
          <div className="story-text-split">
            <div className="story-rating-gold">
              {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-symbols-outlined">star</span>)}
            </div>
            <h3>Gus & The Cartel Blueprint</h3>
            <p className="story-quote-italic">"My dog was totally unmanageable. After one cycle with Douglas we are now looking at a dog who is happy, calm and perfectly responsive. Truly a life-changing experience."</p>

            <div className="story-client-info">
              <div className="client-data">
                <span className="material-symbols-outlined">person</span>
                <strong>SARAH</strong>
              </div>
              <div className="client-data">
                <span className="material-symbols-outlined">pets</span>
                <strong>GOLDEN RETRIEVER</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Graduates Gallery Interactivity */}
      <section className="alumni-section">
        <div className="alumni-header-centered">
          <span className="alumni-small-tag">ELITE ALUMNI</span>
          <h2>THE GRADUATES</h2>
          <p>Behold the elite alumni of the Canine Cartel.</p>
        </div>
        <div className="alumni-grid-interactive">
          {graduates.map(i => (
            <div className="alumni-card interactive-card" key={i}>
              <img src="/DogTrainer5.jpg" alt={`Graduate ${i}`} />
              <div className="alumni-overlay-gradient"></div>
            </div>
          ))}
        </div>
        <div className="alumni-cta-footer">
          <button className="btn-warm-orange" onClick={() => navigate('/booking')}>
            ENROLL IN THE CARTEL
          </button>
        </div>
      </section>

      <style>{`
                .method-page { width: 100%; padding-bottom: 100px; }
                @media (max-width: 768px) { .method-page { padding: 0 20px 80px; } }

                /* Common Buttons */
                .btn-warm-orange {
                    background: #F59E0B;
                    color: white;
                    padding: 20px 48px;
                    border-radius: 50px;
                    font-weight: 900;
                    font-size: 14px;
                    letter-spacing: 2px;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    box-shadow: 0 15px 35px rgba(245, 158, 11, 0.4);
                    border: none;
                    cursor: pointer;
                    text-transform: uppercase;
                }
                .btn-warm-orange:hover {
                    background: #D97706;
                    transform: scale(1.05) translateY(-4px);
                    box-shadow: 0 25px 50px rgba(217, 119, 6, 0.5);
                }

                /* Profile Hero Highlights */
                .profile-hero-section { padding: 60px 0; }
                .profile-card-ultra {
                    background: #1C1917; border-radius: 80px; overflow: hidden;
                    display: grid; grid-template-columns: 1fr 1.2fr; color: white;
                    box-shadow: 0 50px 100px rgba(0,0,0,0.2);
                }
                @media (max-width: 991px) { .profile-card-ultra { grid-template-columns: 1fr; } }

                .profile-image-box { position: relative; height: 100%; min-height: 600px; }
                .profile-image-box img { width: 100%; height: 100%; object-fit: cover; }
                .profile-image-shine {
                    position: absolute; inset: 0;
                    background: linear-gradient(to right, rgba(255,255,255,0.1) 0%, transparent 100%);
                    pointer-events: none;
                }

                .profile-text-content { padding: 60px; display: flex; flex-direction: column; justify-content: center; }
                .profile-badge-gold { color: #F59E0B; font-weight: 800; font-size: 10px; letter-spacing: 4px; margin-bottom: 20px; display: block; }
                .profile-text-content h1 { font-size: 64px; color: white; line-height: 1.1; margin-bottom: 16px; letter-spacing: -1px; font-weight: 500; }
                .profile-title-text { font-size: 18px; color: #AAA; margin-bottom: 40px; font-weight: 300; letter-spacing: 0.5px; }

                .profile-quote-box {
                    padding: 40px; 
                    border-radius: 32px; 
                    border: 1px solid rgba(255,255,255,0.2);
                    margin-bottom: 56px; 
                    position: relative;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(20px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                }
                .quote-mark-icon { 
                    position: absolute; top: -20px; left: 40px; 
                    background: #F59E0B; color: white; padding: 12px; border-radius: 12px;
                    font-size: 24px; box-shadow: 0 10px 20px rgba(217,119,6,0.2);
                }
                .profile-quote-box p { font-style: italic; color: #EEE; line-height: 1.7; font-size: 18px; }
                @media (max-width: 768px) {
                    .profile-text-content { padding: 40px 30px; }
                    .profile-text-content h1 { font-size: 42px; letter-spacing: -1px; }
                    .profile-quote-box { padding: 24px; }
                    .profile-quote-box p { font-size: 15px; }
                    .connect-item { padding: 10px 16px; font-size: 11px; }
                }

                .profile-connect-row { display: flex; gap: 8px; flex-wrap: nowrap; }
                .connect-item {
                    display: flex; align-items: center; gap: 8px;
                    background: rgba(255,255,255,0.05); padding: 8px 14px;
                    border-radius: 12px; font-size: 10px; font-weight: 900;
                    color: #AAA; border: 1px solid rgba(255,255,255,0.05);
                    text-decoration: none;
                    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    white-space: nowrap;
                }
                .connect-item:hover {
                    background: rgba(245, 158, 11, 0.1);
                    border-color: #F59E0B;
                    color: white;
                    transform: translateY(-2px);
                }
                .connect-item .material-symbols-outlined { color: #F59E0B; font-size: 16px; }

                @media (max-width: 768px) {
                    .profile-connect-row { gap: 6px; overflow-x: auto; padding-bottom: 8px; }
                    .connect-item { padding: 6px 12px; font-size: 9px; }
                }

                /* Method Overview Highlights */
                .method-overview-section { padding: 60px 0; text-align: center; }
                .method-header-box { max-width: 800px; margin: 0 auto 60px; }
                .method-label { color: #F59E0B; font-weight: 800; font-size: 11px; letter-spacing: 4px; display: block; margin-bottom: 16px; }
                .method-header-box h2 { font-size: 44px; margin-bottom: 24px; letter-spacing: -1px; font-weight: 400; }
                .method-header-box p { color: #666; font-size: 17px; line-height: 1.7; font-weight: 300; }

                .method-cards-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
                @media (max-width: 768px) { .method-cards-grid { grid-template-columns: 1fr; } }
                
                .method-item-card {
                    background: white; padding: 48px; border-radius: 40px;
                    border: 1px solid #F0F0F0; text-align: left;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .method-item-card:hover {
                    box-shadow: 0 40px 80px rgba(0,0,0,0.08);
                    transform: translateY(-8px);
                }
                .method-card-icon-glow {
                    width: 64px; height: 64px; background: #FEF3C7; color: #F59E0B;
                    border-radius: 18px; display: flex; align-items: center; justify-content: center;
                    margin-bottom: 32px; transition: all 0.3s;
                }
                .method-item-card:hover .method-card-icon-glow { background: #F59E0B; color: white; transform: rotate(-8deg); }
                .method-item-card h3 { font-size: 24px; margin-bottom: 16px; font-weight: 500; }
                .method-item-card p { color: #555; font-size: 15px; line-height: 1.6; font-weight: 300; }

                /* Credentials Master Section */
                .credentials-outer-box { padding: 40px 0 80px; }
                .dark-mastery-card {
                    background: linear-gradient(135deg, #1C1917 0%, #2D2A28 100%);
                    border-radius: 80px; padding: 80px 40px; text-align: center;
                }
                .mastery-tag { color: #F59E0B; font-weight: 800; font-size: 10px; letter-spacing: 4px; display: block; margin-bottom: 20px; }
                .dark-mastery-card h2 { color: white; font-size: 44px; margin-bottom: 48px; letter-spacing: -1px; font-weight: 400; }
                
                .mastery-grid-interactive {
                    display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px;
                    max-width: 1100px; margin: 0 auto 80px;
                }
                @media (max-width: 991px) { .mastery-grid-interactive { grid-template-columns: 1fr 1fr; } }
                
                .masterway-item {
                    background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
                    padding: 32px 24px; border-radius: 24px; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .mastery-item:hover { 
                    background: rgba(245,158,11,0.1); 
                    border-color: rgba(245,158,11,0.3); 
                    transform: translateY(-8px);
                }
                .mastery-icon-box { margin-bottom: 16px; }
                .mastery-icon-box span { color: #F59E0B; font-size: 32px; }
                .mastery-item p { color: #AAA; font-size: 10px; font-weight: 700; letter-spacing: 1px; }
                .mastery-footer-text { max-width: 700px; margin: 0 auto; color: #555; font-size: 14px; line-height: 1.7; }

                /* Success Story Interactivity */
                .featured-success-section { padding: 40px 0 80px; }
                .success-header-row { display: flex; align-items: center; gap: 32px; margin-bottom: 40px; }
                .success-header-row h2 { font-size: 24px; letter-spacing: 2px; white-space: nowrap; }
                .success-divider-line { flex: 1; height: 1px; background: #EEE; }

                .success-story-card-premium {
                    background: white; border-radius: 72px; overflow: hidden;
                    display: grid; grid-template-columns: 1.1fr 1fr;
                    border: 1px solid #F0F0F0; box-shadow: 0 40px 80px rgba(0,0,0,0.05);
                }
                @media (max-width: 991px) { .success-story-card-premium { grid-template-columns: 1fr; } }

                .media-block { position: relative; height: 100%; min-height: 450px; overflow: hidden; }
                .story-main-img { width: 100%; height: 100%; object-fit: cover; }
                .label-overlay-left, .label-overlay-right {
                    position: absolute; bottom: 30px; 
                    padding: 10px 20px; border-radius: 12px; font-weight: 900; font-size: 11px;
                }
                .label-overlay-left { left: 30px; background: rgba(0,0,0,0.6); color: white; }
                .label-overlay-right { right: 30px; background: #F59E0B; color: white; box-shadow: 0 10px 20px rgba(245,158,11,0.3); }

                .story-text-split { padding: 48px; display: flex; flex-direction: column; justify-content: center; }
                .story-rating-gold { color: #F59E0B; display: flex; gap: 4px; margin-bottom: 20px; }
                .story-rating-gold span { font-size: 18px; font-variation-settings: 'FILL' 1; }
                .story-text-split h3 { font-size: 32px; margin-bottom: 20px; letter-spacing: -1px; font-weight: 500; }
                .story-quote-italic { font-style: italic; font-size: 17px; line-height: 1.6; color: #444; margin-bottom: 32px; }
                .story-client-info { display: flex; gap: 32px; border-top: 1px solid #F0F0F0; padding-top: 24px; }
                .client-data { display: flex; align-items: center; gap: 10px; color: #888; font-size: 11px; }
                .client-data strong { color: #1C1917; font-weight: 700; letter-spacing: 0.5px; }

                /* Alumni Gallery Highlights */
                .alumni-header-centered { text-align: center; margin-bottom: 60px; }
                .alumni-small-tag { color: #F59E0B; font-weight: 900; font-size: 10px; letter-spacing: 4px; display: block; margin-bottom: 20px; }
                .alumni-grid-interactive { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 60px; }
                @media (max-width: 768px) { .alumni-grid-interactive { grid-template-columns: 1fr 1fr; } }
                
                .alumni-card { height: 320px; border-radius: 32px; overflow: hidden; position: relative; }
                .alumni-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1); }
                .alumni-card:hover img { transform: scale(1.1) rotate(2deg); }
                
                .alumni-cta-footer { text-align: center; }
            `}</style>
    </div>
  );
};

export default Method;
