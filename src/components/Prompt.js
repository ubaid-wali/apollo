import {
  faBuilding,
  faLocationPin,
  faPaperclip,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import apolloChat from "../img/apollo-chat.png";
import loggedInUser from "../img/logged-in-user.png";

const Prompt = () => {
  return (
    <div className="prompt">
      <div>
        <section className="msger">
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
                  You can change your name in JS section!
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
        </section>
      </div>

      <form action="">
        <div className="search-box d-flex align-items-center">
          <div className="s-icon-box">
            <FontAwesomeIcon icon={faPaperclip} />
          </div>
          <div className="searchbar flex-grow-1">
            <input type="text" placeholder="How Can I Help You" />
          </div>
          <div className="search-options d-flex align-items-center">
            <div className="input-group">
              <label className="input-group-text" for="">
                <FontAwesomeIcon icon={faUser} />
              </label>
              <select className="form-select" aria-label="Filter select">
                <option selected>Profile Type</option>
                <option value="1">All</option>
                <option value="2">Active</option>
                <option value="3">Inactive</option>
              </select>
            </div>
            <div className="input-group">
              <label className="input-group-text" for="">
                <FontAwesomeIcon icon={faLocationPin} />
              </label>
              <select className="form-select" aria-label="Filter select">
                <option selected>Profile</option>
                <option value="1">All</option>
                <option value="2">Active</option>
                <option value="3">Inactive</option>
              </select>
            </div>
            <div className="button-box">
              <button className="btn">Go</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Prompt;
