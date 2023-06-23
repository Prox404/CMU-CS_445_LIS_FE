import { lazy } from "react";
import { config } from "~/config";

// Layouts
// import { DefaultLayout } from "~/layouts";

// Pages
const Home = lazy(() => import("~/pages/Home"));
const NotFound = lazy(() => import("~/pages/NotFound"));
const EmployeeManager = lazy(() => import("~/pages/Employee"));
const AddEmployee = lazy(() => import("~/pages/AddEmployee"));

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: "*", component: NotFound, layout: null },
  { path: config.routes.employeeManager, component: EmployeeManager },
  { path: config.routes.addEmployee, component: AddEmployee },
];

const privateRoutes = [
//   { path: config.routes.wtf, component: wtf, layout: DefaultLayout },
];

export { publicRoutes, privateRoutes };