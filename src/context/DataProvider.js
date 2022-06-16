import React, { useEffect, useState } from "react";
import DataContext from "./data-context";

const DataProvider = (props) => {
  const [data, setData] = useState([]);


  const dataContext = {
    data: data,
  };

  return (
    <DataContext.Provider value={dataContext}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
