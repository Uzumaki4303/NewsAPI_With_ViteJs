import React from "react";
// import "./asset";
import facebook_img from "../assets/facebook.svg";
import insta_img from "../assets/insta.svg";
import twitter_img from "../assets/twitter.svg";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="ft-container">
          <div className="get-in-touch">
            <h2>get in touch</h2>
            <p>Use Link to contact us </p>
            <div className="ft-imgs">
              <a href="#">
                <img src={facebook_img} alt="facebook-img" />{" "}
              </a>
              <a href="#">
                <img src={insta_img} alt="insta-img" />
              </a>
              <a href="#">
                <img src={twitter_img} alt="twitter-img" />
              </a>
            </div>
          </div>
          
        </div>
        <a className="ft-msg" href="https://github.com/Uzumaki4303">
          Made by Uzumaki
        </a>
      </footer>
    </>
  );
}
