import btnStars from "../img/button-stars.png";
import apolloIcon from "../img/c-icons/apollo-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { useState } from "react";



const ProgressStats = () => {
  const [percentage, setPercentage] = useState(10);

  const incrementProgress = () => {
    setPercentage((prevPercentage) =>
      prevPercentage < 100 ? prevPercentage + 10 : 100
    );
  };
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
            <div
              style={{
                width: 80,
                marginLeft: "auto",
                textAlign: "center",
                position: "relative",
              }}
            >
              <CircularProgressbar
                value={percentage}
                styles={buildStyles({
                  pathColor: `#1e1e1e`,
                  textColor: "#1e1e1e",
                  trailColor: "#e9ecef",
                  backgroundColor: "#ffffff",
                })}
              />
              <p class="progress-text">50%</p>
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
            <div
              style={{
                width: 80,
                marginLeft: "auto",
                textAlign: "center",
                position: "relative",
              }}
            >
              <CircularProgressbar
                value={percentage}
                styles={buildStyles({
                  pathColor: `#1e1e1e`,
                  textColor: "#1e1e1e",
                  trailColor: "#e9ecef",
                  backgroundColor: "#ffffff",
                })}
              />
              <p class="progress-text">50%</p>
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
            <div
              style={{
                width: 80,
                marginLeft: "auto",
                textAlign: "center",
                position: "relative",
              }}
            >
              <CircularProgressbar
                value={percentage}
                styles={buildStyles({
                  pathColor: `#1e1e1e`,
                  textColor: "#1e1e1e",
                  trailColor: "#e9ecef",
                  backgroundColor: "#ffffff",
                })}
              />
              <p class="progress-text">50%</p>
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
            <div
              style={{
                width: 80,
                marginLeft: "auto",
                textAlign: "center",
                position: "relative",
              }}
            >
              <CircularProgressbar
                value={percentage}
                styles={buildStyles({
                  pathColor: `#1e1e1e`,
                  textColor: "#1e1e1e",
                  trailColor: "#e9ecef",
                  backgroundColor: "#ffffff",
                })}
              />
              <p class="progress-text">50%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProgressStats;
