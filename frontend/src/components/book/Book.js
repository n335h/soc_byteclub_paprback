import './book.css';
import SolidHeartWhiteS from '../../assets/icons/SolidHeartWhiteS.png';

function Book({
  isbn,
  cover,
  title,
  author,
  publisher,
  publishedDate,
  genre,
}) {
  return (
    <div id="book">
      <div className="book-container">
        <img id="like-heart" src={SolidHeartWhiteS} alt="" />
        <img id="book-cover" src={cover} alt="" />
        <p data-testid='listing' id="book-title">{title}</p>
        <p id="book-author">{author}</p>
        <p id="book-publisher">{publisher}</p>
        <p id="book-publishedDate">{publishedDate}</p>
        <p id="book-genre">{genre}</p>
        <p id="book-isbn">{isbn}</p>
      </div>
    </div>
  );
}

export default Book;
