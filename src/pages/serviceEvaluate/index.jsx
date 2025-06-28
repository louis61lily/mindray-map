import React, { useState } from "react";
import BoxModel from "../../components/boxModel";
import { Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

const ServiceEvaluate = () => {
  const [evaluation, setEvaluation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("提交的评价内容：", evaluation);
    // 提交后清空输入框内容
    setEvaluation("");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="service-evaluate">
      <BoxModel>
        <div className="service-evaluate-box">
          <Input.TextArea
            rows={4}
            placeholder="请输入服务需求内容"
            value={evaluation}
            onChange={(e) => setEvaluation(e.target.value)}
          />
          {/* 修改按钮父容器样式，添加 justify-content: center */}
          <div
            style={{
              marginTop: "16px",
              display: "flex",
              gap: "16px",
              justifyContent: "center"
            }}
          >
            <Button onClick={handleBack}>返回</Button>
            <Button type="primary" onClick={handleSubmit}>
              提交
            </Button>
          </div>
        </div>
      </BoxModel>
    </div>
  );
};

export default ServiceEvaluate;
