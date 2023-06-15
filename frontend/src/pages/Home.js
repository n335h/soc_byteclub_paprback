import homeHero from '../assets/images/homeHero.jpg';
import './Home.css';
function Home() {
  return (
    <section className='pages' id="home">
      <div className="home-container">
        <img className="hero" src={homeHero} alt="Logo" />
      </div>
    </section>
  );
}

export default Home;
