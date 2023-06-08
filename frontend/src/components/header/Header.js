import logo from '../../assets/icons/paprback_logo.svg';
import './header.css';



function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-top">
          <div className="logo-container">
            <img src={logo} alt="Logo" />
          </div>
          <div className="user-access">
            <button className="signup">Sign up</button>
            <button className="login">Login</button>
          </div>
        </div>
        <div className="header-bottom">
          <div className="navbar">
            <button className="browse">Browse</button>
            <button className="about">About</button>
            <button className="faq">FAQ</button>
          </div>
        </div>
      </div>  
    </header>
  );
}

export default Header;