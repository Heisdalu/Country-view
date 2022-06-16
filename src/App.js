import React, {useEffect, useState} from 'react'
import Header from "./components/Header/Header";
import SearchCountry from "./components/SearchCountry/SearchCountry";
import CountryList from "./components/CountryList/CountryList";
import CountryDetail from './components/CountryDetail/CountryDetail';
import './App.css'

const App = () => {
  const [data, seData] = useState('')
  // const getData = async () => {
  //   const lol = await fetch(`https://restcountries.com/v3.1/all`);
  //   const [dee] = await lol.json();
  //   seData(dee)
  //   console.log(dee);
  // }

  // useEffect(() => {
  // },[])
  
  return (
    <div class="country_container">
      <Header />
      <SearchCountry />
      <CountryList data={data} />
      <CountryDetail />
    </div>
  );
};

export default App;
