import { Navigate } from "react-router-dom";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import NotFoundPage from "../pages/notFoundPage";
import IdentitySelect from "../pages/identitySelect";
import HospitalSelect from "../pages/hospitalSelect";
import OperateSelect from "../pages/doctorOperate";
import PersonList from "../pages/personList";
import ComplainHotline from "../pages/complainHotline";
import ServiceEvaluate from "../pages/serviceEvaluate";
import EngineerReport from "../pages/engineerReport";

const routes = [
  {
    _name: "root",
    path: "/",
    element: <Navigate to="/identity" />
  },
  {
    _name: "identity",
    path: "/identity",
    element: <IdentitySelect></IdentitySelect> ?? <div>身份选择</div>
  },
  {
    _name: "login",
    path: "/login",
    element: <LoginPage></LoginPage> ?? <div>管理员登录页面</div>
  },
  {
    _name: "home",
    path: "/home",
    element: <HomePage></HomePage> ?? <div>后台首页</div>,
    requiresAuth: true
  },
  {
    _name: "hospital",
    path: "/hospital",
    element: <HospitalSelect></HospitalSelect> ?? <div>医院选择</div>
  },
  {
    _name: "engineer",
    path: "/engineer",
    element: <EngineerReport></EngineerReport> ?? <div>工程师上报</div>
  },
  {
    _name: "doctor-operate",
    path: "/doctor-operate",
    element: <OperateSelect></OperateSelect> ?? <div>科室操作</div>
  },
  {
    _name: "person-list",
    path: "/person-list",
    element: <PersonList></PersonList> ?? <div>人员联系</div>
  },
  {
    _name: "complain-hotline",
    path: "/complain-hotline",
    element: <ComplainHotline></ComplainHotline> ?? <div>投诉热线</div>
  },
  {
    _name: "service-evaluate",
    path: "/service-evaluate",
    element: <ServiceEvaluate></ServiceEvaluate> ?? <div>服务需求</div>
  },
  {
    _name: "404",
    path: "*",
    element: <NotFoundPage></NotFoundPage> // 404页面
  }
];

export default routes;
