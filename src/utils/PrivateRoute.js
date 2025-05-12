import { Navigate, useLocation } from "react-router-dom";

import { URLS } from "../constants/constants";

export const PrivateRoute = ({ children, user }) => {
  const location = useLocation();
  if (!user) {
    return children;
  } else {
    return (
      <Navigate
        to={URLS.LOGIN}
        state={{ from: location }}
      />
    );
  }
};
