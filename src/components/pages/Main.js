import { PassInput } from "../dataprocessing/getdata";
import React, { useContext } from "react";

function Main() {
  const data = useContext(PassInput);
  return <div>This is the Main Page</div>;
}

export default Main;
