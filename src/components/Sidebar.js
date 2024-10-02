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
