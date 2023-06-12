import { Link } from 'react-router-dom';
import logo from '../../assets/icons/paprback_logo.svg';
import './header.css';



function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-top">
          <div className="logo-container">
            <Link to="/"><img src={logo} alt="Logo" /></Link>
          </div>
          <div className="user-access">
            <Link to="/signup"><button className="signup">Sign up</button></Link>
            <Link to="/login"><button className="login">Login</button></Link>
          </div>
        </div>
        <div className="header-bottom">
          <div className="navbar">
            <Link to="/browse"><button className="browse">Browse</button></Link>
            <Link to="/about"><button className="about">About</button></Link>
            <Link to="/faq"><button className="faq">FAQ</button></Link>
          </div>
        </div>
      </div>  
    </header>
  );
}

export default Header;