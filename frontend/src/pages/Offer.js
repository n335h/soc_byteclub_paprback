import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CoverDefault from '../assets/images/coverDefault.png';
import './offer.css';


// Navigate to this page 

// Contact form to send an offer to another user

// Form displays other users email address






function Offer() {

  const location = useLocation();

  const otherBook = location.state.selectedBook;

  const [myListings, setMyListings] = useState([]);
  const [mySelectedBook, setMySelectedBook] = useState({
    cover_img: CoverDefault,
    title: '',
    author: '',
    condition: '',
  });
  


  useEffect(() => {
    listingsCall();
    // console.log("MY LISTINGS", myListings)
  }, []);


  async function listingsCall() {
    try {
      const response = await fetch('http://localhost:5432/api/listings');
      const data = await response.json();

      if (response.ok) {
        setMyListings(data.payload.myListings);
        
      } else {
        setMyListings([]);
      }
    } catch (error) {
      console.error('Error fetching listings:', error);
      setMyListings([]);
    }
  }

  
  const handleSelect = (event) => {
    const selectedListing = myListings.find((listing) => {
      const optionValue = event.target.value;
      const [listingId, title, condition] = optionValue.split(':');
      return listing.listing_id === parseInt(listingId);
    });

    if (selectedListing) {
      setMySelectedBook(selectedListing);
    }
  };


  return (
    <section className='pages' id="offer">
      <div className="offer-container">
      <h1>Your Swap</h1>
      <div id="select-your-book">
      <label htmlFor="select">Select your book</label>
      <form  id="select-book" onChange={handleSelect}>
        <select
          
          className="selectDropdown" // Add custom class here
          name="select"
          placeholder="Your books..."
        >
          <option value="defaultValue" disabled>
            {' '}
            Your books...{' '} 
          </option>
          {myListings.map((listing) => (
          <option 
          value={`${listing.listing_id}:${listing.title}:${listing.condition}`} 
          key={listing.listing_id}
          >
          {listing.title} - {listing.condition}
          </option>
          ))}

        </select>
      </form>
      </div>
      <div id="books-display">
      <div id="my-book">
        <h3>{mySelectedBook.title}</h3>
        <h4>{mySelectedBook.author}</h4>
        <img src={ mySelectedBook.cover_img } alt={mySelectedBook.title}></img>
        <h4>{mySelectedBook.condition}</h4>
      </div>
      <div id="their-book">
        <h3>{mySelectedBook.title}</h3>
        <h4>{mySelectedBook.author}</h4>
        <img src={ mySelectedBook.cover_img } alt={mySelectedBook.title}></img>
        <h4>{mySelectedBook.condition}</h4>
      </div>
     
      </div>
      </div>
    </section>
  );
}

export default Offer;