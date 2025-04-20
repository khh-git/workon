import { PrivateRouteProps } from "@typelib/components";
import { Navigate, Outlet } from "react-router";

const PrivateRoute = ({ isAuthenticated, altRoute }: PrivateRouteProps) => {
  return isAuthenticated ? <Outlet /> : <Navigate to={altRoute} replace />;
};

export default PrivateRoute;
