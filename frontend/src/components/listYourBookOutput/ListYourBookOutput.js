// import tokillamockingbird from "../../assets/images/books/to-kill-a-mockingbird.png";
import "./listYourBookOutput.css";

//Creating a listed books array
//1. Create a new array - in a data file.
//2. Put a handleclick/on lick function in the JSX of the button
//3. Import the empty array from the data file.
//4. Create a function that will push the book to the array
//5. spread operator...?
//6. return an object with the requred structure (holding all the props and their inherent value)
//7. A state variable is needed for the notes and condition

// function handleChange(e) {

// }

function ListYourBookOutput(props) {
  return (
    <div>
      <img id="cover" src={props.book.cover_img} alt="book cover" />
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
        <select className="outputForm" name="Condition">
          <option value="New">New</option>
          <option value="Like New">Like New</option>
          <option value="Very Good">Very Good</option>
          <option value="Good">Good</option>
          <option value="Acceptable">Acceptable</option>
          <option value="Poor">Poor</option>
        </select>
      </form>
      <p>Notes:</p>
      <input
        className="outputFormNotes"
        id="notes"
        type="text"
        placeholder="Notes"
      ></input>
      <br></br>
      <button onClick={props.onClick} id="post-listing">
        Post Listing
      </button>
    </div>
  );
}

export default ListYourBookOutput;

//PLAN
//1. Create a new variable - new listing (object)
//2. set params - combination of title, author, published date, condition, notes
//Assisgn the content of notes and condition to individual states
//3. Adjust SQL database - to have column for conditon, notes
//4. Construct a fetch request to post the new listing to the database - TBC??
