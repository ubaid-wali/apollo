import { useEffect, useState } from "react";
import buttonStars from "../img/button-stars.png";
import { Modal, Button, Form } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import axios from "axios";

const makeGetRequest = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Error making POST request", error);
    throw error;
  }
};

const makePostRequest = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Error making POST request", error);
    throw error;
  }
};

const NewSession = () => {
  const [showSessionModal, setShowSessionModal] = useState(false);
  const [technologies, setTechnologies] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [locations, setLocations] = useState([]);

  const handleCloseSessionModal = () => setShowSessionModal(false);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const [show, setShow] = useState(false);
  const [sessionName, setsessionName] = useState("");
  const [selectedCompanyName, setSelectedCompanyName] = useState([]);
  const [selectedRevenue, setSelectedRevenue] = useState([]);
  const [selectedTechnology, setSelectedTechnology] = useState([]);
  const [selectedIndustry, setSelectedIndustry] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);

  const [data, setData] = useState(null);

  // State to handle loading state
  const [loading, setLoading] = useState(true);

  // State to handle errors
  const [error, setError] = useState(null);

  // Fetch data on component mount using axios

  useEffect(() => {
    const fetchTechnologies = async () => {
      const url = `http://34.169.65.115:5000/api/v1/get-attrs?type=technologies`;
      // const data = { thread_id: thread_id }; // Replace with actual data to send

      try {
        const response = await makeGetRequest(url);
        setLoading(false);
        setTechnologies(response); // Set the initial data from the response
      } catch (error) {
        console.error("Error fetching initial data", error);
      }
    };
    const fetchIndustries = async () => {
      const url = `http://34.169.65.115:5000/api/v1/get-attrs?type=industries`;
      // const data = { thread_id: thread_id }; // Replace with actual data to send

      try {
        const response = await makeGetRequest(url);
        setLoading(false);
        setIndustries(response); // Set the initial data from the response
      } catch (error) {
        console.error("Error fetching initial data", error);
      }
    };
    const fetchLocations = async () => {
      const url = `http://34.169.65.115:5000/api/v1/get-attrs?type=locations`;
      // const data = { thread_id: thread_id }; // Replace with actual data to send

      try {
        const response = await makeGetRequest(url);
        setLoading(false);
        setLocations(response); // Set the initial data from the response
      } catch (error) {
        console.error("Error fetching initial data", error);
      }
    };
    fetchTechnologies();
    fetchIndustries();
    fetchLocations();
  }, []); // Empty array ensures the effect runs only on page load

  const categories = technologies.map((item) => item.category);
  const industriesValue = industries.map((item) => item.cleaned_name);
  const locationArray = locations.map((item) => item.cleaned_name);
  // console.log(technologies);
  // console.log(industriesValue);
  // console.log(locationArray);
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
  // const sessionNameHandle = (e) => {
  //   setsessionName(e.target.value);
  // };

  const submitSession = async () => {
    const url = `http://34.169.65.115:5000/api/v1/sessions`;
    const data = {
      session_name: formData.name,
      search_query: {
        company: selectedCompanyName,
        revenue: selectedRevenue,
        technology: selectedTechnology,
        location: selectedLocation,
      },
    }; // Replace with actual data to send

    try {
      const response = await makePostRequest(url, data);
      setLoading(false);
      // console.log(response);
      setSelectedCompanyName([]);
      setSelectedRevenue([]);
      setSelectedTechnology([]);
      setSelectedIndustry([]);
      setSelectedLocation([]);
      // const { name, value } = "";
      setFormData({});

      // setIndustries(response); // Set the initial data from the response
    } catch (error) {
      console.error("Error fetching initial data", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    submitSession();
    setStep(1);
  };

  const handleSelect = (selectedList, setSelected) => {
    setSelected(selectedList);
  };

  return (
    <div>
      <button
        className="btn btn-dark"
        onClick={() => {
          setShowSessionModal(true);
        }}
      >
        Start a Session <img src={buttonStars} alt="" />
      </button>

      <Modal
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
                      options={categories}
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
                      options={industriesValue}
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
                      options={locationArray ? locationArray : "loading"}
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
                <a
                  className="btn btn-previous"
                  variant="secondary"
                  onClick={handlePrevious}
                >
                  Previous
                </a>
              )}
              {step < 2 ? (
                <a
                  className="btn btn-next"
                  variant="primary"
                  onClick={handleNext}
                >
                  Next
                </a>
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
      </Modal>
    </div>
  );
};
export default NewSession;
