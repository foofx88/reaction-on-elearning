import { Layout } from "antd";
import './layout.css';
import MainNavi from './MainNavi';
import { Router } from "../router";


function Laylay () {
    const {  Header, Content } = Layout;
    return (
    <Layout style={{minHeight: '100vh'}}>
        <MainNavi />

<Layout style={{ padding: "0 24px 24px" }}>
<Header className="siteLayoutBackground" style={{padding: 0}}/>
<Content
  className="siteLayoutBackground"
  style={{
    padding: 24,
    margin: 0,
    minHeight: 360,
  }}
>
  <Router />
</Content>
</Layout>
</Layout>
    );

}

export default Laylay;