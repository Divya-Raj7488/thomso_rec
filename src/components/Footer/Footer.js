import React from "react";
import logo from "../../images/BellaOlonjelogo.png";
import twitterImg from "../../images/twitterimg.png"
import facebookImg from "../../images/facebook.png"
import InstaImg from "../../images/instagram.png"
import "./Footer.css";

const Footer = () => {
  return (
    <div class="w-100">
      <div className="bellaOlonjeFooterImg">
        <h2 class="text-white">Download the app now.</h2>
        <h4 class="text-white d-flex flex-wrap justify-content-center align-items-center">
          Available on your favorite store. Start your premium experience now
        </h4>
        <div className="footerBtns">
          <button type="button" class="btn btn-danger btn-lg">
            app Store
          </button>
          <button
            type="button"
            class="btn border border-white btn-lg text-white"
          >
            app Store
          </button>
        </div>
      </div>
      <div class="container d-flex flex-row align-items-center justify-content-evenly" id="footerNavbar">
        <img src={logo} alt="" className="footerLogoImg"/>
        <div class="d-flex flex-row" id="socialMedia">
            <a href="/"><img src={twitterImg} width={40} height={40} alt="" /></a>
            <a href="/"><img src={facebookImg} width={40} height={40} alt="" /></a>
            <a href="/"><img src={InstaImg} width={40} height={40} alt="" /></a>
        </div>
        <div className="copywright2022">
        Copywright 2020 Bella Onojie.com
        </div>
      </div>
    </div>
  );
};

export default Footer;
