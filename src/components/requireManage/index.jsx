import React, { useState } from "react";
import {
  Form,
  Select,
  Tooltip,
  DatePicker,
  Button,
  Table,
  Modal,
  Input
} from "antd";
import "./index.scss";

const requireStatus = [
  { key: "submitted", label: "已提交" },
  { key: "received", label: "已接收" },
  { key: "handling", label: "处理中" },
  { key: "completed", label: "已解决" }
];
const controlStyle = { width: 200 };

const RequireManage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  // 查询条件
  const onFinish = (values) => {
    console.log("表单提交的值：", values);
  };

  // 删除确认函数
  const handleDelete = (record) => {
    Modal.confirm({
      title: "信息",
      content: `确认删除吗？`,
      cancelText: "取消",
      okText: "确认",
      onOk: () => {
        console.log("删除操作", record);
        // 这里添加实际的删除逻辑
      },
      onCancel: () => {
        console.log("取消删除");
      },
      // 自定义容器，确保基于视口定位
      getContainer: () => document.body,
      // 自定义样式确保居中
      style: {
        top: "45%"
      }
    });
  };
  // 提交修改表单
  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("修改提交的值：", values);
        setIsModalVisible(false);
      })
      .catch((errorInfo) => {
        console.log("表单验证失败：", errorInfo);
      });
  };

  // 关闭修改弹窗
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // 导出函数
  const handleExport = () => {
    console.log("执行导出操作，当前表格数据：", dataSource);
  };

  // 模拟数据
  const dataSource = [
    {
      key: "1",
      addTime: "2025-06-16",
      requireStatus: "submitted",
      submitter: "张三",
      content: "需求内容示例 1"
    },
    {
      key: "2",
      addTime: "2025-06-15",
      requireStatus: "received",
      submitter: "李四",
      content: "需求内容示例 2"
    }
    // 可添加更多模拟数据
  ];

  const columns = [
    {
      title: "序号",
      dataIndex: "key",
      key: "key",
      align: "center",
      width: 80,
      render: (text) => (
        <Tooltip title={text}>
          <div
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            {text}
          </div>
        </Tooltip>
      )
    },
    {
      title: "添加时间",
      dataIndex: "addTime",
      key: "addTime",
      align: "center",
      width: 120,
      render: (text) => (
        <Tooltip title={text}>
          <div
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            {text}
          </div>
        </Tooltip>
      )
    },
    {
      title: "医院名称",
      dataIndex: "requireStatus",
      key: "requireStatus",
      align: "center",
      width: 120,
      render: (status) => {
        const target = requireStatus.find((item) => item.key === status);
        const displayText = target ? target.label : "";
        return (
          <Tooltip title={displayText}>
            <div
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
            >
              {displayText}
            </div>
          </Tooltip>
        );
      }
    },

    {
      title: "需求内容",
      dataIndex: "content",
      key: "content",
      align: "center",
      width: 200,
      render: (text) => (
        <Tooltip title={text}>
          <div
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            {text}
          </div>
        </Tooltip>
      )
    },
    {
      title: "操作",
      key: "action",
      align: "center",
      width: 120,
      fixed: "right",
      render: (_, record) => (
        <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
          <Button
            style={{
              fontSize: "11px",
              color: "white",
              backgroundColor: "#ff5722",
              whiteSpace: "nowrap"
            }}
            onClick={() => handleDelete(record)}
            size="small"
          >
            删除
          </Button>
        </div>
      )
    }
  ];

  return (
    <div className="require-manage">
      <div className="require-manage-header">
        <Form colon={false} layout="inline" onFinish={onFinish}>
          <Form.Item
            className="form-item"
            label="医院名称"
            name="requireStatus"
          >
            <Select placeholder="请选择" style={controlStyle}>
              {requireStatus.map((item) => (
                <Select.Option key={item.key} value={item.key}>
                  {item.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item className="form-item" label="日期起始" name="dateStart">
            <DatePicker style={controlStyle} placeholder="日期" />
          </Form.Item>
          <Form.Item className="form-item" label="日期截止" name="dateEnd">
            <DatePicker style={controlStyle} placeholder="日期" />
          </Form.Item>
          <Form.Item className="form-item">
            <Button
              type="primary"
              style={{ borderRadius: "0px" }}
              htmlType="submit"
            >
              查询
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="require-manage-table">
        <div className="require-manage-table-header">
          <div className="require-manage-table-header-right">
            <Button
              type="primary"
              style={{ borderRadius: "0px" }}
              onClick={handleExport}
            >
              导出
            </Button>
          </div>
        </div>
        <div className="require-manage-table-content">
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={{ pageSize: 20 }}
            scroll={{ x: "max-content" }}
            bordered
          />
        </div>
      </div>
      <Modal
        title="修改需求信息"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText="取消"
        okText="确认"
      >
        <Form
          form={form}
          layout="horizontal"
          labelAlign="right"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
        >
          <Form.Item
            name="submitter"
            label="提交人"
            rules={[{ required: true, message: "请输入提交人" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="requireStatus"
            label="需求状态"
            rules={[{ required: true, message: "请选择需求状态" }]}
          >
            <Select placeholder="请选择">
              {requireStatus.map((item) => (
                <Select.Option key={item.key} value={item.key}>
                  {item.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="content"
            label="客户需求"
            rules={[{ required: true, message: "请输入客户需求" }]}
          >
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default RequireManage;
