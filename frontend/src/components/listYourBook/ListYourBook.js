import ListYourBookInput from "../listYourBookInput/ListYourBookInput";
import ListYourBookOutput from "../listYourBookOutput/ListYourBookOutput";
import React, { useState } from "react";
let coverdefault = "../../../public/books/coverDefault.png";

//we want the areas to clear after the book is listed
//if searchterm is EMPTY set the result to empty
//LESSON - use useEffect sparingly - it will cause an infinite loop if you don't use it correctly
//Add in logic that accounts for lazy typing  - adjust the fetch request change it to LIKE
//on the sql side put the url's for the images into the database
//connect post listing to the backend - make an addition to the database

//FAKE THE ISER ID THAT IS BEING SENT TO THE DATABASE

function ListYourBook() {
  const [condition, setCondition] = useState("");
  const [notes, setNotes] = useState("");
  const [newListing, setNewListing] = useState({
    title: "",
    author: "",
    isbn: "",
    condition: "",
    notes: "",
    cover_img: coverdefault,
    user_id: 1,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState({
    title: "",
    author: "",
    cover_img: "",
    publishedDate: "",
  });

  // useEffect(() => {
  //   handleSearchClick();
  // }, [searchTerm]);

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleEnter(e) {
    if (e.key === "Enter" || e.keyCode === 13) {
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
            throw new Error("No book found");
          }
        })
        .then((data) => setSearchResult(data.payload[0]))
        .catch((error) => {
          console.error("Error fetching data:", error);
          setSearchResult({
            title: "",
            author: "",
            cover_img: coverdefault,
            publishedDate: "",
          });
        });
      console.log(searchResult);
    }
  }

  function updateCondition(e) {
    setCondition(e.target.value);
  }
  function updateNotes(e) {
    setNotes(e.target.value);
  }

  function handleListingClick() {
    setNewListing({
      title: searchResult.title,
      author: searchResult.author,
      isbn: searchResult.isbn,
      condition: condition,
      notes: notes,
      cover_img: searchResult.cover_img,
      user_id: 1,
    });
    console.log(newListing);
  }

  return (
    <div>
      <h1>List Your Book</h1>
      <ListYourBookInput
        onChange={handleChange}
        onClick={handleSearchClick}
        onKeyPress={handleEnter}
      />
      <ListYourBookOutput
        onClick={(handleListingClick, updateCondition, updateNotes)}
        book={searchResult}
      />
    </div>
  );
}

export default ListYourBook;

//PLAN
//1. Create a new variable - new listing (object)
//2. set params - combination of title, author, published date, condition, notes
//Assisgn the content of notes and condition to individual states
//3. Adjust SQL database - to have column for conditon, notes
// adjust SQL database - listings - delete edition for published date
//adjsut form on the listings to remove the published date box
//4. Construct a fetch request to post the new listing to the database - TBC??
