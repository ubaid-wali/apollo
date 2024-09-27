import {
  faBell,
  faCog,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import loggedInUser from "../img/logged-in-user.png";

const Topnav = () => {
  return (
    <div className="topnav d-flex align-items-center justify-content-end">
      <div className="location-box">
        <span className="m-icon">
          <FontAwesomeIcon icon={faLocationDot} />
        </span>
        <span className="m-location">Oakville, Ontario</span>
      </div>
      <div className="nav-options d-flex">
        <div className="login-box">
          <div className="dropdown-center">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={loggedInUser} alt="" />
              <span></span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Sign Out
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="setting-box">
          <span></span>
          <div className="dropdown-center">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faCog} />
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Action two
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Action three
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="setting-box notification-box">
          <span></span>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faBell} />
              <span></span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Action two
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Action three
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Topnav;
