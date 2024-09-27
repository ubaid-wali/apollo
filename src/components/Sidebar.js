import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import companyLogo from "../img/sample-company.png";
import buttonStars from "../img/button-stars.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import PromptSessionsListing from "./PromptSessionsListing";

const Sidebar = () => {
  const [data, setData] = useState(null);

  // State to handle loading state
  const [loading, setLoading] = useState(true);

  // State to handle errors
  const [error, setError] = useState(null);

  // Fetch data on component mount using axios
  useEffect(() => {
    const apiUrl = "https://api.example.com/data";

    // Axios request
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data); // Set fetched data to state
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        setError(error.message); // Handle any error
        setLoading(false);
      });
  }, []); // Empty dependency array ensures this runs only on mount

  // Show loading message while fetching data
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // Show error message if there was an error
  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  //35.225.202.65:5001/list_all_threads

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
          <ul className="session-list">
            <li>
              <span>
                <Link to="/session-progress">Healthcare sector</Link>
              </span>
              <div className="progress-box d-flex justify-content-center align-items-center">
                <span className="progress-icon">
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
            <li>
              <span>Julia Friedberg</span>
              <div className="progress-box d-flex justify-content-center align-items-center">
                <span className="progress-icon">
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
            </li>
          </ul>
        </div>
      </div>

      <PromptSessionsListing />
    </div>
  );
};
export default Sidebar;
