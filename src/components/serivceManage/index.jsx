import React, { useState } from "react";
import {
  Form,
  Select,
  DatePicker,
  Button,
  Table,
  Modal,
  Input,
  Tooltip
} from "antd";

// 服务类型
const serviceTypes = [
  { key: "calibration", label: "校准" },
  { key: "performanceVerification", label: "性能验证" },
  { key: "installation", label: "安装" },
  { key: "repair", label: "维修" },
  { key: "inspection", label: "巡检" },
  { key: "maintenance", label: "维护" }
];

// 设备型号
const deviceModels = [
  { key: "BC-760[R] CS", label: "BC-760[R] CS" },
  { key: "BS-240", label: "BS-240" },
  { key: "CL-6000i", label: "CL-6000i" },
  { key: "BS430", label: "BS430" },
  { key: "CL-8000i", label: "CL-8000i" },
  { key: "CL-900i", label: "CL-900i" }
];

const controlStyle = { width: 200 };

const ServiceManage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isViewModalVisible, setIsViewModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [currentRecord, setCurrentRecord] = useState(null);

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
      },
      onCancel: () => {
        console.log("取消删除");
      },
      getContainer: () => document.body,
      style: {
        top: "45%"
      }
    });
  };

  // 打开修改弹窗
  const showModal = (record) => {
    setCurrentRecord(record);
    form.setFieldsValue({
      maintenanceType: record.maintenanceType,
      deviceModel: record.deviceModel,
      deviceSerialNumber: record.deviceSerialNumber,
      engineer: record.engineer,
      addTime: record.addTime
    });
    setIsModalVisible(true);
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

  // 打印函数
  const handlePrint = () => {
    console.log("执行打印操作，当前表格数据：", dataSource);
  };

  // 打开查看弹窗
  const showViewModal = (record) => {
    setCurrentRecord(record);
    setIsViewModalVisible(true);
  };

  // 关闭查看弹窗
  const handleViewCancel = () => {
    setIsViewModalVisible(false);
  };

  // 模拟数据
  const dataSource = [
    {
      key: "1",
      addTime: "2025-06-16",
      maintenanceType: "repair",
      deviceModel: "BC-760[R] CS",
      deviceSerialNumber: "SN0001",
      engineer: "工程师 A"
    },
    {
      key: "2",
      addTime: "2025-06-15",
      maintenanceType: "inspection",
      deviceModel: "BS-240",
      deviceSerialNumber: "SN0002",
      engineer: "工程师 B"
    }
  ];

  // 表格列配置
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
      title: "时间",
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
      title: "维护类型",
      dataIndex: "maintenanceType",
      key: "maintenanceType",
      align: "center",
      width: 120,
      render: (status) => {
        const target = serviceTypes.find((item) => item.key === status);
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
      title: "设备型号",
      dataIndex: "deviceModel",
      key: "deviceModel",
      align: "center",
      width: 150,
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
      title: "设备序列号",
      dataIndex: "deviceSerialNumber",
      key: "deviceSerialNumber",
      align: "center",
      width: 150,
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
      title: "工程师",
      dataIndex: "engineer",
      key: "engineer",
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
      title: "操作",
      key: "action",
      align: "center",
      width: 220,
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
          <Button
            style={{
              fontSize: "11px",
              color: "white",
              backgroundColor: "#147ecd",
              whiteSpace: "nowrap"
            }}
            onClick={() => showModal(record)}
            size="small"
          >
            修改
          </Button>
          <Button
            style={{
              fontSize: "11px",
              color: "white",
              backgroundColor: "#28a745",
              whiteSpace: "nowrap"
            }}
            onClick={() => showViewModal(record)}
            size="small"
          >
            查看
          </Button>
        </div>
      )
    }
  ];

  return (
    <div className="require-manage">
      <div className="require-manage-header">
        <Form colon={false} layout="inline" onFinish={onFinish}>
          <Form.Item className="form-item" label="服务类型" name="serviceType">
            <Select placeholder="请选择" style={controlStyle}>
              {serviceTypes.map((item) => (
                <Select.Option key={item.key} value={item.key}>
                  {item.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item className="form-item" label="设备型号" name="deviceModel">
            <Select placeholder="请选择" style={controlStyle}>
              {deviceModels.map((item) => (
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
          <div className="require-manage-table-header-left">
            <Button type="primary" style={{ borderRadius: "0px" }}>
              + 新建
            </Button>
          </div>
          <div className="require-manage-table-header-right">
            <Button
              type="primary"
              style={{ borderRadius: "0px" }}
              onClick={handleExport}
            >
              导出
            </Button>
            <Button
              type="primary"
              style={{ borderRadius: "0px", marginLeft: "10px" }}
              onClick={handlePrint}
            >
              打印
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
            name="maintenanceType"
            label="维护类型"
            rules={[{ required: true, message: "请选择维护类型" }]}
          >
            <Select placeholder="请选择">
              {serviceTypes.map((item) => (
                <Select.Option key={item.key} value={item.key}>
                  {item.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="deviceModel"
            label="设备型号"
            rules={[{ required: true, message: "请选择设备型号" }]}
          >
            <Select placeholder="请选择">
              {deviceModels.map((item) => (
                <Select.Option key={item.key} value={item.key}>
                  {item.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="deviceSerialNumber"
            label="设备序列号"
            rules={[{ required: true, message: "请输入设备序列号" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="engineer"
            label="工程师"
            rules={[{ required: true, message: "请输入工程师" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="addTime"
            label="时间"
            rules={[{ required: true, message: "请选择时间" }]}
          >
            <DatePicker />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="查看需求信息"
        visible={isViewModalVisible}
        onCancel={handleViewCancel}
        cancelText="关闭"
        footer={null}
      >
        {currentRecord && (
          <div>
            <p>
              <strong>时间:</strong> {currentRecord.addTime}
            </p>
            <p>
              <strong>维护类型:</strong>{" "}
              {
                serviceTypes.find(
                  (item) => item.key === currentRecord.maintenanceType
                )?.label
              }
            </p>
            <p>
              <strong>设备型号:</strong> {currentRecord.deviceModel}
            </p>
            <p>
              <strong>设备序列号:</strong> {currentRecord.deviceSerialNumber}
            </p>
            <p>
              <strong>工程师:</strong> {currentRecord.engineer}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ServiceManage;
