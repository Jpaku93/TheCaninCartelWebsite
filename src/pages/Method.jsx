import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReadyToJoin from '../components/ReadyToJoin';


const Method = () => {
  const navigate = useNavigate();
  const graduateGallery = [
    { id: 1, type: 'PEAKY PUPS', title: 'Recall Hero' },
    { id: 2, type: 'FOUNDATIONS', title: 'Cooper' },
    { id: 3, type: 'ELITE SKILLS', title: 'Focus Work' },
    { id: 4, type: 'BEHAVIORAL', title: 'Leash Mastery' },
    { id: 5, type: 'PEAKY PUPS', title: 'Luna' },
    { id: 6, type: 'SOCIAL ELITE', title: 'Park Meet' },
    { id: 7, type: 'FOUNDATIONS', title: 'Precision' },
    { id: 8, type: 'ELITE SKILLS', title: 'Calmness' },
    { id: 9, type: 'SOCIAL ELITE', title: 'Buster' },
  ];
  return (
    <div className="method-page animate-fade-in">
      {/* Method Hero */}
      <section className="method-hero">
        <div className="profile-card">
          <div className="profile-img-container">
            <img src="/DogTrainer5.jpg" alt="Douglas Davenport" />
          </div>
          <div className="profile-info">
            <span className="profile-tag">THE FOUNDER</span>
            <h1>Douglas Davenport</h1>
            <p>Principal Behaviorist & Training Architect</p>
            <div className="quote-box">
              <p>"My mission is to bridge the communication gap between species, turning confusion into clarity and reactivity into reliability. We don't just train dogs; we empower guardians."</p>
            </div>

            <div className="profile-contact-bar">
              <a href="tel:0428077817" className="contact-item">
                <span className="material-symbols-outlined">call</span>
                <span>0428 077 817</span>
              </a>
              <div className="contact-item">
                <span className="material-symbols-outlined">location_on</span>
                <span>SW Sydney</span>
              </div>
              <a href="https://www.instagram.com/the_caninecartel/" target="_blank" rel="noreferrer" className="contact-item">
                <span className="material-symbols-outlined">photo_camera</span>
                <span>@the_caninecartel</span>
              </a>
              <a href="mailto:caninecartel@gmail.com" className="contact-item">
                <span className="material-symbols-outlined">mail</span>
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="method-description">
        <h2 className="section-title">THE CARTEL METHOD</h2>
        <div className="divider"></div>
        <p className="description-text">
          A premium blueprint for the modern guardian. We don't just train dogs; we cultivate elite partnerships through science and instinct.
        </p>
      </section>

      {/* Philosophy Cards */}
      <section className="philosophy-section">
        <div className="phil-card">
          <div className="phil-icon">
            <span className="material-symbols-outlined">verified</span>
          </div>
          <h3>Positive Reinforcement</h3>
          <p>The Davenport Protocol utilizes high-value motivation systems. We build confidence through success, ensuring your dog operates from a place of focus, not fear.</p>
        </div>

        <div className="phil-card">
          <div className="phil-icon">
            <span className="material-symbols-outlined">psychology_alt</span>
          </div>
          <h3>Holistic Approach</h3>
          <p>Analyzing the 360-degree lifestyle: genetics, nutrition, environmental stressors, and owner dynamics. True behavior change starts with the foundation.</p>
        </div>
      </section>

      {/* Credentials Grid */}
      <section className="credentials-section">
        <div className="credentials-container">
          <h2 className="credentials-title">Credentials & Mastery</h2>
          <p className="credentials-subtitle">DOUGLAS DAVENPORT PROFESSIONAL PROFILE</p>

          <div className="credentials-grid">
            <div className="cred-card">
              <span className="material-symbols-outlined">military_tech</span>
              <h4>ACCREDITED</h4>
              <p>CANINE BEHAVIORAL ASSOCIATION</p>
            </div>
            <div className="cred-card">
              <span className="material-symbols-outlined">workspace_premium</span>
              <h4>MASTERY</h4>
              <p>APPLIED DOG PSYCHOLOGY INSTITUTE</p>
            </div>
            <div className="cred-card">
              <span className="material-symbols-outlined">award_star</span>
              <h4>REGISTERED</h4>
              <p>PRO DOG TRAINERS ALLIANCE</p>
            </div>
            <div className="cred-card">
              <span className="material-symbols-outlined">shield_person</span>
              <h4>AFFILIATE</h4>
              <p>GLOBAL FORCE-FREE GUILD</p>
            </div>
          </div>

          <p className="quote">
            "Our standards are unyielding. We stay at the precipice of canine science to ensure every client receives elite-level transformation."
          </p>
        </div>
      </section>

      <section className="featured-transformation">
        <h2 className="section-title">FEATURED SUCCESS STORY</h2>
        <div className="transformation-card">
          <div className="transformation-images">
            <div className="image-box">
              <img src="/DogTrainer5.jpg" alt="Before" className="grayscale" />
              <div className="status-label">INITIAL ASSESSMENT</div>
            </div>
            <div className="image-box">
              <img src="/DogTrainer5.jpg" alt="After" />
              <div className="status-label accent">VERIFIED SUCCESS</div>
            </div>
          </div>
          <div className="transformation-details">
            <div className="star-rating">
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
            </div>
            <h3>Gus & The Cartel Blueprint</h3>
            <p className="transformation-text">
              "Gus was reactive and impossible to walk. After 4 weeks of Dougie's intensive coaching, he's a different dog. The precision and science-based approach actually works."
            </p>
            <div className="transformation-meta">
              <div className="meta-item">
                <span className="material-symbols-outlined">schedule</span>
                <span>4 WEEKS</span>
              </div>
              <div className="meta-item">
                <span className="material-symbols-outlined">award_star</span>
                <span>FOUNDATIONS CERTIFIED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certified Graduates Showcase */}
      <section className="profile-gallery">
        <div className="gallery-header">
          <div className="elite-badge">
            <span className="material-symbols-outlined">verified</span>
            <span>OFFICIALLY CERTIFIED BY DOUGLAS DAVENPORT</span>
          </div>
          <h2 className="section-title">THE GRADUATES</h2>
          <p className="section-subtitle">Behold the transformations of our elite canine recruits.</p>
        </div>

        <div className="graduates-grid">
          {graduateGallery.map((item) => (
            <div className="graduate-card" key={item.id}>
              <img src="/DogTrainer5.jpg" alt={item.title} />
              <div className="post-overlay">
                <div className="certification-badge">
                  <span className="material-symbols-outlined">workspace_premium</span>
                  <span>VERIFIED SUCCESS</span>
                </div>
                <div className="post-info">
                  <span className="tag">{item.type}</span>
                  <span className="name">{item.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-action">
          <button className="btn-secondary" onClick={() => navigate('/booking')}>ENROLL YOUR DOG IN THE CARTEL</button>
        </div>
      </section>



      <style>{`
        .method-hero {
          padding: 20px 0;
        }
        @media (min-width: 768px) {
          .method-hero {
            padding: 40px 0;
          }
        }
        .profile-card {
          background: #3B2A21;
          border-radius: 40px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        @media (min-width: 768px) {
          .profile-card {
            display: flex;
            height: 520px;
            border-radius: 60px;
          }
          .profile-img-container {
            flex: 1;
            height: 100% !important;
          }
          .profile-info {
            flex: 1;
            padding: 40px !important;
            text-align: left !important;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .profile-contact-bar {
            justify-content: flex-start !important;
          }
          .profile-info h1 {
            font-size: 64px !important;
          }
          .profile-info p {
            font-size: 20px !important;
          }
        }
        .profile-img-container {
          height: 380px;
          width: 100%;
          overflow: hidden;
        }
        .profile-img-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .profile-info {
          padding: 32px 20px;
          color: white;
          text-align: center;
        }
        .profile-contact-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 6px;
          color: rgba(255,255,255,0.8);
          font-size: 11px;
          font-weight: 600;
          transition: var(--transition);
        }
        .contact-item:hover {
          color: var(--secondary-color);
          transform: translateX(4px);
        }
        .contact-item:active {
          transform: scale(0.95);
        }
        .contact-item .material-symbols-outlined {
          font-size: 16px;
          color: var(--secondary-color);
        }
        .profile-tag {
          font-size: 10px;
          letter-spacing: 2px;
          color: var(--secondary-color);
          font-weight: 800;
          display: block;
          margin-bottom: 8px;
        }
        .profile-info h1 {
          color: white;
          font-size: 36px;
          margin-bottom: 8px;
        }
        .profile-info p {
          font-size: 14px;
          color: rgba(255,255,255,0.7);
          letter-spacing: 0.5px;
        }
        .quote-box {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          padding: 16px 20px;
          border-radius: 20px;
          margin: 24px 0 0;
          border-left: 3px solid var(--secondary-color);
          text-align: left;
        }
        .quote-box p {
          font-size: 13px !important;
          font-style: italic;
          line-height: 1.6 !important;
          color: rgba(255,255,255,0.9) !important;
          margin: 0 !important;
        }

        .method-description {
          text-align: center;
          padding: 60px 20px;
        }
        @media (min-width: 768px) {
          .method-description {
            padding: 60px 0;
          }
          .description-text {
            font-size: 24px !important;
            max-width: 800px !important;
          }
          .divider {
            width: 80px !important;
          }
        }
        .divider {
          width: 40px;
          height: 3px;
          background: var(--secondary-color);
          margin: 0 auto 32px;
        }
        .description-text {
          font-size: 15px;
          color: var(--text-muted);
          line-height: 1.8;
          max-width: 340px;
          margin: 0 auto;
        }

        .philosophy-section {
          padding: 0 10px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        @media (min-width: 768px) {
          .philosophy-section {
            flex-direction: row;
            gap: 32px;
          }
          .phil-card {
            flex: 1;
            padding: 40px !important;
            border-radius: 48px !important;
          }
          .phil-card h3 {
            font-size: 32px !important;
          }
          .phil-card p {
            font-size: 16px !important;
          }
        }
        .phil-card {
          background: var(--card-bg);
          padding: 32px;
          border-radius: 32px;
          text-align: center;
          box-shadow: var(--shadow);
        }
        .phil-icon {
          width: 50px;
          height: 50px;
          background: #F3EFEA;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          color: var(--secondary-color);
        }
        .phil-card h3 {
          font-size: 22px;
          margin-bottom: 12px;
        }
        .phil-card p {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.8;
        }

        .credentials-section {
          background: #3B2A21;
          margin: 60px 0;
          padding: 60px 16px;
          color: white;
          border-radius: 40px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          overflow: hidden;
        }
        @media (min-width: 768px) {
          .credentials-section {
            margin: 40px 0;
            padding: 40px 60px;
            border-radius: 60px;
          }
          .credentials-grid {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 32px !important;
          }
          .credentials-title {
            font-size: 48px !important;
          }
          .quote {
            font-size: 18px !important;
            max-width: 600px !important;
          }
        }
        .credentials-title {
          color: white;
          font-size: 28px;
          text-align: center;
          margin-bottom: 8px;
        }
        .credentials-subtitle {
          text-align: center;
          font-size: 10px;
          letter-spacing: 2px;
          color: var(--secondary-color);
          font-weight: 800;
          margin-bottom: 40px;
        }
        .credentials-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 40px;
        }
        .cred-card {
          background: rgba(255,255,255,0.05);
          padding: 24px 16px;
          border-radius: 20px;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .cred-card .material-symbols-outlined {
          color: var(--secondary-color);
          font-size: 28px;
          margin-bottom: 16px;
        }
        .cred-card h4 {
          color: white;
          font-size: 10px;
          letter-spacing: 1px;
          margin-bottom: 8px;
          font-family: inherit;
        }
        .cred-card p {
          font-size: 10px;
          font-weight: 800;
          line-height: 1.4;
          color: rgba(255,255,255,0.9);
        }
        .quote {
          text-align: center;
          font-size: 13px;
          font-style: italic;
          color: rgba(255,255,255,0.6);
          line-height: 1.8;
          max-width: 300px;
          margin: 0 auto;
        }

        .initiate-training {
          padding-bottom: 40px;
        }

        /* Graduates Gallery */
        .profile-gallery {
          padding: 80px 0;
          background: var(--bg-color);
          margin: 0 -16px;
          border-top: 1px solid rgba(0,0,0,0.05);
        }
        @media (min-width: 768px) {
          .profile-gallery {
            padding: 60px 0;
            margin: 0;
          }
          .graduates-grid {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 24px !important;
            max-width: 1200px !important;
          }
        }
        .gallery-header {
          text-align: center;
          margin-bottom: 32px;
          padding: 0 20px;
        }
        .elite-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 9px;
          font-weight: 800;
          color: var(--secondary-color);
          letter-spacing: 2px;
          margin-bottom: 20px;
        }
        .elite-badge .material-symbols-outlined {
          font-size: 18px;
        }
        .graduates-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4px;
          padding: 0 4px;
          margin-bottom: 40px;
        }
        .graduate-card {
          aspect-ratio: 1 / 1;
          position: relative;
          overflow: hidden;
          background: #3B2A21;
        }
        .graduate-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.2, 0, 0.2, 1);
          opacity: 0.9;
        }
        .graduate-card:hover img {
          transform: scale(1.05);
          opacity: 1;
        }
        .post-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          opacity: 0;
          transition: opacity 0.4s ease;
          color: white;
          text-align: center;
          padding-bottom: 12px;
        }
        .graduate-card:hover .post-overlay {
          opacity: 1;
        }
        .certification-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 8px;
          color: var(--secondary-color);
        }
        .certification-badge span {
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1px;
        }
        .certification-badge .material-symbols-outlined {
          font-size: 14px;
        }
        .post-info .tag {
          display: block;
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 1px;
          color: rgba(255,255,255,0.6);
          margin-bottom: 2px;
        }
        .post-info .name {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        .gallery-action {
          text-align: center;
          padding: 0 20px;
        }

        /* Featured Transformation */
        .featured-transformation {
          padding: 60px 10px;
        }
        @media (min-width: 768px) {
          .featured-transformation {
            padding: 60px 0;
          }
          .transformation-card {
            display: flex;
            height: 500px;
            border-radius: 60px !important;
          }
          .transformation-images {
            flex: 1;
            height: 100% !important;
          }
          .transformation-details {
            flex: 1;
            padding: 40px !important;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .transformation-details h3 {
            font-size: 48px !important;
          }
          .transformation-text {
            font-size: 20px !important;
          }
        }
        .transformation-card {
          background: var(--card-bg);
          border-radius: 40px;
          overflow: hidden;
          box-shadow: var(--shadow);
        }
        .transformation-images {
          display: flex;
          height: 220px;
          gap: 2px;
        }
        .image-box {
          flex: 1;
          position: relative;
        }
        .image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .image-box img.grayscale {
          filter: grayscale(1);
          opacity: 0.7;
        }
        .status-label {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background: rgba(0,0,0,0.6);
          color: white;
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1px;
        }
        .status-label.accent {
          background: var(--secondary-color);
        }
        .transformation-details {
          padding: 32px 24px;
        }
        .star-rating {
          margin-bottom: 12px;
          color: #FFB800;
        }
        .star-rating .material-symbols-outlined {
          font-size: 16px;
          font-variation-settings: 'FILL' 1;
        }
        .transformation-details h3 {
          font-size: 24px;
          margin-bottom: 12px;
        }
        .transformation-text {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.7;
          font-style: italic;
          margin-bottom: 24px;
        }
        .transformation-meta {
          display: flex;
          gap: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(0,0,0,0.05);
        }
        .meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          font-weight: 800;
          color: var(--primary-color);
        }
        .meta-item .material-symbols-outlined {
          font-size: 16px;
          color: var(--secondary-color);
        }
      `}</style>
    </div>
  );
};

export default Method;
