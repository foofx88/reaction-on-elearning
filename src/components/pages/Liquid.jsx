import React, {useState, useContext } from 'react';
import { Liquid } from '@ant-design/plots';
import { PageHeader} from "antd";
import { PassInput } from "../dataprocessing/getdata";

function LiquidPlot () {
    const input = useContext(PassInput);
    const liquiddata = input.loadedData;
    
    let data = [];

    console.log(data)
    for (let items of liquiddata){
        data.push(items)
    }

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

    return (
        <div>
      <Liquid {...config }/>
      </div>
    );
    
   
}

export default LiquidPlot;