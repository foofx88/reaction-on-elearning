import { Table } from "antd";
import { PassInput } from "../dataprocessing/getdata";
import React, { useContext } from "react";

function DataTable() {
  const data = useContext(PassInput);
  const tabledata = [];

  function sToTime(timespent) {
    let seconds = Math.floor((timespent / 1) % 60),
      minutes = Math.floor((timespent / (1 * 60)) % 60),
      hours = Math.floor((timespent / (1 * 60 * 60)) % 24);

    return (
      (hours < 10 ? "0" + hours : hours) +
      ":" +
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds)
    );
  }


  for (let items of data.loadedData){
    items.timeonline = sToTime(items.timeonline)
    tabledata.push(items)

}

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Passed",
      dataIndex: "Approved",
      key: "Approved",
    },
    {
      title: "Amazing Post",
      dataIndex: "amazing_post",
      key: "amazing_post",
    },
    {
      title: "Bad Post",
      dataIndex: "bad_post",
      key: "bad_post",
    },
    {
      title: "Collaborative Post",
      dataIndex: "collaborative_post",
      key: "collaborative_post",
    },
    {
      title: "Confused Post",
      dataIndex: "confused_post",
      key: "confused_post",
    },
    {
      title: "Creative Post",
      dataIndex: "creative_post",
      key: "creative_post",
    },
    {
      title: "Helpful Post",
      dataIndex: "helpful_post",
      key: "helpful_post",
    },
    {
      title: "Nice Code Post",
      dataIndex: "nice_code_post",
      key: "nice_code_post",
    },
    {
      title: "Time Spent Online (HH:MM:SS)",
      dataIndex: "timeonline",
      key: "timeonline",
      sorter: (a, b) => a.timeonline.localeCompare(b.timeonline),
    },
    {
      title: "Total Posts",
      dataIndex: "total_posts",
      key: "total_posts",
      sorter: (a, b) => a.total_posts - b.total_posts,
    },
    {
      title: "SK1",
      dataIndex: "sk1_classroom",
      key: "sk1_classroom",
    },
    {
      title: "SK2",
      dataIndex: "sk2_classroom",
      key: "sk2_classroom",
    },
    {
      title: "SK3",
      dataIndex: "sk3_classroom",
      key: "sk3_classroom",
    },
    {
      title: "SK4",
      dataIndex: "sk4_classroom",
      key: "sk4_classroom",
    },
    {
      title: "SK5",
      dataIndex: "sk5_classroom",
      key: "sk5_classroom",
    },
  ];

  return <Table dataSource={tabledata} columns={columns} pagination={{ defaultPageSize: 50 }} scroll={{ y: 500 }} size="small" />;
}

export default DataTable;
