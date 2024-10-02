import Mainsearch from "./Mainsearch";
import Prompt from "./Prompt";
import CompanyProfile from "./CompanyProfile";
import ProfessionalProfile from "./ProfessionalProfile";
import CompanyListing from "./CompanyListing";
import dashboard from "./Dashboard";
import { Link, Outlet, useLocation } from "react-router-dom";
import MultiStepForm from "./MultiStepForm";
import Breadcrumbs from "./Breadcrumbs";

const Mainboard = () => {
  return (
    <div className="mainboard">
      <div className="main-nav">
        <ul className="nav">
          <li className="nav-item d-flex">
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
            <Link className="nav-link" to="/company-listing">
              Companies
            </Link>
            <Link className="nav-link" to="/professional-listing">
              Profiles
            </Link>
          </li>
        </ul>
      </div>
      <Breadcrumbs />
      {/* <Route exact path="/dashbaord" component={dashboard} /> */}
      <Mainsearch />
      {/* <Prompt /> */}
      {/* <CompanyProfile /> */}
      {/* <ProfessionalProfile /> */}
      {/* <CompanyListing /> */}

      <Outlet />
    </div>
  );
};
export default Mainboard;
