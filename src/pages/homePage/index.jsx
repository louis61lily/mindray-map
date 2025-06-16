import React, { useState, useEffect } from "react";
import { Layout, Menu, Dropdown, Tag } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
  CloseOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined
} from "@ant-design/icons";
import "./index.scss";
import logo from "../../static/logo.png";
import NotFoundPage from "../notFoundPage";
import RequireManage from "../../components/requireManage";

const { Header, Sider, Content } = Layout;

// 系统页面
const HomePage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("home");
  const [tagPath, setTagPath] = useState([{ key: "home", label: "首页" }]);
  const [isFullscreen, setIsFullscreen] = useState(false); // 新增全屏状态

  // 侧边栏收起与展开
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  // 用户点击退出操作
  const handleLogout = () => {
    console.log("登出操作");
  };

  // 切换全屏状态
  const toggleFullscreen = () => {
    if (isFullscreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {
      const docElement = document.documentElement;
      if (docElement.requestFullscreen) {
        docElement.requestFullscreen();
      } else if (docElement.webkitRequestFullscreen) {
        docElement.webkitRequestFullscreen();
      } else if (docElement.msRequestFullscreen) {
        docElement.msRequestFullscreen();
      }
    }
    // 暂时注释掉手动更新状态，依靠事件监听更新
    // setIsFullscreen(!isFullscreen);
  };

  // 监听全屏状态变化
  useEffect(() => {
    const handleFullscreenChange = () => {
      const newIsFullscreen =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement;
      setIsFullscreen(!!newIsFullscreen);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("msfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  // 菜单项选择事件处理函数
  const handleMenuSelect = ({ key }) => {
    const tagMap = {
      home: "首页",
      service: "服务记录管理",
      require: "服务需求管理"
    };
    if (!tagPath.some((item) => item.key === key)) {
      setTagPath([...tagPath, { key, label: tagMap[key] }]);
    }
    setSelectedKey(key);
  };

  // 分别删除标签项
  const removeTagItem = (index) => {
    const newTagPath = tagPath.filter((_, i) => i !== index);
    setTagPath(newTagPath);

    // 如果删除的是当前选中项，选择最后一个标签作为新的选中项
    if (tagPath[index].key === selectedKey) {
      setSelectedKey(
        newTagPath.length > 0 ? newTagPath[newTagPath.length - 1].key : "home"
      );
    }
  };

  // 点击 Tag 切换页面
  const handleTagClick = (key) => {
    setSelectedKey(key);
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
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["home"]}
          selectedKeys={[selectedKey]}
          onClick={handleMenuSelect}
        >
          <Menu.Item key="home">首页</Menu.Item>
          <Menu.Item key="service">服务记录管理</Menu.Item>
          <Menu.Item key="require">客户需求管理</Menu.Item>
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
            <span
              onClick={toggleFullscreen}
              style={{ cursor: "pointer", fontSize: "14px" }}
            >
              {isFullscreen ? (
                <FullscreenExitOutlined />
              ) : (
                <FullscreenOutlined />
              )}
            </span>
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
        <div style={{ margin: "10px 0px 0px 10px" }}>
          {tagPath.map((item, index) => (
            <Tag
              key={item.key}
              closable
              onClose={(e) => {
                e.stopPropagation();
                removeTagItem(index);
              }}
              closeIcon={<CloseOutlined />}
              style={{
                marginRight: 8,
                cursor: "pointer",
                backgroundColor:
                  item.key === selectedKey ? "#1890ff" : "#fafafa",
                color: item.key === selectedKey ? "#fff" : "#000",
                padding: "4px 12px",
                fontSize: "14px"
              }}
              // 添加点击事件处理函数
              onClick={() => handleTagClick(item.key)}
            >
              {item.label}
            </Tag>
          ))}
        </div>
        <Content
          style={{
            margin: "10px",
            padding: 24,
            background: "#fff"
          }}
        >
          {selectedKey === "home" && <NotFoundPage />}
          {selectedKey === "service" && <div>服务</div>}
          {selectedKey === "require" && <RequireManage />}
        </Content>
      </Layout>
    </Layout>
  );
};

export default HomePage;
