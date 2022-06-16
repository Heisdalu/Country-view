import React, { useContext } from "react";
import DataContext from "../../context/data-context";
import CountryInfo from "./CountryInfo";
import "./CountryList.css";

const CountryList = (props) => {
  const ctx = useContext(DataContext);
  console.dir(ctx.data);

  return (
    <section className="country__list">
      <CountryInfo data={props.data} />
    </section>
  );
};

export default CountryList;
