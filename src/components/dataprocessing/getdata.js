
import { useState, useEffect, createContext } from "react";

const Context = createContext( {rawdata: []})

export function GetData (props) {
    const [loadingState, setLoadingState] = useState(true);
    const [loadedData, setLoadedData] = useState([]);
    const value = loadedData;
    


    useEffect(() => {
        setLoadingState(true);
        fetch ("https://react-on-elearning-default-rtdb.asia-southeast1.firebasedatabase.app/reactions.json")
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

    if(loadingState) {
        return <div>Currently Loading Data...</div>
    }
    else {}

    
    return <Context.Provider value={value}>
        {props.children}
    </Context.Provider>

    
}

export default GetData;