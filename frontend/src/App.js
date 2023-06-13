import React from 'react';
import Header from './components/header/Header';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Listings from './pages/Listings';
import ListBook from './pages/ListBook';
import Offer from './pages/Offer';
import { useState } from 'react';


import Footer from './components/footer/Footer';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
    
  return (
    <main className="App">
    <Header />

      
      <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/listings" element={<Listings />} />
      <Route path="/listbook" element={<ListBook />} />
      <Route path="/offer" element={<Offer />} />
      
      </Routes>


      <Footer />
    </main>
   
  );
}

export default App;
