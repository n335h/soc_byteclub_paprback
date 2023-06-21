import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import './bookview.css';




const BookView = () => {

  const location = useLocation();

  const {selectedBook} = location.state;
  const { listing_id, user_id, title, author, isbn, cover_img, condition, notes } = selectedBook;


  return (
    <div id="book-view">
      <div id="book-view-container">
      <div id="book-cover">
        <img src={cover_img} alt={title} />
      </div>

      <div id="book-info">
        <h1 id="book-title">{title}</h1>
        <h2 id="book-author">{author}</h2>
        <h3 id="book-isbn">{isbn}</h3>
        <h3 id="condition">{condition}</h3>
        <h3 id="notes">{notes}</h3>
      </div>
      <button id="contact">Contact</button>
      <Link to="/browse"><button id="book-view-close">Close</button></Link>
      </div>
    </div>
  )
}

export default BookView;