import React from "react";
import { Form, Select, DatePicker, Button, Table, Tooltip } from "antd";

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
  // 查询条件
  const onFinish = (values) => {
    console.log("表单提交的值：", values);
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
      title: "现场服务描述",
      dataIndex: "serviceDesc",
      key: "serviceDesc",
      align: "center",
      width: 150,
      render: (text) => {
        const displayText = text || "无"; // 处理空值
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
      title: "客户确认",
      dataIndex: "confirm",
      key: "confirm",
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
    </div>
  );
};

export default ServiceManage;
