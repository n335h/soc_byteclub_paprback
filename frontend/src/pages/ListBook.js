import ListYourBook from "../components/listYourBook/ListYourBook";
import ListingsCarousel from "../components/listingsCarousel/ListingsCarousel";
import "./listbook.css";
import { Link } from 'react-router-dom';



function ListBook() {
  return (
    <section className='pages' id="list-book">

      <div className="list-book-container">
        <div className="list-your-book">
          <ListYourBook />
        </div>
        <div className= "overall-box"> 
        <div className="user-info-container">
          <h1>Welcome Zendaya!</h1>
          <h2>CONTACT INFORMATION</h2>
          <h2>Name: Zendaya Coleman</h2>
          <h2>Email: Zcoleman@gmail.com</h2>
          <h2>Address:
          201 Albany Road
          Coventry
          CV5 6NF</h2>
          <h2>Phone: 0121 987 654</h2>
          <Link to="http://localhost:3000/browse">
          <button id="find-a-book-button">
            Find A Book
          </button>
        </Link>
          <img className="User-image" src="https://i.pinimg.com/474x/2b/a9/ec/2ba9ecf8e084d6b699ea6b5dd7e5575d.jpg" alt="Picture of Zendaya"></img>
        </div>
        <div className="listings-carousel-container">
          <ListingsCarousel />
        </div>
        </div>

  
      </div>
      
    </section>
  );
}

export default ListBook;