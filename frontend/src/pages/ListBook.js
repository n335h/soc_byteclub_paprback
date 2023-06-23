import ListYourBook from "../components/listYourBook/ListYourBook";
import ListingsCarousel from "../components/listingsCarousel/ListingsCarousel";
import "./listbook.css";



function ListBook() {
  return (
    <section className='pages' id="list-book">

      <div className="list-book-container">
        <div className="list-your-book">
          <ListYourBook />
        </div>
        <div className="listings-carousel-container">
          <ListingsCarousel />
        </div>
      </div>
      
    </section>
  );
}

export default ListBook;