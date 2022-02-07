import { Menu, Layout } from "antd";
import { UserOutlined, LaptopOutlined, HomeOutlined } from "@ant-design/icons";
import "./MainNavi.css";
import { Link } from "react-router-dom";

function MainNavi() {
  const { SubMenu } = Menu;
  const { Sider } = Layout;

  return (
    <Sider width={205} className="siteLayoutBackground">
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} style={{ height: "100%", borderRight: 0 }}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/roe">REACT on E-Learning</Link>
        </Menu.Item>

        <SubMenu key="viz" icon={<UserOutlined />} title="Visualizations">
          <Menu.Item key="viz.bar">
            <Link to="/roe/bar">Bar Chart</Link>
          </Menu.Item>
          <Menu.Item key="viz.scatter">
            <Link to="/roe/scatter">Scatter Plot</Link>
          </Menu.Item>
          <Menu.Item key="viz.pie">
            <Link to="/roe/donut">Donut Chart</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="data" icon={<LaptopOutlined />} title="Data">
          <Menu.Item key="data.table">
            <Link to="/roe/table">View Existing Data</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default MainNavi;
