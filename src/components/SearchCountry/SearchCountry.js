import SearchCountryName from "./SearchCountryName";

import SearchCountryRegion from "./SearchCountryRegion";
import "./SearchCountry.css";

const SearchCountry = () => {
  return (
    <section class="search__country">
      <SearchCountryName />
      <SearchCountryRegion />
  
    </section>
  );
};

export default SearchCountry;
