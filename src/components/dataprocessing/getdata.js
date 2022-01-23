import React, { useState, useEffect, createContext } from "react";

const PassInput = createContext();

function GetData(props) {
  const [loadingState, setLoadingState] = useState(true);
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    setLoadingState(true);
    fetch("https://react-on-elearning-default-rtdb.asia-southeast1.firebasedatabase.app/reactions.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const displaydata = [];

        for (const key in data) {
          const convertedData = {
            id: key,
            ...data[key],
          };
          displaydata.push(convertedData);
        }
        setLoadingState(false);
        setLoadedData(displaydata);
      });
  }, []);

  if (loadingState) {
    return <div>Currently Loading Data... </div>;
  }

  const dataObj = {
    loadedData: loadedData,
  };


  return (
    <div>
      Loaded Data
      <PassInput.Provider value={dataObj}>{loadedData}</PassInput.Provider>
      {console.log(dataObj)}
    </div>
  );
}

export default GetData;
export { PassInput };
