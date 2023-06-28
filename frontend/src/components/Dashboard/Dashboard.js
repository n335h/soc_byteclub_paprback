import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="user-info-container">
      <div className="userDetails">
        <h1 className="welcome-text">
          Welcome <span className="name-text">Zendaya!</span>
        </h1>
        <p className="inner-text">
          <span className="bolded">Name:</span> Zendaya Coleman
        </p>
        <p className="inner-text">
          <span className="bolded">Email:</span> ZColeman@gmail.com
        </p>
        <p className="inner-text">
          <span className="bolded">Address:</span> 27 Fake Street,
          Faketon, SE1 4NF
        </p>
        <p className="inner-text">
          <span className="bolded">Phone:</span> 0121 987 654
        </p>
        <Link to="http://localhost:3000/browse">
          <button className="find-a-book-button">Find A Book</button>
        </Link>
      </div>

      <div className="user-image-container">
        <img
          className="user-image"
          src="https://i.pinimg.com/474x/2b/a9/ec/2ba9ecf8e084d6b699ea6b5dd7e5575d.jpg"
          alt="Zendaya"
        ></img>
      </div>
    </div>
  );
}

export default Dashboard;
