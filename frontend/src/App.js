import React from "react";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Browse from "./pages/Browse";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Listings from "./pages/Listings";
import ListBook from "./pages/ListBook";
import Offer from "./pages/Offer";

import Footer from "./components/footer/Footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:5432/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <main className="App">
      <Header />
      <h1>{message}</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/listbook" element={<ListBook />} />
        <Route path="/offer" element={<Offer />} />
      </Routes>

      <Footer />
    </main>
  );
}

export default App;
