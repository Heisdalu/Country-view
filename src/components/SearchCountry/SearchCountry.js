import SearchCountryName from "./SearchCountryName";

import SearchCountryRegion from "./SearchCountryRegion";
import "./SearchCountry.css";

const SearchCountry = () => {
  return (
    <section className="search__country">
      <SearchCountryName />
      <SearchCountryRegion />
  
    </section>
  );
};

export default SearchCountry;
