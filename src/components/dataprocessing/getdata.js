
import React, { useState, useEffect} from "react";

export function GetData () {
    const [loadingState, setLoadingState] = useState(true);
    const [loadedData, setLoadedData] = useState([]);

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

    const dataProcessing = () => {
        let postBreakdownTemp = { helpful: 0, nice: 0, collaborative: 0 , confused: 0, creative: 0, bad: 0, amazing: 0}
        let totalPostTemp = 0
        let approvalRates = { pass: 0, fail: 0 }
        
        
        

    }
    
    React.useEffect(() => { dataProcessing()}, [loadedData])

    
    return <div>{console.log("Load Completed")}</div>
    
}

export default GetData;
