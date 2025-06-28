import React, { useState } from "react";
import BoxModel from "../../components/boxModel";
import { Table, Button, Modal, Form, Input } from "antd";
import { useNavigate } from "react-router-dom"; // 引入 useNavigate 钩子

const dataSource = [
  {
    key: "1",
    position: "医生",
    name: "张三",
    contact: "13800138000"
  },
  {
    key: "2",
    position: "护士",
    name: "李四",
    contact: "13900139000"
  }
  // 可按需添加更多数据
];

const PersonList = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [newDataSource, setNewDataSource] = useState(dataSource);

  const handleGoBack = () => {
    navigate(-1); // 回到上一页面
  };

  const handleEdit = (record) => {
    setEditingRecord(record);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      const updatedDataSource = newDataSource.map((item) =>
        item.key === editingRecord.key ? { ...item, ...values } : item
      );
      setNewDataSource(updatedDataSource);
      setIsModalVisible(false);
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "职务",
      dataIndex: "position",
      key: "position",
      align: "center" // 让职务列内容居中
    },
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
      align: "center" // 让姓名列内容居中
    },
    {
      title: "联系方式",
      dataIndex: "contact",
      key: "contact",
      align: "center" // 让联系方式列内容居中
    },
    // 新增操作列
    {
      title: "操作",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Button type="link" onClick={() => handleEdit(record)}>
          修改
        </Button>
      )
    }
  ];

  return (
    <div className="person-list">
      <BoxModel>
        <div className="person-list-box">
          <Table
            columns={columns}
            dataSource={newDataSource}
            pagination={false}
          />
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Button
              onClick={handleGoBack}
              type="primary"
              style={{ width: "200px" }}
            >
              返回
            </Button>
          </div>
        </div>
      </BoxModel>
      {/* 编辑模态框 */}
      <Modal
        title="修改数据"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText="取消"
        okText="确认"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="position"
            label="职务"
            rules={[{ required: true, message: "请输入职务" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="name"
            label="姓名"
            rules={[{ required: true, message: "请输入姓名" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="contact"
            label="联系方式"
            rules={[{ required: true, message: "请输入联系方式" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default PersonList;
