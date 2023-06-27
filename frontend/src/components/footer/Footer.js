import './footer.css';
import Logo from '../../assets/icons/paprback_logo_white.svg';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="company-details"></div>
          <div className="footer-branding">
            <div className="logo">
              <img src={Logo} alt="" className="footer-logo" />
            </div>
            <p className="footer-copyright">
              &#169; {year} Byte Club!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
