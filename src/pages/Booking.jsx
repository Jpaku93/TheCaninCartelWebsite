import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PROGRAMS, OTHER_SERVICES } from '../constants/programs';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Date calculation
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const monthName = today.toLocaleString('default', { month: 'long' }).toUpperCase();

  // Program categories for scheduling rules
  const classTypeA = ["Puppy Preschool", "Foundations for Focus"]; // Tuesday
  const classTypeB = ["Advanced Skills"]; // Thursday
  const privateServices = ["Behavioral Consultation", "One-on-One Training", "Private Teaching", "Private Classes", "Consultation"];

  // State
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    breed: "",
    objective: ""
  });

  // Program list for dropdown
  const allProgramsList = [...PROGRAMS.map(p => p.title), ...OTHER_SERVICES];

  // Reset day/slot when program changes
  useEffect(() => {
    setSelectedDay(null);
    setSelectedSlot("");
  }, [selectedProgram]);

  // Handle program selection from location state
  useEffect(() => {
    if (location.state && location.state.selectedProgram) {
      setSelectedProgram(location.state.selectedProgram);
    }
  }, [location]);

  // Calendar generation
  const calendarDays = useMemo(() => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const startDayOfWeek = firstDayOfMonth.getDay(); // 0 is Sunday

    // Adjust for Monday start: 0->6, 1->0, 2->1, 3->2, 4->3, 5->4, 6->5
    const adjStart = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;

    const days = [];
    const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();

    // Previous month padding
    for (let i = adjStart - 1; i >= 0; i--) {
      days.push({ day: prevMonthLastDay - i, currentMonth: false });
    }

    // Current month days
    for (let i = 1; i <= lastDayOfMonth; i++) {
      days.push({ day: i, currentMonth: true });
    }

    return days;
  }, [currentMonth, currentYear]);

  // Check if a day is available based on selected program
  const isDayAvailable = (dayObj) => {
    if (!dayObj.currentMonth || !selectedProgram) return false;

    const date = new Date(currentYear, currentMonth, dayObj.day);
    const dayOfWeek = date.getDay(); // 0-6

    // Disable past days
    const startOfToday = new Date(today.setHours(0, 0, 0, 0));
    if (date < startOfToday) return false;

    // Rules from live site:
    if (classTypeA.includes(selectedProgram)) return dayOfWeek === 2; // Tuesdays
    if (classTypeB.includes(selectedProgram)) return dayOfWeek === 4; // Thursdays
    return true; // Private services available any day
  };

  // Time slot options
  const availableSlots = useMemo(() => {
    if (!selectedProgram || !selectedDay) return [];

    if (privateServices.includes(selectedProgram)) {
      return ["04:30 PM", "05:30 PM", "06:30 PM"];
    }
    return ["09:00 AM", "11:00 AM", "02:00 PM"];
  }, [selectedDay, selectedProgram]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isFormValid = () => {
    return (
      selectedProgram &&
      selectedDay &&
      selectedSlot &&
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.phone.trim() !== "" &&
      formData.breed.trim() !== "" &&
      formData.objective.trim() !== ""
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) return;

    setLoading(true);
    try {
      const bookingDate = new Date(currentYear, currentMonth, selectedDay);
      await addDoc(collection(db, "bookings"), {
        program: selectedProgram,
        date: bookingDate,
        time: selectedSlot,
        ...formData,
        createdAt: serverTimestamp(),
        status: "pending"
      });
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error("Booking Error:", err);
      alert("There was an error submitting your application. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="booking-page success-state animate-fade-in">
        <section className="booking-header">
          <h1>Success!</h1>
          <p className="subtitle">APPLICATION LOGGED</p>
        </section>

        <div className="success-message-card">
          <span className="material-symbols-outlined success-icon">verified_user</span>
          <h2>Application Received</h2>
          <p>Douglas Davenport has received your booking for <strong>{selectedProgram}</strong>.</p>
          <p className="confirmation-details">
            Scheduled for: {new Date(currentYear, currentMonth, selectedDay).toLocaleDateString("en-AU", { weekday: "long", day: "numeric", month: "long" })} at {selectedSlot}
          </p>
          <hr />
          <p className="follow-up">
            A professional from the CanineCartel will contact you at <strong>{formData.phone}</strong> within 24 hours to finalize your consultation.
          </p>
          <button className="btn-secondary" onClick={() => navigate('/')}>RETURN HOME</button>
        </div>

        <style>{`
                    .success-state {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 80px 20px;
                        text-align: center;
                    }
                    .success-message-card {
                        background: white;
                        padding: 60px;
                        border-radius: 40px;
                        box-shadow: 0 40px 80px rgba(0,0,0,0.05);
                    }
                    .success-icon {
                        font-size: 80px;
                        color: #F59E0B;
                        margin-bottom: 32px;
                    }
                    .confirmation-details {
                        margin-top: 16px;
                        color: #1c1917;
                        font-weight: 700;
                        font-size: 18px;
                    }
                    .follow-up {
                        margin: 32px 0;
                        color: #666;
                        font-size: 15px;
                        line-height: 1.6;
                    }
                    hr {
                        border: none;
                        border-top: 1px solid #F0F0F0;
                        margin: 32px 0;
                    }
                    .btn-secondary {
                        background: #1c1917;
                        color: white;
                        padding: 20px 40px;
                        border-radius: 50px;
                        font-weight: 900;
                        letter-spacing: 2px;
                        font-size: 13px;
                        text-transform: uppercase;
                        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    }
                    .btn-secondary:hover {
                        background: #F59E0B;
                        transform: scale(1.05) translateY(-3px);
                        box-shadow: 0 15px 30px rgba(245, 158, 11, 0.3);
                    }
                `}</style>
      </div>
    );
  }

  return (
    <div className="booking-page animate-fade-in">
      <header className="booking-header">
        <h1>Join the <i>CanineCartel</i></h1>
        <p className="subtitle">CONTACT DOUGLAS DAVENPORT</p>
      </header>

      <div className="booking-layout">
        {/* Left Side: Form (Dark) */}
        <section className="booking-form-wrapper">
          <div className="form-card-dark">
            <h2>Ready to Join?</h2>
            <p className="form-subtext">Submit your application for a professional consultation with Douglas Davenport.</p>

            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label>FIRST NAME</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="John" required />
                </div>
                <div className="form-group">
                  <label>LAST NAME</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Doe" required />
                </div>
                <div className="form-group">
                  <label>PHONE NUMBER</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="0400 000 000" required />
                </div>
                <div className="form-group">
                  <label>CANINE BREED</label>
                  <input type="text" name="breed" value={formData.breed} onChange={handleInputChange} placeholder="G. Shepherd" required />
                </div>
              </div>

              <div className="form-group">
                <label>SELECT PROGRAM</label>
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="dark-select"
                  required
                >
                  <option value="" disabled>Choose a training program</option>
                  {allProgramsList.map(prog => (
                    <option key={prog} value={prog}>{prog}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>TRAINING OBJECTIVE</label>
                <textarea
                  name="objective"
                  value={formData.objective}
                  onChange={handleInputChange}
                  placeholder="How can Douglas assist you?"
                  required
                ></textarea>
              </div>

              <button type="submit" className={`submit-btn ${!isFormValid() ? 'locked' : ''}`} disabled={loading || !isFormValid()}>
                {loading ? 'SENDING...' : 'SUBMIT APPLICATION'}
              </button>
            </form>
          </div>
        </section>

        {/* Right Side: Calendar (Light) */}
        <section className="calendar-wrapper">
          <div className="calendar-card-light">
            <div className="calendar-header">
              <h3>Schedule Session</h3>
              <span className="month-display">{monthName} {currentYear}</span>
            </div>

            {!selectedProgram ? (
              <div className="calendar-placeholder">
                <p>Select a program first to see available dates</p>
              </div>
            ) : (
              <>
                <div className="calendar-grid">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                    <div key={i} className="calendar-day-label">{day}</div>
                  ))}
                  {calendarDays.map((dayObj, i) => {
                    const available = isDayAvailable(dayObj);
                    const isSelected = selectedDay === dayObj.day && dayObj.currentMonth;
                    return (
                      <button
                        key={i}
                        type="button"
                        disabled={!available}
                        onClick={() => setSelectedDay(dayObj.day)}
                        className={`calendar-date ${!dayObj.currentMonth ? 'other-month' : ''} ${available ? 'is-available' : 'is-unavailable'} ${isSelected ? 'is-selected' : ''}`}
                      >
                        {dayObj.day}
                      </button>
                    );
                  })}
                </div>

                {selectedDay && (
                  <div className="slots-area animate-fade-in">
                    <h4>AVAILABLE SLOTS</h4>
                    <div className="slots-grid">
                      {availableSlots.map(slot => (
                        <button
                          key={slot}
                          type="button"
                          className={`slot-chip ${selectedSlot === slot ? 'active' : ''}`}
                          onClick={() => setSelectedSlot(slot)}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </div>

      <style>{`
                .booking-page {
                    width: 100%;
                    padding-bottom: 100px;
                }
                .booking-header {
                    text-align: center;
                    padding: 80px 0 60px;
                }
                .booking-header h1 {
                    font-size: 88px;
                    margin-bottom: 24px;
                    font-family: 'Playfair Display', serif;
                    letter-spacing: -3px;
                    line-height: 0.9;
                }
                .booking-header h1 i {
                    font-style: italic;
                    color: #F59E0B;
                }
                .subtitle {
                    font-size: 12px;
                    font-weight: 800;
                    color: #888;
                    letter-spacing: 3px;
                }

                .booking-layout {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 40px;
                    align-items: start;
                }
                @media (max-width: 991px) {
                    .booking-layout { grid-template-columns: 1fr; }
                }

                /* Dark Form Card */
                .form-card-dark {
                    background: #1c1917;
                    border-radius: 48px;
                    padding: 60px;
                    color: white;
                    box-shadow: 0 40px 100px rgba(0,0,0,0.15);
                }
                .form-card-dark h2 { font-size: 42px; color: white; margin-bottom: 24px; }
                .form-subtext { color: #888; font-size: 16px; line-height: 1.6; margin-bottom: 48px; }

                .form-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    margin-bottom: 20px;
                }
                @media (max-width: 600px) {
                    .form-grid { grid-template-columns: 1fr; }
                }

                .form-group { margin-bottom: 24px; }
                .form-group label {
                    display: block;
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 1.5px;
                    color: #555;
                    margin-bottom: 12px;
                }
                .form-group input, 
                .form-group textarea, 
                .dark-select {
                    width: 100%;
                    background: white;
                    border: none;
                    border-radius: 16px;
                    padding: 20px;
                    font-size: 16px;
                    font-family: inherit;
                    color: #1a1a1a;
                }
                .form-group textarea { height: 120px; resize: none; }

                .submit-btn {
                    width: 100%;
                    background: #F59E0B;
                    color: white;
                    padding: 24px;
                    border-radius: 50px;
                    font-weight: 900;
                    font-size: 15px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    box-shadow: 0 15px 35px rgba(245, 158, 11, 0.4);
                    border: none;
                    cursor: pointer;
                }
                .submit-btn:hover {
                    background: #D97706;
                    transform: scale(1.03) translateY(-5px);
                    box-shadow: 0 25px 50px rgba(217, 119, 6, 0.5);
                }
                .submit-btn.locked {
                    background: #333;
                    color: #666;
                    cursor: not-allowed;
                    box-shadow: none;
                }

                /* Light Calendar Card */
                .calendar-wrapper {
                    position: sticky;
                    top: 100px;
                    height: fit-content;
                }
                .calendar-card-light {
                    background: white;
                    border-radius: 48px;
                    padding: 60px;
                    box-shadow: 0 40px 100px rgba(0,0,0,0.05);
                    border: 1px solid #f0f0f0;
                    min-height: 500px;
                    display: flex;
                    flex-direction: column;
                }
                .calendar-header { margin-bottom: 40px; }
                .calendar-header h3 { font-size: 32px; margin-bottom: 8px; }
                .month-display { font-size: 12px; font-weight: 900; color: #F59E0B; letter-spacing: 2px; }

                .calendar-placeholder {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    color: #1c1917;
                    font-weight: 600;
                    padding: 0 40px;
                }

                .calendar-grid {
                    display: grid;
                    grid-template-columns: repeat(7, 1fr);
                    gap: 12px;
                    margin-bottom: 40px;
                }
                .calendar-day-label {
                    text-align: center;
                    font-size: 10px;
                    font-weight: 900;
                    color: #ddd;
                }
                .calendar-date {
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 12px;
                    font-size: 14px;
                    font-weight: 700;
                    transition: all 0.2s;
                    background: transparent;
                }
                .calendar-date.is-available {
                    color: #1c1917;
                    cursor: pointer;
                }
                .calendar-date.is-available:hover {
                    background: #f8f7f5;
                }
                .calendar-date.is-selected {
                    background: #F59E0B !important;
                    color: white !important;
                }
                .calendar-date.is-unavailable {
                    color: #eee;
                    cursor: not-allowed;
                }
                .calendar-date.other-month {
                    opacity: 0;
                    pointer-events: none;
                }

                .slots-area h4 {
                    font-size: 10px;
                    font-weight: 900;
                    letter-spacing: 2px;
                    color: #ddd;
                    margin-bottom: 20px;
                }
                .slots-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 12px;
                }
                .slot-chip {
                    padding: 16px;
                    border-radius: 12px;
                    background: #f8f7f5;
                    font-size: 12px;
                    font-weight: 800;
                    transition: all 0.2s;
                    border: 1px solid transparent;
                }
                .slot-chip.active {
                    background: #1c1917;
                    color: white;
                }
            `}</style>
    </div>
  );
};

export default Booking;
