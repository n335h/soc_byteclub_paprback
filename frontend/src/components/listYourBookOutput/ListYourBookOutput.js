function ListYourBookOutput(props) {
  return (
    <div>
      <img id="cover" src="" alt=""></img>
      <p>Title:</p>
      <input
        id="title"
        type="text"
        placeholder="Title"
        disabled="disabled"
      ></input>
      <p>Author:</p>
      <input
        id="author"
        type="text"
        placeholder="Author"
        disabled="disabled"
      ></input>
      <p>Edition:</p>
      <input
        id="edition"
        type="text"
        placeholder="Edition"
        disabled="disabled"
      ></input>
      <p>Condition:</p>
      <form id="condition">
        <select name="Condition">
          <option value="new">New</option>
          <option value="like-new">Like New</option>
          <option value="very-good">Very Good</option>
          <option value="good">Good</option>
          <option value="acceptable">Acceptable</option>
          <option value="poor">Poor</option>
        </select>
      </form>
      <p>Notes:</p>
      <input id="notes" type="text" placeholder="Notes"></input>
      <button id="post-listing">Post Listing</button>
    </div>
  );
}

export default ListYourBookOutput;
