import "./index.scss";
import logo from "../../static/logo.png";
const BoxModel = ({ children }) => {
  return (
    <div className="box-model-box">
      <div className="box-model-img">
        <img src={logo} alt="" />
      </div>
      <div className="box-model-description">
        <p>迈瑞服务地图管理系统</p>
      </div>
      <div className="personal-box">{children}</div>
    </div>
  );
};

export default BoxModel;
