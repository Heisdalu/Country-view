import { useMemo } from "react";
import { FormatNumber } from "../../utils";
import "./CountryInfo.css";

const CountryInfo = (props) => {
  const countryData = props.data;

  return (
    <article className="country__article">
      <figure className="country_image_box">
        <img
          src={countryData?.flags?.png}
          className="country__image"
          loading="lazy"
          alt={`${countryData?.name?.common} flag`}
        />
      </figure>
      <section className="country__sub_article">
        <h1 className="country__heading">{countryData?.name?.common}</h1>
        <section className="country__population">
          <h3 className="country_population__header">Population: </h3>
          <span className="country_population__headcount"> {FormatNumber(countryData?.population)}</span>
        </section>
        <section className="country__region">
          <h3 className="country_region__header">Region: </h3>
          <span className="country_region__name">{ countryData?.region}</span>
        </section>
        <section className="country__capital">
          <h3 className="country_capital__header">Capital: </h3>
          <span className="country_capital__name">{countryData?.capital}</span>
        </section>
      </section>


      
    </article>
  );
};

export default CountryInfo;
