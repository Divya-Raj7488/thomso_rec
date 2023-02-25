import React from "react";
import "./Mainpage.css";
import SecondImage from "../../images/Group53.png";
import loginImg from "../../images/login.png";
import { ImageCard, InfoCard } from "./Card";
import FoodMenuImg from "../../images/FoodMenu.png";
import SecondImg from "../../images/Group54Mobile.png";
import PaymentImg from "../../images/Payment.png";

const Mainpage = () => {
  return (
    <>
      <div className="mainPageContainer">
        <div className="mainPageTextContainer">
          <div className="foodAppText">Food app</div>
          <h1 className="quoteContainer">
            Why stay hungry when you can order from Bella Onjie
          </h1>
          <h4 className="downloadApp">
            Download the Bella onjie's food app on
          </h4>
        </div>
        <div className="downloadButtons">
          <button className="downloadBtn1" id="playStoreBtn">
            playstore
          </button>
          <button className="downloadBtn1" id="appStoreBtn">
            app Store
          </button>
        </div>
        <div class="d-flex flex-column justify-content-center align-items-center" id="mainPgImg2">
          <img
            src={SecondImage}
            alt="Food for everyone quote"
            id="desktopViewImg"
          />
          <img
            src={SecondImg}
            alt="Food for everyone quote"
            id="mobileViewImg"
          />
          <div className="bellaOnjieWorking">How the app works</div>
        </div>
        
      </div>

      <div
        class="d-flex flex-wrap-reverse justify-content-evenly"
        id="bellaOnjieLogin"
      >
        <ImageCard url={loginImg} alt="login options" />
        <InfoCard
          Heading="Create an Account"
          SubHeading="Create/login to an existing
      account to get started"
          Description="An account is created with your email
      and a desired password"
        />
      </div>
      <div
        class="d-flex  flex-wrap justify-content-evenly"
        id="bellaOnjieLogin"
      >
        <InfoCard
          Heading="Explore varieties"
          SubHeading="Shop for your favorites
      meal as e dey hot."
          Description="Shop for your favorite meals or drinks
      and enjoy while doing it."
        />
        <ImageCard url={FoodMenuImg} alt="Food menu" />
      </div>
      <div
        class="d-flex flex-wrap-reverse justify-content-evenly"
        id="bellaOnjieLogin"
      >
        <ImageCard url={PaymentImg} alt="payment options" />
        <InfoCard
          Heading="Checkout"
          SubHeading="When you done check out
      and get it delivered."
          Description="When you done check out and get it 
      delivered with ease."
        />
      </div>
    </>
  );
};

export default Mainpage;
