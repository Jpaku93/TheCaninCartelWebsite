import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PROGRAMS, OTHER_SERVICES } from '../constants/programs';


const Booking = () => {
  const location = useLocation();
  const [selectedDate, setSelectedDate] = useState(4);
  const [selectedSlot, setSelectedSlot] = useState('09:00 AM');
  const allPrograms = [...PROGRAMS.map(p => p.title), ...OTHER_SERVICES];
  const [selectedProgram, setSelectedProgram] = useState('');

  const upcomingClasses = [
    {
      title: 'Puppy Preschool',
      startTime: '9:00 AM',
      startDate: 'Saturday, Oct 26',
      seatsLeft: 6,
      status: 'NEXT CLASS UP'
    },
    {
      title: 'Foundations for Focus',
      startTime: '10:30 AM',
      startDate: 'Saturday, Oct 26',
      seatsLeft: 4,
      status: 'LIMITED SEATS'
    },
    {
      title: 'Advanced Skills',
      startTime: '12:00 PM',
      startDate: 'Saturday, Oct 26',
      seatsLeft: 8,
      status: 'OPEN FOR ENROLLMENT'
    }
  ];

  useEffect(() => {
    if (location.state && location.state.selectedProgram) {
      setSelectedProgram(location.state.selectedProgram);
      // Smooth scroll to form if a program was selected
      const formElement = document.querySelector('.app-form-section');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location, setSelectedProgram]);

  const days = [30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const slots = ['09:00 AM', '11:30 AM', '02:00 PM'];

  return (
    <div className="booking-page animate-fade-in">
      {/* Header */}
      <section className="booking-header">
        <h1>Join the <i>CanineCartel</i></h1>
        <p className="subtitle">CONTACT DOUGLAS DAVENPORT</p>
      </section>

      {/* Upcoming Classes Grid */}
      <section className="upcoming-classes-header">
        <h2 className="section-title">Upcoming Intake Cycles</h2>
      </section>

      <section className="next-classes-grid">
        {upcomingClasses.map((item, idx) => (
          <div className="notif-card" key={idx}>
            <div className="notif-status">
              <span className="dot animate-pulse"></span>
              {item.status}
            </div>
            <div className="notif-content">
              <div className="notif-info">
                <h3>{item.title}</h3>
                <p>{item.startDate} • {item.startTime}</p>
              </div>
              <div className="notif-action">
                <span className="seats-badge">{item.seatsLeft} SEATS LEFT</span>
                <button className="book-next-btn" onClick={() => setSelectedProgram(item.title)}>ENROLL</button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Booking Calendar */}
      <section className="scheduler-section">
        <div className="scheduler-card">
          <div className="scheduler-header">
            <h2>Schedule Session</h2>
            <div className="nav-arrows">
              <span className="material-symbols-outlined">chevron_left</span>
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </div>
          <p className="month-label">AVAILABLE OCTOBER 2024</p>

          <div className="days-grid">
            <div className="day-name">M</div>
            <div className="day-name">T</div>
            <div className="day-name">W</div>
            <div className="day-name">T</div>
            <div className="day-name">F</div>
            <div className="day-name">S</div>
            <div className="day-name">S</div>
            {days.map((day, idx) => (
              <button
                key={idx}
                className={`day-btn ${day === selectedDate ? 'active' : ''} ${idx === 0 ? 'muted' : ''}`}
                onClick={() => setSelectedDate(day)}
              >
                {day}
              </button>
            ))}
          </div>

          <p className="slot-label">SELECTED DAY SLOTS</p>
          <div className="slots-container">
            {slots.map((slot) => (
              <button
                key={slot}
                className={`slot-btn ${slot === selectedSlot ? 'active' : ''}`}
                onClick={() => setSelectedSlot(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="app-form-section">
        <div className="form-container">
          <h2>Ready to Join the Ranks?</h2>
          <p>Submit your application for a professional consultation with Douglas Davenport.</p>

          <form className="booking-form">
            <div className="row">
              <div className="form-field">
                <label htmlFor="full-name">FULL NAME</label>
                <input type="text" id="full-name" name="full-name" placeholder="John Doe" required />
              </div>
              <div className="form-field">
                <label htmlFor="phone">PHONE NUMBER</label>
                <input type="tel" id="phone" name="phone" placeholder="0400 000 000" required />
              </div>
              <div className="form-field">
                <label htmlFor="breed">CANINE BREED</label>
                <input type="text" id="breed" name="breed" placeholder="G. Shepherd" required />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="program">SELECT PROGRAM</label>
              <select
                id="program"
                name="program"
                value={selectedProgram}
                onChange={(e) => setSelectedProgram(e.target.value)}
                className="program-select"
                required
              >
                <option value="" disabled>Choose a training program</option>
                {allPrograms.map(prog => (
                  <option key={prog} value={prog}>{prog}</option>
                ))}
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="objective">TRAINING OBJECTIVE</label>
              <textarea id="objective" name="objective" placeholder="How can Douglas assist you?" required></textarea>
            </div>
            <button type="submit" className="btn-secondary">
              SUBMIT APPLICATION <span className="material-symbols-outlined">lock</span>
            </button>
          </form>
        </div>
      </section>



      <style>{`
        .booking-header {
          padding: 40px 0 20px;
          text-align: center;
        }
        @media (min-width: 768px) {
          .booking-header {
            padding: 80px 0 40px;
          }
          .booking-header h1 {
            font-size: 64px !important;
          }
        }
        .booking-header h1 {
          font-size: 32px;
          margin-bottom: 8px;
        }
        .booking-header h1 i {
          font-style: italic;
          color: #3B2A21;
        }
        .booking-header .subtitle {
          font-size: 11px;
          letter-spacing: 2px;
          color: #999;
          font-weight: 800;
        }

        /* Upcoming Classes Grid */
        .upcoming-classes-header {
          margin-bottom: 12px;
          text-align: center;
        }
        .next-classes-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-bottom: 40px;
        }
        @media (min-width: 768px) {
          .next-classes-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
          .notif-card {
            padding: 32px !important;
          }
          .notif-info h3 {
            font-size: 24px !important;
          }
        }
        .notif-card {
          background: #3B2A21;
          color: white;
          padding: 20px;
          border-radius: 24px;
          box-shadow: 0 10px 30px rgba(59, 42, 33, 0.15);
        }
        .notif-status {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: var(--secondary-color);
          margin-bottom: 12px;
        }
        @media (min-width: 768px) {
          .notif-status {
            font-size: 13px;
          }
        }
        .dot {
          width: 8px;
          height: 8px;
          background: var(--secondary-color);
          border-radius: 50%;
        }
        .notif-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .notif-info h3 {
          color: white;
          font-size: 20px;
          margin: 0 0 4px;
        }
        .notif-info p {
          font-size: 13px;
          color: rgba(255,255,255,0.6);
          margin: 0;
        }
        .notif-action {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
        }
        .seats-badge {
          font-size: 8px;
          font-weight: 800;
          color: #FFB800;
          letter-spacing: 1px;
        }
        .book-next-btn {
          background: var(--secondary-color);
          color: white;
          font-size: 10px;
          font-weight: 800;
          padding: 8px 16px;
          border-radius: 100px;
          transition: var(--transition);
        }
        .book-next-btn:hover {
          transform: scale(1.05);
        }

        @media (min-width: 768px) {
          .booking-page {
            display: grid;
            grid-template-columns: 1fr 1.5fr;
            gap: 40px;
            align-items: start;
            max-width: 1200px;
            margin: 0 auto;
            padding-bottom: 120px;
          }
          .booking-header, .upcoming-classes-header, .next-classes-grid {
            grid-column: 1 / -1;
          }
          .scheduler-section {
            position: sticky;
            top: 100px;
          }
          .app-form-section {
            margin: 0 !important;
          }
        }

        .scheduler-card {
          background: var(--card-bg);
          border-radius: 32px;
          padding: 32px 24px;
          box-shadow: var(--shadow);
          margin-bottom: 40px;
        }
        @media (min-width: 768px) {
          .scheduler-card {
            padding: 40px;
            margin-bottom: 0;
          }
        }
        .scheduler-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }
        .scheduler-header h2 {
          font-size: 20px;
        }
        .nav-arrows {
          color: #999;
          display: flex;
          gap: 16px;
        }
        .month-label {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          color: #999;
          margin-bottom: 24px;
        }
        .days-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 10px;
          margin-bottom: 32px;
        }
        .day-name {
          text-align: center;
          font-size: 10px;
          font-weight: 900;
          color: #CCC;
          padding-bottom: 8px;
        }
        .day-btn {
          height: 44px;
          background: none;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 700;
          color: var(--primary-color);
          transition: var(--transition);
        }
        .day-btn.muted {
          color: #DDD;
        }
        .day-btn.active {
          background: #3B2A21;
          color: white;
          box-shadow: 0 8px 16px rgba(59, 42, 33, 0.3);
        }
        .slot-label {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          color: #999;
          margin-bottom: 16px;
        }
        .slots-container {
          display: flex;
          gap: 8px;
        }
        .slot-btn {
          flex: 1;
          padding: 14px;
          border-radius: 10px;
          background: var(--bg-color);
          color: var(--primary-color);
          font-size: 11px;
          font-weight: 800;
          border: 1px solid transparent;
        }
        .slot-btn.active {
          background: #3B2A21;
          color: white;
        }

        .app-form-section {
          background: #151312;
          border-radius: 40px;
          padding: 50px 24px;
          color: white;
          margin: 0 -10px;
        }
        @media (min-width: 768px) {
          .app-form-section {
            padding: 60px;
            border-radius: 48px;
          }
          .form-container h2 {
            font-size: 48px !important;
            text-align: left !important;
          }
          .form-container p {
            text-align: left !important;
            font-size: 16px !important;
          }
        }
        .form-container h2 {
          color: white;
          font-size: 32px;
          text-align: center;
          margin-bottom: 12px;
        }
        .form-container p {
          color: rgba(255,255,255,0.6);
          text-align: center;
          font-size: 14px;
          margin-bottom: 40px;
        }
        .row {
          display: flex;
          gap: 16px;
          margin-bottom: 20px;
        }
        .form-field {
          flex: 1;
          margin-bottom: 20px;
        }
        .form-field label {
          display: block;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.5px;
          margin-bottom: 12px;
          color: #999;
        }
        .form-field input, .form-field textarea, .program-select {
          width: 100%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 18px;
          color: white;
          font-family: inherit;
          appearance: none;
        }
        .program-select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 18px center;
          background-size: 16px;
        }
        .program-select option {
          background: #151312;
          color: white;
        }
        .form-field textarea {
          height: 120px;
          resize: none;
        }
        .submit-app-btn .material-symbols-outlined {
          font-size: 18px;
        }
      `}</style>
    </div>
  );
};

export default Booking;
