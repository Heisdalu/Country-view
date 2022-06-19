import React, { useCallback, useEffect, useReducer, useState } from "react";
import DataContext from "./context/data-context";
import Loading from "./components/Error/Loading";
import Header from "./components/Header/Header";
import SearchCountry from "./components/SearchCountry/SearchCountry";
import CountryList from "./components/CountryList/CountryList";
import Error from "./components/Error/Error";
import "./App.css";

const intialStateObj = {
  data: [],
  error: false,
  setFunc: () => {}
};
const objReducer = (state, action) => {
  if (action.type === "ERROR") {
     return {
       data: state.data,
       error: true,
       searchedCountryPresent: false,
       setError: () => {},
     };
    
  }

  if (action.type === "DATA_IS_PRESENT") {
    console.log(action);
    return {
      data: action.data,
      error: false,
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
      dispatchObjAction({ type: "DATA_IS_PRESENT", data: response });
    } catch (err) {
      setIsLoading(false);
      dispatchObjAction({ type: "ERROR" });
    }
  }, []);


  const searchHandler = (actionType) => {
    dispatchObjAction({ type: actionType});
  }

  const dataObj = {
    data: dataStateObj.data,
    error: dataStateObj.error,
    setFunc: searchHandler
  }

  console.log(dataObj);
  useEffect(() => {
    getData();
  }, [getData]);

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
