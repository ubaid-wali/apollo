import {
  faAngleLeft,
  faAngleRight,
  faArrowRight,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import accentureIcon from "../img/c-icons/accenture-icon.png";
import amz from "../img/c-icons/amazon-icon.png";
import ebay from "../img/c-icons/ebay-icon.png";
import adidas from "../img/c-icons/addidas-icon.png";
import nivea from "../img/c-icons/nivea-icon.png";
import upwork from "../img/c-icons/upwork-icon.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const makePostRequest = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Error making POST request", error);
    throw error;
  }
};
const CompanyListing = () => {
  // State to store API data
  const [companies, setCompanies] = useState(null);

  // State to handle loading state
  const [loading, setLoading] = useState(true);

  // State to handle errors
  const [error, setError] = useState(null);

  // Fetch data on component mount using axios
  // const apiUrl = "http://34.169.65.115:5000/api/v1/companies";

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://34.169.65.115:5000/api/v1/companies";
      // const data = { thread_id: thread_id }; // Replace with actual data to send

      try {
        const response = await makePostRequest(url);
        setLoading(false);
        setCompanies(response); // Set the initial data from the response
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
            <table className="table align-middle">
              <thead>
                <tr>
                  <th scope="col">Logo</th>
                  <th scope="col">Company Name</th>
                  <th scope="col">Industry </th>
                  <th scope="col" className="text-nowrap">
                    Annual Revenue
                  </th>
                  <th scope="col">Employees</th>
                  <th scope="col">Location</th>
                  <th scope="col">Technologies</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody className="">
                {companies.slice(0, 19).map((company, index) => (
                  <tr key={index}>
                    <td>
                      <div className="img-box">
                        <img src={company.logo_url} alt="" />
                      </div>
                    </td>
                    <td>
                      <div>
                        {company.name}
                        <p className="c-detail"> {company.desc}</p>
                      </div>
                    </td>
                    <td>{company.industry}</td>
                    <td>{company.annual_revenue}</td>
                    <td>{company.employees}</td>
                    <td>{company.location}</td>
                    <td>
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
                    </td>
                    <td>
                      <Link
                        to={
                          "/company-profile/?company_id=" +
                          company._id["$oid"]
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
        {/* <div className="col-md-12">{JSON.stringify(companies, null, 2)}</div> */}
      </div>
    </div>
  );
};
export default CompanyListing;
