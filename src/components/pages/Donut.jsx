import React, { useState, useEffect, useContext } from "react";
import { Pie, measureTextWidth } from "@ant-design/plots";
import { PageHeader, Select } from "antd";
import { PassInput } from "../dataprocessing/getdata";

const { Option } = Select;

export default function Donut() {
  const input = useContext(PassInput);
  const donutdata = input.loadedData;
  const [student, selectedStudent] = useState("All Students");

  let data = [];
  let count = 0
  let sk1_count = 0;
  let sk2_count = 0;
  let sk3_count = 0;
  let sk4_count = 0;
  let sk5_count = 0;

  function countskscores(tocount) {
    sk1_count += parseFloat(tocount.sk1_classroom.replace(",", "."));
    sk2_count += parseFloat(tocount.sk2_classroom.replace(",", "."));
    sk3_count += parseFloat(tocount.sk3_classroom.replace(",", "."));
    sk4_count += parseFloat(tocount.sk4_classroom.replace(",", "."));
    sk5_count += parseFloat(tocount.sk5_classroom.replace(",", "."));
  }

  for (let items of donutdata) {
    if (student === "All Students") {
      count += 1;  
      countskscores(items);

    } 
    else {
      if (items.id === student) {
        countskscores(items);
      }
    }
  }

  if (student === "All Students") {
    sk1_count = Math.round(sk1_count / count);
    sk2_count = Math.round(sk2_count / count);
    sk3_count = Math.round(sk3_count / count);
    sk4_count = Math.round(sk4_count / count);
    sk5_count = Math.round(sk5_count / count);
    console.log(count)
  }

  data.push(
    { type: "SK1 Score", count: sk1_count, full_name: "Critical Thinking and Problem Solving" },
    {
      type: "SK2 Score",
      count: sk2_count,
      full_name: "Creativity and Innovation"
    },
    {
      type: "SK3 Score",
      count: sk3_count,
      full_name: "Constant and Self Learning"
    },
    { type: "SK4 Score", count: sk4_count, full_name: "Collaboration and Self-Direction" },
    { type: "SK5 Score", count: sk5_count, full_name:  "Social and Cultural Responsibility"},
  );

  console.log(data)

  function renderStatistic(containerWidth, text, style) {
    const { width: textWidth, height: textHeight } = measureTextWidth(text, style);
    const R = containerWidth / 2; // r^2 = (w / 2)^2 + (h - offsetY)^2

    let scale = 1;

    if (containerWidth < textWidth) {
      scale = Math.min(Math.sqrt(Math.abs(Math.pow(R, 2) / (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2)))), 1);
    }

    const textStyleStr = `width:${containerWidth}px;`;
    return `<div style="${textStyleStr};font-size:${scale}em;line-height:${scale < 1 ? 1 : "inherit"};">${text}</div>`;
  }

  const config = {
    appendPadding: 15,
    data,
    angleField: 'count',
    colorField: 'full_name',
    color:['#6DC8EC','#F6BD16','#269A99','#9270CA', '#E8684A'],
    radius: 1,
    innerRadius: 0.6,
    meta: {
      value: {
        formatter: (v) => `${v}`,
      },
    },
    label: {
      type: 'inner',
      offset: '-50%',
      style: {
        fontSize: 18,
        textAlign: 'center',
      },
      autoRotate: false,
      content: '{value}' ,
    },
    statistic: {
      title: {
        offsetX: -5,
        offsetY: -10,
        customHtml: (container, view, datum) => {
          const { width, height } = container.getBoundingClientRect();
          const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
          const text = datum ? datum.type : 'Total Score';
          return renderStatistic(d, text, {
            fontSize: 30,
          });
        },
      },
      content: {
        offsetY: 20,
        style: {
          fontSize: 26,
        },
        customHtml: (container, view, datum, data) => {
          const { width } = container.getBoundingClientRect();
          const text = datum ? `${datum.count}` : `${(data.reduce((r, d) => r + d.count, 0)).toFixed(2)}`;
          return renderStatistic(width, text, {
            fontSize: 24,
          });
        },
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
      {
        type: 'pie-statistic-active',
      },
      {
        type: 'pie-legend-active',
      },
    ],
    legend: {
      offsetX: 50,
      offsetY: 10,
      layout: 'horizontal',
        position: 'bottom'
    }
  };

  function handleChange(value) {
    selectedStudent(value);
    console.log(`Selected: ${value}`);
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  let optionS = donutdata.map((v) => <Option value={v.id}>{v.id}</Option>);

  return (
  <div>
  <PageHeader
    title="Evaluation on Skills"
    extra={[
      <Select showSearch placeholder="All Students" style={{ align: "right", width: 200 }} optionFilterProp="children" defaultValue={"All Students"} onChange={handleChange} onSearch={onSearch} filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
        <Option value="All Students">All Students</Option>
        {optionS}
      </Select>,
    ]}
  />
  <Pie {...config} />
  </div>
  );
}

