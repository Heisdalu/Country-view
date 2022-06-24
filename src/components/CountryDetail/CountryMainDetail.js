import { FormatNumber } from '../../utils';
import './CountryMainDetail.css';

const getNativeName = (data) => {
  if(!data) return ''
  const [countryNativeName] = Object.values(data).slice(-1)
  return countryNativeName.common
}

const countryCapital = (data) => {
  if (!data) return "";
  if (data.length > 1) return data.join(", ");
  return data;
};

const CountryMainDetail = (props) => {
  const countryDetail = props.countryDetail;

  return (
    <section className="country_main_detail">
      <div className="country_main_box">
        <h2 className="country_detail_type">Native Name: </h2>
        <span>{getNativeName(countryDetail.name?.nativeName)}</span>
      </div>
      <div className="country_main_box">
        <h2 className="country_detail_type">Population: </h2>
        <span>{FormatNumber(countryDetail.population)}</span>
      </div>
      <div className="country_main_box">
        <h2 className="country_detail_type">Region: </h2>
        <span>{countryDetail.region}</span>
      </div>
      <div className="country_main_box">
        <h2 className="country_detail_type">Sub Region: </h2>
        <span>{countryDetail.subregion}</span>
      </div>
      <div className="country_main_box">
        <h2 className="country_detail_type">Capital: </h2>
        <span>{countryCapital(countryDetail.capital)}</span>
      </div>
    </section>
  );
};

export default CountryMainDetail;
