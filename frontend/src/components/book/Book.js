import './book.css';
import { useState } from 'react';
import { ReactComponent as Heart} from '../../assets/icons/heart.svg';


function Book({ cover_img, title, author, listing_id, onClick }) {

  const [like, setLike] = useState(false);

  const likeToggle = () => {
    setLike(!like);
  }

  const heartClick = (event) => {
    event.stopPropagation(); // Stop event propagation
    likeToggle();
  }

  console.log(like);
  
  return (
    <div id="book" key={listing_id} onClick={() => onClick && onClick()}>
      <div id="book-container">
        <Heart id="like-heart" className={like ? 'heart-pink' : ''} onClick={heartClick} />
        <img id="book-cover" src={cover_img} alt="" />
        <p id="book-title">{title}</p>
        <p id="book-author">{author}</p>
      </div>
    </div>
  );
}

export default Book;
