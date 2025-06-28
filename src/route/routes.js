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

const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

// 路由守卫组件
const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const routes = [
  {
    _name: "root",
    path: "/",
    element: <Navigate to="/identity" />
  },
  {
    _name: "identity",
    path: "/identity",
    element: <IdentitySelect />
  },
  {
    _name: "login",
    path: "/login",
    element: <LoginPage />
  },
  {
    _name: "home",
    path: "/home",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
    requiresAuth: true
  },
  {
    _name: "hospital",
    path: "/hospital",
    element: <HospitalSelect />
  },
  {
    _name: "engineer",
    path: "/engineer",
    element: <EngineerReport />
  },
  {
    _name: "doctor-operate",
    path: "/doctor-operate",
    element: <OperateSelect />
  },
  {
    _name: "person-list",
    path: "/person-list",
    element: <PersonList />
  },
  {
    _name: "complain-hotline",
    path: "/complain-hotline",
    element: <ComplainHotline />
  },
  {
    _name: "service-evaluate",
    path: "/service-evaluate",
    element: <ServiceEvaluate />
  },
  {
    _name: "404",
    path: "*",
    element: <NotFoundPage /> // 404页面
  }
];

export default routes;
