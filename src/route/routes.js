import { Navigate } from "react-router-dom";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import NotFoundPage from "../pages/notFoundPage";

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
    _name: "home",
    path: "/home",
    element: <HomePage></HomePage> ?? <div>home</div> // 404页面
  },
  {
    _name: "404",
    path: "*",
    element: <NotFoundPage></NotFoundPage> // 404页面
  }
];

export default routes;
