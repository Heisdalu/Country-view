import React from "react";

const SearchContext = React.createContext({
    searchedCountry: '',
    searchedRegion: '',
    setFunc: () => {}
})


export default SearchContext;