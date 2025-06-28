import "./index.scss";
const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-root">
        <p>欢迎使用迈瑞服务地图管理系统</p>
        <div className="not-found-description">
          <label style={{ fontSize: "12px" }}>
            为了您有更好的体验效果，请一定使用
          </label>
          <label
            style={{ fontSize: "14px", color: "#c09853", fontWeight: "700" }}
          >
            chrome浏览器、360 QQ等浏览器极速模式或firefox浏览器
          </label>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
