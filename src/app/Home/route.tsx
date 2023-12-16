import { routePath } from "./toutePath";
import Login from "../Login/Login";
import ToLogin from "../Login/ToLogin";
import RuleManagement from "../RuleManagement/RuleManagement";

export type RouteItem = {
  key: string;
  name: string;
  path: string;
  component: React.ReactNode;
};

const sysRoute: RouteItem[] = [
  {
    key: "rule-management",
    path: routePath.ROUTE_PATH_RULE_MANAGEMENT,
    component: <RuleManagement />,
    name: "rule-management",
  },
  {
    key: "login",
    path: routePath.ROUTE_PATH_LOGIN,
    component: <Login />,
    name: "Login",
  },
  {
    key: "to-login",
    path: routePath.ROUTE_PATH_DEFAULT,
    component: <ToLogin />,
    name: "toLogin",
  },
];

export { sysRoute };
