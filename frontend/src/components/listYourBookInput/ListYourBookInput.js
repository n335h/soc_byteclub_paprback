import "./listYourBookInput.css";


function ListYourBookInput(props) {
  return (
    <div data-testid="listyourbook-input" className="list-book-input">
      <input data-testid="search-input"
        className="searchInput"
        type="text"
        placeholder="ISBN or title"
        onChange={props.onChange}
        onKeyDown={props.onKeyPress}
      ></input>
      <button className="search" onClick={props.onClick}>
        Search
      </button>
    </div>
  );
}

export default ListYourBookInput;
