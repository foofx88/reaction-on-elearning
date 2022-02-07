import { Bar } from "@ant-design/plots";
import { PageHeader, Select } from "antd";
import React, { useContext, useState } from "react";
import { PassInput } from "../dataprocessing/getdata";

const { Option } = Select;

function BarChart() {
  const input = useContext(PassInput);
  const bardata = input.loadedData;
  const [student, selectedStudent] = useState("All Students");

  let data = [];
  let amaz_count = 0;
  let bad_count = 0;
  let collab_count = 0;
  let conf_count = 0;
  let creat_count = 0;
  let help_count = 0;
  let nice_count = 0;
  let tot_count = 0;

  function countreaction(tocount) {
    amaz_count += tocount.amazing_post;
    bad_count += tocount.bad_post;
    collab_count += tocount.collaborative_post;
    conf_count += tocount.confused_post;
    creat_count += tocount.creative_post;
    help_count += tocount.helpful_post;
    nice_count += tocount.nice_code_post;
    tot_count += tocount.total_posts;
  }

  for (let items of bardata) {
    if (student === "All Students") {
      countreaction(items);
    } else {
      if (items.id === student) {
        countreaction(items);
      }
    }
  }

  data.push(
    { type: "Total Posted", count: tot_count },
    {
      type: "Amazing",
      count: amaz_count,
    },
    {
      type: "Bad",
      count: bad_count,
    },
    { type: "Collaborative", count: collab_count },
    { type: "Confused", count: conf_count },
    { type: "Creative", count: creat_count },
    { type: "Helpful", count: help_count },
    { type: "Nice", count: nice_count }
  );

  const barconfig = {
    data,
    xField: "count",
    yField: "type",
    colorField: 'type',
    color:['#5B8FF9','#9270CA','#E8684A', '#269A99', '#5AD8A6', '#F6BD16', '#6DC8EC','#FF9D4D'],
    seriesField: "type",
    tooltip: false,
    label: {
      position: 'right',
      style: {
        fill: 'black',
      }

    }

  };

  function handleChange(value) {
    selectedStudent(value);
    console.log(`Selected: ${value}`);
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  let optionS = bardata.map((v) => <Option value={v.id}>{v.id}</Option>);

  return (
    <div>
      <PageHeader
        title="Reactions Received on Posts"
        extra={[
          <Select showSearch placeholder="All Students" style={{ align: "right", width: 200 }} optionFilterProp="children" defaultValue={"All Students"} onChange={handleChange} onSearch={onSearch} filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
            <Option value="All Students">All Students</Option>
            {optionS}
          </Select>,
        ]}
      />
      <Bar {...barconfig} />
    </div>
  );
}

export default BarChart;
