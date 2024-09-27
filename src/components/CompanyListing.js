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

const companyData = [
  {
    logo: accentureIcon,
    name: "Accenture",
    desc: "Let there be change",
    industry: "IT",
    revenue: "2.8M",
    employees: "700,000+",
    location: "Brazil/São Paulo",
    technology: "Accounting , IT Much More...",
    link: "/company-profile",
  },
  {
    logo: amz,
    name: "Amazon",
    desc: "Let there be change",
    industry: "E-Commerce",
    revenue: "148B",
    employees: "1,608,000",
    location: "Washington",
    technology: "Accounting , IT Much More...",
    link: "/company-profile",
  },
  {
    logo: ebay,
    name: "Ebay",
    desc: "Let there be change",
    industry: "E-Commerce",
    revenue: "10.19B",
    employees: "12,300",
    location: "California",
    technology: "Accounting , IT Much More...",
    link: "/company-profile",
  },
  {
    logo: adidas,
    name: "Adidas",
    desc: "Let there be change",
    industry: "Textile",
    revenue: "10.19B",
    employees: "100,000+",
    location: "Germany",
    technology: "Accounting , IT Much More...",
    link: "/company-profile",
  },
  {
    logo: nivea,
    name: "Nivea",
    desc: "Let there be change",
    industry: "Product",
    revenue: "10.19B",
    employees: "100,000+",
    location: "Germany",
    technology: "Accounting , IT Much More...",
    link: "/company-profile",
  },
  {
    logo: upwork,
    name: "Upwork",
    desc: "Let there be change",
    industry: "Marketplace",
    revenue: "10.19B",
    employees: "100,000+",
    location: "San Francisco",
    technology: "Accounting , IT Much More...",
    link: "/company-profile",
  },
];

const CompanyListing = () => {
  // State to store API data
  const [data, setData] = useState(null);

  // State to handle loading state
  const [loading, setLoading] = useState(true);

  // State to handle errors
  const [error, setError] = useState(null);

  const headers = {
    "allow-origin": "*",
  };

  // Fetch data on component mount using axios
  const apiUrl = "http://34.169.65.115:5000/api/v1/profiles";
  useEffect(() => {
    // Axios request
    axios
      .get(apiUrl, {
        headers,
      })
      .then((response) => {
        setData(response); // Set fetched data to state
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
                  <th scope="col"></th>
                  <th scope="col">Company Name</th>
                  <th scope="col">Industry </th>
                  <th scope="col">Annual Revenue</th>
                  <th scope="col">Employees</th>
                  <th scope="col">Location</th>
                  <th scope="col">Technologies</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody className="">
                {companyData.map((company, index) => (
                  <tr key={index}>
                    <td>
                      <div className="img-box">
                        <img src={company.logo} alt="" />
                      </div>
                    </td>
                    <td>
                      <div>
                        {company.name}
                        <p className="c-detail"> {company.desc}</p>
                      </div>
                    </td>
                    <td>{company.industry}</td>
                    <td>{company.revenue}</td>
                    <td>{company.employees}</td>
                    <td>{company.technology}</td>
                    <td>{company.location}</td>
                    <td>
                      <Link to={company.link} className="arrow-box">
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
        <div className="col-md-12">{JSON.stringify(data, null, 2)}</div>
      </div>
    </div>
  );
};
export default CompanyListing;
