import { Table } from "antd";
import { PassInput } from "../dataprocessing/getdata";
import React, { useContext } from "react";

function DataTable() {
  const data = useContext(PassInput);
  const tabledata = data.loadedData;
  let tableitems = [];

  for (let items of tabledata) {
    tableitems.push(items);
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
      title: "Time Spent Online(s)",
      dataIndex: "timeonline",
      key: "timeonline",
      sorter: (a, b) => a.timeonline - b.timeonline,
    },
    {
      title: "Total Posts",
      dataIndex: "total_posts",
      key: "total_posts",
      sorter: (a, b) => a.total_posts - b.total_posts,
    },
    {
      title: "Critical Thinking and Problem Solving",
      dataIndex: "sk1_classroom",
      key: "sk1_classroom",
    },
    {
      title: "Creativity and Innovation",
      dataIndex: "sk2_classroom",
      key: "sk2_classroom",
    },
    {
      title: "Constant and Self Learning",
      dataIndex: "sk3_classroom",
      key: "sk3_classroom",
    },
    {
      title: "Collaboration and Self-Direction",
      dataIndex: "sk4_classroom",
      key: "sk4_classroom",
    },
    {
      title: "Social and Cultural Responsability",
      dataIndex: "sk5_classroom",
      key: "sk5_classroom",
    },
  ];

  return <Table dataSource={tableitems} columns={columns} pagination={{ defaultPageSize: 50 }} scroll={{ y: 500 }} size="small" />;
}

export default DataTable;
