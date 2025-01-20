import { Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../../utils/sideBarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <div>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div className="demo-logo-vertical" />
        <div
          style={{
            color: "white",
            textAlign: "center",
            alignItems: "center",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1>PH University</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sidebarItemsGenerator(adminPaths, "admin")}
        />
      </Sider>
    </div>
  );
};

export default Sidebar;
