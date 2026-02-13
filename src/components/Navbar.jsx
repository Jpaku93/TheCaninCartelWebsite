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
                    height: 120px;
                    background: transparent;
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    display: flex;
                    align-items: center;
                    padding: 0 40px;
                }
                .nav-content {
                    width: 100%;
                    max-width: 1200px;
                    margin: 0 auto;
                    background: white;
                    height: 80px;
                    padding: 0 40px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-radius: 100px;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.06);
                }
                @media (max-width: 768px) {
                    .navbar { display: none; }
                }

                .logo-link {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    text-decoration: none;
                    flex: 1;
                }
                .logo-icon-box {
                    width: 42px;
                    height: 42px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .logo-text {
                    font-size: 20px;
                    letter-spacing: 1.5px;
                    color: black !important;
                    font-weight: 700;
                    text-transform: uppercase;
                }
                .logo-text b { color: #F59E0B !important; font-weight: 800; }

                .nav-links {
                    display: flex;
                    align-items: center;
                    gap: 32px;
                    flex: 2;
                    justify-content: center;
                }
                .nav-item {
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 1px;
                    color: #444 !important;
                    transition: all 0.3s;
                    text-decoration: none;
                    text-transform: uppercase;
                }
                .nav-item:hover, .nav-item.active { color: #000 !important; }

                .nav-cta-wrapper {
                   flex: 1;
                   display: flex;
                   justify-content: flex-end;
                }
                .nav-join-btn {
                    background: #D97706;
                    color: white;
                    padding: 12px 28px;
                    border-radius: 50px;
                    font-size: 10px;
                    font-weight: 900;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    box-shadow: 0 10px 20px rgba(217, 119, 6, 0.2);
                    border: none;
                    cursor: pointer;
                }
                .nav-join-btn:hover {
                    background: #B45309;
                    transform: translateY(-2px);
                    box-shadow: 0 15px 30px rgba(217, 119, 6, 0.3);
                }
            `}</style>
    </nav>
  );
};

export default Navbar;
