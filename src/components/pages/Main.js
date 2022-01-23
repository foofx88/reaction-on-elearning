import GetData, { PassInput } from "../dataprocessing/getdata";
import React, { useContext } from 'react';

function Main () {
    return <div>
    <GetData>

        
<PassInput.Consumer>
          {(data) => {
            return {data};
          }}
        </PassInput.Consumer>
        </GetData>
    </div>



}

export default Main; 