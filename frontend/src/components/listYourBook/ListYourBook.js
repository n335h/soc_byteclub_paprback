import ListYourBookInput from "../listYourBookInput/ListYourBookInput";
import ListYourBookOutput from "../listYourBookOutput/ListYourBookOutput";
import React, { useState } from "react";
import { books } from "../../data.js";

function ListYourBook() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([
    {
      title: "",
      author: "",
      cover: "",
      publishedDate: "",
    },
  ]);

  function handleChange(e) {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
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

  return (
    <div>
      <h1>List Your Book</h1>
      <ListYourBookInput onChange={handleChange} onClick={handleSearchClick} />
      <ListYourBookOutput book={searchResult[0]} />
    </div>
  );
}

export default ListYourBook;
