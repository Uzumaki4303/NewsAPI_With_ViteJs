import React, { useState } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import cross_icon from "../assets/cross.png";
import humburger from "../assets/humburger_icon.svg";
import down_arrow from '../assets/down_arrow.png'

function Navbar(props) {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleTogglePopover = () => {
    console.log("Popover toggled"); // Debugging
    setIsPopoverVisible(!isPopoverVisible);
  };

  const handleSelectedNews = (event) => {
    const selectedNews = event.target.innerText || event.target.textContent;
    console.log("Selected News:", selectedNews); // Debugging
    props.onSelectedNews(selectedNews);
    setIsPopoverVisible(false);
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className="Navbar">
      <div className="nav-container">
        <h1 className="logo">.News</h1>
        <div className={`nav-items ${isNavbarOpen ? "open" : ""}`}>
          <li className="nav-li">
            <NavLink to="/">Home</NavLink>
          </li>

          <li className="nav-li">
            <NavLink to="/">About</NavLink>
          </li>

          <li className="nav-li">
            <NavLink to="/">Contact</NavLink>
          </li>

          <li className="nav-li">
            <NavLink to="/news" onClick={handleTogglePopover}>
              <span id="categories">
                categories
                <img id='down_arrow' src={down_arrow} alt="" />
              </span>
            </NavLink>
            <div className={`suggestions popover ${isPopoverVisible ? "popover-visible" : ""}`}>
              <div
                className="suggestion"
                draggable="true"
                onClick={handleSelectedNews}
              >
                Education
              </div>
              <div
                className="suggestion"
                draggable="true"
                onClick={handleSelectedNews}
              >
                Indian News
              </div>
              <div
                className="suggestion"
                draggable="true"
                onClick={handleSelectedNews}
              >
                Politics
              </div>
              <div
                className="suggestion"
                draggable="true"
                onClick={handleSelectedNews}
              >
                Sports
              </div>
            </div>
          </li>

        </div>

        <li className="hamburger" onClick={toggleNavbar}>
          <img
            className={`hamburger-icon ${isNavbarOpen ? "hide" : ""}`}
            src={humburger}
            alt="menu"
          />
          <img
            className={`cross-icon ${isNavbarOpen ? "" : "hide"}`}
            src={cross_icon}
            alt="close"
          />
        </li>
      </div>
    </div>
  );
}

export default Navbar;
