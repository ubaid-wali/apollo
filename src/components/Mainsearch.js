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
            <div class="input-group">
              <label class="input-group-text" for="">
                <FontAwesomeIcon icon={faUser} />
              </label>
              <select class="form-select" aria-label="Filter select">
                <option selected>Profile Type</option>
                <option value="1">All</option>
                <option value="2">Active</option>
                <option value="3">Inactive</option>
              </select>
            </div>
            <div class="input-group">
              <label class="input-group-text" for="">
                <FontAwesomeIcon icon={faLocationPin} />
              </label>
              <select class="form-select" aria-label="Filter select">
                <option selected>Location</option>
                <option value="1">All</option>
                <option value="2">Active</option>
                <option value="3">Inactive</option>
              </select>
            </div>
            <div class="input-group">
              <label class="input-group-text" for="">
                <FontAwesomeIcon icon={faBuilding} />
              </label>
              <select class="form-select" aria-label="Filter select">
                <option selected>Industry</option>
                <option value="1">All</option>
                <option value="2">Active</option>
                <option value="3">Inactive</option>
              </select>
            </div>
            <div className="button-box">
              <button class="btn">Find Company</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Mainsearch;
