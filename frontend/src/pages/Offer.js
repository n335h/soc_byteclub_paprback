import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CoverDefault from "../assets/images/coverDefault.png";
import "./offer.css";

// Navigate to this page

// Contact form to send an offer to another user

// Form displays other users email address

function Offer() {
  const navToHome = useNavigate();
  const location = useLocation();
  const [messageSent, setMessageSent] = useState(false);

  const otherBook = location.state.selectedBook;
  const distance = location.state.distance;
  const [delivery, setDelivery] = useState("");
  const [message, setMessage] = useState("");
  const [myListings, setMyListings] = useState([]);
  const [mySelectedBook, setMySelectedBook] = useState({
    cover_img: CoverDefault,
    title: "",
    author: "",
    condition: "",
  });

  useEffect(() => {
    listingsCall();
    // console.log("MY LISTINGS", myListings)
  }, []);

  async function listingsCall() {
    try {
      const response = await fetch("http://localhost:5432/api/listings");
      const data = await response.json();

      if (response.ok) {
        setMyListings(data.payload.myListings);
      } else {
        setMyListings([]);
      }
    } catch (error) {
      console.error("Error fetching listings:", error);
      setMyListings([]);
    }
  }

  const handleSelect = (event) => {
    const selectedListing = myListings.find((listing) => {
      const optionValue = event.target.value;
      const [listingId, title, condition] = optionValue.split(":");
      return listing.listing_id === parseInt(listingId);
    });

    if (selectedListing) {
      setMySelectedBook(selectedListing);
    }
  };

  function updateDelivery(e) {
    // e is the event object
    setDelivery(e.target.value); // Update the condition state with the value from the select element
  }

  function updateMessage(e) {
    // e is the event object
    setMessage(e.target.value); // Update the condition state with the value from the select element
  }

  const handleMessageClick = () => {
    if (
      mySelectedBook !==
        {
          cover_img: CoverDefault,
          title: "",
          author: "",
          condition: "",
        } &&
      delivery !== "" &&
      message !== ""
    ) {
      setMessageSent(true);
    }
setTimeout(() => {
  navToHome("/");
} , 1500)

  };

  return (
    <section className="pages" id="offer">
      <div className="offer-container">
        <h1>Your Swap</h1>
        {!messageSent && (
          <div id="pre-message">
            <div id="select-your-book">
              <label htmlFor="select">Select your book</label>
              <form id="select-book" onChange={handleSelect}>
                <select
                  className="selectDropdown" // Add custom class here
                  name="select"
                  placeholder="Your books..."
                >
                  <option value="defaultValue" disabled selected>
                    {" "}
                    Your books...{" "}
                  </option>
                  {myListings.map((listing) => (
                    <option
                      value={`${listing.listing_id}:${listing.title}:${listing.condition}`}
                      key={listing.listing_id}
                    >
                      {listing.title} - {listing.condition}
                    </option>
                  ))}
                </select>
              </form>
            </div>
            <div id="books-display">
              <div id="my-book">
                <h3>{mySelectedBook.title}</h3>
                <h4>{mySelectedBook.author}</h4>
                <img
                  src={mySelectedBook.cover_img}
                  alt={mySelectedBook.title}
                ></img>
                <h4>{mySelectedBook.condition}</h4>
              </div>

              <div id="their-book">
                <h3>{otherBook.title}</h3>
                <h4>{otherBook.author}</h4>
                <img src={otherBook.cover_img} alt={otherBook.title}></img>
                <h4>{otherBook.condition}</h4>
                <h4>{Math.round(distance)} miles</h4>
              </div>
            </div>
            <form id="delivery" onChange={updateDelivery}>
              <select
                className="outputForm conditionDropdown" // Add custom class here
                name="Delivery option"
                placeholder="Delivery option"
              >
                <option value="Delivery option" disabled selected>
                  {" "}
                  Delivery option{" "}
                </option>
                <option value="collection">Collection</option>
                <option value="post">Post</option>
                <option value="Either">Either</option>
              </select>
            </form>
            <input
              id="message"
              type="text"
              placeholder="Message"
              onChange={updateMessage}
            ></input>
            <button id="send-offer" onClick={handleMessageClick}>
              Send offer
            </button>
          </div>
        )}
        {messageSent ? (
          <div id="post-message">
            <h2>Offer sent!</h2>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default Offer;
