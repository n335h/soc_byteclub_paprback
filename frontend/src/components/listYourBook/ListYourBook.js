import ListYourBookInput from "../listYourBookInput/ListYourBookInput";
import ListYourBookOutput from "../listYourBookOutput/ListYourBookOutput";
import React, { useState } from "react";
import { books } from "../../data.js";

function ListYourBook() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([{}]);

  function handleChange(e) {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  }
  function handleSearchClick(e) {
    //if searchTerm === ISBN of any book in database return that book
    function checkBook(book) {
      if (book.isbn.toLowerCase() === searchTerm.toLowerCase()) {
        return book;
      }
      if (book.title.toLowerCase() === searchTerm.toLowerCase()) {
        return book;
      }
    }
    let result = books.filter(checkBook);
    console.log(result);
    setSearchResult(result);
    console.log(searchResult);
  }

  return (
    <div>
      <h1>List Your Book</h1>
      <ListYourBookInput onChange={handleChange} onClick={handleSearchClick} />
      <ListYourBookOutput />
    </div>
  );
}

export default ListYourBook;
