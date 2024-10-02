import {
  faAngleDown,
  faBuilding,
  faLocationPin,
  faMapPin,
  faSearch,
  faUser,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import CompanyProfile from "./CompanyProfile";
import ProgressStats from "./ProgressStats";
import CompanyListing from "./CompanyListing";

const makeGetRequest = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Error making POST request", error);
    throw error;
  }
};
const Mainsearch = () => {
  // State to store API data
  const [searchData, setSearchData] = useState(null);

  // State to handle loading state
  const [loading, setLoading] = useState(true);

  // State to handle errors
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [profileType, setProfileType] = useState("");

  const handleSearchForm = (e) => {
    e.preventDefault();
    fetchData();
  };

  const typeChange = (e) => {
    setProfileType(e.target.value);
  };
  const searchHandle = (e) => {
    setSearch(e.target.value);
  };

  const fetchData = async (search, profileType) => {
    const searchQuery = "B12";
    const type = "company";
    const url = `http://34.169.65.115:5000/api/v1/search?search_query=${searchQuery}&profile_type=${type}`;
    // const data = { search_query: search, profile_type: profileType }; // Replace with actual data to send

    try {
      const response = await makeGetRequest(url);
      setLoading(false);
      setSearchData(response); // Set the initial data from the response
      console.log(searchData);
    } catch (error) {
      console.error("Error fetching initial data", error);
    }
  };
  // useEffect(() => {}, []); // Empty array ensures the effect runs only on page load
  // Show loading message while fetching data

  // Show error message if there was an error
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mainsearch">
      <h1>Search For Company Or Profile</h1>
      <form onSubmit={handleSearchForm}>
        <div className="search-box d-flex align-items-center">
          <div className="s-icon-box">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div className="searchbar flex-grow-1">
            <input
              type="text"
              onChange={searchHandle}
              value={search}
              placeholder="Search"
            />
          </div>
          <div className="search-options d-flex align-items-center">
            <div className="input-group">
              <label className="input-group-text" htmlFor="">
                <FontAwesomeIcon icon={faUser} />
              </label>
              <select
                onChange={typeChange}
                value={profileType}
                className="form-select"
                aria-label="Filter select"
              >
                <option value="">Profile Type</option>
                <option value="company">Company</option>
                <option value="personal">Person</option>
              </select>
            </div>
            <div className="input-group">
              <label className="input-group-text" htmlFor="">
                <FontAwesomeIcon icon={faMapPin} />
              </label>
              <select
                onChange={typeChange}
                value={profileType}
                className="form-select"
                aria-label="Filter select"
              >
                <option value="">location</option>
                <option value="company">Company</option>
                <option value="personal">Person</option>
              </select>
            </div>
            <div className="input-group">
              <label className="input-group-text" htmlFor="">
                <FontAwesomeIcon icon={faBuilding} />
              </label>
              <select
                onChange={typeChange}
                value={profileType}
                className="form-select"
                aria-label="Filter select"
              >
                <option value="">Industry</option>
                <option value="company">Company</option>
                <option value="personal">Person</option>
              </select>
            </div>
            <div className="button-box">
              <button type="submit" className="btn">
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
      <div>{loading === true ? "" : <CompanyListing data={searchData} />}</div>
      <div></div>
      {/* <ProgressStats /> */}
    </div>
  );
};
export default Mainsearch;
