import { Navigate } from "react-router-dom";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import NotFoundPage from "../pages/notFoundPage";
import IdentitySelect from "../pages/identitySelect";

const routes = [
  {
    _name: "root",
    path: "/",
    needToken: false,
    element: <Navigate to="/identity" />
  },
  {
    _name: "identity",
    path: "/identity",
    element: <IdentitySelect></IdentitySelect>
  },
  {
    _name: "login",
    path: "/login",
    element: <LoginPage></LoginPage> ?? <div>管理员登录页面</div>
  },
  {
    _name: "home",
    path: "/home",
    element: <HomePage></HomePage> ?? <div>后台首页</div>
  },
  {
    _name: "hospital",
    path: "/hospital",
    element: <div>医院选择</div>
  },
  {
    _name: "engineer",
    path: "/engineer",
    element: <div>工程师上报</div>
  },
  {
    _name: "person-list",
    path: "/person-list",
    element: <div>人员联系</div>
  },
  {
    _name: "complain-hotline",
    path: "/complain-hotline",
    element: <div>投诉热线</div>
  },
  {
    _name: "service-evaluate",
    path: "/service-evaluate",
    element: <div>服务评价</div>
  },
  {
    _name: "404",
    path: "*",
    element: <NotFoundPage></NotFoundPage> // 404页面
  }
];

export default routes;
