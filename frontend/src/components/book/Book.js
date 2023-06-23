import './book.css';
import { useState } from 'react';
import { ReactComponent as Heart} from '../../assets/icons/heart.svg';


function Book({ cover_img, title, author, listing_id, onClick, distance }) {

  const [like, setLike] = useState(false);

  const likeToggle = () => {
    setLike(!like);
  }

  const heartClick = (event) => {
    event.stopPropagation(); // Stop event propagation
    likeToggle();
  }
  
  return (

    <div id="book" key={listing_id} onClick={() => onClick && onClick()}>
      <div id="book-container">
        <Heart id="like-heart" className={like ? 'heart-pink' : ''} onClick={heartClick} />
        <img id="book-cover" src={cover_img} alt="" />
        <p datatest-id='listing' id="book-title">{title}</p>
        <p id="book-author">{author}</p>
        <p id="book-distance"><span>{Math.round(distance)}</span> miles</p>
      </div>
    </div>
  );
}

export default Book;
