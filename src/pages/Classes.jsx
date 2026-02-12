import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PROGRAMS } from '../constants/programs';
import ReadyToJoin from '../components/ReadyToJoin';


const Classes = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo === 'programs') {
      const element = document.querySelector('.classes-header');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.state && location.state.scrollTo === 'faq') {
      const element = document.getElementById('faq');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const focuses = [
    {
      id: 'leash',
      title: 'Leash Pulling',
      subtitle: 'Master the walk without the strain.',
      icon: 'link',
      color: '#FFEEDD',
      how: 'We use positive-pressure release and choice-based leading to teach your dog that a loose lead is the most rewarding way to travel.'
    },
    {
      id: 'barking',
      title: 'Excessive Barking',
      subtitle: 'Quiet the noise with calm communication.',
      icon: 'campaign',
      color: '#E0EEFF',
      how: 'By identifying the root trigger (boredom, fear, or alert), we teach a "Quiet" cue paired with high-value redirection and focus games.'
    },
    {
      id: 'anxiety',
      title: 'Separation Anxiety',
      subtitle: 'Build confidence for when you\'re away.',
      icon: 'heart_broken',
      color: '#FFEEEE',
      how: 'Gradual desensitization and "departure cue" neutralisation help your dog feel safe and relaxed while alone, building independent confidence.'
    },
    {
      id: 'reactivity',
      title: 'Reactivity',
      subtitle: 'Safely manage and reduce lunging behaviors.',
      icon: 'security',
      color: '#F0E5FF',
      how: 'We use counter-conditioning to change your dog\'s emotional response to triggers from fear/frustration to calm anticipation of a reward.'
    },
  ];

  const additionalFocuses = [
    {
      id: 'recall',
      title: 'Elite Recall',
      subtitle: 'A reliable return even under pressure.',
      icon: 'call',
      color: '#DDF9FF',
      how: 'Building a "Whistle-Stop" response and high-value chase games ensures your dog finds returning to you more exciting than any distraction.'
    },
    {
      id: 'greetings',
      title: 'Calm Greetings',
      subtitle: 'Polite manners with visitors and strangers.',
      icon: 'handshake',
      color: '#E9FFDD',
      how: 'Teaching "Four on the Floor" and a "Place" cue to manage excitement and prevent jumping when guests arrive at your home.'
    },
    {
      id: 'impulse',
      title: 'Impulse Control',
      subtitle: 'The art of waiting and choosing focus.',
      icon: 'timer',
      color: '#FFF5DD',
      how: 'Using "Zen" exercises and delayed gratification to help your dog develop a "Think-First" mindset in high-arousal situations.'
    },
    {
      id: 'resource',
      title: 'Resource Safety',
      subtitle: 'Building trust around food and toys.',
      icon: 'lock_open',
      color: '#F3E0FF',
      how: 'Trade-up games and preventive guarding protocols build a foundation of trust and safety around valued items and food.'
    },
  ];

  const [showAllFocus, setShowAllFocus] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const [expandedPrograms, setExpandedPrograms] = useState([]);

  const toggleProgram = (id) => {
    setExpandedPrograms(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="classes-page animate-fade-in">
      {/* Header */}
      <section className="classes-header">
        <h1 className="section-title">Training Programs</h1>
        <p className="section-subtitle">Join a program that matches your dog's current skills and age.</p>
      </section>

      {/* Programs List - Horizontal Scroll */}
      <div className="programs-scroll-container">
        <div className="programs-carousel">
          {PROGRAMS.map((program, idx) => (
            <div className="program-card" key={idx}>
              <div className="program-img-container">
                <img src="/DogTrainer5.jpg" alt={program.title} />
                <div className="program-badge-stack">
                  <span className="age-tag">{program.age}</span>
                  <span className="level-tag">{program.subtitle}</span>
                </div>
              </div>
              <div className="program-details">
                <h2>{program.title}</h2>
                <p>{program.desc}</p>
                <ul className="perks-list">
                  {program.perks.map((perk, pIdx) => (
                    <li key={pIdx}>
                      <span className="material-symbols-outlined perk-check">check_circle</span>
                      {perk}
                    </li>
                  ))}
                </ul>
                <button
                  className="btn-outline"
                  onClick={() => navigate('/booking', { state: { selectedProgram: program.title } })}
                >
                  {program.btnText}
                </button>
                <button
                  className={`learn-more-btn ${expandedPrograms.includes(program.id) ? 'active' : ''}`}
                  onClick={() => toggleProgram(program.id)}
                >
                  {expandedPrograms.includes(program.id) ? 'SHOW LESS' : 'LEARN MORE'}
                  <span className="material-symbols-outlined">
                    {expandedPrograms.includes(program.id) ? 'expand_less' : 'info'}
                  </span>
                </button>

                {expandedPrograms.includes(program.id) && (
                  <div className="card-curriculum-expansion animate-fade-in">
                    <div className="curr-divider"></div>
                    <p className="curr-intro">{program.curriculumDesc}</p>
                    <div className="curr-items-grid">
                      {program.curriculumItems.map((item, i) => (
                        <div className="curr-item-inline" key={i}>
                          <strong>{item.label}</strong>
                          <p>{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Standards Section */}
      <section className="standards-section">
        <div className="standards-card">
          <div className="standards-header">
            <h2 className="section-title white">The Cartel Blueprint</h2>
            <p className="section-subtitle white-text">A science-based methodology refined over a decade of behavioral mastery.</p>
          </div>
          <div className="standards-grid">
            <div className="standard-item">
              <span className="material-symbols-outlined">verified</span>
              <h4>Precision Results</h4>
              <p>We don't just train; we transform through the Davenport Protocol.</p>
            </div>
            <div className="standard-item">
              <span className="material-symbols-outlined">psychology</span>
              <h4>Elite Partnership</h4>
              <p>Building a bridge of communication between guardian and canine.</p>
            </div>
            <div className="standard-item">
              <span className="material-symbols-outlined">group</span>
              <h4>Small Class Sizes</h4>
              <p>Ensuring you get individual feedback during every exercise.</p>
            </div>
            <div className="standard-item">
              <span className="material-symbols-outlined">description</span>
              <h4>Homework & Support</h4>
              <p>Weekly goals provided to ensure consistent practice at home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Focus List */}
      <section className="focus-section">
        <div className="focus-header">
          <h2 className="section-title">Training Focus</h2>
          <button className="see-all" onClick={() => setShowAllFocus(!showAllFocus)}>
            {showAllFocus ? 'See less' : 'See all'}
          </button>
        </div>

        <div className="focus-list">
          {focuses.map((item) => (
            <div
              className={`focus-item ${expandedId === item.id ? 'expanded' : ''}`}
              key={item.id}
              onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
            >
              <div className="focus-main">
                <div className="focus-icon" style={{ backgroundColor: item.color }}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div className="focus-text">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
                <span className="material-symbols-outlined arrow">
                  {expandedId === item.id ? 'expand_less' : 'expand_more'}
                </span>
              </div>
              {expandedId === item.id && (
                <div className="focus-how animate-fade-in">
                  <div className="how-tag">METHODOLOGY</div>
                  <p>{item.how}</p>
                </div>
              )}
            </div>
          ))}

          {showAllFocus && additionalFocuses.map((item, idx) => (
            <div
              className={`focus-item animate-fade-in ${expandedId === item.id ? 'expanded' : ''}`}
              key={item.id}
              style={{ animationDelay: `${idx * 0.1}s` }}
              onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
            >
              <div className="focus-main">
                <div className="focus-icon" style={{ backgroundColor: item.color }}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div className="focus-text">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
                <span className="material-symbols-outlined arrow">
                  {expandedId === item.id ? 'expand_less' : 'expand_more'}
                </span>
              </div>
              {expandedId === item.id && (
                <div className="focus-how animate-fade-in">
                  <div className="how-tag">METHODOLOGY</div>
                  <p>{item.how}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">To ensure you and your dog have the best possible experience, we have compiled answers to the most common questions.</p>

        <div className="faq-list">
          <div className="faq-item">
            <h3>What if I miss a class?</h3>
            <p>Consistency is key to your dog's progress. If a participant misses more than two sessions, they will be asked to re-enrol to complete the program at a later time. Please note that refunds are not provided for non-attendance if reasonable measures were taken to contact the owner.</p>
          </div>

          <div className="faq-item">
            <h3>What are the vaccination requirements?</h3>
            <p>For the safety of all participants, puppies must be in good overall health. Specifically, a C3 vaccination is required at least 10 days prior to the first class. You will need to bring your puppy’s current vaccination certificate to the first session.</p>
          </div>

          <div className="faq-item">
            <h3>Who can attend the training sessions?</h3>
            <p>Family involvement is highly encouraged! However, for the comfort of the dogs, we recommend no more than two people per puppy attend each session.</p>
            <ul className="faq-sublist">
              <li><strong>Age Limits:</strong> The minimum age for a participant is 10 years old.</li>
              <li><strong>Supervision:</strong> Anyone under 18 must be accompanied by a parent or guardian.</li>
              <li><strong>Safety:</strong> Children under 10 are welcome to observe but must be under full supervision and are not permitted to handle or touch the puppies.</li>
            </ul>
          </div>

          <div className="faq-item">
            <h3>Can my dog interact with others during class?</h3>
            <p>To maintain a focused learning environment, puppies must be kept on-lead at all times. Participants are asked not to approach or touch another puppy without the owner's permission and the trainer's guidance.</p>
          </div>

          <div className="faq-item">
            <h3>What equipment do I need to bring?</h3>
            <p>Please arrive 10 minutes early wearing suitable attire and closed-toe footwear. Each week, bring:</p>
            <ul className="faq-sublist">
              <li>A flat collar and a standard lead (1.2m to 1.4m).</li>
              <li>A mat, bed, or towel for settling exercises.</li>
              <li>A treat pouch filled with high-value, soft, and "smelly" rewards.</li>
            </ul>
            <p className="faq-note">Note: Training collars like martingales, check chains, or head halters are not permitted.</p>
          </div>

          <div className="faq-item">
            <h3>Should I feed my dog before class?</h3>
            <p>We recommend that you do not feed your dog immediately prior to class. A hungry dog is often more motivated by the high-value training treats used during the session.</p>
          </div>
        </div>
      </section>

      {/* Recommended CTA */}



      <style>{`
        .classes-header {
          padding-top: 20px;
        }
        @media (min-width: 768px) {
          .classes-header {
            padding: 40px 0 20px;
          }
        }
        .programs-scroll-container {
          margin: 0 -16px 60px;
          padding: 0 16px;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        @media (min-width: 768px) {
          .programs-scroll-container {
            overflow-x: visible;
            margin: 0 0 60px;
            padding: 0;
          }
        }
        .programs-scroll-container::-webkit-scrollbar {
          display: none;
        }
        .programs-carousel {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding-bottom: 20px;
          width: max-content;
        }
        @media (min-width: 768px) {
          .programs-carousel {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            width: 100%;
            gap: 32px;
          }
        }
        .program-card {
          background: var(--card-bg);
          border-radius: 32px;
          overflow: hidden;
          box-shadow: var(--shadow);
          width: 320px;
          flex-shrink: 0;
          transition: var(--transition);
        }
        @media (min-width: 768px) {
          .program-card {
            width: 100%;
          }
          .program-card:hover {
            transform: translateY(-8px);
          }
        }
        .program-img-container {
          height: 220px;
          position: relative;
        }
        @media (min-width: 768px) {
          .program-img-container {
            height: 260px;
          }
        }
        .program-img-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .program-badge-stack {
          position: absolute;
          top: 16px;
          right: 16px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
        }
        .age-tag {
          background: rgba(45, 31, 23, 0.85);
          color: white;
          padding: 6px 12px;
          border-radius: 10px;
          font-size: 10px;
          font-weight: 800;
        }
        .level-tag {
          background: var(--secondary-color);
          color: white;
          padding: 6px 12px;
          border-radius: 10px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
        }
        .program-details {
          padding: 24px;
        }
        @media (min-width: 768px) {
          .program-details {
            padding: 24px;
          }
          .program-details h2 {
            font-size: 28px;
          }
        }
        .program-details h2 {
          font-size: 26px;
          margin-bottom: 12px;
        }
        .program-details p {
          color: var(--text-muted);
          font-size: 14px;
          margin-bottom: 20px;
          line-height: 1.5;
        }
        .perks-list {
          list-style: none;
          margin-bottom: 24px;
        }
        .perks-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 10px;
          color: var(--primary-color);
        }
        .perk-check {
          color: var(--secondary-color);
          font-size: 18px;
        }
        .btn-outline {
          width: 100%;
          background: none;
          border: 1.5px solid var(--primary-color);
          padding: 16px;
          border-radius: 12px;
          font-weight: 700;
          color: var(--primary-color);
          font-size: 14px;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
          transition: var(--transition);
        }
        .btn-outline:hover {
          background: var(--primary-color);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(45, 31, 23, 0.2);
        }
        .btn-outline:active {
          transform: scale(0.97);
        }
        .learn-more-btn {
          width: 100%;
          background: none;
          color: var(--text-muted);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: var(--transition);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 4px;
        }
        .learn-more-btn:hover {
          color: var(--primary-color);
          transform: scale(1.05);
        }
        .learn-more-btn:active {
          transform: scale(0.95);
        }
        @media (min-width: 768px) {
          /* The original gap and padding were already defined for .learn-more-btn,
             so this media query block might be redundant or intended for specific overrides.
             Keeping it as provided in the instruction. */
        }
        .learn-more-btn .material-symbols-outlined {
          font-size: 16px;
        }

        /* Standards Section */
        .standards-section {
          padding: 40px 0;
        }
        @media (min-width: 768px) {
          .standards-section {
            padding: 40px 0;
          }
        }
        .standards-card {
          background: #3B2A21;
          color: white;
          padding: 40px 20px;
          border-radius: 40px;
        }
        @media (min-width: 768px) {
          .standards-card {
            padding: 60px 60px;
            border-radius: 60px;
            display: flex;
            align-items: center;
            gap: 60px;
          }
          .standards-header {
            flex-shrink: 0;
            width: 320px;
          }
          .standards-card .section-title {
            text-align: left;
            margin: 0 0 16px 0;
          }
          .standards-card .section-subtitle {
            text-align: left;
            margin: 0;
          }
        }
        .section-title.white {
          color: white;
          margin-bottom: 8px;
        }
        .section-subtitle.white-text {
          color: rgba(255,255,255,0.7);
          margin-bottom: 32px;
        }
        .standards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px 16px;
        }
        @media (min-width: 768px) {
          .standards-grid {
            gap: 32px;
          }
          .standard-item {
            text-align: left !important;
          }
          .standard-item .material-symbols-outlined {
            font-size: 40px !important;
          }
          .standard-item h4 {
            font-size: 20px !important;
          }
          .standard-item p {
            font-size: 15px !important;
          }
        }
        .standard-item {
          text-align: center;
        }
        .standard-item .material-symbols-outlined {
          font-size: 32px;
          color: var(--secondary-color);
          margin-bottom: 12px;
        }
        .standard-item h4 {
          color: white;
          font-size: 16px;
          margin-bottom: 8px;
          font-family: inherit;
        }
        .standard-item p {
          font-size: 13px;
          color: rgba(255,255,255,0.7);
          line-height: 1.5;
        }

        .focus-section {
          padding-bottom: 40px;
        }
        @media (min-width: 768px) {
          .focus-section {
            padding: 40px 0;
          }
          .focus-list {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px !important;
          }
        }
        .focus-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        .see-all {
          background: none;
          color: var(--primary-color);
          font-size: 13px;
          font-weight: 600;
        }
        .focus-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .focus-item {
          background: var(--card-bg);
          padding: 16px;
          border-radius: 20px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          transition: var(--transition);
          cursor: pointer;
        }
        @media (min-width: 768px) {
          .focus-item {
            padding: 24px;
          }
        }
        .focus-item.expanded {
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          border-left: 4px solid var(--secondary-color);
        }
        .focus-main {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .focus-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-color);
          flex-shrink: 0;
        }
        .focus-text {
          flex: 1;
        }
        .focus-text h3 {
          font-size: 16px;
          margin-bottom: 2px;
          font-family: inherit;
        }
        .focus-text p {
          font-size: 12px;
          color: var(--text-muted);
        }
        .arrow {
          color: #DDD;
          font-size: 20px;
          transition: var(--transition);
        }

        /* FAQ Section */
        .faq-section {
          padding: 60px 10px;
          background: var(--bg-color);
          margin: 0 -16px;
          padding: 60px 20px;
        }
        @media (min-width: 768px) {
          .faq-section {
            padding: 40px 0;
            margin: 0;
            background: transparent;
          }
          .faq-list {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px !important;
          }
        }
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .faq-item {
          background: var(--card-bg);
          padding: 24px;
          border-radius: 20px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
        }
        @media (min-width: 768px) {
          .faq-item {
            padding: 40px;
            border-radius: 32px;
          }
        }
        .faq-item h3 {
          font-size: 16px;
          margin-bottom: 12px;
          color: var(--primary-color);
          font-weight: 700;
          font-family: inherit;
        }
        .faq-item p {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .faq-sublist {
          list-style: none;
          margin-top: 12px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .faq-sublist li {
          font-size: 13px;
          color: var(--text-muted);
          position: relative;
          padding-left: 16px;
        }
        .faq-sublist li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--secondary-color);
        }
        .faq-note {
          margin-top: 12px;
          font-weight: 600;
          color: var(--primary-color) !important;
          font-size: 12px !important;
        }
      `}</style>
    </div>
  );
};

export default Classes;
