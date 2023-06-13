import ListYourBookInput from '../listYourBookInput/ListYourBookInput';
import ListYourBookOutput from '../listYourBookOutput/ListYourBookOutput';
import React, { useState } from 'react';


function ListYourBook() {
  const [book, setBook] = useState('');

  function handleChange(e) {
    setBook(e.target.value);
    console.log(book);
  }
  function handleSearchClick(e) {

   
  }

  return (
    <div>
      <h1>List Your Book</h1>
      <ListYourBookInput onChange={handleChange} />
      <ListYourBookOutput />
    </div>
  );
}

export default ListYourBook;
