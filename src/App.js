import React, { useCallback, useEffect, useState } from "react";
import DataContext from "./context/data-context";
import Loading from "./components/Error/Loading";
import Header from "./components/Header/Header";
import SearchCountry from "./components/SearchCountry/SearchCountry";
import CountryList from "./components/CountryList/CountryList";
import CountryDetail from "./components/CountryDetail/CountryDetail";
import Error from "./components/Error/Error";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getData = useCallback(async () => {
    // setIsLoading(true);
    try {
      const result = await fetch(`https://restcountries.com/v3.1/all`);

      if (!result.ok) {
        setError(true);
        setIsLoading(false);
        throw new Error("Something Wrong");
      }

      const response = await result.json();
      setIsLoading(false);
      setError(false);
      setData(response);
    } catch (err) {
      setIsLoading(false);
      setError(true);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <DataContext.Provider value={data}>
      <div className="country_container">
        <Header />
        {!isLoading && !error && <SearchCountry />}
        {isLoading && <Loading />}
        {!isLoading && !error && <CountryList />}
        {/* {!error && <CountryDetail />} */}
        {error && <Error />}
      </div>
    </DataContext.Provider>
  );
};

export default App;
