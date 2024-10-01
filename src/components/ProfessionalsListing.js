import {
  faAngleLeft,
  faAngleRight,
  faArrowRight,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import brooklyn from "../img/p-imgs/brooklyn.png";
import kristin from "../img/p-imgs/kristin.png";
import jacob from "../img/p-imgs/jacob.png";
import cody from "../img/p-imgs/cody.png";
import brooklyn2 from "../img/p-imgs/brooklyn-2.png";
import kristin2 from "../img/p-imgs/kristin-2.png";
import jacob2 from "../img/p-imgs/jacob-2.png";
import cody2 from "../img/p-imgs/cody-2.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const makePostRequest = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Error making POST request", error);
    throw error;
  }
};

const ProfessionalsListing = () => {
  // State to store API data
  const [peopleData, setPropleData] = useState(null);

  // State to handle loading state
  const [loading, setLoading] = useState(true);

  // State to handle errors
  const [error, setError] = useState(null);

  // Fetch data on component mount using axios
  // const apiUrl = "http://34.169.65.115:5000/api/v1/companies";

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://34.169.65.115:5000/api/v1/profiles";
      // const data = { thread_id: thread_id }; // Replace with actual data to send

      try {
        const response = await makePostRequest(url);
        setLoading(false);
        setPropleData(response); // Set the initial data from the response
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
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="c-listing">
            <table className="table align-middle table-responsive">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Name</th>
                  <th scope="col">Company </th>
                  <th scope="col">Linkedin</th>
                  <th scope="col">Industry</th>
                  <th scope="col">Location</th>
                  <th scope="col">Date</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody className="">
                {peopleData.map((people, index) => (
                  <tr key={index}>
                    <td>
                      <div className="img-box">
                        <img
                          src={
                            people["profile_details"]["profile_pic_url"]
                              ? people["profile_details"]["profile_pic_url"]
                              : ""
                          }
                          alt=""
                        />
                      </div>
                    </td>
                    <td>
                      <div className="text-nowrap">
                        {people["profile_details"]["name"]
                          ? people["profile_details"]["name"]
                          : ""}
                        <p className="c-detail">
                          {people["profile_details"]["position"]
                            ? people["profile_details"]["position"]
                            : ""}
                        </p>
                      </div>
                    </td>
                    <td>{people["company_id"] ? people["company_id"] : ""}</td>
                    <td>
                      <a
                        href={
                          people["profile_url"] ? people["profile_url"] : ""
                        }
                      >
                        {people["profile_url"] ? people["profile_url"] : ""}
                      </a>
                    </td>
                    <td>{"industry"}</td>
                    <td>
                      {people["profile_details"]["location"]
                        ? people["profile_details"]["location"]
                        : ""}
                    </td>
                    <td class="text-nowrap">
                      {people.last_updated.substring(0, 10)}
                    </td>
                    <td>
                      <Link
                        to={
                          "/professional-profile/?people_id=" +
                          people._id["$oid"]
                        }
                        className="arrow-box"
                      >
                        <FontAwesomeIcon icon={faArrowRightLong} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="table-data">
              <div className="container-fluid">
                <div className="row justify-content-between align-items-center">
                  <div className="col-md-6">
                    <p className="table-info">
                      Showing data 1 to 8 of 256K entries
                    </p>
                  </div>
                  <div className="col-md-auto ms-auto">
                    <nav aria-label="Page navigation example ms-auto">
                      <ul className="pagination">
                        <li className="page-item">
                          <a className="page-link" href="#">
                            <FontAwesomeIcon icon={faAngleLeft} />
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            4
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            40
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            <FontAwesomeIcon icon={faAngleRight} />
                          </a>
                        </li>
                      </ul>
                    </nav>
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
export default ProfessionalsListing;
