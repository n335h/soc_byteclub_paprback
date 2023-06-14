import ListYourBookInput from '../listYourBookInput/ListYourBookInput';
import ListYourBookOutput from '../listYourBookOutput/ListYourBookOutput';
import React, { useState, useEffect } from 'react';
import { books } from '../../data.js';

//PLAN
//1. fetch our API

function ListYourBook() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([
    {
      title: '',
      author: '',
      cover: '',
      publishedDate: '',
    },
  ]);

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleEnter(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      handleSearchClick();
    }
  }

  function handleSearchClick(e) {

    //if searchTerm === ISBN of any book in database return that book

    let result = books.filter((book) => {
      if (book.isbn.toLowerCase() === searchTerm.toLowerCase()) {
        return book;
      }
      if (book.title.toLowerCase() === searchTerm.toLowerCase()) {
        return book;
      }
    });
    console.log(result);
    
    if (result.length === 0) {
      result.push({
        title: "",
        author: "",
        cover: "",
        publishedDate: "",
      });
    }

    setSearchResult(result);

    console.log(searchResult);

  }

//connecting to our database!

  useEffect(() => {
  async function getData() {
    const response = await fetch("http://example.com/movies.json");
    const jsonData = await response.json();
    console.log(jsonData);
  }})
  


  return (
    <div>
      <h1>List Your Book</h1>
      <ListYourBookInput
        onChange={handleChange}
        onClick={handleSearchClick}
        onKeyPress={handleEnter}
      />
      <ListYourBookOutput book={searchResult[0]} />
    </div>
  );
}

export default ListYourBook;
