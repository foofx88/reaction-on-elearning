import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { Pie, measureTextWidth } from "@ant-design/plots";
import { PassInput } from "../dataprocessing/getdata";

function Donut() {
  const input = useContext(PassInput);
  const donutdata = input.loadedData;
  const [student, selectedStudent] = useState("All Students");

  //this page to have donut chart showing the SK scores of students
  // Statistics to perhaps show overall/average score

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
    { type: "SK1 Score", count: sk1_count },
    {
      type: "SK2 Score",
      count: sk2_count,
    },
    {
      type: "SK3 Score",
      count: sk3_count,
    },
    { type: "SK4 Score", count: sk4_count },
    { type: "SK5 Score", count: sk5_count },
  );

// to do - create custom legend to show the following corresponding to the SK scores
// "Critical Thinking and Problem Solving"
// "Creativity and Innovation"
// "Constant and Self Learning"
// "Collaboration and Self-Direction"
// "Social and Cultural Responsibility"


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
    appendPadding: 10,
    data,
    angleField: 'count',
    colorField: 'type',
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
        textAlign: 'center',
      },
      autoRotate: false,
      content: '{value}',
    },
    statistic: {
      title: {
        offsetX: -5,
        offsetY: -10,
        customHtml: (container, view, datum) => {
          const { width, height } = container.getBoundingClientRect();
          const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
          const text = datum ? datum.type : 'Total Avg Score';
          return renderStatistic(d, text, {
            fontSize: 24,
          });
        },
      },
      content: {
        offsetY: 20,
        style: {
          fontSize: '24px',
        },
        customHtml: (container, view, datum, data) => {
          const { width } = container.getBoundingClientRect();
          const text = datum ? `${datum.count}` : `${data.reduce((r, d) => r + d.count, 0)}`;
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
    ],
    legend: {
        position: 'bottom'
    }
  };

  return <Pie {...config} />;
}

export default Donut;
