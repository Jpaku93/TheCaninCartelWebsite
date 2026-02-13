import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <span className="material-symbols-outlined">home</span>
        <span>HOME</span>
      </NavLink>
      <NavLink to="/programs" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <span className="material-symbols-outlined">school</span>
        <span>CLASSES</span>
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <span className="material-symbols-outlined">person</span>
        <span>ABOUT</span>
      </NavLink>
      <NavLink to="/booking" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <div className="booking-icon-wrapper">
          <span className="material-symbols-outlined">calendar_today</span>
        </div>
        <span>BOOKING</span>
      </NavLink>
      <style>{`
                .bottom-nav {
                    position: fixed;
                    bottom: 24px;
                    left: 20px;
                    right: 20px;
                    height: 70px;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(20px);
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    border-radius: 24px;
                    z-index: 1000;
                    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
                    border: 1px solid rgba(255,255,255,1);
                }
                @media (min-width: 768px) {
                    .bottom-nav {
                        display: none;
                    }
                }
                .nav-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 4px;
                    color: #888;
                    text-decoration: none;
                    transition: all 0.3s;
                }
                .nav-item.active {
                    color: #F59E0B;
                }
                .nav-item span {
                    font-size: 9px;
                    font-weight: 800;
                    letter-spacing: 1px;
                }
                .nav-item .material-symbols-outlined {
                    font-size: 20px;
                }
                .booking-icon-wrapper {
                    width: 44px;
                    height: 44px;
                    background: #F59E0B;
                    color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-top: -30px;
                    border: 4px solid white;
                    box-shadow: 0 10px 20px rgba(245, 158, 11, 0.2);
                }
                .nav-item.active .booking-icon-wrapper {
                    background: #F59E0B;
                    color: white;
                }
            `}</style>
    </div>
  );
};

export default BottomNav;
