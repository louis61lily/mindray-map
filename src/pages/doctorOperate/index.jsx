import React from "react";
import { Button } from "antd";
import BoxModel from "../../components/boxModel";
import "./index.scss";
import { useNavigate } from "react-router-dom";

const OperateSelect = () => {
  const navigate = useNavigate();

  // 定义跳转人员联系页面的函数
  const handleContactClick = () => {
    navigate("/person-list");
  };

  // 定义跳转投诉热线页面的函数
  const handleComplaintClick = () => {
    navigate("/complain-hotline");
  };

  // 定义跳转服务需求页面的函数
  const handleEvaluationClick = () => {
    navigate("/service-evaluate");
  };

  return (
    <div className="operate-select">
      <BoxModel>
        <div className="operate-select-box">
          <Button type="primary" onClick={handleContactClick}>
            人员联系
          </Button>
          <Button type="primary" onClick={handleComplaintClick}>
            投诉热线
          </Button>
          <Button type="primary" onClick={handleEvaluationClick}>
            服务需求
          </Button>
        </div>
      </BoxModel>
    </div>
  );
};

export default OperateSelect;
