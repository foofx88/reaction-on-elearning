import React, {useContext } from 'react';
import { Scatter } from '@ant-design/plots';
import { PageHeader} from "antd";
import { PassInput } from "../dataprocessing/getdata";

function ScatterPlot () {
    const input = useContext(PassInput);
    const scatterdata = input.loadedData;
    
    let data = [];

    console.log(data)
    for (let items of scatterdata){
        data.push(items)

    }

const config = {
    appendPadding: 10,
    data,
    xField: 'timeonline',
    yField: 'total_posts',
    size:5,
    shape: 'circle',
    colorField: 'Approved',
    sizeField:'id',
    color: ['#E8684A', '#61DDAA'],
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
      tooltip: {
        showTitle: true,
        title: "id",
        formatter: (data) => {
          return {name: "Time Spent Online", value: data.timeonline};
        },
      }
  };

    return (
        <div>
    <PageHeader title="Pass Rates based on Time Spent Online" />
      <Scatter {...config }/>
      </div>
    );
    
   
}

export default ScatterPlot;