import {
  faLocationPin,
  faPaperclip,
  faSearch,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import apolloChat from "../img/apollo-chat.png";
import loggedInUser from "../img/logged-in-user.png";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import { useLocation, useSearchParams } from "react-router-dom";

const employeeList = [
  {
    id: 1,
    name: "Aisha",
    country: "Accenture",
    linkedin: "Let there be change",
  },
  {
    id: 2,
    name: "Ubaid",
    country: "Accenture",
    linkedin: "Let there be change",
  },
  {
    id: 3,
    name: "Abdallah",
    country: "Accenture",
    linkedin: "Let there be change",
  },
  {
    id: 4,
    name: "Osama",
    country: "Accenture",
    linkedin: "Let there be change",
  },
  {
    id: 5,
    name: "Joe",
    country: "Accenture",
    linkedin: "Let there be change",
  },
];

const CompanyList = [
  {
    id: 1,
    name: "Accenture",
    country: "USA",
    website: "https://www.accenture.com",
  },
  {
    id: 2,
    name: "DTC Force",
    country: "Canada",
    website: "https://www.dtcforce.com",
  },
  {
    id: 3,
    name: "skopein",
    country: "Canada",
    website: "https://www.skopein.ai",
  },
  {
    id: 4,
    name: "DTC ISP",
    country: "Saudi Arabia",
    website: "https://www.dtcisp.com",
  },
  {
    id: 5,
    name: "Nysroc",
    country: "UAE",
    website: "https://www.nysroc.com",
  },
];

// Reusable function to make POST requests
const makePostRequest = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Error making POST request", error);
    throw error;
  }
};

const Prompt = () => {
  // State to store API data
  const [data, setData] = useState(null);

  // State to handle loading state
  const [loading, setLoading] = useState(true);

  // State to handle errors
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");

  const [selectedItem, setSelectedItem] = useState("");

  const [showCompany, setShowCompany] = useState(false);
  const [showPerson, setShowPerson] = useState(false);

  const [typeId, setTypeId] = useState(0);
  const [typeName, setTypeName] = useState("");
  const [isType, setIsType] = useState(false);
  const [threadData, setThreadData] = useState([]);
  const [newPromptResponse, setNewPromptResponse] = useState("");

  // POST request on page load

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const thread_id = queryParams.get("thread_id");
  // setThreadId(thread_id);
  const fetchData = async () => {
    const url = "http://35.225.202.65:5001/locate_thread";
    const data = { thread_id: thread_id }; // Replace with actual data to send

    try {
      const response = await makePostRequest(url, data);
      setThreadData(response); // Set the initial data from the response
    } catch (error) {
      console.error("Error fetching initial data", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []); // Empty array ensures the effect runs only on page load

  console.log(threadData);

  const handleCloseCompany = () => setShowCompany(false);
  const handleShowCompany = () => setShowCompany(true);

  const handleClosePerson = () => setShowPerson(false);
  const handleShowPerson = () => setShowPerson(true);

  const handleTypeChange = (e) => {
    const newValue = e.target.value;
    if (newValue === "company") {
      handleShowCompany();
      setSelectedItem(newValue);
    } else if (newValue === "personal") {
      handleShowPerson();
      setSelectedItem(newValue);
    } else {
      handleCloseCompany();
      handleClosePerson();
      setSelectedItem("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert(search);
    // promptSearch(true);
    const formData = {
      prompt: search,
      identifier: typeName,
      profile_type: selectedItem,
      thread_id: thread_id,
    };

    const url = "http://35.225.202.65:5001/existing_thread_gpt_prompt_analysis";

    try {
      const response = await makePostRequest(url, formData); // Submit the form data
      setNewPromptResponse(response); // Set the submitted data from the response
      if (response["message"] === "Processed successfully") {
        fetchData();
      }
    } catch (error) {
      console.error("Error submitting form data", error);
    }
  };

  const deleteType = (e) => {
    setTypeId(0);
    setTypeName("");
    setIsType(false);
  };

  const typeSelectHandle = (e) => {
    setTypeId(e.target.id);
    setTypeName(e.target.value);
    setIsType(true);
    handleClosePerson();
    handleCloseCompany();
    // console.log(typeId);
  };

  // const response = makePostRequest(
  //   "http://35.225.202.65:5001/locate_thread",
  //   data2
  // );

  // function getThreadData(thread_id) {
  //   try {
  //     const data2 = {
  //       thread_id: thread_id,
  //     };
  //     const responseData = makePostRequest(
  //       "http://35.225.202.65:5001/locate_thread",
  //       data2
  //     );

  //     console.log("Retrieved JSON data:", responseData); // JSON data is logged here
  //   } catch (error) {
  //     console.error("Error retrieving data:", error);
  //   }
  // }

  // getThreadData();

  // console.log(response);

  return (
    <div className="prompt">
      <div>
        {/* <section className="msger">
          <main className="msger-chat">
            <div className="msg right-msg">
              <div className="msg-img">
                <img src={loggedInUser} alt="" />
              </div>

              <div className="msg-bubble">
                <div className="msg-info">
                  <div className="msg-info-name">Joe</div>
                  <div className="msg-info-time">12:46</div>
                </div>

                <div className="msg-text">
                  Generate Persona Analysis "A short summary" on the all the
                  profiles one by one in this profile_data.json
                </div>
              </div>
            </div>
            <div className="msg left-msg">
              <div className="msg-img">
                <img src={apolloChat} alt="" />
              </div>

              <div className="msg-bubble">
                <div className="msg-info">
                  <div className="msg-info-name">Apollo</div>
                  <div className="msg-info-time">12:45</div>
                </div>

                <div className="msg-text">
                  <p>
                    It appears that the file you've uploaded contains detailed
                    LinkedIn profiles of multiple individuals. The data includes
                    information such as names, profile pictures, headlines,
                    locations, current companies, education details, posts,
                    comments, and more.
                  </p>
                  <p>
                    To generate persona analyses, I'll need to summarize each
                    profile individually based on the available data. Given the
                    complexity and length of the file, let's start by generating
                    a summary for the first profile:{" "}
                  </p>
                  <h4>Charles Petraske, MBA </h4> <br />
                  <p>
                    <b>Summary</b>: Charles Petraske is a seasoned sales
                    professional with over two decades of experience, primarily
                    in the pharmaceutical and medical device industries. Holding
                    an MBA in Management, Charles has honed his skills in
                    business-to-business sales, new business development, and
                    customer relationship management. His career is marked by
                    his ability to adapt to changing market conditions and
                    exceed expectations through strategic planning and
                    solution-based selling. Currently, he serves as the Area
                    Vice President of Sales at Inovalon, where he continues to
                    leverage his extensive knowledge in healthcare analytics and
                    custom data solutions. Charles is known for his excellent
                    communication skills, ability to build strong client
                    relationships, and commitment to customer satisfaction.
                  </p>
                  <p>
                    If you'd like to proceed with summaries for the other
                    profiles or if you need any specific details highlighted,
                    please let me know!
                  </p>
                </div>
              </div>
            </div>
          </main>
        </section> */}

        {threadData.map((thread, index) => (
          <main className="msger-chat">
            <div className="msg right-msg">
              <div className="msg-img">
                <img src={loggedInUser} alt="" />
              </div>

              <div className="msg-bubble">
                <div className="msg-info">
                  <div className="msg-info-name">Joe</div>
                  <div className="msg-info-time">{thread["timestamp"]}</div>
                </div>

                <div className="msg-text">{thread["llm_prompt"]}</div>
              </div>
            </div>
            <div className="msg left-msg">
              <div className="msg-img">
                <img src={apolloChat} alt="" />
              </div>

              <div className="msg-bubble">
                <div className="msg-info">
                  <div className="msg-info-name">Apollo</div>
                  <div className="msg-info-time">{thread["timestamp"]}</div>
                </div>

                <div className="msg-text">
                  <p>{thread["analysis_result"]}</p>
                </div>
              </div>
            </div>
          </main>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="search-box d-flex align-items-center">
          {/* <div className="s-icon-box">
            <FontAwesomeIcon icon={faPaperclip} />
          </div> */}
          <div className="searchbar flex-grow-1">
            <input
              type="text"
              placeholder="How Can I Help You"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          <div class="profile-type">
            {isType ? (
              <button class="badge-btn" onClick={deleteType}>
                {typeName} <FontAwesomeIcon icon={faXmark} />
              </button>
            ) : null}
          </div>
          {/* <div>{selectedItem}<  /div> */}
          <div className="search-options d-flex align-items-center">
            <div className="input-group">
              <label className="input-group-text" htmlFor="">
                {/* <FontAwesomeIcon icon={faUser} /> */}
              </label>
              <select
                className="form-select"
                aria-label="Filter select"
                value={selectedItem}
                onChange={handleTypeChange}
              >
                <option value="">Select Type</option>
                <option value="company">Company</option>
                <option value="personal">Person</option>
              </select>
            </div>
            <div>
              <input hidden value={typeId} type="text" name="" id="" />
            </div>
            <div className="button-box">
              <button type="submit" className="btn">
                Go
              </button>
            </div>
          </div>
        </div>
      </form>

      <Modal
        className="option-list-modal"
        show={showCompany}
        onHide={handleCloseCompany}
      >
        <Modal.Header closeButton>
          <Modal.Title>Top Companies List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table class="table select-list-table">
            <thead>
              <tr>
                <th scope="col" className="text-nowrap">
                  Employee Name
                </th>
                <th scope="col">Country</th>
                <th scope="col">LinkedIn</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {CompanyList.map((company, index) => (
                <tr key={index}>
                  <th scope="row">{company.name}</th>
                  <td>{company.country}</td>
                  <td>{company.website}</td>
                  <td>
                    <button
                      onClick={typeSelectHandle}
                      value={company.name}
                      id={company.id}
                      className=""
                    >
                      Select
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="prompt">
            <form>
              <div
                className="search-box d-flex align-items-center"
                style={{ maxWidth: "100%" }}
              >
                <div className="s-icon-box">
                  <FontAwesomeIcon icon={faSearch} />
                </div>
                <div className="searchbar flex-grow-1">
                  <input
                    type="text"
                    placeholder="Search Company Profile"
                    onChange={(e) => {}}
                  />
                </div>

                <div className="search-options d-flex align-items-center">
                  <div className="button-box">
                    <button type="submit" className="btn">
                      Go
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        className="option-list-modal"
        show={showPerson}
        onHide={handleClosePerson}
      >
        <Modal.Header closeButton>
          <Modal.Title>Top Employee List</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <table class="table select-list-table">
            <thead>
              <tr>
                <th scope="col">Employee Name</th>
                <th scope="col">Country</th>
                <th scope="col">LinkedIn</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {employeeList.map((employee, index) => (
                <tr key={index}>
                  <th scope="row">{employee.name}</th>
                  <td>{employee.country}</td>
                  <td>{employee.linkedin}</td>
                  <td>
                    <button
                      onClick={typeSelectHandle}
                      value={employee.name}
                      id={employee.id}
                      className=""
                    >
                      Select
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="prompt">
            <form>
              <div
                className="search-box d-flex align-items-center"
                style={{ maxWidth: "100%" }}
              >
                <div className="s-icon-box">
                  <FontAwesomeIcon icon={faSearch} />
                </div>
                <div className="searchbar flex-grow-1">
                  <input
                    type="text"
                    placeholder="Search Company Profile"
                    onChange={(e) => {}}
                  />
                </div>
                <div className="search-options d-flex align-items-center">
                  <div className="button-box">
                    <button type="submit" className="btn">
                      Go
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default Prompt;
