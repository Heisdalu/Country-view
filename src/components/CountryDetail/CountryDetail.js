import { useContext } from "react";
import DataContext from "../../context/data-context";
import CountryMainDetail from "./CountryMainDetail";
import "./CountryDetail.css";
import CountryOtherDetail from "./CountryOtherDetail";
import CountryBorder from "./CountryBorder";

const ArrowLeft = () => {
  return (
    <span className="left-arrow">
      <svg viewBox="0 0 512.001 512.001" space="preserve">
        <path
          d="M488.728,232.727l-384,0.002v-34.911c0-9.413-5.671-17.9-14.367-21.501
	c-8.699-3.603-18.708-1.61-25.363,5.046L6.817,239.544c-9.089,9.089-9.089,23.824,0,32.912l58.182,58.182
	c4.453,4.453,10.404,6.817,16.462,6.817c2.998,0,6.021-0.58,8.901-1.772c8.696-3.603,14.367-12.088,14.367-21.501v-34.908l384-0.003
	c12.853,0,23.273-10.42,23.273-23.273C512.001,243.147,501.581,232.727,488.728,232.727z"
        />
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    </span>
  );
};

const CountryDetail = () => {
  const dataCtx = useContext(DataContext);
  const countryDetail = dataCtx.showCountryObjInfo;

  const goBackHandler = () => {
    dataCtx.setFunc({
      type: "DATA_IS_PRESENT",
      data: dataCtx.generalData,
      generalData: dataCtx.generalData,
      isSearchActive: false,
      showCountryInfo: false,
      showCountryObjInfo: []
    });
  };

  return (
    <section className="country__detail">
      <button className="back_btn" onClick={goBackHandler}>
        <ArrowLeft />
        Back
      </button>

      <div className="country_card_box">
        <figure className="country_detail_pic_box">
          <img src={countryDetail.flags.png} alt="" />
        </figure>

        <section className="country_detail_box">
          <h1 className="country_detail_header">{countryDetail.name.common}</h1>
          <CountryMainDetail countryDetail={countryDetail} />
          <CountryOtherDetail countryDetail={countryDetail} />
          <CountryBorder
            countryBorderDetail={countryDetail.borders}
            generalData={dataCtx.generalData}
          />
        </section>
      </div>
    </section>
  );
};

export default CountryDetail;
