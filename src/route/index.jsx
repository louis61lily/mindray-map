import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          return (
            <Route key={route._name} path={route.path} element={route.element}>
              {route.children &&
                route.children.map((childRoute) => (
                  <Route
                    key={childRoute._name}
                    path={childRoute.path}
                    element={route.element}
                  />
                ))}
            </Route>
          );
        })}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
