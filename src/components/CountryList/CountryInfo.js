import "./CountryInfo.css";
import image from "../../assets/image-confetti.jpg";

const CountryInfo = (props) => {
  return (
    <article className="country__article">
      <figure className="country_image_box">
        <img src={image} className="country__image" alt="" />
      </figure>
      <section className="country__sub_article">
        <h1 className="country__heading">Germany</h1>
        <section className="country__population">
          <h3 className="country_population__header">Population: </h3>
          <span className="country_population__headcount"> 81,770,900</span>
        </section>
        <section className="country__region">
          <h3 className="country_region__header">Region: </h3>
          <span className="country_region__name">Europe</span>
        </section>
        <section className="country__capital">
          <h3 className="country_capital__header">Capital: </h3>
          <span className="country_capital__name">Berlin</span>
        </section>
      </section>
    </article>
  );
};

export default CountryInfo;
