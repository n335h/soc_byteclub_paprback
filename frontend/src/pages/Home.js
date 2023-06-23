import homeHero from '../assets/images/homeHero.jpg';
import { Link } from 'react-router-dom';
import './Home.css';
function Home() {
  return (
    <section className="pages" id="home">
      <div className="home-container">
        <div id="popin" className="header-title animate-pop-in">
          {' '}
          <h1>We are the chapters we share</h1>
        </div>
        <div id="popin" className="header-subtitle animate-pop-in">
          <h1>We are the stories we discover</h1>
        </div>
        <div id="popin" className="header-subtitle2 animate-pop-in">
          <h1>We are Paprback</h1>
        </div>

        <Link to="https://dev-4lkat7o8wi7ta0m4.us.auth0.com/u/signup?state=hKFo2SAxdFB6ZHQwamhJdmgyOXB3a3Y0RGRjZzRldVI0MnFreqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIEo2SU1TM1d2TDF1amktVEhNVXE5OENwR0tfWXFGUmhVo2NpZNkgNENXNlRRSEYxQVlnUGlDem9GTmY2d3V2aVlPUDRMVTg">
          <button id="heroSignup" className="signup">
            Get Started
          </button>
        </Link>

        <img className="hero" src={homeHero} alt="Logo" />
      </div>
    </section>
  );
}

export default Home;
