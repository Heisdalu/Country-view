import { useContext, useEffect, useState } from "react";
import DataContext from "../../context/data-context";
import "./SearchCountryName.css";

const SearchCountryName = () => {
  const dataCtx = useContext(DataContext);
  const [inputVal, setInputVal] = useState("");

  const InputHandler = (e) => {
    setInputVal(e.target.value);
  };

  useEffect(() => {
    // console.log(inputVal);
    const countryName = inputVal.trim();
    let timer;
    console.log(countryName);
    if (countryName) {
      timer = setTimeout(() => {
        const filterCountry = dataCtx.generalData.filter((el) =>
          el.name.common
            .toLocaleLowerCase()
            .startsWith(countryName.toLocaleLowerCase())
        );
        dataCtx.setFunc({
          type: "DATA_IS_PRESENT",
          data: filterCountry,
          generalData: dataCtx.generalData,
          isSearchActive: true,
        });
      }, 1000);
    }

    if (countryName === "" && dataCtx.isSearchActive) {
      console.log("active");
      console.log(dataCtx);
      dataCtx.setFunc({
        type: "DATA_IS_PRESENT",
        generalData: dataCtx.generalData,
        data: dataCtx.generalData,
        isSearchActive: false,
      });
    }
    return () => clearTimeout(timer);
  }, [inputVal]);

  return (
    <section className="searchCountryName">
      <label htmlFor="input-country" className="search__country__name">
        Search Country
      </label>
      <span className="search__logo" aria-hidden="true">
        <svg
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="30px"
          height="30px"
        >
          <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
        </svg>
      </span>
      <input
        type="search"
        id="input-country"
        className="search__input"
        placeholder="Search for a country..."
        onChange={InputHandler}
        value={inputVal}
      />
    </section>
  );
};

export default SearchCountryName;
