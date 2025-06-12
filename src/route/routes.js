import { Navigate } from "react-router-dom";
import LoginPage from "../pages/loginPage";

const routes = [
  {
    _name: "root",
    path: "/",
    needToken: false,
    element: <Navigate to="/Login" /> // 登录页面
  },
  {
    _name: "login",
    path: "/login",
    element: <LoginPage></LoginPage> ?? <div>登录页面</div> // 404页面
  },
  {
    _name: "404",
    path: "*",
    element: <div>404页面</div> // 404页面
  }
];

export default routes;
