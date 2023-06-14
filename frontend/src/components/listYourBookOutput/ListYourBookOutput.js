// import tokillamockingbird from "../../assets/images/books/to-kill-a-mockingbird.png";
import coverDefault from '../../assets/images/books/coverDefault.png';
import './listYourBookOutput.css';

function ListYourBookOutput(props) {
  return (
    <div>
      <img
        id="cover"
        src={props.book.cover || coverDefault}
        alt="book cover"
      />
      <p>Title:</p>
      <input
        className="outputForm"
        id="title"
        placeholder="Title"
        type="text"
        value={props.book.title}
        disabled="disabled"
      ></input>
      <p>Author:</p>
      <input
        className="outputForm"
        id="author"
        value={props.book.author}
        placeholder="Author"
        disabled="disabled"
      ></input>
      <p>Published:</p>
      <input
        className="outputForm"
        id="published"
        placeholder="Published"
        type="text"
        value={props.book.publishedDate}
        disabled="disabled"
      ></input>
      <p>Condition:</p>
      <form id="condition">
        <select  className='outputForm' name="Condition">
          <option value="new">New</option>
          <option value="like-new">Like New</option>
          <option value="very-good">Very Good</option>
          <option value="good">Good</option>
          <option value="acceptable">Acceptable</option>
          <option value="poor">Poor</option>
        </select>
      </form>
      <p>Notes:</p>
      <input
        className="outputForm"
        id="notes"
        type="text"
        placeholder="Notes"
      ></input>
      <br></br>
      <button id="post-listing">Post Listing</button>
    </div>
  );
}

export default ListYourBookOutput;
