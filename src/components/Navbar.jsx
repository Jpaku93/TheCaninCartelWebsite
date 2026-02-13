import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="logo-link">
          <div className="logo-icon-box">
            <img src="/BlackLogo.png" alt="Canine Cartel" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <span className="logo-text">CANINE<b>CARTEL</b></span>
        </Link>

        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>HOME</NavLink>
          <NavLink to="/programs" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>PROGRAMS</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>ABOUT</NavLink>
          <button className="nav-join-btn" onClick={() => navigate('/booking')}>JOIN THE CARTEL</button>
        </div>
      </div>
      <style>{`
                .navbar {
                    height: 90px;
                    background: white;
                    border-bottom: 1px solid #F0F0F0;
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    display: flex;
                    align-items: center;
                }
                .nav-content {
                    width: 100%;
                    max-width: 1100px;
                    margin: 0 auto;
                    padding: 0 40px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                @media (max-width: 768px) {
                    .navbar { display: none; }
                }

                .logo-link {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    text-decoration: none;
                }
                .logo-icon-box {
                    width: 58px;
                    height: 58px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .logo-text {
                    font-size: 26px;
                    letter-spacing: 2px;
                    color: black !important;
                    font-weight: 500;
                }
                .logo-text b { color: black !important; font-weight: 800; }

                .nav-links {
                    display: flex;
                    align-items: center;
                    gap: 40px;
                }
                .nav-item {
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 2px;
                    color: black !important;
                    transition: all 0.3s;
                    text-decoration: none;
                    position: relative;
                    padding-bottom: 4px;
                }
                .nav-item:hover, .nav-item.active { color: black !important; }
                .nav-item.active::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: #F59E0B;
                    border-radius: 2px;
                }

                .nav-join-btn {
                    background: #F59E0B;
                    color: white;
                    padding: 14px 28px;
                    border-radius: 12px;
                    font-size: 11px;
                    font-weight: 900;
                    letter-spacing: 2px;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    box-shadow: 0 10px 25px rgba(245, 158, 11, 0.3);
                    border: none;
                    cursor: pointer;
                }
                .nav-join-btn:hover {
                    background: #D97706;
                    transform: scale(1.05) translateY(-2px);
                    box-shadow: 0 20px 40px rgba(217, 119, 6, 0.4);
                }
                .nav-join-btn:active {
                    transform: scale(0.98);
                }
            `}</style>
    </nav>
  );
};

export default Navbar;
