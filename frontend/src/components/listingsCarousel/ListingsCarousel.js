import "./listingsCarousel.css";
import Book from "../book/Book";
import { useState, useEffect } from "react";

function ListingsCarousel() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5432/api/listings`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("No listings found");
        }
      })
      .then((data) => setListings(data.payload))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    console.log(listings);
  }, [listings]);

  return (
    <div id="listings-carousel">
      <div className="books-grid">
        {listings.map((book) => (
          <Book
            cover={book.cover_img}
            title={book.title}
            author={book.author}
          />
        ))}
      </div>
    </div>
  );
}

export default ListingsCarousel;
