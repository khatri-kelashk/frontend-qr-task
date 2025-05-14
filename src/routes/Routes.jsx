import { useMemo } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import NotFound from "../pages/Others/NotFound";
import Dashboard from "../pages/Dashboard";
import { URLS } from "../constants/constants";
import PrivateRoute from "../utils/PrivateRoute";

const AppRoutes = ({}) =>{
  const user=localStorage.getItem("token");
    return (
      <Routes>
        <Route path={URLS.LOGIN} exact element={<Login />}></Route>
        <Route path={URLS.REGISTER} exact element={<Register />}></Route>
        <Route
          path={URLS.DASHBOARD}
          exact
          element={
            <PrivateRoute user={user}>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
        {/* Add this catch-all route at the end */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
}

export default AppRoutes;
