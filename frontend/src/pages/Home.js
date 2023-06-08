import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';



function Home() {
  return (
    <main id="home">
      <div className="home-container">
        <Header />
        <h1>Paprback</h1>
        <h2>Welcome to the Landing Page</h2>
        <Footer />
      </div>
    </main>
  );
}

export default Home;