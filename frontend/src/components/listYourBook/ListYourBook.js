import ListYourBookInput from '../listYourBookInput/ListYourBookInput';
import ListYourBookOutput from '../listYourBookOutput/ListYourBookOutput';
import React, { useState } from 'react';
import './listYourBook.css';

function ListYourBook() {
  // State variables
  const [condition, setCondition] = useState('');
  const [notes, setNotes] = useState('');
  const [newListing, setNewListing] = useState({
    title: '',
    author: '',
    isbn: '',
    condition: '',
    notes: '',
    cover_img: '',
    user_id: 1,
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState({
    title: '',
    author: '',
    cover_img: '',
    publishedDate: '',
  });

  // Function to handle changes in the search bar input
  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  // Function to handle Enter key press in the search bar
  function handleEnter(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      handleSearchClick();
    }
  }

  // Function to handle the search button click
  function handleSearchClick() {
    if (searchTerm) {
      // Fetch data from the Google Books API based on the search term
      fetch(`http://localhost:5432/api/books/${searchTerm}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error('No book found'); // Throw an error if no book is found
            
          }
          
        })
        .then((data) => setSearchResult(data.payload[0])) // Update the searchResult state with the data from the API
        .catch((error) => {
          console.error('Error fetching data:', error); // Log the error
          setSearchResult({
            title: '',
            author: '',
            cover_img: '',
            publishedDate: '',
          });
          alert('No book found. Please try again.'); // Display an alert
        });
      console.log(searchResult);
    }
  }

  // Function to update the condition state
  function updateCondition(e) { // e is the event object
    setCondition(e.target.value); // Update the condition state with the value from the select element
  }

  // Function to update the notes state
  function updateNotes(e) {
    setNotes(e.target.value); // Update the notes state with the value from the input element
  }

  // Function to handle the listing button click
  function handleListingClick() {
    // Send a POST request to the backend API to create a new listing
    fetch('http://localhost:5432/api/listings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newListing),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Failed to create listing');
        }
      })
      .then((data) => console.log(data))
      .catch((error) => {
        console.error('Error creating listing:', error);
        // If there is an error, update the newListing object with the search result data and other values
        setNewListing({
          title: searchResult.title,
          author: searchResult.author,
          isbn: searchResult.isbn,
          condition: condition,
          notes: notes,
          cover_img: searchResult.cover_img,
          user_id: 2,
        });
      });

    console.table(newListing);
    console.log('List Post Clicked');
    console.table(newListing);
  }

  // Render the component
  return (
    <div id="listBookContainer">
      <h1>List Your Book</h1>
      {/* Render the input component for the search bar */}
      <ListYourBookInput
        onChange={handleChange} // Pass the handleChange function as a prop to the input component - Search book for listing
        onClick={handleSearchClick} // Pass the handleSearchClick function as a prop to the input component- Search book for listing
        onKeyPress={handleEnter} // Pass the handleEnter function as a prop to the input component  - Search book for listing
      />
      {/* Render the output component for the book listing */}
      <ListYourBookOutput
        onClick={handleListingClick} // Pass the handleListingClick function as a prop to the output component - Create listing
        onChangeCondition={updateCondition} // Pass the updateCondition function as a prop to the output component - Create listing
        onChangeNotes={updateNotes} // Pass the updateNotes function as a prop to the output component - Create listing
        book={searchResult} // Pass the searchResult state as a prop to the output component -  Create listing
      />
    </div>
  );
}

export default ListYourBook;
