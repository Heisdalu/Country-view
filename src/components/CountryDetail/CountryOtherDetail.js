import './CountryOtherDetail.css'

const getCurrencies = (data) => {
  if(!data) return ''
  const [currency] = Object.values(data)
  return currency.name
}

const getLanguages = (data) => {
  if(!data) return;
  const language = Object.values(data).join(', ');
  return language
}

const CountryOtherDetail = (props) => {
  const countryDetail = props.countryDetail;
  
    return (
      <section className="country_other_detail">
        <div className="country_other_box">
          <h2 className="country_detail_type">Top Level Domain: </h2>
          <span>{countryDetail.tld}</span>
        </div>

        <div className="country_other_box">
          <h2 className="country_detail_type">Currencies: </h2>
          <span>{getCurrencies(countryDetail.currencies)}</span>
        </div>
        <div className="country_other_box">
          <h2 className="country_detail_type">Language: </h2>
          <span>{getLanguages(countryDetail.languages)}</span>
        </div>
      </section>
    );
}

export default CountryOtherDetail;