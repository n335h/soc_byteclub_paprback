import ListYourBookInput from '../listYourBookInput/ListYourBookInput';
import ListYourBookOutput from '../listYourBookOutput/ListYourBookOutput';
import React, { useState, useEffect } from 'react';
import { books } from '../../data.js';

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
    function checkBook(book) {
      if (
        book.isbn.toLowerCase() === searchTerm.toLowerCase() ||
        book.title.toLowerCase() === searchTerm.toLowerCase()
      ) {
        return book;
      }
    }
    let result = books.filter(checkBook);

    if (result.length > 0) {
      setSearchResult(result);
    }
  }


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
