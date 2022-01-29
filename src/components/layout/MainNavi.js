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
          <Link to="/">REACT on E-Learning</Link>
        </Menu.Item>

        <SubMenu key="viz" icon={<UserOutlined />} title="Visualizations">
          <Menu.Item key="viz.bar">
            <Link to="/bar">Bar Chart</Link>
          </Menu.Item>
          <Menu.Item key="viz.scatter">
            <Link to="/scatter">Scatter Plot</Link>
          </Menu.Item>
          <Menu.Item key="viz.pie">
            <Link to="/donut">Donut Chart</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="data" icon={<LaptopOutlined />} title="Data">
          <Menu.Item key="data.new">
            <Link to="/newdata">Add New Data</Link>
          </Menu.Item>
          <Menu.Item key="data.table">
            <Link to="/table">View Existing Data</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default MainNavi;
