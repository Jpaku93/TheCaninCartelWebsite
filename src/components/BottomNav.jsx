import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <span className="material-symbols-outlined">home</span>
        <span>HOME</span>
      </NavLink>
      <NavLink to="/classes" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <span className="material-symbols-outlined">school</span>
        <span>CLASSES</span>
      </NavLink>
      <NavLink to="/booking" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <span className="material-symbols-outlined">calendar_today</span>
        <span>BOOKING</span>
      </NavLink>
      <NavLink to="/method" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <span className="material-symbols-outlined">person</span>
        <span>PROFILE</span>
      </NavLink>
      <style>{`
        .bottom-nav {
          position: fixed;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 480px;
          height: 70px;
          background: white;
          display: flex;
          justify-content: space-around;
          align-items: center;
          border-top: 1px solid #EEE;
          padding-bottom: 5px;
          z-index: 1000;
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
          color: #999;
          font-size: 10px;
          font-weight: 700;
          transition: var(--transition);
        }
        .nav-item.active {
          color: var(--primary-color);
        }
        .nav-item .material-symbols-outlined {
          font-size: 24px;
        }
      `}</style>
    </div>
  );
};

export default BottomNav;
