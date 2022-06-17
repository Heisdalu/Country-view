import React, { useContext, useEffect, useRef } from "react";
import DataContext from "../../context/data-context";
import Loading from "../Error/Loading";
import CountryInfo from "./CountryInfo";
import "./CountryList.css";

const CountryList = (props) => {
  let data = useContext(DataContext);
  // const elemRef = useRef()
  // data.length = 20;
  const info = data.map((el, i) => <CountryInfo data={el} key={i} />);
  // console.log(props.data);

  // const observerFunc = () => {

  // }

  // const objConfig = {
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 0.3

  // }


  // useEffect(() => {
  //   const BottomObserve = new IntersectionObserver(observerFunc, objConfig)
  //   console.log(elemRef.current);

  // })



  return (
    <>
      <section className="country__list">
        {/* <CountryInfo data={data} /> */}
        {info}
      </section>
      {/* {<span ref={elemRef}>{<Loading />}</span>} */}
    </>
  );
};

export default CountryList;
