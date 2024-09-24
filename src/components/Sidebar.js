import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import companyLogo from "../img/sample-company.png";
import buttonStars from "../img/button-stars.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={companyLogo} alt="" />
      </div>
      <div className="session-box">
        <div className="button-box">
          <button className="btn btn-dark">
            Start a Session <img src={buttonStars} alt="" />
          </button>
        </div>
        <div className="previous-sessions">
          <h6>Session in progress</h6>
          <ul class="session-list">
            <li>
              <span>Healthcare sector</span>
              <div className="progress-box d-flex justify-content-center align-items-center">
                <span class="progress-icon">
                  <FontAwesomeIcon icon={faGears} />
                </span>
                <div
                  className="progress flex-grow-1"
                  role="progressbar"
                  aria-label="Success example"
                  aria-valuenow="6"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-dark"
                    style={{ width: "6%" }}
                  ></div>
                </div>
                <span>6%</span>
              </div>
            </li>
            {/* <li>
              <span>Julia Friedberg</span>
              <div className="progress-box d-flex justify-content-center align-items-center">
                <span class="progress-icon">
                  <FontAwesomeIcon icon={faGears} />
                </span>
                <div
                  className="progress flex-grow-1"
                  role="progressbar"
                  aria-label="Success example"
                  aria-valuenow="73"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-dark"
                    style={{ width: "73%" }}
                  ></div>
                </div>
                <span>73%</span>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
