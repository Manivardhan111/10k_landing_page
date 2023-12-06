import React from "react";
import { useState } from "react";
import "./Navbar.css";
import CompanyLogo from "../Assets/companylogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const NavbarComp = () => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="navbar_container" style={{width:"100vw"}}>
      <div className="logo">
        <img
          src={CompanyLogo}
          alt="Company-Logo"
          style={{ height: "45px", width: "80px" }}
        ></img>
      </div>
      <div className="links">
        <ul>
          <li>Home</li>
          <li>Course</li>
          <li>Scholarship</li>
          <li>Free Lecture</li>
        </ul>
      </div>
      <div className="login">
        <div className="login-dropdown">
          <button className="login-button" onClick={toggleForm}>
            Login <FontAwesomeIcon icon={faCaretDown} />
          </button>
          <div className={`login-content${showForm ? " show" : ""}`}>
            <form onSubmit={handleSubmit} className="input_form">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                className="form_email"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                className="form_password"
              />
              <button type="submit" className="form_submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComp;
