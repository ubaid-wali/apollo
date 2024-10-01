import { faAngleDoubleRight, faGears } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import buttonStars from "../img/button-stars.png";
import { Link } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import axios from "axios";
import NewSession from "./NewSession";

const SessionsListing = () => {
  const [showSessionModal, setShowSessionModal] = useState(false);
  const handleCloseSessionModal = () => setShowSessionModal(false);

  const [data, setData] = useState(null);

  // State to handle loading state
  const [loading, setLoading] = useState(true);

  // State to handle errors
  const [error, setError] = useState(null);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const [show, setShow] = useState(false);
  const [selectedCompanyName, setSelectedCompanyName] = useState([]);
  const [selectedRevenue, setSelectedRevenue] = useState([]);
  const [selectedTechnology, setSelectedTechnology] = useState([]);
  const [selectedIndustry, setSelectedIndustry] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

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

  // Dropdowns Code

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSelect = (selectedList, setSelected) => {
    setSelected(selectedList);
  };
  // Dropdowns Code

  return (
    <div>
      <div className="session-box">
        <div className="button-box">
          {/* <button
            className="btn btn-dark"
            onClick={() => {
              setShowSessionModal(true);
            }}
          >
            Start a Session <img src={buttonStars} alt="" />
          </button> */}
          <NewSession />
        </div>
        <div className="previous-sessions">
          <h6>Session in progress</h6>
          <ul className="session-list">
            {data.slice(0, 2).map((session, index) => (
              <li key={index}>
                <span>
                  <Link to={"/session/?session_id=" + session._id["$oid"]}>
                    {session.session_name}
                  </Link>
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
            ))}
          </ul>
          <Link to="/all-sessions" href="#" className="more-sessions">
            See All <FontAwesomeIcon icon={faAngleDoubleRight} />
          </Link>
        </div>
      </div>

      {/* <Modal
        className="option-list-modal session-cycle-modal"
        show={showSessionModal}
        onHide={handleCloseSessionModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Full session cycle </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-body">
              {step === 1 && (
                <div className="step step-1" controlId="formStep1">
                  <input
                    className="form-control session-field"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name Session"
                  />
                </div>
              )}
              {step === 2 && (
                <div className="step step-2">
                  <Form.Group className="f-group">
                    <Form.Label>Company Name</Form.Label>
                    <Multiselect
                      isObject={false}
                      options={["DTC Force", "XYZ Corp", "ABC Solutions"]} // List of company names
                      selectedValues={selectedCompanyName}
                      onSelect={(selectedList) =>
                        handleSelect(selectedList, setSelectedCompanyName)
                      }
                      onRemove={(selectedList) =>
                        handleSelect(selectedList, setSelectedCompanyName)
                      }
                      placeholder="Select Company Name"
                    />
                  </Form.Group>

                  <Form.Group className="f-group">
                    <Form.Label>Revenue</Form.Label>
                    <Multiselect
                      isObject={false}
                      options={["500K - 1M", "1M - 2M", "2M - 5M"]}
                      selectedValues={selectedRevenue}
                      onSelect={(selectedList) =>
                        handleSelect(selectedList, setSelectedRevenue)
                      }
                      onRemove={(selectedList) =>
                        handleSelect(selectedList, setSelectedRevenue)
                      }
                      placeholder="Select Revenue"
                    />
                  </Form.Group>

                  <Form.Group className="f-group">
                    <Form.Label>Technology</Form.Label>
                    <Multiselect
                      isObject={false}
                      options={["Salesforce", "Slack", "AWS", "Google Cloud"]}
                      selectedValues={selectedTechnology}
                      onSelect={(selectedList) =>
                        handleSelect(selectedList, setSelectedTechnology)
                      }
                      onRemove={(selectedList) =>
                        handleSelect(selectedList, setSelectedTechnology)
                      }
                      placeholder="Select Technology"
                    />
                  </Form.Group>

                  <Form.Group className="f-group">
                    <Form.Label>Industry</Form.Label>
                    <Multiselect
                      isObject={false}
                      options={["FinTech", "Healthcare", "E-commerce"]}
                      selectedValues={selectedIndustry}
                      onSelect={(selectedList) =>
                        handleSelect(selectedList, setSelectedIndustry)
                      }
                      onRemove={(selectedList) =>
                        handleSelect(selectedList, setSelectedIndustry)
                      }
                      placeholder="Select Industry"
                    />
                  </Form.Group>

                  <Form.Group className="f-group">
                    <Form.Label>Location</Form.Label>
                    <Multiselect
                      isObject={false}
                      options={["Toronto", "NYC", "London", "San Francisco"]}
                      selectedValues={selectedLocation}
                      onSelect={(selectedList) =>
                        handleSelect(selectedList, setSelectedLocation)
                      }
                      onRemove={(selectedList) =>
                        handleSelect(selectedList, setSelectedLocation)
                      }
                      placeholder="Select Location"
                    />
                  </Form.Group>
                </div>
              )}
            </div>
            <div className="d-flex justify-content-between mt-4">
              {step > 1 && (
                <button
                  className="btn btn-previous"
                  variant="secondary"
                  onClick={handlePrevious}
                >
                  Previous
                </button>
              )}
              {step < 2 ? (
                <button
                  className="btn btn-next"
                  variant="primary"
                  onClick={handleNext}
                >
                  Next
                </button>
              ) : (
                <button
                  className="btn btn-submit"
                  variant="primary"
                  type="submit"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </Modal.Body>
      </Modal> */}
    </div>
  );
};
export default SessionsListing;
