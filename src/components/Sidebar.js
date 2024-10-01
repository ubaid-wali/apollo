import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight, faGears } from "@fortawesome/free-solid-svg-icons";
import companyLogo from "../img/sample-company.png";

import { Link } from "react-router-dom"; 
import axios from "axios";
import { useEffect, useState } from "react";
import PromptSessionsListing from "./PromptSessionsListing";
import { Button, Modal } from "react-bootstrap";
import SessionsListing from "./SessionsListing";

const Sidebar = () => {
  const [data, setData] = useState(null);

  // State to handle loading state
  const [loading, setLoading] = useState(true);

  // State to handle errors
  const [error, setError] = useState(null);

  const [showSessionModal, setShowSessionModal] = useState(false);
  const handleCloseSessionModal = () => showSessionModal(false);

  // Fetch data on component mount using axios
  useEffect(() => {
    const apiUrl = "https://api.example.com/data";

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
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // Show error message if there was an error
  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  //35.225.202.65:5001/list_all_threads

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={companyLogo} alt="" />
      </div>
      <SessionsListing />
      <PromptSessionsListing />
    </div>
  );
};
export default Sidebar;
