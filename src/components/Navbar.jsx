import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="logo">
          <span className="logo-text">CANINECARTEL</span>
        </Link>
        <div className="nav-links desktop-only">
          <Link to="/">HOME</Link>
          <Link to="/classes">CLASSES</Link>
          <Link to="/method">METHOD</Link>
          <Link to="/booking" className="nav-cta">BOOK NOW</Link>
        </div>
      </div>
      <style>{`
        .navbar {
          padding: 20px 32px;
          background: var(--nav-bg);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 1000;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          color: var(--primary-color);
          font-size: 20px;
        }
        .logo-icon {
          background: var(--primary-color);
          color: white;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 16px;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .nav-links a {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--primary-color);
          transition: var(--transition);
        }
        .nav-links a:hover {
          color: var(--secondary-color);
        }
        .nav-cta {
          background: var(--primary-color);
          color: white !important;
          padding: 10px 24px;
          border-radius: 8px;
          transition: var(--transition);
        }
        .nav-cta:hover {
          background: var(--secondary-color);
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(200, 169, 126, 0.3);
        }
        .nav-cta:active {
          transform: scale(0.95);
        }

        @media (max-width: 767px) {
          .navbar {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
