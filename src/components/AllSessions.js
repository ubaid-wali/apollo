import {
  faAngleLeft,
  faAngleRight,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllSessions = () => {
  const [data, setData] = useState(null);

  // State to handle loading state
  const [loading, setLoading] = useState(true);

  // State to handle errors
  const [error, setError] = useState(null);
  // Fetch data on component mount using axios
  useEffect(() => {
    const apiUrl = "http://34.169.65.115:5000/api/v1/sessions";

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
            <table className="table align-middle">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Organization Location </th>
                  <th scope="col">Status </th>
                  <th scope="col"> </th>
                </tr>
              </thead>
              <tbody className="">
                {data.map((session, index) => (
                  <tr key={index}>
                    <td>{session._id["$oid"]}</td>
                    <td>{session.session_name}</td>
                    <td>{session.organization_locations}</td>
                    <td>{session.status}</td>
                    {/* <td>
                      {company.technology_used.current_technologies
                        .slice(0, 2)
                        .map((tech, idx) => (
                          <span key={idx}>
                            {tech.name} ({tech.category})
                            {idx <
                            company.technology_used.current_technologies.slice(
                              0,
                              2
                            ).length -
                              1
                              ? ", "
                              : " Much More..."}
                          </span>
                        ))}
                    </td> */}
                    <td>
                      <Link to={session._id["$oid"]} className="arrow-box">
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
        {/* <div className="col-md-12">{JSON.stringify(companies, null, 2)}</div> */}
      </div>
    </div>
  );
};
export default AllSessions;
