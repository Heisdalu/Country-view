import './CountryOtherDetail.css'

const CountryOtherDetail = () => {
    return (
      <section className="country_other_detail">
        <div className="country_other_box">
          <h2 className="country_detail_type">Top Level Domain: </h2>
          <span>Brussels</span>
        </div>

        <div className="country_other_box">
          <h2 className="country_detail_type">Currencies: </h2>
          <span>Euro</span>
        </div>
        <div className="country_other_box">
          <h2 className="country_detail_type">Language: </h2>
          <span>Dutch, French, Germany</span>
        </div>
      </section>
    );
}

export default CountryOtherDetail;