import CountryInfo from "./CountryInfo";
import "./CountryList.css";

const CountryList = (props) => {
  return (
    <section class="country__list">
    <CountryInfo data={props.data}/>
    <CountryInfo data={props.data}/>
    <CountryInfo data={props.data}/>
    <CountryInfo data={props.data}/>
    <CountryInfo data={props.data}/>
    </section>
  );
};

export default CountryList;
