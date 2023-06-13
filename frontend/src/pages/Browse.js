import React from "react";
import Book from "../components/book/Book";
import { books } from "../data";
import './browse.css';




function Books() {


  return (
    <section id="books">
      <div className="books-container">
      <h1>Browse Books</h1>
      <div className="books-grid">
      {books.map((book) => (
      <Book
      key={book.isbn}
      isbn={book.isbn}
      cover={book.cover}
      title={book.title}
      author={book.author}
      publisher={book.publisher}
      publishedDate={book.publishedDate}
      genre={book.genre}
       />
      ))}
      </div>
      </div>
    </section>
  );
}

export default Books;