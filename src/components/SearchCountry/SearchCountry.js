import { useContext, useReducer } from "react";
import SearchCountryName from "./SearchCountryName";
import SearchContext from "../../context/search-context";
import SearchCountryRegion from "./SearchCountryRegion";
import "./SearchCountry.css";
import DataContext from "../../context/data-context";

const SearchReducer = (state, action) => {
  if (action.type === "SEARCH_NAME") {
    const filteredCountry = state.dataCtx.generalData.filter(
      (el) =>
        el.name.common.toLowerCase().startsWith(action.name.toLowerCase()) &&
        el.region.toLowerCase().includes(state.searchedRegion.toLowerCase())
    );

    // if not in a setTimeout it reveals a warning: Cannot update a component (`App`) while rendering a different component (`SearchCountry`)
    setTimeout(() => {
      state.dataCtx.setFunc({
        type: "DATA_IS_PRESENT",
        generalData: state.dataCtx.generalData,
        data: filteredCountry,
      });
    }, 500);

    return {
      searchedCountry: action.name,
      searchedRegion: state.searchedRegion,
      dataCtx: state.dataCtx,
      setFunc: state.setFunc,
    };
  }

  if (action.type === "SEARCH_REGION") {
    const filteredCountry = state.dataCtx.generalData.filter(
      (el) =>
        el.name.common
          .toLowerCase()
          .startsWith(state.searchedCountry.toLowerCase()) &&
        el.region.toLowerCase().includes(action.name.toLowerCase())
    );

    // if not in a setTimeout if reveals a warning: Cannot update a component (`App`) while rendering a different component (`SearchCountry`)
    setTimeout(() => {
      state.dataCtx.setFunc({
        type: "DATA_IS_PRESENT",
        generalData: state.dataCtx.generalData,
        data: filteredCountry,
      });
    }, 500);

    return {
      searchedCountry: state.searchedCountry,
      searchedRegion: action.name,
      dataCtx: state.dataCtx,
      setFunc: state.setFunc,
    };
  }

  return state;
};

const SearchCountry = () => {
  const dataCtx = useContext(DataContext);

  const initialState = {
    searchedCountry: "",
    searchedRegion: "",
    dataCtx: dataCtx,
    setFunc: () => {},
  };

  const [searchState, dispatchSearch] = useReducer(SearchReducer, initialState);

  const setSearch = (obj) => {
    dispatchSearch({
      type: obj.type,
      name: obj.name,
    });
  };

  const searchStateObj = {
    searchCountryName: searchState.searchedCountry,
    searchRegion: searchState.searchedRegion,
    dataCtx: searchState.dataCtx,
    setFunc: setSearch,
  };

  return (
    <SearchContext.Provider value={searchStateObj}>
      <section className="search__country">
        <SearchCountryName />
        <SearchCountryRegion />
      </section>
    </SearchContext.Provider>
  );
};

export default SearchCountry;
