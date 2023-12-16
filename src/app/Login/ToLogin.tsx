import { Navigate } from "react-router-dom";
import { routePath } from "../Home/toutePath";

function ToLogin() {
  return <Navigate to={routePath.ROUTE_PATH_LOGIN} replace />;
}

export default ToLogin;
