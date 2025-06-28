import React from "react";
import BoxModel from "../../components/boxModel";
import { Table, Button } from "antd";
import { useNavigate } from "react-router-dom"; // 引入 useNavigate 钩子

const columns = [
  {
    title: "职务",
    dataIndex: "position",
    key: "position",
    align: "center"
  },
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
    align: "center"
  },
  {
    title: "联系方式",
    dataIndex: "contact",
    key: "contact",
    align: "center"
  }
];

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

const ComplainHotline = () => {
  const navigate = useNavigate(); // 获取 navigate 函数

  const handleGoBack = () => {
    navigate(-1); // 回到上一页面
  };

  return (
    <div className="complain-hotline">
      <BoxModel>
        <div className="complain-hotline-box">
          <Table columns={columns} dataSource={dataSource} pagination={false} />
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
    </div>
  );
};

export default ComplainHotline;
