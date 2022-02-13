import { Layout } from "antd";
import "./layout.css";
import MainNavi from "./MainNavi";
import { Router } from "../router";
import GetData from "../dataprocessing/getdata";

function Laylay() {
  const { Header, Content } = Layout;
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <MainNavi />
      <Layout style={{ padding: "0 24px 24px" }}>
        <Content
          className="siteLayoutBackground"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 360,
          }}
        >
          <GetData>
            <Router />
          </GetData>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Laylay;
