import React, { useState, useRef } from "react";
import BoxModel from "../../components/boxModel";
import { Form, Input, Button, message } from "antd";
import SignatureCanvas from "react-signature-canvas";
import "./index.scss";

const EngineerReport = () => {
  const [form] = Form.useForm();
  const [isSignatureEmpty, setIsSignatureEmpty] = useState(true);
  const sigCanvasRef = useRef(null);

  const onFinish = (values) => {
    if (isSignatureEmpty) {
      message.error("请先提供客户签名");
      return;
    }

    const signatureData = sigCanvasRef.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
    const formValues = {
      ...values,
      customerSignature: signatureData
    };

    console.log("Form submitted with values:", formValues);
    message.success("报告提交成功");
  };

  const clearSignature = () => {
    sigCanvasRef.current.clear();
    setIsSignatureEmpty(true);
  };

  const handleSignatureEnd = () => {
    setIsSignatureEmpty(sigCanvasRef.current.isEmpty());
  };

  return (
    <div className="engineer-report">
      <BoxModel>
        <div className="engineer-report-box">
          <Form
            form={form}
            name="engineerReportForm"
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              label="机型"
              name="model"
              rules={[{ required: true, message: "请输入机型" }]}
            >
              <Input placeholder="请输入设备型号" />
            </Form.Item>

            <Form.Item
              label="序列号"
              name="serialNumber"
              rules={[{ required: true, message: "请输入序列号" }]}
            >
              <Input placeholder="请输入设备序列号" />
            </Form.Item>

            <Form.Item
              label="服务工程师"
              name="serviceEngineer"
              rules={[{ required: true, message: "请输入服务工程师" }]}
            >
              <Input placeholder="请输入您的姓名" />
            </Form.Item>

            <Form.Item
              label="服务类型"
              name="serviceType"
              rules={[{ required: true, message: "请输入服务类型" }]}
            >
              <Input placeholder="例如：维修、保养、安装等" />
            </Form.Item>

            <Form.Item
              label="现场服务描述"
              name="onSiteServiceDescription"
              rules={[{ required: true, message: "请输入现场服务描述" }]}
            >
              <Input.TextArea
                rows={3}
                placeholder="详细描述服务内容和发现的问题"
              />
            </Form.Item>

            <Form.Item
              label="客户签名"
              required
              help={isSignatureEmpty ? "请在上面签名区域签名" : ""}
              validateStatus={isSignatureEmpty ? "error" : ""}
            >
              <div className="signature-container">
                <SignatureCanvas
                  ref={sigCanvasRef}
                  penColor="black"
                  canvasProps={{
                    width: 500,
                    height: 200,
                    className: "signature-canvas"
                  }}
                  onEnd={handleSignatureEnd}
                />
                <div className="signature-actions">
                  <Button onClick={clearSignature} style={{ marginRight: 8 }}>
                    清除签名
                  </Button>
                  <Button
                    type="primary"
                    onClick={() =>
                      setIsSignatureEmpty(sigCanvasRef.current.isEmpty())
                    }
                  >
                    确认签名
                  </Button>
                </div>
              </div>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                提交报告
              </Button>
            </Form.Item>
          </Form>
        </div>
      </BoxModel>
    </div>
  );
};

export default EngineerReport;
