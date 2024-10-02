// import btnStars from "../img/button-stars.png";
// import apolloIcon from "../img/c-icons/apollo-icon.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import CompanyListing from "./CompanyListing";
import ProgressStats from "./ProgressStats";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import axios from "axios";
import { useLocation } from "react-router-dom";

const makeGetRequest = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Error making POST request", error);
    throw error;
  }
};

const SessionProfile = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const session_id = queryParams.get("session_id");
  const [percentage, setPercentage] = useState(0);
  // State to store API data
  const [companyData, setCompanyData] = useState(null);

  // State to handle loading state
  const [loading, setLoading] = useState(true);

  // State to handle errors
  const [error, setError] = useState(null);

  const incrementProgress = () => {
    setPercentage((prevPercentage) =>
      prevPercentage < 100 ? prevPercentage + 10 : 100
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "http://34.169.65.115:5000/api/v1/sessions?session_id=" + session_id;
      // const data = { company_id: company_id }; // Replace with actual data to send
      try {
        const response = await makeGetRequest(url);
        setLoading(false);
        setCompanyData(response); // Set the initial data from the response
      } catch (error) {
        console.error("Error fetching initial data", error);
      }
    };

    fetchData();
  }, []); // Empty array ensures the effect runs only on page load

  if (loading) {
    return <div>Loading...</div>;
  }

  // Show error message if there was an error
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="s-progress">
      <ProgressStats />
      {companyData ? <CompanyListing data={companyData} /> : ""}
    </div>
  );
};
export default SessionProfile;
