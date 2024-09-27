import btnStars from "../img/button-stars.png";
import apolloIcon from "../img/c-icons/apollo-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const ProgressStats = () => {
  return (
    <div className="container-fluid mb-4">
      <div className="row">
        <div className="col-md-3">
          <div className="stats-box d-flex align-items-center justify-content-between">
            <div className="stats-content">
              <div className="">
                <div className="btn apollo">
                  <img src={apolloIcon} alt="" />
                </div>
              </div>
              <h6>Apollo</h6>
              <p>Profile Progress</p>
            </div>
            <div>
              <div className="progress blue">
                <span className="progress-left">
                  <span className="progress-bar"></span>
                </span>
                <span className="progress-right">
                  <span className="progress-bar"></span>
                </span>
                <div className="progress-value">50%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="stats-box d-flex align-items-center justify-content-between">
            <div className="stats-content">
              <div className="">
                <div className="btn linkedin">
                  <FontAwesomeIcon icon={faLinkedin} /> Linkedin
                </div>
              </div>
              <h6>AI Analysis</h6>
              <p>Profile Progress</p>
            </div>
            <div>
              <div className="progress blue">
                <span className="progress-left">
                  <span className="progress-bar"></span>
                </span>
                <span className="progress-right">
                  <span className="progress-bar"></span>
                </span>
                <div className="progress-value">50%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="stats-box d-flex align-items-center justify-content-between">
            <div className="stats-content">
              <div className="button-box">
                <div className="btn">
                  AI Analysis <img src={btnStars} alt="" />
                </div>
              </div>
              <h6>AI Analysis</h6>
              <p>Profile Progress</p>
            </div>
            <div>
              <div className="progress blue">
                <span className="progress-left">
                  <span className="progress-bar"></span>
                </span>
                <span className="progress-right">
                  <span className="progress-bar"></span>
                </span>
                <div className="progress-value">50%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="stats-box d-flex align-items-center justify-content-between">
            <div className="stats-content">
              <div className="button-box">
                <div className="btn">
                  AI Analysis <img src={btnStars} alt="" />
                </div>
              </div>
              <h6>AI Analysis</h6>
              <p>Profile Progress</p>
            </div>
            <div>
              <div className="progress blue">
                <span className="progress-left">
                  <span className="progress-bar"></span>
                </span>
                <span className="progress-right">
                  <span className="progress-bar"></span>
                </span>
                <div className="progress-value">90%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProgressStats;
