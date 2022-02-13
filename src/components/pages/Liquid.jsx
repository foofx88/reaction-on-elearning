import React, {useContext } from 'react';
import { Liquid } from '@ant-design/plots';
import { PassInput } from "../dataprocessing/getdata";
import { PageHeader} from "antd";

function LiquidPlot () {
    const input = useContext(PassInput);
    const liquiddata = input.loadedData;
    
    let data = [];

  
    for (let items of liquiddata){

        data.push(items)
    }
    console.log(data)

    function calcpassrates (data) {
        let count = 0;
        for (let i of data) {
            if (i.Approved === 1){
                count += 1;
            }
        }
        const value = count/ data.length;
        console.log(value)
        return value;
    }

    const passrate = calcpassrates(data);

const config = {
    percent: passrate,
    shape: 'rect',
    outline: {
      border: 2,
      distance: 4,
    },
    wave: {
      length: 118,
    },
        colorField: passrate, 
        color: () => {
          if(passrate >= 0.5){
            return '#73d13d';
          }
          return '#f5222d';
        },

  };
 console.log(liquiddata)
    return (
        <div>
              <PageHeader title="Student Pass Rate" />
      <Liquid {...config }/>
      </div>
    );
    
   
}

export default LiquidPlot;