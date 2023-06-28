import './footer.css';
import Logo from '../../assets/icons/paprback_logo_white.svg';
import gbWhite from '../../assets/icons/gbWhite.svg';
import ytWhite from '../../assets/icons/ytWhite.svg';
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="company-details"></div>
          <div className="footer-branding">
            <div className="footer-socials">
              <a href="https://github.com/benhensor/soc_byteclub_paprback">
                <img
                  src={gbWhite}
                  alt="gitHub"
                  className="footer-social-icon"
                />
              </a>
              <a href="https://github.com/benhensor/soc_byteclub_paprback">
                <img
                  src={ytWhite}
                  alt="youtube"
                  className="footer-social-icon"
                />
              </a>
            </div>
            <div className="logo">
              <img src={Logo} alt="" className="footer-logo" />
            </div>{' '}
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
