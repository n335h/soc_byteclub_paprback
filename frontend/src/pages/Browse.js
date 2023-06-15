import React from "react";
import Book from "../components/book/Book";
import { books } from "../data";
import './browse.css';




function Books() {


  return (
    <section className='pages' id="books">
      <div className="books-container">
      <h1>Browse Books</h1>
      <div className="books-grid">
      {books.map((book) => (
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