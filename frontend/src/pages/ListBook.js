import Dashboard from '../components/Dashboard/Dashboard';
import ListYourBook from '../components/listYourBook/ListYourBook';
import ListingsCarousel from '../components/listingsCarousel/ListingsCarousel';
import './listbook.css';
import { Link } from 'react-router-dom';

function ListBook() {
  return (
    <section className="pages" id="list-book">
      <div className="list-book-container">
        <div className="overall-box">
          <Dashboard />
          <ListingsCarousel />
          </div>
          <div className="list-your-book">
            <ListYourBook />
          </div>

          <hr className="linebreak"></hr>
          <div className="listings-carousel-container">
            {/* <ListingsCarousel /> */}
          </div>
        </div>
    </section>
  );
}

export default ListBook;
