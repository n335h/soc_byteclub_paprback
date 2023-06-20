import FAQ from './FAQ.css';
import FAQimg from './../assets/images/FAQimg.jpg';



function FAQ2() {
  return (
    <section className='pages' id="faq">
      <div className="faq-container">
      <h1>FAQ</h1>
      <img className="faqimg" src={FAQimg} alt="FAQ" />
      </div>
    </section>
  );
}

export default FAQ2;