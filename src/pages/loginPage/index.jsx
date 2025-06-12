import { Form, Input, Button } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "./index.scss";
import logo from "../../static/logo.png";
// 登录页面
const LoginPage = () => {
  const onFinish = () => {
    console.log("form finish");
  };

  return (
    <div className="login-box">
      <div className="login-img">
        <img src={logo} alt="" />
      </div>
      <div className="login-description">
        <p>迈瑞智慧地图管理系统</p>
      </div>
      <div className="login-form">
        <Form name="login" onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "账号不能为空！" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="用户名" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "密码不能为空！" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>

          <Form.Item label={null} wrapperCol={{ span: 24 }}>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
