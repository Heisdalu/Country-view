import "./CountryBorder.css";

const getBorder = (arr, allData) => {
  if (!arr) return ["", "", ""].map((el, i) => <span key={i}></span>);

  let result = [];
  arr.forEach((el) => {
    const [ans] = allData.filter(
      (inner) => inner.cioc === el || inner.cca3 === el
    );
    result.push(ans.name.common);
  });
  return result.map((el,i) => <span key={i}>{el}</span>);
};

const CountryBorder = (props) => {
  return (
    <section className="country_border_countries">
      <h2>Border Countries</h2>
      <div className="country_border_box">
        {getBorder(props.countryBorderDetail, props.generalData)}
      </div>
    </section>
  );
};

export default CountryBorder;
