import { Link } from 'react-router-dom';
import logo from '../../assets/icons/paprback_logo.svg';
import './header.css';
import React, { useState, useEffect } from 'react';
import userIconGrey from '../../assets/icons/userIconGrey.png';
import LoginButton from '../loginButton/loginButton';
import LogoutButton from '../logoutButton/logoutButton';
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // useEffect to handle resizing and closing the menu on smaller screens
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

  // Function to toggle the menu
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="header">
      <div className="header-container">
        <div className="header-top">
          <div className="logo-container">
            {/* Render the logo and link it to the homepage */}
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="user-access">
            {/* Render signup and login buttons and link them to their respective pages */}
            <Link to="https://dev-4lkat7o8wi7ta0m4.us.auth0.com/u/signup?state=hKFo2SBVZi1HMFpjRjRsalMwbng4ZUNILS0zeFBSS1VZODNMUKFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIFgtQ2x6TXVNanJFaXF0OWk5ZUNzUXowTDVKeUIwVzNSo2NpZNkgNENXNlRRSEYxQVlnUGlDem9GTmY2d3V2aVlPUDRMVTg">
              <button className="signup">Sign up</button>
            </Link>
            <LoginButton />
            <LogoutButton />
          </div>
        </div>
        <div className="menuBar">
          <div className="header-bottom">
            <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
              {/* Render user icon and link it to the login page */}
              <Link to="/login">
                <img
                  className="userIcon"
                  src={userIconGrey}
                  alt="User"
                />
              </Link>
              <div className="menu-toggle" onClick={handleToggleMenu}>
                {/* Render the menu toggle button */}
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
              <ul className={`menu ${menuOpen ? 'open' : ''}`}>
                {/* Render navigation buttons and link them to their respective pages */}
                <li>
                  <Link to="/browse">
                    <button id="navbutton" className="browse">
                      Browse
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <button id="navbutton" className="about">
                      About
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/faq">
                    <button id="navbutton" className="faq">
                      FAQ
                    </button>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
