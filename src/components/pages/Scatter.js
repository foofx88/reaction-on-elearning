import React, { useState, useEffect, useContext } from 'react';
import { Scatter } from '@ant-design/plots';
import { PageHeader, Select } from "antd";
import { PassInput } from "../dataprocessing/getdata";

function ScatterPlot () {
    const input = useContext(PassInput);
    const scatterdata = input.loadedData;
    
    let data = [];

    console.log(data)
    for (let items of scatterdata){
        data.push(items)

    }
// data structure to look like this:
// [
//     {
//         "Student": "id",
//         "Pass/Fail":"Approved",
//         "TSO": "time_spent_online",
//         "Total Posts":"total_post"
//     }
// ]

const config = {
    appendPadding: 10,
    data,
    xField: 'timeonline',
    yField: 'total_posts',
    shape: 'circle',
    colorField: 'Approved',
    color: ['#E8684A', '#61DDAA'],
    size: 5,
    yAxis: {
      nice: true,
      line: {
        style: {
          stroke: '#aaa',
        },
      },
    },
    xAxis: {
      min: -100,
      grid: {
        line: {
          style: {
            stroke: '#eee',
          },
        },
      },
      line: {
        style: {
          stroke: '#aaa',
        },
      },
    },
    regressionLine: {
        type: 'linear', 
        style: {
            stroke:'#a8190d'
        },
      },
    //to do: make a custom tooltip 
  };

    return (
        <div>
    <PageHeader title="Pass Rates based on Time Spent Online" />
      <Scatter {...config }/>
      </div>
    );
    
   
}

export default ScatterPlot;