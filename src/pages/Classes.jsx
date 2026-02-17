import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PROGRAMS } from '../constants/programs';

const Classes = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [expandedPrograms, setExpandedPrograms] = useState([]);
  const [flippedFocuses, setFlippedFocuses] = useState([]);

  useEffect(() => {
    if (location.state && location.state.scrollTo === 'faq') {
      const element = document.getElementById('faq');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const toggleProgram = (id) => {
    setExpandedPrograms(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleFocus = (id) => {
    setFlippedFocuses(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const focuses = [
    {
      id: 'leash',
      title: 'Leash Pulling',
      subtitle: 'Master the walk without the strain.',
      icon: 'link',
      color: '#FFF8F0',
      details: 'We solve dragging, forging, and reactivity on the lead through the Davenport Pressure Protocol.',
      points: ['Leash Pressure Awareness', 'Active Focus Heeling', 'Environmental Neutrality']
    },
    {
      id: 'barking',
      title: 'Excessive Barking',
      subtitle: 'Quiet the noise with calm communication.',
      icon: 'campaign',
      color: '#F0F7FF',
      details: 'Address the root cause of noise, whether it is boredom, alert barking, or attention-seeking behavior.',
      points: ['Doorbell Desensitization', 'Threshold Management', 'Vocal Impulse Control']
    },
    {
      id: 'anxiety',
      title: 'Separation Anxiety',
      subtitle: "Build confidence for when you're away.",
      icon: 'heart_broken',
      color: '#FFF0F0',
      details: 'Transform fear into independence by teaching your dog that being alone is a safe and secondary state.',
      points: ['Departure Cue Masking', 'Crate Mastery', 'Gradual Independence Scaling']
    },
    {
      id: 'reactivity',
      title: 'Reactivity',
      subtitle: 'Safely manage and reduce lunging behaviors.',
      icon: 'security',
      color: '#F7F0FF',
      details: 'Shift your dog’s emotional response to environmental triggers from "React" to "Engage/Disengage".',
      points: ['Counter-Conditioning', 'Distance Management', 'Handler Trust Rebuilding']
    },
    {
      id: 'aggression',
      title: 'Aggression',
      subtitle: 'Managing hostility towards others safely.',
      icon: 'warning',
      color: '#FFF0F0',
      details: 'High-level behavioral intervention focusing on safety, containment, and risk mitigation protocols.',
      points: ['Muzzle Conditioning', 'Bite Prevention Safety', 'Trigger Identification']
    },
    {
      id: 'guarding',
      title: 'Resource Guarding',
      subtitle: 'Stopping possessive and guarding behaviors.',
      icon: 'inventory_2',
      color: '#F0F7FF',
      details: 'Neutralize possessiveness over food, objects, or people using cooperative "Trade" methodologies.',
      points: ['Bowl & Value Neutrality', 'Drop It Independence', 'Spatial Boundries']
    },
    {
      id: 'recall',
      title: 'Recall Issues',
      subtitle: 'Mastering the art of coming when called.',
      icon: 'record_voice_over',
      color: '#FFF8F0',
      details: 'Build an enthusiastic and immediate return even in high-distraction environments like beaches or parks.',
      points: ['Long-Line Orientation', 'Whistle Training Mastery', 'High-Value Response']
    },
    {
      id: 'potty',
      title: 'Housebreaking',
      subtitle: 'Essentials for effective potty training.',
      icon: 'home_health',
      color: '#F7F0FF',
      details: 'A structural overhaul of your dog’s home life to ensure clean habits and reliable communication.',
      points: ['Structural Scheduling', 'Enzymatic Cleaning Tips', 'Confinement Management']
    },
  ];

  const faqs = [
    {
      q: "What if I miss a class?",
      a: "Consistency is key to your dog's progress. If a participant misses more than two sessions, they will be asked to re-enroll to complete the program at a later time. Please note that refunds are not provided for non-attendance."
    },
    {
      q: "What are the vaccination requirements?",
      a: "For the safety of all participants, puppies must be in good overall health. Specifically, a C3 vaccination is required at least 10 days prior to the first class. Please bring your certificate to the first session."
    },
    {
      q: "Who can attend the training sessions?",
      a: "Family involvement is highly encouraged! We recommend no more than two people per puppy. Participants must be 10+ years old. Anyone under 18 must be accompanied by a guardian.",
      bullets: [
        "Age Limits: Minimum age 10 years old.",
        "Supervision: Under 18 must have a guardian.",
        "Safety: Children under 10 can observe but not handle."
      ]
    },
    {
      q: "Can my dog interact with others during class?",
      a: "To maintain a focused learning environment, puppies must be kept on-lead at all times. Participants are asked not to approach other puppies without permission."
    },
    {
      q: "What equipment do I need to bring?",
      a: "Please arrive 10 minutes early with closed-toe shoes. Bring:",
      bullets: [
        "A flat collar and standard lead (1.2m to 1.4m).",
        "A mat, bed, or towel for settling.",
        "High-value, soft training treats."
      ],
      note: "Note: Training collars like martingales or check chains are not permitted."
    },
    {
      q: "Should I feed my dog before class?",
      a: "We recommend not feeding your dog immediately prior to class. A hungry dog is more motivated by the high-value training treats used during the session."
    }
  ];

  return (
    <div className="programs-page animate-fade-in">
      {/* Header */}
      <header className="page-header">
        <h1>Training Programs</h1>
        <p>Join a program that matches your dog's current skills and age.</p>
      </header>

      {/* Program Cards Grid */}
      <section className="programs-grid-container">
        <div className="programs-grid">
          {PROGRAMS.map((program) => (
            <div className={`program-card-container ${expandedPrograms.includes(program.id) ? 'is-flipped' : ''}`} key={program.id}>
              <div className="program-card-inner">
                {/* FRONT FACE */}
                <div className="program-card-front">
                  <div className="card-image-wrapper">
                    <img src="/DogTrainer5.jpg" alt={program.title} />
                    <div className="card-tags-overlay">
                      <span className="age-badge">{program.age}</span>
                      <span className="level-badge">{program.subtitle}</span>
                    </div>
                  </div>
                  <div className="card-body-content">
                    <h2>{program.title}</h2>
                    <p className="card-desc-text">{program.desc}</p>
                    <ul className="card-perks-modern">
                      {program.perks.map((perk, i) => (
                        <li key={i}>
                          <span className="material-symbols-outlined check-gold">check_circle</span>
                          {perk}
                        </li>
                      ))}
                    </ul>
                    <button
                      className="btn-card-interactive"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate('/booking', { state: { selectedProgram: program.title } });
                      }}
                    >
                      {program.btnText}
                    </button>
                    <button className="learn-more-interactive" onClick={() => toggleProgram(program.id)}>
                      VIEW CURRICULUM
                      <span className="material-symbols-outlined">double_arrow</span>
                    </button>
                  </div>
                </div>

                {/* BACK FACE */}
                <div className="program-card-back">
                  <div className="back-header">
                    <button className="btn-back-flip" onClick={() => toggleProgram(program.id)}>
                      <span className="material-symbols-outlined">arrow_back</span>
                      BACK TO OVERVIEW
                    </button>
                    <h3>{program.curriculumTitle}</h3>
                    <p>{program.curriculumDesc}</p>
                  </div>
                  <div className="back-content">
                    <ul className="curr-list-refined">
                      {program.curriculumItems.map((item, i) => (
                        <li key={i}>
                          <span className="curr-dot"></span>
                          <div className="curr-text">
                            <strong>{item.label}</strong> {item.text}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="back-footer">
                    <button
                      className="btn-card-interactive"
                      onClick={() => navigate('/booking', { state: { selectedProgram: program.title } })}
                    >
                      BOOK THIS PROGRAM
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blueprint Section Highlights */}
      <section className="blueprint-section">
        <div className="blueprint-header">
          <span className="sub-label-gold">THE METHODOLOGY</span>
          <h2>The Cartel Blueprint</h2>
          <p>Our proven framework for sustainable behavior change.</p>
        </div>
        <div className="blueprint-grid">
          {[
            { icon: 'verified', h: 'Precision Results', p: 'We transform through the Davenport Protocol.' },
            { icon: 'psychology', h: 'Elite Partnership', p: 'Building a bridge of communication.' },
            { icon: 'groups', h: 'Small Class Sizes', p: 'Individual feedback during every exercise.' },
            { icon: 'description', h: 'Homework Support', p: 'Weekly goals for consistent practice.' }
          ].map((f, i) => (
            <div className="blueprint-card" key={i}>
              <div className="bp-icon-gold">
                <span className="material-symbols-outlined">{f.icon}</span>
              </div>
              <h3>{f.h}</h3>
              <p>{f.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Training Focus Section */}
      <section className="focus-section-modern">
        <div className="focus-header-row">
          <h2>Training Focus</h2>
        </div>
        <div className="focus-grid-interactive">
          {focuses.map(item => (
            <div className={`focus-card-container ${flippedFocuses.includes(item.id) ? 'is-flipped' : ''}`} key={item.id}>
              <div className="focus-card-inner">
                {/* FRONT */}
                <div className="focus-card-front" onClick={() => toggleFocus(item.id)}>
                  <div className="focus-icon-pill" style={{ background: item.color }}>
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div className="focus-body-text">
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                  <span className="material-symbols-outlined focus-chevron">arrow_forward</span>
                </div>

                {/* BACK */}
                <div className="focus-card-back" onClick={() => toggleFocus(item.id)}>
                  <div className="focus-back-header">
                    <span className="material-symbols-outlined flip-back-icon">rotate_left</span>
                    <h3>{item.title}</h3>
                  </div>
                  <p className="focus-details-text">{item.details}</p>
                  <ul className="focus-points-list">
                    {item.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section Highlights */}
      <section className="faq-section-refined" id="faq">
        <div className="faq-centered-header">
          <span className="faq-tag">COMMON QUESTIONS</span>
          <h2>Clarity in the Cartel</h2>
          <p>Essential guidance to ensure the best experience for you and your dog.</p>
        </div>
        <div className="faq-grid-interactive">
          {faqs.map((faq, i) => (
            <div className="faq-card-interactive interactive-card" key={i}>
              <div className="faq-card-q">
                <span className="q-mark">Q</span>
                <h3>{faq.q}</h3>
              </div>
              <div className="faq-card-a">
                <p>{faq.a}</p>
                {faq.bullets && (
                  <ul className="faq-list-accent">
                    {faq.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                )}
                {faq.note && <div className="faq-note-box">{faq.note}</div>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
                .programs-page { width: 100%; padding-bottom: 100px; }
                @media (max-width: 768px) { .programs-page { padding: 0 20px 80px; } }

                .page-header { text-align: center; padding: 60px 0 60px; }
                .page-header h1 { font-size: 88px; margin-bottom: 24px; letter-spacing: -3px; line-height: 0.9; }
                .page-header p { color: #666; font-size: 20px; max-width: 600px; margin: 0 auto; }

                /* Grid Layout Highlights */
                .programs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; margin-bottom: 100px; }
                @media (max-width: 1100px) { .programs-grid { grid-template-columns: 1fr 1fr; } }
                @media (max-width: 768px) { .programs-grid { grid-template-columns: 1fr; max-width: 450px; margin: 0 auto 60px; } }

                /* Flip Card Architecture */
                .program-card-container {
                    perspective: 2000px;
                    height: 800px;
                    width: 100%;
                }
                .is-flipped .program-card-inner {
                    transform: rotateY(180deg);
                }
                .program-card-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    text-align: left;
                    transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    transform-style: preserve-3d;
                }
                .program-card-front, .program-card-back {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    -webkit-backface-visibility: hidden;
                    backface-visibility: hidden;
                    background: white;
                    border-radius: 48px;
                    border: 1px solid rgba(0, 0, 0, 0.08);
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }
                .program-card-back {
                    transform: rotateY(180deg);
                    padding: 40px;
                    background: #1C1917;
                    color: white;
                    border: 1px solid rgba(255, 255, 255, 0.15);
                }

                .card-image-wrapper { position: relative; height: 280px; border-radius: 40px; margin: 12px; overflow: hidden; }
                .card-image-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s; }
                .program-card-front:hover .card-image-wrapper img { transform: scale(1.1); }
                
                .card-tags-overlay { 
                    position: absolute; top: 20px; right: 20px; 
                    display: flex; flex-direction: column; align-items: flex-end; gap: 10px; 
                }
                .age-badge { background: rgba(28,25,23,0.9); color: white; padding: 8px 16px; border-radius: 12px; font-size: 11px; font-weight: 900; backdrop-filter: blur(10px); }
                .level-badge { background: #F59E0B; color: white; padding: 8px 16px; border-radius: 12px; font-size: 11px; font-weight: 900; box-shadow: 0 10px 20px rgba(245,158,11,0.2); }

                .card-body-content { padding: 32px 40px 48px; flex: 1; display: flex; flex-direction: column; }
                .card-body-content h2 { font-size: 32px; margin-bottom: 16px; letter-spacing: -1px; }
                .card-desc-text { color: #666; font-size: 15px; line-height: 1.6; margin-bottom: 32px; }
                
                .card-perks-modern { list-style: none; margin-bottom: auto; }
                .card-perks-modern li { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 14px; font-weight: 700; font-size: 14px; }
                .check-gold { color: #F59E0B; font-size: 20px; }

                .btn-card-interactive { 
                    width: 100%; 
                    background: #F59E0B; 
                    color: white; 
                    padding: 22px; 
                    border-radius: 50px; 
                    font-weight: 900; 
                    margin-bottom: 20px;
                    font-size: 13px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    box-shadow: 0 12px 30px rgba(245,158,11,0.3);
                    border: none;
                    cursor: pointer;
                }
                .btn-card-interactive:hover { 
                    background: #D97706; 
                    box-shadow: 0 20px 45px rgba(217, 119, 6, 0.5); 
                    transform: scale(1.02) translateY(-3px); 
                }

                .learn-more-interactive {
                    background: none; color: #9CA3AF; font-size: 11px; font-weight: 900; letter-spacing: 2px;
                    display: flex; align-items: center; justify-content: center; gap: 8px; margin: 0 auto;
                    cursor: pointer;
                    border: none;
                }
                .learn-more-interactive:hover { color: #1C1917; }
                
                /* Back of Card Styles */
                .back-header { margin-bottom: 32px; }
                .btn-back-flip {
                    background: none; border: none; color: #F59E0B; font-weight: 900; font-size: 11px;
                    display: flex; align-items: center; gap: 8px; cursor: pointer; margin-bottom: 24px;
                }
                .back-header h3 { font-size: 28px; color: white; margin-bottom: 12px; }
                .back-header p { color: #888; font-size: 14px; line-height: 1.5; }
                
                .back-content { flex: 1; overflow-y: auto; padding-right: 10px; }
                .back-content::-webkit-scrollbar { width: 4px; }
                .back-content::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); }
                .back-content::-webkit-scrollbar-thumb { background: #F59E0B; border-radius: 10px; }

                .back-footer { padding-top: 32px; }

                .curr-list-refined { list-style: none; }
                .curr-list-refined li { display: flex; gap: 16px; margin-bottom: 24px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 16px; }
                .curr-list-refined li:last-child { border-bottom: none; }
                .curr-dot { width: 8px; height: 8px; border-radius: 50%; background: #F59E0B; margin-top: 6px; flex-shrink: 0; box-shadow: 0 0 10px #F59E0B; }
                .curr-text { font-size: 14px; line-height: 1.5; color: #BBB; }
                .curr-text strong { display: block; color: white; font-size: 16px; margin-bottom: 4px; }

                /* Blueprint Highlights */
                .blueprint-section { background: #1C1917; padding: 100px 0; text-align: center; }
                .blueprint-header h2 { font-size: 56px; color: white; margin-bottom: 12px; letter-spacing: -2px; }
                .blueprint-header p { color: #888; margin-bottom: 60px; font-size: 19px; max-width: 600px; margin-left: auto; margin-right: auto; line-height: 1.6; }
                .sub-label-gold { color: #F59E0B; font-weight: 900; font-size: 12px; letter-spacing: 3px; margin-bottom: 24px; display: block; }

                .blueprint-grid { 
                    display: grid; 
                    grid-template-columns: repeat(4, 1fr); 
                    gap: 32px; 
                    max-width: 1200px; 
                    margin: 0 auto;
                    padding: 0 40px; 
                }
                @media (max-width: 991px) { 
                    .blueprint-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 600px) {
                    .blueprint-section { padding: 60px 0; }
                    .blueprint-grid { grid-template-columns: 1fr; gap: 0; }
                    .blueprint-header h2 { font-size: 36px; }
                    .blueprint-card { padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
                    .blueprint-card:last-child { border-bottom: none; }
                }

                .blueprint-card { 
                    padding: 40px; 
                    text-align: left; 
                    transition: all 0.4s ease; 
                    cursor: default; 
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 32px;
                }
                .blueprint-card:hover { border-color: rgba(245, 158, 11, 0.3); background: rgba(255,255,255,0.02); }
                .bp-icon-gold { color: #F59E0B; font-size: 40px; display: flex; align-items: center; justify-content: left; margin-bottom: 24px; transition: all 0.4s ease; }
                .bp-icon-gold .material-symbols-outlined { font-size: 40px; transition: all 0.4s ease; }
                .blueprint-card h3 { font-size: 22px; color: white; margin-bottom: 16px; transition: all 0.4s ease; }
                .blueprint-card p { color: #666; font-size: 15px; line-height: 1.6; transition: all 0.4s ease; }
                
                .blueprint-card:hover h3 { color: #F59E0B; transform: translateX(8px); }
                .blueprint-card:hover .bp-icon-gold { transform: scale(1.1); filter: drop-shadow(0 0 15px rgba(245, 158, 11, 0.4)); }
                .blueprint-card:hover p { color: #FFFFFF; }

                /* Training Focus Interactivity */
                .focus-section-modern { padding: 80px 0; }
                .focus-header-row { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 60px; }
                
                .focus-grid-interactive { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
                @media (max-width: 991px) { .focus-grid-interactive { grid-template-columns: 1fr 1fr; } }
                @media (max-width: 600px) { .focus-grid-interactive { grid-template-columns: 1fr; } }
                
                .focus-card-container {
                    perspective: 1500px;
                    height: 380px;
                    cursor: pointer;
                }
                .focus-card-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    transform-style: preserve-3d;
                }
                .focus-card-container.is-flipped .focus-card-inner {
                    transform: rotateY(180deg);
                }
                .focus-card-front, .focus-card-back {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    -webkit-backface-visibility: hidden;
                    backface-visibility: hidden;
                    border-radius: 32px;
                    border: 1px solid rgba(0, 0, 0, 0.08);
                    padding: 32px;
                    display: flex;
                    flex-direction: column;
                }
                .focus-card-front {
                    background: white;
                    justify-content: space-between;
                }
                .focus-card-back {
                    background: #1C1917;
                    color: white;
                    transform: rotateY(180deg);
                    border: 1px solid rgba(255, 255, 255, 0.15);
                }

                .focus-icon-pill { width: 56px; height: 56px; border-radius: 18px; display: flex; align-items: center; justify-content: center; }
                .focus-icon-pill span { color: #1C1917; font-size: 28px; }
                .focus-body-text h3 { font-size: 20px; margin-bottom: 8px; }
                .focus-body-text p { font-size: 14px; color: #888; line-height: 1.5; }
                .focus-chevron { color: #DDD; font-size: 20px; align-self: flex-end; transition: all 0.3s; }
                .focus-card-front:hover .focus-chevron { color: #F59E0B; transform: translateX(5px); }

                .focus-back-header { display: flex; items-center; gap: 12px; margin-bottom: 20px; color: #F59E0B; }
                .flip-back-icon { font-size: 18px; }
                .focus-back-header h3 { font-size: 18px; color: white; margin: 0; }
                .focus-details-text { font-size: 13px; line-height: 1.5; color: #AAA; margin-bottom: 24px; }
                .focus-points-list { list-style: none; }
                .focus-points-list li { 
                    font-size: 12px; font-weight: 700; color: #F59E0B; margin-bottom: 10px; 
                    padding-left: 14px; position: relative;
                }
                .focus-points-list li::before { content: ''; position: absolute; left: 0; top: 7px; width: 6px; height: 1px; background: #F59E0B; }

                /* FAQ Highlights */
                .faq-section-refined { padding: 80px 0; border-top: 1px solid #F0F0F0; }
                .faq-centered-header { text-align: center; margin-bottom: 80px; }
                .faq-tag { color: #D97706; font-weight: 800; font-size: 10px; letter-spacing: 3px; display: block; margin-bottom: 16px; }
                .faq-grid-interactive { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
                @media (max-width: 768px) { .faq-grid-interactive { grid-template-columns: 1fr; } }

                .faq-card-interactive { background: white; padding: 56px; border-radius: 48px; border: 1px solid rgba(0,0,0,0.08); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
                .faq-card-interactive:hover { transform: translateY(-8px); box-shadow: 0 40px 80px rgba(0,0,0,0.08); }
                .q-mark { 
                    width: 32px; height: 32px; background: #FEF3C7; color: #D97706; 
                    border-radius: 10px; display: flex; align-items: center; justify-content: center;
                    font-weight: 800; font-size: 14px; flex-shrink: 0;
                }
                .faq-card-q h3 { font-size: 22px; line-height: 1.3; }
                .faq-card-a p { color: #666; font-size: 16px; line-height: 1.7; }
                .faq-list-accent { list-style: none; margin-top: 24px; padding-left: 5px; }
                .faq-list-accent li { 
                    font-size: 15px; color: #444; margin-bottom: 12px; 
                    position: relative; padding-left: 20px; 
                }
                .faq-list-accent li::before { content: ''; position: absolute; left: 0; top: 10px; width: 6px; height: 1px; background: #D97706; }
                .faq-note-box { 
                    margin-top: 32px; padding: 20px; background: #F8F7F5; 
                    border-radius: 16px; font-size: 13px; font-weight: 800; color: #1C1917; 
                    border-left: 4px solid #D97706;
                }

                /* Mobile Responsiveness Overrides */
                @media (max-width: 768px) {
                    .page-header { padding: 40px 20px; }
                    .page-header h1 { font-size: 48px; letter-spacing: -1px; }
                    .page-header p { font-size: 16px; }
                    
                    .program-card-container { height: 750px; }
                    .card-body-content { padding: 24px; }
                    .card-body-content h2 { font-size: 28px; }
                    .program-card-front, .program-card-back { border-radius: 32px; }
                    .program-card-back { padding: 32px; }
                    
                    .blueprint-header h2 { font-size: 32px; }
                    .blueprint-header p { font-size: 16px; margin-bottom: 40px; }
                    .blueprint-card { padding: 32px; border-radius: 24px; }
                    
                    .faq-section-refined { padding: 60px 20px; }
                    .faq-card-interactive { padding: 32px; border-radius: 32px; }
                    .faq-card-q h3 { font-size: 20px; }
                    .faq-centered-header { margin-bottom: 40px; }
                }

                @media (max-width: 480px) {
                    .page-header h1 { font-size: 42px; }
                    .program-card-container { height: 720px; }
                    .card-body-content h2 { font-size: 24px; }
                    .btn-card-interactive { padding: 18px; font-size: 12px; }
                    
                    .focus-header-row h2 { font-size: 28px; }
                    .focus-card-container { height: 340px; }
                }
            `}</style>
    </div>
  );
};

export default Classes;
