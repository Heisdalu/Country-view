import React, { useCallback, useEffect, useReducer, useState } from "react";
import DataContext from "./context/data-context";
import Loading from "./components/Error/Loading";
import Header from "./components/Header/Header";
import SearchCountry from "./components/SearchCountry/SearchCountry";
import CountryList from "./components/CountryList/CountryList";
import Error from "./components/Error/Error";
import "./App.css";

const intialStateObj = {
  generalData: [],
  data: [],
  error: false,
  isSearchedCountryActive: false,
  setFunc: () => {},
};
const objReducer = (state, action) => {
  if (action.type === "ERROR") {
    return {
      generalData: [],
      data: state.data,
      error: true,
      isSearchActive: false,
      setFunc: () => {},
    };
  }

  if (action.type === "DATA_IS_PRESENT") {
    return {
      generalData: action.generalData,
      data: action.data,
      error: false,
      isSearchActive: action.isSearchActive,
      setFunc: () => {},
    };
  }

  return intialStateObj;
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [dataStateObj, dispatchObjAction] = useReducer(
    objReducer,
    intialStateObj
  );

  const getData = useCallback(async () => {
    try {
      const result = await fetch(`https://restcountries.com/v3.1/all`);

      if (!result.ok) {
        setIsLoading(false);
        dispatchObjAction({ type: "ERROR" });
        throw new Error("Something Wrong");
      }

      const response = await result.json();
      setIsLoading(false);
      dispatchObjAction({
        type: "DATA_IS_PRESENT",
        data: response,
        generalData: response,
        isSearchActive: false,
      });
    } catch (err) {
      setIsLoading(false);
      dispatchObjAction({ type: "ERROR" });
    }
  }, []);

  const searchHandler = (obj) => {
    dispatchObjAction({
      type: obj.type,
      data: obj.data,
      generalData: obj.generalData,
      isSearchActive: obj.isSearchActive,
    });
  };

  const dataObj = {
    generalData: dataStateObj.generalData,
    data: dataStateObj.data,
    error: dataStateObj.error,
    isSearchActive: dataStateObj.isSearchActive,
    setFunc: searchHandler,
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <DataContext.Provider value={dataObj}>
      <div className="country_container">
        <Header />
        {!isLoading && !dataStateObj.error && <SearchCountry />}
        {isLoading && <Loading />}
        {!isLoading && !dataStateObj.error && <CountryList />}
        {/* {!error && <CountryDetail />} */}
        {dataStateObj.error && <Error />}
      </div>
    </DataContext.Provider>
  );
};

export default App;
