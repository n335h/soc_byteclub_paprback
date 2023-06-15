import './listYourBookInput.css';

function ListYourBookInput(props) {


  return (
    <div className="list-book-input">
      <input className='searchInput' type="text" placeholder="ISBN or title" onChange={props.onChange}></input>
      <button className="signUp" onClick={props.onClick}>Search</button>
    </div>
  );
}

export default ListYourBookInput;
