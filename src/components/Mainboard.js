import Mainsearch from "./Mainsearch";
import Prompt from "./Prompt";
import CompanyProfile from "./CompanyProfile";
import ProfessionalProfile from "./ProfessionalProfile";
import CompanyListing from "./CompanyListing";
import dashboard from "./Dashboard";
import { Link, Outlet } from "react-router-dom";

const Mainboard = () => {
  return (
    <div class="mainboard">
      <div class="main-nav">
        <ul class="nav">
          <li class="nav-item d-flex">
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
            <Link className="nav-link" to="/company-listing">
              Company List
            </Link>
            <Link className="nav-link" to="/company-profile">
              Company Profile
            </Link>
            <Link className="nav-link" to="/professional-profile">
              Professional Profile
            </Link>
          </li>
        </ul>
      </div>
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
