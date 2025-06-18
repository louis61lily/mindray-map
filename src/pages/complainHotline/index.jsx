import React from "react";
import BoxModel from "../../components/boxModel";
import { Table } from "antd";

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
  return (
    <div className="complain-hotline">
      <BoxModel>
        <div className="complain-hotline-box">
          <Table columns={columns} dataSource={dataSource} pagination={false} />
        </div>
      </BoxModel>
    </div>
  );
};

export default ComplainHotline;
