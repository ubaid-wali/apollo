import {
  faPaperPlane,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import accentureImage from "../img/accenture-img.png";
import justinFranci from "../img/justin-franci.png";

const CompanyProfile = () => {
  return (
    <div className="cProfile">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="company-intro d-flex align-items-center justify-content-center">
              <div className="img-box">
                <img src={accentureImage} alt="" />
              </div>
              <div className="content">
                <div className="d-flex align-items-center justify-content-between">
                  <h2>Accenture</h2>
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

            <div className="card">
              <h3>Overview</h3>
              <p>
                Accenture is a renowned worldwide IT services company that
                excels in digital, cloud, and security solutions. With an
                extensive range of expertise across over 40 industries, we
                provide a comprehensive suite of services including Strategy and
                Consulting, Outsourcing, Interactive, Technology, and
                Operations. Our offerings are bolstered by the world's largest
                network of Advanced Technology and Intelligent Operations
                centers.
              </p>
              <p>
                With a workforce of over 500,000 professionals, we consistently
                deliver on the promise of technology and human ingenuity.
                Operating in more than 120 countries, we are committed to
                driving positive change and generating value for our clients,
                employees, shareholders, partners, and the communities we serve.
                We embrace the transformative power of change to create shared
                success and make a meaningful impact.
              </p>
            </div>

            <div className="card">
              <h3>Technology</h3>
              <div className="t-badges">
                <a href="#">Salesforce</a>
                <a href="#">SharePoint</a>
                <a href="#">Mailchimp</a>
                <a href="#">Linkedin Marketing Solutions</a>
                <a href="#">Google Analytics</a>
                <a href="#">YouTube</a>
                <a href="#">Vimeo</a>
                <a href="#">Adobe Media Optimizer</a>
                <a href="#">Atlassian Cloud</a>
                <a href="#">Facebook Custom Audiences</a>
                <a href="#">Circle</a>
              </div>
            </div>

            <div className="card">
              <h3>Accenture Services</h3>
              <div className="t-badges">
                <a href="#">Mobile App Development</a>
                <a href="#">Business Consulting</a>
                <a href="#">Video Consulting</a>
                <a href="#">IT technology services</a>
                <a href="#">Cyber Security</a>
                <a href="#">Accounting</a>
                <a href="#">HR Outsourcing</a>
                <a href="#">BPO</a>
                <a href="#">Software Development</a>
              </div>
            </div>

            <div className="card">
              <h3>Employees statistics</h3>
              <div className="stats-box d-flex flex-items-center justify-content-between">
                <div className="stats">
                  <h4>6</h4>
                  <p>Manager</p>
                </div>
                <div className="stats">
                  <h4>50</h4>
                  <p>Other</p>
                </div>
                <div className="stats">
                  <h4>2</h4>
                  <p>Executive</p>
                </div>
                <div className="stats">
                  <h4>1</h4>
                  <p>Director</p>
                </div>
                <div className="stats">
                  <h4>4</h4>
                  <p>Specialist</p>
                </div>
              </div>
            </div>

            <div className="card">
              <h3>Employees statistics</h3>
              <div className="employee-list">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="employee-box d-flex align-items-center justify-content-center">
                        <div className="img-box">
                          <img src={justinFranci} alt="" />
                        </div>
                        <div className="emp-detail">
                          <h5>Justin Franci</h5>
                          <p className="designation">
                            Chief Executive Officer, Growth Markets
                          </p>
                          <p className="location">-East Coast, US</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="employee-box d-flex align-items-center justify-content-center">
                        <div className="img-box">
                          <img src={justinFranci} alt="" />
                        </div>
                        <div className="emp-detail">
                          <h5>Justin Franci</h5>
                          <p className="designation">
                            Chief Executive Officer, Growth Markets
                          </p>
                          <p className="location">-East Coast, US</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="employee-box d-flex align-items-center justify-content-center">
                        <div className="img-box">
                          <img src={justinFranci} alt="" />
                        </div>
                        <div className="emp-detail">
                          <h5>Justin Franci</h5>
                          <p className="designation">
                            Chief Executive Officer, Growth Markets
                          </p>
                          <p className="location">-East Coast, US</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="employee-box d-flex align-items-center justify-content-center">
                        <div className="img-box">
                          <img src={justinFranci} alt="" />
                        </div>
                        <div className="emp-detail">
                          <h5>Justin Franci</h5>
                          <p className="designation">
                            Chief Executive Officer, Growth Markets
                          </p>
                          <p className="location">-East Coast, US</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="employee-box d-flex align-items-center justify-content-center">
                        <div className="img-box">
                          <img src={justinFranci} alt="" />
                        </div>
                        <div className="emp-detail">
                          <h5>Justin Franci</h5>
                          <p className="designation">
                            Chief Executive Officer, Growth Markets
                          </p>
                          <p className="location">-East Coast, US</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="employee-box d-flex align-items-center justify-content-center">
                        <div className="img-box">
                          <img src={justinFranci} alt="" />
                        </div>
                        <div className="emp-detail">
                          <h5>Justin Franci</h5>
                          <p className="designation">
                            Chief Executive Officer, Growth Markets
                          </p>
                          <p className="location">-East Coast, US</p>
                        </div>
                      </div>
                    </div>
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
export default CompanyProfile;
