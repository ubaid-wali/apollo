import {
  faBell,
  faCog,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import loggedInUser from "../img/logged-in-user.png";

const Topnav = () => {
  return (
    <div class="topnav d-flex align-items-center justify-content-end">
      <div class="location-box">
        <span class="m-icon">
          <FontAwesomeIcon icon={faLocationDot} />
        </span>
        <span class="m-location">Oakville, Ontario</span>
      </div>
      <div class="nav-options d-flex">
        <div className="login-box">
          <div class="dropdown-center">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={loggedInUser} alt="" />
              <span></span>
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Sign Out
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="setting-box">
          <span></span>
          <div class="dropdown-center">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faCog} />
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Action two
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Action three
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="setting-box notification-box">
          <span></span>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faBell} />
              <span></span>
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Action two
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
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
