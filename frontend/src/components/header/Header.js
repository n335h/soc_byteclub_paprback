import { Link } from 'react-router-dom';
import logo from '../../assets/icons/paprback_logo.svg';
import './header.css';
import React, { useState, useEffect } from 'react';
import userIconGrey from '../../assets/icons/userIconGrey.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="header-container">
        <div className="header-top">
          <div className="logo-container">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="user-access">
            <Link to="/signup">
              <button className="signup">Sign up</button>
            </Link>
            <Link to="/login">
              <button className="login">Login</button>
            </Link>
          </div>

          <div className="menuBar">
            <div className="header-bottom">
              <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
                <Link to="/login">
                  <img
                    className="userIcon"
                    src={userIconGrey}
                    alt="User"
                  />
                </Link>
                <div
                  className="menu-toggle"
                  onClick={handleToggleMenu}
                >
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>

                <ul className={`menu ${menuOpen ? 'open' : ''}`}>
                  <li>
                    <Link to="/browse">
                      <button className="browse">Browse</button>
                    </Link>
                  </li>

                  <li>
                    <Link to="/about">
                      <button className="about">About</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq">
                      <button className="faq">FAQ</button>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
