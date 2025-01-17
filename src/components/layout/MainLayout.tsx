import { Layout, Menu, MenuProps } from "antd";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { createElement } from "react";
import { NavLink, Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps['items'] = [
  {
    key:"Dashboard",
    label:<NavLink to={"/admin/dashboard"}>Dashboard</NavLink>,
  },
  {
    key:"2",
    label:"nav 2",
  },
  {
    key:"User Management",
    label:"User Management",
    children:[
      {
        key:"Create Admin",
        label:<NavLink to={"/admin/craete-admin"}>Create Admin</NavLink>,
      },
      {
        key:"Craete Student",
        label:<NavLink to={"/admin/craete-student"}>Craete Student</NavLink>,
      },
      {
        key:"Create Faculty",
        label:<NavLink to={"/admin/craete-faculty"}>Create Faculty</NavLink>,
      },
    ]
  },
]

export const MainLayout = () => {
  return (
    <Layout style={{minHeight:'100vh'}}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <div style={{color:'white', textAlign:'center', alignItems:'center', height:'4rem', display:'flex', justifyContent:'center'}}>
          <h1>PH University</h1>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]} items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
