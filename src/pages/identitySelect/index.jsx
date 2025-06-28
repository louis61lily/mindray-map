import React, { useState } from "react";
import { Select, Button, Row, Col } from "antd";
import BoxModel from "../../components/boxModel";
import "./index.scss";
import { useNavigate } from "react-router-dom";

const IdentitySelect = () => {
  const navigate = useNavigate();
  const [selectedIdentity, setSelectedIdentity] = useState(null);

  // 监听 Select 组件的选择事件
  const handleSelectChange = (value) => {
    setSelectedIdentity(value);
  };

  // 点击确认按钮后的处理函数
  const handleConfirmClick = () => {
    if (selectedIdentity) {
      // 根据选择的身份跳转到不同的路由
      switch (selectedIdentity) {
        case "admin":
          navigate("/login");
          break;
        case "doctor":
          // 医生带参跳转，通过 state 参数传递身份信息
          navigate("/hospital", { state: { identity: "doctor" } });
          break;
        case "engineer":
          // 工程师带参跳转，通过 state 参数传递身份信息
          navigate("/hospital", { state: { identity: "engineer" } });
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="identity-select">
      <BoxModel>
        <div className="identity-select-box">
          <Row justify="center" gutter={[0, 16]}>
            <Col
              span={24}
              className="select-box"
              style={{ textAlign: "center" }}
            >
              <Select
                placeholder="请选择您的身份"
                style={{ width: "50%" }}
                onChange={handleSelectChange}
              >
                <Select.Option value="admin">管理员</Select.Option>
                <Select.Option value="doctor">科室老师</Select.Option>
                <Select.Option value="engineer">工程师</Select.Option>
              </Select>
            </Col>
            <Col span={12} className="confirm-box">
              <Button
                type="primary"
                block
                style={{ width: "100%" }}
                onClick={handleConfirmClick}
                // 当未选择身份时禁用按钮
                disabled={!selectedIdentity}
              >
                确认
              </Button>
            </Col>
          </Row>
        </div>
      </BoxModel>
    </div>
  );
};

export default IdentitySelect;
