import { useMemo } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Login from "../pages/Auth/Login";
import { URLS } from "../constants/constants";

const AppRoutes = ({}) =>{

    return (
      <Routes>
        <Route
          path={URLS.LOGIN}
          exact
          element={
              <Login />
          }
        ></Route>
      </Routes>
    );
}

export default AppRoutes;