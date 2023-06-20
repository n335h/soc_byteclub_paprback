import React from 'react';
import { useState } from 'react';
import Book from '../components/book/Book';
import { books } from '../data';
import './browse.css';

function Books() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="pages" id="books">
      <div className="books-container">
        <h1>Browse Books</h1>
        <div className="search-container">
          <input
            className="searchInputBrowse"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          ></input>
          <button className="searchButton">Search</button>
        </div>

        <div className="books-grid-browse">
          {filteredBooks.map((book) => (
            <Book
              cover={book.cover}
              title={book.title}
              author={book.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Books;
