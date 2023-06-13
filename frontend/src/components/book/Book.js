import './book.css';



function Book() {


  return (
    <div id="book">
      <div className="book-container">
        <img id="like-heart" src="" alt=""/>
        <img id="cover" src={props.cover} alt=""/>
        <p>{props.title}</p>

      </div>
    </div>
  );
}

export default Book;