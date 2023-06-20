// Importing CSS file and default cover image
import './listYourBookOutput.css';
import coverdefault from '../../assets/images/coverDefault.png';

//Creating a listed books array
//1. Create a new array - in a data file.
//2. Put a handleclick/on lick function in the JSX of the button
//3. Import the empty array from the data file.
//4. Create a function that will push the book to the array
//5. spread operator...?
//6. return an object with the requred structure (holding all the props and their inherent value)
//7. A state variable is needed for the notes and condition

function ListYourBookOutput(props) {
  return (
    <div data-testid="listyourbook-output">
      {/* Render book cover image */}
      <img
        className="cover"
        src={props.book.cover_img || coverdefault}
        alt="book cover"
      />

      {/* Render book title */}
      <p className="outputFormLabels">Title:</p>
      <input
         data-testid="title-input"
        className="outputForm"
        id="title"
        placeholder="Title"
        type="text"
        value={props.book.title}
        disabled="disabled"
      ></input>

      {/* Render book author */}
      <p className="outputFormLabels">Author:</p>
      <input
        data-testid="author-input"
        className="outputForm"
        id="author"
        value={props.book.author}
        placeholder="Author"
        disabled="disabled"
      ></input>

      {/* Render book condition */}
      <p className="outputFormLabels">Condition:</p>
      <form  id="condition" onChange={props.onChangeCondition}>
        <select data-testid="condition"
          className="outputForm"
          name="Condition"
          placeholder="Condition"
        >
          <option value="Condition" disabled selected>
            {' '}
            Condition{' '}
          </option>
          <option value="New">New</option>
          <option value="Like New">Like New</option>
          <option value="Very Good">Very Good</option>
          <option value="Good">Good</option>
          <option value="Acceptable">Acceptable</option>
          <option value="Poor">Poor</option>
        </select>
      </form>

      {/* Render book notes */}
      <p className="outputFormLabels">Notes:</p>
      <input data-testid="notes"
        onChange={props.onChangeNotes}
        className="outputFormNotes"
        id="notes"
        type="text"
        placeholder="Notes"
      ></input>
      <br></br>

      {/* Render post listing button */}
      <button
        className="postListing"
        onClick={props.onClick}
        id="post-listing"
      >
        Post Listing
      </button>
    </div>
  );
}

export default ListYourBookOutput;
