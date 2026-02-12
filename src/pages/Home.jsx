import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';


const Home = () => {
  const navigate = useNavigate();
  const testimonials = [
    { name: 'Sarah & Luna', breed: 'German Shepherd', text: 'Douglas transformed our reactive walks into peaceful strolls. His calm approach works wonders.' },
    { name: 'Mark & Buster', breed: 'Golden Retriever', text: 'The Puppy Preschool was the best investment we made. Buster is so well-behaved now!' },
    { name: 'Chloe & Max', breed: 'Border Collie', text: 'Advanced skills totally changed our off-lead life. Max’s recall is now 100% reliable.' },
  ];


  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="hero-tag">BUILT BY DOUGLAS DAVENPORT</span>
            <h1>Master Your <i>Pack</i> with Douglas Davenport.</h1>

            <div className="hero-actions">
              <button className="btn-primary" onClick={() => navigate('/booking')}>JOIN THE CARTEL</button>
              <button className="btn-secondary" onClick={() => navigate('/booking', { state: { selectedProgram: 'Behavioral Consultation' } })}>FREE CONSULTATION</button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Professional Training */}
      <section className="why-training">
        <h2 className="section-title">Why Professional Training?</h2>
        <p className="section-subtitle">Training isn't just about 'sit' and 'stay'; it's about communication and safety.</p>

        <div className="info-cards">
          <div className="info-card">
            <div className="card-icon">
              <span className="material-symbols-outlined">psychology</span>
            </div>
            <h3>Mental Stimulation</h3>
            <p>Keep your dog's mind sharp and prevent boredom-related behavioral issues through structured learning.</p>
          </div>

          <div className="info-card">
            <div className="card-icon">
              <span className="material-symbols-outlined">groups</span>
            </div>
            <h3>Social Confidence</h3>
            <p>Help your dog navigate the world with confidence, making walks and outings a joy for both of you.</p>
          </div>

          <div className="info-card">
            <div className="card-icon">
              <span className="material-symbols-outlined">favorite</span>
            </div>
            <h3>Stronger Bond</h3>
            <p>Build a foundation of trust and mutual respect that lasts a lifetime through positive reinforcement.</p>
          </div>
        </div>
      </section>



      {/* Program Call to Actions */}
      <section className="program-ctas">
        <h2 className="section-title">View Classes</h2>
        <p className="section-subtitle">
          From the critical discovery phase of puppyhood to the total freedom of advanced off-lead skills,
          Douglas provides a professional, results-driven path for every stage of your dog's development.
        </p>
        <div className="cta-grid">
          {/* Card 1: Consult */}
          <div className="cta-card" onClick={() => navigate('/booking', { state: { selectedProgram: 'Behavioral Consultation' } })}>
            <div className="cta-icon-box">
              <span className="material-symbols-outlined">psychology</span>
            </div>
            <div className="cta-content">
              <span>Not sure what your looking for?</span>
              <h3>BOOK CONSULT</h3>
            </div>
          </div>

          {/* Card 2: Private Training */}
          <div className="cta-card highlight" onClick={() => navigate('/booking', { state: { selectedProgram: 'One-on-One Training' } })}>
            <div className="cta-icon-box">
              <span className="material-symbols-outlined">person</span>
            </div>
            <div className="cta-content">
              <span>Drive out dog handling, for disobedient dogs</span>
              <h3>PRIVATE TRAINING</h3>
            </div>
          </div>

          {/* Card 3: Group Classes */}
          <div className="cta-card" onClick={() => navigate('/classes', { state: { scrollTo: 'programs' } })}>
            <div className="cta-icon-box">
              <span className="material-symbols-outlined">groups</span>
            </div>
            <div className="cta-content">
              <span>Puppy Preschool, Foundations, and Advanced Skills schedule.</span>
              <h3>EXPLORE GROUP CLASSES</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="featured-story">
        <div className="section-header">
          <h2 className="section-title">Featured Story</h2>
        </div>
        <div className="featured-card">
          <div className="comparison-images">
            <div className="comparison-item">
              <img src="/DogTrainer5.jpg" alt="Initial Assessment" className="grayscale" />
              <div className="img-label">INITIAL ASSESSMENT</div>
            </div>
            <div className="comparison-item">
              <img src="/DogTrainer5.jpg" alt="Verified Success" />
              <div className="img-label success">VERIFIED SUCCESS</div>
            </div>
          </div>
          <div className="story-details">
            <div className="story-rating">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined star-icon-filled">star</span>
              ))}
            </div>
            <h2 className="story-title">Gus & The Cartel Blueprint</h2>
            <p className="testimonial-text">
              "Gus was reactive and impossible to walk. After 4 weeks of Dougie's intensive coaching, he's a different dog. The precision and science-based approach actually works."
            </p>
            <div className="story-tags">
              <span className="story-tag-item">
                <span className="material-symbols-outlined">schedule</span>
                4 WEEKS
              </span>
              <span className="story-tag-item">
                <span className="material-symbols-outlined">verified</span>
                FOUNDATIONS CERTIFIED
              </span>
            </div>
          </div>
        </div>
      </section>



      {/* Testimonials */}
      <section className="testimonials">
        <h2 className="section-title">The Pack's Voice</h2>
        <div className="testimonials-scroll">
          {testimonials.map((item, idx) => (
            <div className="testimonial-card" key={idx}>
              <div className="stars">★★★★★</div>
              <p>"{item.text}"</p>
              <div className="client-info">
                <strong>{item.name}</strong>
                <span>{item.breed}</span>
              </div>
            </div>
          ))}
        </div>
      </section>






      <style>{`
        .home-page {
          overflow-x: hidden;
        }
        .hero {
          height: 480px;
          background-image: url('/DogTrainer5.jpg');
          background-size: cover;
          background-position: center;
          position: relative;
          border-radius: 40px;
          margin: 10px;
          overflow: hidden;
        }
        @media (min-width: 768px) {
          .hero {
            height: 600px;
            margin: 20px 0;
            border-radius: 60px;
          }
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6));
          display: flex;
          align-items: flex-end;
          padding: 32px;
        }
        @media (min-width: 768px) {
          .hero-overlay {
            padding: 80px;
          }
        }
        .hero-content {
          color: white;
          width: 100%;
        }
        @media (min-width: 768px) {
          .hero-content {
            max-width: 800px;
          }
        }
        .hero-tag {
          font-size: 10px;
          font-weight: 800;
          color: var(--secondary-color);
          letter-spacing: 2px;
          display: block;
          margin-bottom: 8px;
        }
        @media (min-width: 768px) {
          .hero-tag {
            font-size: 14px;
            margin-bottom: 16px;
          }
        }
        .hero h1 {
          color: white;
          font-size: 38px;
          line-height: 1.1;
          margin-bottom: 24px;
        }
        @media (min-width: 768px) {
          .hero h1 {
            font-size: 72px;
            margin-bottom: 40px;
          }
        }
        .hero h1 i {
          font-family: 'Playfair Display', serif;
          font-style: italic;
        }
        .quote-box {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: 20px;
          border-radius: 20px;
          margin-bottom: 32px;
          border-left: 4px solid var(--secondary-color);
        }
        .quote-box p {
          font-size: 14px;
          font-style: italic;
          line-height: 1.5;
        }
        .hero-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        @media (min-width: 768px) {
          .hero-actions {
            flex-direction: row;
            gap: 20px;
          }
          .hero-actions .btn-primary, .hero-actions .btn-secondary {
            width: auto;
            min-width: 240px;
          }
        }

        .info-cards {
          display: flex;
          gap: 16px;
          margin: 24px -16px 0;
          padding: 0 16px 20px;
          overflow-x: auto;
          scrollbar-width: none; /* Firefox */
          -webkit-overflow-scrolling: touch;
        }
        .info-cards::-webkit-scrollbar {
          display: none; /* Chrome/Safari/Webkit */
        }
        @media (min-width: 768px) {
          .info-cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
            margin: 40px 0;
            padding: 0;
            overflow-x: visible;
          }
        }
        .info-card {
          flex: 0 0 280px; /* Fixed width on mobile for horizontal scroll */
          background: linear-gradient(180deg, #FFFFFF 0%, #F9F0EA 100%);
          padding: 32px 24px;
          border-radius: 32px;
          border: 1px solid rgba(200, 169, 126, 0.15);
          box-shadow: 0 8px 20px rgba(45, 31, 23, 0.04);
          transition: var(--transition);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        @media (min-width: 768px) {
          .info-card {
            flex: 1;
            padding: 48px 32px;
            border-radius: 40px;
          }
        }
        .info-card:hover {
          transform: translateY(-4px);
          border-color: var(--secondary-color);
        }
        .card-icon {
          width: 44px;
          height: 44px;
          background: var(--primary-color);
          color: var(--secondary-color);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        @media (min-width: 768px) {
          .card-icon {
            width: 64px;
            height: 64px;
            border-radius: 20px;
            margin-bottom: 24px;
          }
          .card-icon .material-symbols-outlined {
            font-size: 32px;
          }
        }
        .card-icon .material-symbols-outlined {
          font-size: 24px;
          font-variation-settings: 'FILL' 1;
        }
        .info-card h3 {
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 12px;
          color: var(--primary-color);
          line-height: 1.2;
          font-family: 'Playfair Display', serif;
        }
        @media (min-width: 768px) {
          .info-card h3 {
            font-size: 24px;
            margin-bottom: 16px;
          }
        }
        .info-card p {
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.6;
        }
        @media (min-width: 768px) {
          .info-card p {
            font-size: 15px;
            line-height: 1.6;
          }
        }



        .programs-intro {
          margin-bottom: -20px;
        }
        /* Program CTAs */
        .program-ctas {
          margin-bottom: 40px;
        }
        @media (min-width: 768px) {
          .program-ctas {
            margin-bottom: 80px;
          }
        }
        .cta-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        @media (min-width: 768px) {
          .cta-grid {
            flex-direction: row;
            gap: 20px;
          }
          .cta-card {
            flex: 1;
            flex-direction: column;
            align-items: flex-start;
            padding: 32px;
            text-align: left;
          }
          .cta-icon-box {
            margin-bottom: 16px;
          }
          .cta-content span {
            font-size: 13px;
          }
          .cta-content h3 {
            font-size: 22px;
            margin-top: 8px;
          }
        }
        .cta-card {
          background: var(--card-bg);
          padding: 20px;
          border-radius: 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          cursor: pointer;
          transition: var(--transition);
          border: 1px solid #F0F2F5;
        }
        .cta-card:hover {
          transform: translateY(-8px);
          background: #3B2A21;
          color: white;
          border-color: #3B2A21;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        .cta-card:hover .cta-content span {
          color: rgba(255,255,255,0.7);
        }
        .cta-card:hover .cta-content h3 {
          color: white;
        }
        .cta-card:hover .cta-icon-box {
          background: rgba(255,255,255,0.15);
          color: white;
        }
        .cta-card.highlight {
          background: #523C31;
          color: white;
          border: none;
        }
        .cta-card.highlight:hover {
          background: #3B2A21;
        }
        .cta-icon-box {
          width: 50px;
          height: 50px;
          background: #F3EFEA;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--secondary-color);
          flex-shrink: 0;
        }
        .cta-card.highlight .cta-icon-box {
          background: rgba(255,255,255,0.1);
        }
        .cta-content {
          flex: 1;
        }
        .cta-content span {
          display: block;
          font-size: 11px;
          font-weight: 600;
          color: var(--text-muted);
          margin-bottom: 4px;
        }
        .cta-card.highlight .cta-content span {
          color: rgba(255,255,255,0.6);
        }
        .cta-content h3 {
          font-size: 18px;
          font-weight: 800;
          margin: 0;
        }
        .cta-card.highlight .cta-content h3 {
          color: white;
        }
        .cta-card .arrow {
          color: #DDD;
          transition: var(--transition);
        }
        .cta-card:hover .arrow {
          color: var(--secondary-color);
          transform: translateX(4px);
        }

        /* Testimonials */
        .testimonials {
          margin-bottom: 40px;
        }
        @media (min-width: 768px) {
          .testimonials {
            margin-bottom: 80px;
          }
          .testimonials-scroll {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
            overflow-x: visible;
            margin: 0;
            padding: 0;
          }
          .testimonial-card {
            min-width: 0;
          }
        }
        .testimonials-scroll {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          margin: 0 -16px;
          padding: 0 16px 20px;
          scrollbar-width: none;
        }
        .testimonial-card {
          background: #FFFBF5;
          padding: 24px;
          border-radius: 28px;
          min-width: 280px;
          border: 1px solid #FFEEDD;
        }
        .stars {
          color: #FFB800;
          font-size: 14px;
          margin-bottom: 16px;
        }
        .testimonial-card p {
          font-size: 14px;
          font-style: italic;
          color: var(--primary-color);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .client-info strong {
          display: block;
          font-size: 14px;
        }
        .client-info span {
          font-size: 12px;
          color: var(--text-muted);
        }




        /* Featured Story */
        .featured-story {
          padding: 0 0px;
          margin-bottom: 40px;
        }
        @media (min-width: 768px) {
          .featured-story {
            margin-bottom: 80px;
          }
        }
        .featured-card {
          background: #FAF3EC; /* Light cream background as seen in image */
          border-radius: 40px;
          overflow: hidden;
          box-shadow: var(--shadow);
          position: relative;
        }
        @media (min-width: 768px) {
          .featured-card {
            display: flex;
            height: 440px;
            border-radius: 60px;
          }
        }
        .comparison-images {
          display: flex;
          height: 280px;
          gap: 2px;
          flex: 1;
        }
        @media (min-width: 768px) {
          .comparison-images {
            height: 100%;
          }
        }
        .comparison-item {
          flex: 1;
          position: relative;
        }
        .comparison-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .comparison-item img.grayscale {
          filter: grayscale(1) brightness(0.8);
        }
        .img-label {
          position: absolute;
          bottom: 16px;
          left: 12px;
          background: rgba(0,0,0,0.6);
          color: white;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.5px;
        }
        .img-label.success {
          background: rgba(184, 158, 126, 0.9); /* Muted gold/tan */
          color: #2D1F17;
        }
        .story-details {
          flex: 1;
          padding: 40px 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        @media (min-width: 768px) {
          .story-details {
            padding: 40px 60px;
          }
        }
        .story-rating {
          margin-bottom: 16px;
        }
        .star-icon-filled {
          color: #A0A0A0; /* Muted gray stars as seen in image */
          font-variation-settings: 'FILL' 1;
          font-size: 20px;
          margin-right: 2px;
        }
        .story-title {
          font-size: 28px;
          margin-bottom: 20px;
          line-height: 1.1;
          color: #2D1F17;
          font-family: 'Playfair Display', serif;
        }
        @media (min-width: 768px) {
          .story-title {
            font-size: 42px;
          }
        }
        .testimonial-text {
          font-style: italic;
          color: #4A4A4A;
          line-height: 1.6;
          font-size: 14px;
          margin-bottom: 32px;
          background: #E8E8E8; /* Highlighted background from image */
          padding: 12px;
          border-radius: 4px;
        }
        @media (min-width: 768px) {
          .testimonial-text {
            font-size: 18px;
          }
        }
        .story-tags {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .story-tag-item {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #D8D8D8; /* Light gray tag background */
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 800;
          color: #4A4A4A;
        }
        .story-tag-item .material-symbols-outlined {
          font-size: 18px;
        }


      `}</style>
    </div>
  );
};

export default Home;
