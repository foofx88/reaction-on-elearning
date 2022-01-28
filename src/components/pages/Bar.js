import { Bar } from "@ant-design/plots";
import { Select } from "antd";
import React, { useContext, useState, useEffect } from "react";
import { PassInput } from "../dataprocessing/getdata";

const { Option } = Select;

function BarChart() {
  const input = useContext(PassInput);
  const bardata = input.loadedData;
  const [student, selectedStudent] = useState("");

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
    if ( items.id === student) {
      countreaction(items)
      console.log(student)
      console.log(tot_count)
 
    }
    else {
      countreaction(items)
    }

  }

  data.push(
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
    { type: "Nice", count: nice_count },
    { type: "Total Posted", count: tot_count }
  );

  console.log(data)

  const barconfig = {
    data,
    xField: "count",
    yField: "type",
    seriesField: "type",
  };


  function handleChange(value) {
    selectedStudent(value);
    console.log(`Selected: ${value}`);
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  React.useEffect(()=> {

  }, [student]);

  let optionS = bardata.map((v) => <Option value={v.id}>{v.id}</Option>);


  //include a selector with all student ID (with filters) and chart to show student's reactions on post
  //default view set to all
  return (
    <div>
      <h3>Reactions on Posts</h3>
      <Select showSearch placeholder="All Students" style={{width: 200}}
    optionFilterProp="children" defaultValue={"All Students"} onChange={handleChange} onSearch={onSearch} filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
        {optionS}
      </Select>
      <Bar {...barconfig} />
    </div>
  );
}

export default BarChart;
