import "./SearchCountryRegion.css";

const SearchCountryRegion = () => {
  return (
    <section class="filter__region">
      <select>
        <option class="region" value="Filter By Region">
          Filter by Region
        </option>
        <option class="region" value="Africa">
          Africa
        </option>
        <option class="region" value="America">
          America
        </option>
        <option class="region" value="Asia">
          Asia
        </option>
        <option class="region" value="Europe">
          Europe
        </option>
        <option class="region" value="Oceania">
          Oceania
        </option>
      </select>
    </section>
  );
};

export default SearchCountryRegion;
