import ListYourBookInput from '../listYourBookInput/ListYourBookInput';
import ListYourBookOutput from '../listYourBookOutput/ListYourBookOutput';
import React, { useState } from 'react';

//we want the areas to clear after the book is listed
//if searchterm is EMPTY set the result to empty
//LESSON - use useEffect sparingly - it will cause an infinite loop if you don't use it correctly
//Add in logic that accounts for lazy typing  - adjust the fetch request change it to LIKE
//on the sql side put the url's for the images into the database
//connect post listing to the backend - make an addition to the database


function ListYourBook() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState({
    title: '',
    author: '',
    cover: '',
    publishedDate: '',
  });

  // useEffect(() => {
  //   handleSearchClick();
  // }, [searchTerm]);

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleEnter(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      handleSearchClick();
    }
  }


  function handleSearchClick() {
    if (searchTerm) {
      fetch(`http://localhost:5432/api/books/${searchTerm}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error('No book found');
          }
        })
        .then((data) => setSearchResult(data.payload[0]))
        .catch((error) => {
          console.error('Error fetching data:', error);
          setSearchResult({
            title: '',
            author: '',
            cover: '',
            publishedDate: '',
          });
        });
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
      <ListYourBookOutput book={searchResult} />
    </div>
  );
}

export default ListYourBook;
