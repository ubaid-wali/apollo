import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import accentureImage from "../img/accenture-img.png";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons/faMapMarker";
import {
  faLocation,
  faLocationPinLock,
  faMapLocation,
  faMapLocationDot,
  faMapMarkedAlt,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons/faLocationPin";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import jacobJones from "../img/jacob-jones.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const makePostRequest = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Error making POST request", error);
    throw error;
  }
};

const ProfessionalProfile = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const profile_id = queryParams.get("people_id");

  // State to store API data
  const [personData, setPersonData] = useState(null);

  // State to handle loading state
  const [loading, setLoading] = useState(true);

  // State to handle errors
  const [error, setError] = useState(null);

  // Fetch data on component mount using axios
  // const apiUrl = "http://34.169.65.115:5000/api/v1/companies";

  console.log(profile_id);
  useEffect(() => {
    const fetchData = async () => {
      const url = "http://34.169.65.115:5000/api/v1/profiles/" + profile_id;
      // const data = { company_id: company_id }; // Replace with actual data to send

      try {
        const response = await makePostRequest(url);
        setLoading(false);
        setPersonData(response); // Set the initial data from the response
      } catch (error) {
        console.error("Error fetching initial data", error);
      }
    };
    fetchData();
  }, []); // Empty array ensures the effect runs only on page load
  // Show loading message while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show error message if there was an error
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="pProfile">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="company-intro d-flex align-items-center justify-content-between">
              <div className="img-box" style={{ width: "20%" }}>
                <img src={personData.profile_details.profile_pic_url} />
              </div>
              <div className="content" style={{ width: "90%" }}>
                <div className="d-flex align-items-center justify-content-between">
                  <h2>{personData["name"]}</h2>
                  <span>
                    <a className="website-link" href="">
                      Visit Website{" "}
                      <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </a>
                  </span>
                </div>
                <p>{personData.company_id}</p>
                <p>
                  <span></span>
                  {personData.profile_details.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="profile-main">
                <div className="img-box">
                  <img src={personData.profile_details.profile_pic_url} />
                </div>
                <div className="profile-intro d-flex align-items-center justify-content-between">
                  <div className="pro">
                    <h3>{personData.profile_details.name}</h3>
                    <p className="designation">
                      {personData.profile_details.position}
                    </p>
                    <p className="location">
                      <span>
                        <FontAwesomeIcon icon={faLocationPin} />
                      </span>
                      <span>{personData.profile_details.location}</span>
                    </p>
                  </div>
                  <div className="pro linkedin-box">
                    <a href={personData.profile_url} className="linkedin-btn">
                      <FontAwesomeIcon icon={faLinkedinIn} /> Linkedin
                    </a>
                  </div>
                </div>
              </div>

              <div className="persona">
                <h4>Persona:</h4>
                <p>{personData.analysis.persona_analyis[0].persona_analysis}</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="persona">
                <h4>Disc Assessment:</h4>
                <p>{personData.analysis.disc_analysis[0].disc_analysis}</p>
              </div>
            </div>

            <div className="card">
              <div className="persona">
                <h4>Education</h4>
                <div className="edu-list">
                  {personData.profile_details.education.map((edu) => (
                    <div>
                      <div className="edu-box">
                        <h5>{edu.degree}</h5>
                        <p>{edu.school} </p>
                        <p>{edu.years} </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfessionalProfile;
