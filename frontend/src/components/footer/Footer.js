import './footer.css';
import Logo from '../../assets/icons/paprback_logo_white.svg';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">

          <div className="company-details">
            {/* <h4 className="footer-link">Customer Services</h4>
            <p className="footer-link">Contact Us</p>
            <p className="footer-link">Customer Service</p>
            <p className="footer-link">FAQ</p>
            <p className="footer-link">Shipping & Delivery</p>
            <p className="footer-link">Company Information</p>
            <p className="footer-link">Careers</p>
            <p className="footer-link">Privacy & Cookies</p>
            <p className="footer-link">Terms & Conditions</p> */}
          </div>

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
