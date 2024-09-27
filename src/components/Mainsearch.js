import {
  faAngleDown,
  faBuilding,
  faLocationPin,
  faSearch,
  faUser,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Mainsearch = () => {
  return (
    <div className="mainsearch">
      <h1>Search For Company Or Profile</h1>
      <form action="">
        <div className="search-box d-flex align-items-center">
          <div className="s-icon-box">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div className="searchbar flex-grow-1">
            <input type="text" placeholder="Search" />
          </div>
          <div className="search-options d-flex align-items-center">
            <div className="input-group">
              <label className="input-group-text" htmlFor="">
                <FontAwesomeIcon icon={faUser} />
              </label>
              <select onChange=""
                value="Profile Type"
                className="form-select"
                aria-label="Filter select"
              >
                <option value="1">All</option>
                <option value="2">Active</option>
                <option value="3">Inactive</option>
              </select>
            </div>
            <div className="input-group">
              <label className="input-group-text" htmlFor="">
                <FontAwesomeIcon icon={faLocationPin} />
              </label>
              <select onChange=""
                value="Location"
                className="form-select"
                aria-label="Filter select"
              >
                <option value="1">All</option>
                <option value="2">Active</option>
                <option value="3">Inactive</option>
              </select>
            </div>
            <div className="input-group">
              <label className="input-group-text" htmlFor="">
                <FontAwesomeIcon icon={faBuilding} />
              </label>
              <select onChange=""
                value="Industry"
                className="form-select"
                aria-label="Filter select"
              >
                <option value="1">All</option>
                <option value="2">Active</option>
                <option value="3">Inactive</option>
              </select>
            </div>
            <div className="button-box">
              <button className="btn">Find Company</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Mainsearch;
