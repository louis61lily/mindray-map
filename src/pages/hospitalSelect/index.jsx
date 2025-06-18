import React, { useState } from "react";
import { Select, Button, Row, Col } from "antd";
import BoxModel from "../../components/boxModel";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import service from "../../tools/request";

const { Option } = Select;

const HospitalSelect = () => {
  const navigate = useNavigate();
  const [hospitals, setHospitals] = useState([]); // 存储医院列表
  const [selectedHospital, setSelectedHospital] = useState(null); // 存储选中的医院

  const fetchHospitals = async (value) => {
    try {
      const response = await service.get(`/api/hospitals?keyword=${value}`);
      setHospitals(response.data);
    } catch (error) {
      console.error("获取医院列表失败", error);
    }
  };

  // todo
  const handleConfirm = () => {
    if (selectedHospital) {
      navigate("/doctor-operate", { state: { hospital: selectedHospital } });
    }
    navigate("/doctor-operate", { state: { hospital: selectedHospital } });
  };

  return (
    <div className="hospital-select">
      <BoxModel>
        <div className="hospital-select-box">
          <Row justify="center" gutter={[0, 16]}>
            <Col
              span={24}
              className="select-box"
              style={{ textAlign: "center" }}
            >
              <Select
                placeholder="医院选择"
                style={{ width: "50%" }}
                onSearch={fetchHospitals}
                onChange={(value) => setSelectedHospital(value)}
                showSearch
                filterOption={false}
                optionFilterProp="children"
              >
                {hospitals.map((hospital) => (
                  <Option key={hospital.id} value={hospital.id}>
                    {hospital.name}
                  </Option>
                ))}
              </Select>
            </Col>
            <Col span={12} className="confirm-box">
              <Button
                type="primary"
                block
                style={{ width: "100%" }}
                onClick={handleConfirm} // 点击确认按钮触发跳转
                // disabled={!selectedHospital} // 未选择医院时禁用按钮
              >
                确认
              </Button>
            </Col>
          </Row>
        </div>
      </BoxModel>
    </div>
  );
};

export default HospitalSelect;
