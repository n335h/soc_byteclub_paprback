import './listingsCarousel.css';
import Book from '../book/Book';
import { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function ListingsCarousel() {
  const [listings, setListings] = useState([]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      // partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      // partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      // partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      // partialVisibilityGutter: 30,
    },
  };

  // useEffect to fetch listings data from the API on component mount
  useEffect(() => {
    fetch(`http://localhost:5432/api/listings`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('No listings found');
        }
      })
      .then((data) => setListings(data.payload))
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // useEffect to log the listings whenever they change
  useEffect(() => {
    console.log(listings);
  }, [listings]);

  return (
    <div id="listings-carousel">
      <h2>Your Listings</h2>
      <div data-testid="listing" className="books-grid">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="carousel"
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          // infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          partialVisible
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {listings.map((book) => (
            // Rendering Book component for each listing
            <Book
              data-testid="listing"
              cover={book.cover_img}
              title={book.title}
              author={book.author}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ListingsCarousel;
