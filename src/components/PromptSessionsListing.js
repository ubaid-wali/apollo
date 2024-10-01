import {
  faEdit,
  faEllipsis,
  faPen,
  faPenAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PromptSessionsListing = () => {
  const [data, setData] = useState(null);

  // State to handle loading state
  const [loading, setLoading] = useState(true);

  // State to handle errors
  const [error, setError] = useState(null);

  // Fetch data on component mount using axios
  useEffect(() => {
    const apiUrl = "http://35.225.202.65:5001/list_all_threads";

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
    <div className="prompt-sessions">
      <div class="d-flex align-items-center justify-content-between p-2">
        <h6>Analysis</h6>
        <div>
          <Link to={"/prompt/"}>
            <FontAwesomeIcon icon={faPen} />
          </Link>
        </div>
      </div>
      <div className="prompt-list">
        {/* <div className="dropdown">
          <button
            className="d-flex align-items-center justify-content-between dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Charles Petraske Persona <FontAwesomeIcon icon={faEllipsis} />
          </button>
        </div> */}

        <div>
          {data.map((thread, index) => (
            <Link
              to={"/prompt/?thread_id=" + thread["thread_id"]}
              className="d-flex align-items-center justify-content-between dropdown-toggle"
              type="button"
            >
              {thread["thread_name"].substr(0, 25)}
              <FontAwesomeIcon icon={faEllipsis} />
            </Link>
          ))}
        </div>
      </div>
      {/* <div>{JSON.stringify(data["analysis_result"], null, 2)}</div> */}
    </div>
  );
};
export default PromptSessionsListing;
