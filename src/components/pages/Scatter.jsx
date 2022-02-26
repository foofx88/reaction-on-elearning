import React, {useContext } from 'react';
import { Scatter } from '@ant-design/plots';
import { PageHeader} from "antd";
import { PassInput } from "../dataprocessing/getdata";

export default function ScatterPlot () {
    const input = useContext(PassInput);
    const scatterdata = input.loadedData;
    const data = [];

    for (let items of scatterdata){
      console.log(items)
        data.push({
          id: items.id, timeonline: items.timeonline, totalposts: items.total_posts, approved: items.Approved
        })

    }

const config = {
    appendPadding: 10,
    data,
    xField: 'timeonline',
    yField: 'totalposts',
    size:5,
    shape: 'circle',
    colorField: 'approved',
    sizeField:'id',
    color: ['#E8684A', '#61DDAA'],
    yAxis: {
      title: {
        text:"Total Posts"
      },
      nice: true,
      line: {
        style: {
          stroke: '#aaa',
        },
      },
    },
    xAxis: {
      title: {
        text:"Time Spent Online (S)"
      },
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