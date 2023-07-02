import { lazy } from "react";
import { config } from "~/config";

// Layouts
// import { DefaultLayout } from "~/layouts";

// Pages
const Home = lazy(() => import("~/pages/Home"));
const NotFound = lazy(() => import("~/pages/NotFound"));
const EmployeeManager = lazy(() => import("~/pages/Employee"));
const AddEmployee = lazy(() => import("~/pages/AddEmployee"));
const TotalIncome = lazy(() => import("~/pages/TotalIncome"));
const VacationDay = lazy(() => import("~/pages/VacationDay"));
const AverageBenefitPlan = lazy(() => import("~/pages/AverageBenefitPlan"));
const HiringAnniversary = lazy(() => import("~/pages/HiringAnniversary"));
const VacationDays = lazy(() => import("~/pages/VacationDays"));
const EditEmployee = lazy(() => import("~/pages/EditEmployee"));
const BirthDay = lazy(() => import("~/pages/BirthDay"));

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: "*", component: NotFound, layout: null },
  { path: config.routes.employeeManager, component: EmployeeManager },
  { path: config.routes.addEmployee, component: AddEmployee },
  { path: config.routes.totalIncome, component: TotalIncome },
  { path: config.routes.vacationDays, component: VacationDay },
  { path: config.routes.everageBenefitPlan, component: AverageBenefitPlan },
  { path: config.routes.hiringAnniversary, component: HiringAnniversary },
  { path: config.routes.checkVacationDays, component: VacationDays },
  { path: config.routes.employeeBirthday, component: BirthDay },
  { path: config.routes.editEmployee, component: EditEmployee },
];

const privateRoutes = [
//   { path: config.routes.wtf, component: wtf, layout: DefaultLayout },
];

export { publicRoutes, privateRoutes };
