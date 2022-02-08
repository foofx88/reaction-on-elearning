import React, { useState, useEffect, createContext } from "react";


const PassInput = createContext();

function GetData(props) {
  const [loadingState, setLoadingState] = useState(false);
  const [loadedData, setLoadedData] = useState([]);

//   const AWS = require("aws-sdk");
//   AWS.config.update({ region: "ap-southeast-2" });
//   const s3 = new AWS.S3({
//     // accessKeyId: process.env.REACT_APP_S3KEYID,
//     // secretAccessKey: process.env.REACT_APP_S3AKEY,

//     Bucket: "reaction-on-elearning",
//   });

//   useEffect(() => {
//     setLoadingState(true);
//     const fetchData = async () => {
//       try {
//         const params = {
//           Bucket: "reaction-on-elearning",
//           Key: "react-on-elearning.json",
//         };

//         const data = await s3.getObject(params).promise();
//         const response = JSON.parse(data.Body.toString("utf-8"));
//         return response;
//       } catch (e) {
//         throw new Error(`Could not retrieve file from S3: ${e.message}`);
//       }
//     };
//     fetchData().then((values) => {
//       const displaydata = [];
//       for (const key in values) {
//         const convertedData = {
//           id: key,
//           ...values[key],
//         };
//         displaydata.push(convertedData);
//       }
//       setLoadedData(displaydata);
//       setLoadingState(false);
//     });
//   }, []);
useEffect(() => {
        setLoadingState(true);
        fetch ("https://reaction-on-elearning.s3.ap-southeast-2.amazonaws.com/react-on-elearning.json")
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

  console.log(loadedData);

  return <PassInput.Provider value={dataObj}>{props.children}</PassInput.Provider>;
}

export default GetData;
export { PassInput };
