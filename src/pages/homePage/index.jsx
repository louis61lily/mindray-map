import React, { useState } from "react";
import { Layout, Menu, Dropdown } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined
} from "@ant-design/icons";
import "./index.scss";
import logo from "../../static/logo.png";

const { Header, Sider, Content } = Layout;

// 系统页面
const HomePage = () => {
  const [collapsed, setCollapsed] = useState(false);

  // 侧边栏收起与展开
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  // 用户点击退出操作
  const handleLogout = () => {
    console.log("登出操作");
  };

  return (
    <Layout className="home-layout">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth={0}
        width={220}
      >
        <div className="home-menu-logo">
          <img src={logo} alt="logo" />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["home"]}>
          <Menu.Item key="home">首页</Menu.Item>
          <Menu.Item key="service">服务记录管理</Menu.Item>
          <Menu.Item key="require">服务需求管理</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            background: "#fff",
            padding: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle
            }
          )}
          <div className="header-right">
            <span className="identity">身份</span>
            <div className="operate">
              <Dropdown
                menu={{
                  items: [
                    {
                      key: "logout",
                      label: "退出操作",
                      onClick: handleLogout
                    }
                  ]
                }}
                trigger={["hover"]}
                placement="bottom"
              >
                <DownOutlined className="down-outlined" />
              </Dropdown>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: "#fff"
          }}
        >
          右侧内容区域
        </Content>
      </Layout>
    </Layout>
  );
};

export default HomePage;
