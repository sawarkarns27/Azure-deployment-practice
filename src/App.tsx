import { Layout, Menu } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";

const { Header, Content } = Layout;

const App = () => {
  const location = useLocation();

  const selectedKey =
    location.pathname === "/create-user"
      ? "create-user"
      : "users";

  const menuItems = [
    {
      key: "users",
      label: <Link to="/users">Users List</Link>,
    },
    {
      key: "create-user",
      label: <Link to="/create-user">Create User</Link>,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            marginRight: "40px",
          }}
        >
          User Management
        </div>

        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selectedKey]}
          items={menuItems}
        />
      </Header>

      <Content
        style={{
          padding: "24px",
          background: "#f5f5f5",
        }}
      >
        <Outlet />
      </Content>
    </Layout>
  );
};

export default App;