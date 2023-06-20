import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Book from '../components/book/Book';
import Close from '../assets/icons/close.svg';
import './browse.css';

function Books() {

  const [searchTerm, setSearchTerm] = useState('');
  const [listings, setListings] = useState([]); 

  const [selectedBook, setSelectedBook] = useState({
    listing_id: '',
    user_id: '',
    cover_img: '',
    title: '',
    author: '',
    isbn: '',
    condition: '',
    notes: ''
  }); 

  const navToBookView = useNavigate();

  const apiCall = async () => {
    const response = await fetch('http://localhost:5432/api/listings');
    const data = await response.json();
  
    if (response.ok) {
      setListings(data.payload);
      
    } else {
      setListings([]);
    }
  
  };


  useEffect( () => {
    // call listings api 
    // retreive all listings
    // pass to book display: 
    apiCall();
  
     
  }, []);





  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredListings = listings.filter(
    (listing) =>
    listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    listing.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchClick = () => {
    setListings(filteredListings);
    const searchInput = document.querySelector('.searchInputBrowse');
    searchInput.value = '';
    const close = document.getElementById('close');
    close.style.display = 'block';
    const searchedBook = document.getElementById('book-enclosure');
    searchedBook.style.gridTemplateColumns  = 'repeat(1, minmax(150px, 1fr)';
  };

  const handleBookClick = (listing) => {
    console.log('Book Clicked:', listing);
    setSelectedBook(listing);
    navToBookView(`/bookview/${listing.listing_id}`, {state: {selectedBook: listing}});
  };

  const handleCloseClick = () => {
    setListings(listings);
    const close = document.getElementById('close');
    close.style.display = 'none';
    window.location.reload();
  };




console.log(selectedBook);


  return (
    <section className="pages" id="books">
      <div className="books-container">
        <h1>Browse Books</h1>
        <div className="search-container">
          <input
            className="searchInputBrowse"
            type="text"
            placeholder="Search"
            onChange={handleSearchChange}
          ></input>
          <button className="searchButton" onClick={handleSearchClick}>Search</button>
        </div>

        <div id="books-grid-browse">
          {listings.map((listing) => (
            <div id="book-enclosure">
            <Book
              id="grid-book"
              key={listing.listing_id}
              cover_img={listing.cover_img}
              title={listing.title}
              author={listing.author}
              onClick={() => handleBookClick(listing)}
            />
            <button id="close" onClick={handleCloseClick}><img src={Close} alt="Close"/></button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Books;
