import { Menu, Layout } from "antd";
import { UserOutlined, LaptopOutlined } from "@ant-design/icons";
import "./MainNavi.css";
import { Link } from "react-router-dom";

function MainNavi() {
  const { SubMenu } = Menu;
  const { Sider } = Layout;

  return (
    <Sider width={200} className="siteLayoutBackground">
      <div>REACT on E-Learning </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <SubMenu key="viz" icon={<UserOutlined />} title="Visualizations">
          <Menu.Item key="viz.bar">
            <Link to="/bar">Bar Chart</Link>
          </Menu.Item>
          <Menu.Item key="viz.scatter">
            <Link to="/scatter">Scatter Plot</Link>
          </Menu.Item>
          <Menu.Item key="viz.pie">
            <Link to="/pie">Pie Chart</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="data" icon={<LaptopOutlined />} title="Data">
          <Menu.Item key="data.new">Add New Data</Menu.Item>
          <Menu.Item key="data.table">View Existing Data</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default MainNavi;
