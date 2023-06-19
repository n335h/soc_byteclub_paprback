import ListYourBookInput from '../listYourBookInput/ListYourBookInput';
import ListYourBookOutput from '../listYourBookOutput/ListYourBookOutput';
import React, { useState, useEffect } from 'react';
import './listYourBook.css';

function ListYourBook() {
  // State variables
  const [condition, setCondition] = useState('');
  const [notes, setNotes] = useState('');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState({
    title: '',
    author: '',
    cover_img: '',
    isbn: ''
  });
  const [newListing, setNewListing] = useState({
    title: '',
    author: '',
    isbn: '',
    condition: '',
    notes: '',
    cover_img: ''
    // user_id: '',
  });

  useEffect(() => {
    setNewListing((prevState) => ({
      ...prevState,
      condition: condition,
      notes: notes
    }));
  }, [condition, notes]);

  useEffect(() => {
    console.log(searchResult)
    }, [searchResult]);

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
      fetch(`http://localhost:5432/api/books/${searchTerm}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error('No book found');
          }
        })
        .then((data) => {
          setSearchResult(data.payload[0]);
          
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setSearchResult({
            title: '',
            author: '',
            cover_img: '',
            isbn: '',
          });
          alert('No book found. Please try again.');
        });
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
    setNewListing({
      ...searchResult,
      condition: condition,
      notes: notes
    });
  }

  // Make the API call when newListing state changes
  useEffect(() => {
    if (newListing.title !== '') {
      fetch('http://localhost:5432/api/listings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newListing),
      })
        .then((res) => {
          if (res.ok) {
            console.log('Listing created successfully!');
            return res.json();
          } else {
            throw new Error('Failed to create listing');
          }
        })
        .then((data) => {
          console.table(newListing);
        })
        .catch((error) => {
          console.error('Error creating listing:', error);
        });
    }
  }, [newListing]);

  

  // // Function to handle the listing button click
  // function handleListingClick() {
  //   // If there is an error, update the newListing object with the search result data and other values
  //   setNewListing({
  //     ...searchResult,
  //     condition: condition,
  //     notes: notes
  //     // cover_img: searchResult.cover_img,
  //     // user_id: 2,
  //   });
  //   // Send a POST request to the backend API to create a new listing
  //   fetch('http://localhost:5432/api/listings', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(newListing),
  //     // Include the OVERRIDING SYSTEM VALUE clause in the fetch request
    
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         console.log("This worked!");
  //         // setSearchResult({
  //         //   title: '',
  //         //   author: '',
  //         //   cover_img: '',
  //         //   isbn: '',
  //         // });
  //         // setCondition('');
  //         // setNotes('');
  //         return res.json();
          
  //       } else {
  //         throw new Error('Failed to create listing');
  //       }
  //     })
  //     .then((data) => {
  //       // console.log(data)
  //       console.table(newListing);
  //     })
  //     .catch((error) => {
  //       console.error('Error creating listing:', error);
        
  //     });

  //   console.table(newListing);
  //   console.log('List Post Clicked');
    
  // }

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
