import React from "react";
// import "./asset";
import facebook_img from "../assets/facebook.svg";
import insta_img from "../assets/insta.svg";
import twitter_img from "../assets/twitter.svg";

export default function Footer() {
  return (
    <>
      <div className="footer">
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
          <div className="compani-info">
            <ul className="ft-ul">
              <h2>company info</h2>
              <li className="ft-li">
                <a href="#">about us</a>
              </li>
              <li className="ft-li">
                <a href="#">carrier</a>
              </li>
              <li className="ft-li">
                <a href="#">we are hiring</a>
              </li>
              <li className="ft-li">
                <a href="#">blog</a>
              </li>
            </ul>
          </div>
          <div className="features">
            <ul className="ft-ul">
              <h2>features</h2>
              <li className="ft-li">
                <a href="#">business marketing</a>
              </li>
              <li className="ft-li">
                <a href="#">user analytic</a>
              </li>
              <li className="ft-li">
                <a href="#">live chat</a>
              </li>
              <li className="ft-li">
                <a href="#">unlimited support</a>
              </li>
            </ul>
          </div>
          <div className="resources">
            <ul className="ft-ul">
              <h2>resources</h2>
              <li className="ft-li">
                <a href="#">IOS & android</a>
              </li>
              <li className="ft-li">
                <a href="#">watch a demo</a>
              </li>
              <li className="ft-li">
                <a href="#">customers</a>
              </li>
              <li className="ft-li">
                <a href="#">API</a>
              </li>
            </ul>
          </div>
        </div>
        <a className="ft-msg" href="https://github.com/Uzumaki4303">
          Made by Uzumaki
        </a>
      </div>
    </>
  );
}
