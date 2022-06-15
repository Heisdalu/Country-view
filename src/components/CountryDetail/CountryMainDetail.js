import './CountryMainDetail.css'

const CountryMainDetail = () => {
  return (
    <section className="country_main_detail">
      <div className="country_main_box">
        <h2 className="country_detail_type">Native Name: </h2>
        <span>Bergie</span>
      </div>
      <div className="country_main_box">
        <h2 className="country_detail_type">Population: </h2>
        <span>11,319,511</span>
      </div>
      <div className="country_main_box">
        <h2 className="country_detail_type">Region: </h2>
        <span>Europe</span>
      </div>
      <div className="country_main_box">
        <h2 className="country_detail_type">Sub Region: </h2>
        <span>Western Europe</span>
      </div>
      <div className="country_main_box">
        <h2 className="country_detail_type">Capital: </h2>
        <span>Brussels</span>
      </div>
    </section>
  );
};

export default CountryMainDetail;
