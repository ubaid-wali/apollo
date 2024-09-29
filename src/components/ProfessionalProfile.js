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
            <div className="company-intro d-flex align-items-center justify-content-center">
              <div className="img-box">
                <img src={accentureImage} alt="" />
              </div>
              <div className="content">
                <div className="d-flex align-items-center justify-content-between">
                  {/* <h2>{personData.}</h2> */}
                  <span>
                    <a className="website-link" href="">
                      Visit Website{" "}
                      <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </a>
                  </span>
                </div>
                <p>
                  Accenture is a renowned worldwide IT services company that
                  excels in digital, cloud, and security solutions. With an
                  extensive range of expertise across over 40 industries, we
                  provide a comprehensive
                </p>
                <p>
                  <span></span>
                  North America Address 1003 E. 4th Place, 8th Floor, Los
                  Angeles, California 90013, United States
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
                  <img src={jacobJones} alt="" />
                </div>
                <div className="profile-intro d-flex align-items-center justify-content-between">
                  <div>
                    <h3>{personData.profile_details.name}</h3>
                    <p className="designation">Senrior Graphics Designer</p>
                    <p className="location">
                      <span>
                        <FontAwesomeIcon icon={faLocationPin} />
                      </span>
                      <span>Toronto, Canada</span>
                    </p>
                  </div>
                  <div className="linkedin-box">
                    <a className="linkedin-btn">
                      <FontAwesomeIcon icon={faLinkedinIn} /> Linkedin
                    </a>
                  </div>
                </div>
              </div>

              <div className="persona">
                <h4>Persona:</h4>
                <p>
                  An experienced designer with a strong aesthetic sensibility
                  and two years of professional experience in graphic and web
                  design, I possess a deep understanding of visual storytelling
                  and brand communication. My expertise in Adobe Creative Suite
                  allows me to create visually compelling and cohesive designs
                  that align with client objectives. I am adept at transforming
                  ideas into polished visuals across various platforms,
                  including digital, print, and web, ensuring consistency and
                  impact.
                </p>

                <p>
                  With hands-on experience in diverse industries, I adapt
                  swiftly to different design requirements, delivering
                  high-quality results in fast-paced environments. My
                  collaborative approach and strong communication skills enable
                  me to work effectively with clients, stakeholders, and team
                  members, ensuring that projects are delivered on time and to
                  the highest standards. My design process is rooted in
                  understanding the client’s vision, allowing me to craft
                  designs that resonate with target audiences and elevate brand
                  presence.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="persona">
                <h4>Disc Assessment:</h4>
                <p>
                  Jacob Jones exhibits a high level of Dominance and Influence
                  in his approach to Figma design. His Dominance trait is
                  evident in his assertive decision-making and willingness to
                  take charge of complex design projects. He quickly identifies
                  key design objectives and moves decisively to implement
                  solutions, often leading his team with confidence. Jacob's
                  Influence is also notable, as he communicates his ideas with
                  enthusiasm, easily persuading stakeholders and team members to
                  buy into his vision. His ability to combine a strong,
                  results-driven approach with persuasive communication ensures
                  that his designs not only meet client expectations but also
                  push creative boundaries.
                </p>

                <p>
                  However, Jacob's preference for rapid execution and
                  high-energy collaboration may sometimes overlook the need for
                  detailed analysis and step-by-step refinement, areas typically
                  associated with Steadiness and Compliance traits. While his
                  speed and charisma are strengths, balancing these with a more
                  methodical review process could enhance the overall quality
                  and consistency of his work. Jacob’s tendency to drive
                  projects forward can be highly effective, but incorporating
                  more structured feedback loops might help in achieving more
                  nuanced and polished final designs
                </p>
              </div>
            </div>

            <div className="card">
              <div className="persona">
                <h4>Education</h4>
                <div className="edu-list">
                  <div className="edu-box">
                    <h5>Interface Design Web & Mobile</h5>
                    <p>T-Academy, 2020 </p>
                  </div>
                  <div className="edu-box">
                    <h5>Belarusian State Academy of Arts, </h5>
                    <p>Postgraduate Diploma, 2015 - 2017 </p>
                  </div>
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
