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

const peopleData = [
  {
    logo: brooklyn,
    name: "Brooklyn Simmons",
    desc: "Chair & C.E.O",
    company: "Amazaon",
    linkedin: "in/brooklyns",
    industry: "E-Commerce",
    location: "Brazil/São Paulo",
    date: "21/12/2022",
    link: "/professional-profile",
  },
  {
    logo: kristin,
    name: "Kristin Watson",
    desc: "C.T.O",
    company: "Ebay",
    linkedin: "in/kristinw",
    industry: "E-Commerce",
    location: "Washington",
    date: "21/12/2022",
    link: "/professional-profile",
  },
  {
    logo: jacob,
    name: "Jacob Jones",
    desc: "Director",
    company: "Accenture",
    linkedin: "in/jacbj",
    industry: "Technology",
    location: "California",
    date: "21/12/2022",
    link: "/professional-profile",
  },
  {
    logo: cody,
    name: "Cody Fisher",
    desc: "Executive",
    company: "Freelancer",
    linkedin: "in/codyf",
    industry: "Contractors",
    location: "Germany",
    date: "21/12/2022",
    link: "/professional-profile",
  },
  {
    logo: brooklyn2,
    name: "Brooklyn Simmons",
    desc: "Manager",
    company: "Upwork",
    linkedin: "in/brooklyns",
    industry: "Contractors",
    location: "Germany",
    date: "21/12/2022",
    link: "/professional-profile",
  },
  {
    logo: kristin2,
    name: "Kristin Watson",
    desc: "Specialists",
    company: "99design",
    linkedin: "in/kristinw",
    industry: "Contractors",
    location: "San Francisco",
    date: "21/12/2022",
    link: "/professional-profile",
  },
  {
    logo: jacob2,
    name: "Jacob Jones",
    desc: "Creative Director",
    company: "Fiver",
    linkedin: "in/jacbj",
    industry: "Contractors",
    location: "San Francisco",
    date: "21/12/2022",
    link: "/professional-profile",
  },
  {
    logo: cody2,
    name: "Cody Fisher",
    desc: "Full Slack Developer",
    company: "Freepik",
    linkedin: "in/codyf",
    industry: "Contractors",
    location: "San Francisco",
    date: "21/12/2022",
    link: "/professional-profile",
  },
];

const ProfessionalsListing = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="c-listing">
            <table className="table align-middle">
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
                {peopleData.map((company, index) => (
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
                    <td>{company.company}</td>
                    <td>{company.linkedin}</td>
                    <td>{company.industry}</td>
                    <td>{company.location}</td>
                    <td>{company.date}</td>
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
      </div>
    </div>
  );
};
export default ProfessionalsListing;
