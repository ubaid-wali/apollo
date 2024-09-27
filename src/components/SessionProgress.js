// import btnStars from "../img/button-stars.png";
// import apolloIcon from "../img/c-icons/apollo-icon.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import CompanyListing from "./CompanyListing";
import ProgressStats from "./ProgressStats";

const SessionProgress = () => {
  return (
    <div className="s-progress">
      <ProgressStats />
      <CompanyListing />
    </div>
  );
};
export default SessionProgress;
