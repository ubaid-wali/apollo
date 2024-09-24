import {
  faAngleLeft,
  faAngleRight,
  faArrowRight,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import accentureIcon from "../img/accenture-icon.png";

const CompanyListing = () => {
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
                <tr>
                  <th scope="row">
                    <div className="img-box">
                      <img src={accentureIcon} alt="" />
                    </div>
                  </th>
                  <td>
                    Accenture
                    <p class="c-detail">Let there be change</p>
                  </td>
                  <td>IT</td>
                  <td>2.8M</td>
                  <td>700,000 +</td>
                  <td>BrazilSão Paulo</td>
                  <td>Accounting , IT Much More...</td>
                  <td>
                    <a href="" className="arrow-box">
                      <FontAwesomeIcon icon={faArrowRightLong} />
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="img-box">
                      <img src={accentureIcon} alt="" />
                    </div>
                  </th>
                  <td>
                    Accenture
                    <p class="c-detail">Let there be change</p>
                  </td>
                  <td>IT</td>
                  <td>2.8M</td>
                  <td>700,000 +</td>
                  <td>BrazilSão Paulo</td>
                  <td>Accounting , IT Much More...</td>
                  <td>
                    <a href="" className="arrow-box">
                      <FontAwesomeIcon icon={faArrowRightLong} />
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="img-box">
                      <img src={accentureIcon} alt="" />
                    </div>
                  </th>
                  <td>
                    Accenture
                    <p class="c-detail">Let there be change</p>
                  </td>
                  <td>IT</td>
                  <td>2.8M</td>
                  <td>700,000 +</td>
                  <td>BrazilSão Paulo</td>
                  <td>Accounting , IT Much More...</td>
                  <td>
                    <a href="" className="arrow-box">
                      <FontAwesomeIcon icon={faArrowRightLong} />
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="img-box">
                      <img src={accentureIcon} alt="" />
                    </div>
                  </th>
                  <td>
                    Accenture
                    <p class="c-detail">Let there be change</p>
                  </td>
                  <td>IT</td>
                  <td>2.8M</td>
                  <td>700,000 +</td>
                  <td>BrazilSão Paulo</td>
                  <td>Accounting , IT Much More...</td>
                  <td>
                    <a href="" className="arrow-box">
                      <FontAwesomeIcon icon={faArrowRightLong} />
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="img-box">
                      <img src={accentureIcon} alt="" />
                    </div>
                  </th>
                  <td>
                    Accenture
                    <p class="c-detail">Let there be change</p>
                  </td>
                  <td>IT</td>
                  <td>2.8M</td>
                  <td>700,000 +</td>
                  <td>BrazilSão Paulo</td>
                  <td>Accounting , IT Much More...</td>
                  <td>
                    <a href="" className="arrow-box">
                      <FontAwesomeIcon icon={faArrowRightLong} />
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="img-box">
                      <img src={accentureIcon} alt="" />
                    </div>
                  </th>
                  <td>
                    Accenture
                    <p class="c-detail">Let there be change</p>
                  </td>
                  <td>IT</td>
                  <td>2.8M</td>
                  <td>700,000 +</td>
                  <td>BrazilSão Paulo</td>
                  <td>Accounting , IT Much More...</td>
                  <td>
                    <a href="" className="arrow-box">
                      <FontAwesomeIcon icon={faArrowRightLong} />
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="img-box">
                      <img src={accentureIcon} alt="" />
                    </div>
                  </th>
                  <td>
                    Accenture
                    <p class="c-detail">Let there be change</p>
                  </td>
                  <td>IT</td>
                  <td>2.8M</td>
                  <td>700,000 +</td>
                  <td>BrazilSão Paulo</td>
                  <td>Accounting , IT Much More...</td>
                  <td>
                    <a href="" className="arrow-box">
                      <FontAwesomeIcon icon={faArrowRightLong} />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="table-data">
              <div className="container-fluid">
                <div className="row justify-content-between align-items-center">
                  <div className="col-md-6">
                    <p className="table-info">Showing data 1 to 8 of 256K entries</p>
                  </div>
                  <div className="col-md-auto ms-auto">
                    <nav aria-label="Page navigation example ms-auto">
                      <ul class="pagination">
                        <li class="page-item">
                          <a class="page-link" href="#">
                            <FontAwesomeIcon icon={faAngleLeft} />
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            4
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            40
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
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
export default CompanyListing;
