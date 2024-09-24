// import logo from './logo.svg';
import {
  createBrowserRouter,
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  Outlet,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import CompanyProfile from "./components/CompanyProfile";
import CompanyListing from "./components/CompanyListing";
import Prompt from "./components/Prompt";
import ProfessionalProfile from "./components/ProfessionalProfile";

const Layout = () => {
  return (
    <div class="h-100 d-flex">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Prompt />,
      },
      {
        path: "/company-listing",
        element: <CompanyListing />,
      },
      {
        path: "/company-profile",
        element: <CompanyProfile />,
      },
      {
        path: "/professional-profile",
        element: <ProfessionalProfile />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="h-100 d-flex">
      {/* <Sidebar /> */}
      {/* <Dashboard /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
