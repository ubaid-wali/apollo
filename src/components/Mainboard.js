import { Link, Route, Router } from "react-router-dom";
import Mainsearch from "./Mainsearch";
import Prompt from "./Prompt";
import CompanyProfile from "./CompanyProfile";
import ProfessionalProfile from "./ProfessionalProfile";
import CompanyListing from "./CompanyListing";

const Mainboard = () => {
  return (
    <div class="mainboard">
      <div class="main-nav">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              Dashboard
            </a>
          </li>
          <li class="nav-item">
            <a href="/companies" class="nav-link" component={Prompt}>
              Companies
            </a>
          </li>
          <li class="nav-item">
            <a href="/profiles" class="nav-link">
              {" "}
              Profiles
            </a>
          </li>
        </ul>
      </div>
      <Mainsearch />
      <Prompt />
      <CompanyProfile />
      <ProfessionalProfile />
      <CompanyListing />
    </div>
  );
};
export default Mainboard;
