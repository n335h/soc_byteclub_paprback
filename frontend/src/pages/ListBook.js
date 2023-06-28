import ListYourBook from '../components/listYourBook/ListYourBook';
import ListingsCarousel from '../components/listingsCarousel/ListingsCarousel';
import { Link } from 'react-router-dom';
import './listbook.css';

function ListBook() {
  return (
    <section className="pages" id="listbook">
      <div id="listbook-container">
      <div id="dashboard-carousel">
        <div id="dashboard-container">
          <div id="user-details">
            <div id="user-image-container">
              <img id="user-image" src="https://i.pinimg.com/474x/2b/a9/ec/2ba9ecf8e084d6b699ea6b5dd7e5575d.jpg" alt="Zendaya" />
            </div>
            <div id="user-text">
            <h1 className="welcome-text">
              Welcome <span className="name-text">Zendaya!</span>
            </h1>
            <p className="inner-text">
              <span className="bolded">Name:</span> Zendaya Coleman
            </p>
            <p className="inner-text">
              <span className="bolded">Email:</span> ZColeman@gmail.com
            </p>
            <p className="inner-text">
              <span className="bolded">Address:</span> 27 Fake Street,
              Faketon, SE1 4NF
            </p>
            <p className="inner-text">
              <span className="bolded">Phone:</span> 0121 987 654
            </p>
            <Link to="/browse">
              <button className="find-a-book-button">Find A Book</button>
            </Link>
            </div>
            
          </div>
          
        </div>
        <div id="listbook-carousel-container">
          <ListingsCarousel />
        </div>
        </div>
        <div id="listbook-listyourbook">
            <ListYourBook />
        </div>


     
         
    
      </div>
    </section>
  );
}

export default ListBook;
