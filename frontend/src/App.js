import React from 'react';
import Header from '../components/header/Header';
import Home from './pages/Home';
import Footer from '../components/footer/Footer';
import './App.css';

function App() {
  return (
    <main className="App">
      <Header />
      <Home />
      <Footer />
    </main>
  );
}

export default App;
