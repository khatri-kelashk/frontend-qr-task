import { Navigate, useLocation } from "react-router-dom";

import { URLS } from "../constants/constants";

 const PrivateRoute = ({ children, user }) => {
  console.log({user});
  
  const location = useLocation();
   if (!user) {
    return ( <Navigate 
        to={URLS.LOGIN}
        state={{ from: location }}
        replace
      />
    );
  }
  
  return children;
};

export default PrivateRoute;