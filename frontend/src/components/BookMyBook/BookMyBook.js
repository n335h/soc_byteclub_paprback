import "./bookMyBook.css";
import { useState } from "react";
import { ReactComponent as Heart } from "../../assets/icons/heart.svg";

function BookMyBook({
  cover_img,
  title,
  author,
  listing_id,
  onClick,
}) {
  const [like, setLike] = useState(false);

  const likeToggle = () => {
    setLike(!like);
  };

  const heartClick = (event) => {
    event.stopPropagation(); // Stop event propagation
    likeToggle();
  };

  return (
    <div id="mybook" key={listing_id} onClick={() => onClick && onClick()}>
      <div id="mybook-container">
        <Heart
          id="mybook-like"
          className={like ? "heart-pink" : ""}
          onClick={heartClick}
        />
        <img id="mybook-cover" src={cover_img} alt="" />
        <p datatest-id="listing" id="mybook-title">
          {title}
        </p>
        <p id="mybook-author">{author}</p>
      </div>
    </div>
  );
}

export default BookMyBook;
