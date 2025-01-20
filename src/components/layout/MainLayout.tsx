import { Layout, Menu, MenuProps } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { createElement } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { adminPaths, adminSidebarItems } from "../../routes/admin.routes";
import { sidebarItemsGenerator } from "../../utils/sideBarItemsGenerator";
import Sidebar from "./Sidebar";

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = adminSidebarItems;

export const MainLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar></Sidebar>
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
      </Layout>
    </Layout>
  );
};
