import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route._name}
              path={route.path}
              element={route.element}
            ></Route>
          );
        })}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
