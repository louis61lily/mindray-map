import React from "react";
import BoxModel from "../../components/boxModel";
import { Form, Input, Button, message } from "antd";
import "./index.scss";

const EngineerReport = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const formValues = {
      ...values
    };
    console.log("Form submitted with values:", formValues);
    message.success("报告提交成功");
  };

  // 定义标签列和输入框列的布局
  const labelCol = { span: 6, offset: 0, style: { textAlign: "right" } };
  const wrapperCol = { span: 16, offset: 1 };

  return (
    <div className="engineer-report">
      <BoxModel>
        <div className="engineer-report-box">
          {/* 使用 labelCol 和 wrapperCol 统一设置表单布局 */}
          <Form
            form={form}
            name="engineerReportForm"
            onFinish={onFinish}
            labelCol={labelCol}
            wrapperCol={wrapperCol}
          >
            <Form.Item
              label="设备型号"
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
              label="客户确认"
              required
              name="customerConfirmation"
              rules={[{ required: true, message: "请输入客户确认" }]}
            >
              <Input placeholder="客户确认" />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                ...wrapperCol,
                offset: labelCol.span + wrapperCol.offset
              }}
            >
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
