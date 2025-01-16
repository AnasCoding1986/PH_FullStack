import { Layout, Menu, MenuProps } from "antd";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { createElement } from "react";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps['items'] = [
  {
    key:"1",
    label:"nav 1",
  },
  {
    key:"2",
    label:"nav 2",
  },
  {
    key:"3",
    label:"nav 3",
    children:[
      {
        key:"a",
        label:"child 1",
      },
      {
        key:"b",
        label:"child 2",
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
