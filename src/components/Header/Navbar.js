import React from "react";
import logo from "../../images/BellaOlonjelogo.png";
import mobileLogoImg from "../../images/logomobile.png"
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-md bg-body-tertiary d-flex">
        <div class="w-50">
          <img
            src={logo}
            height={101}
            width={256}
            alt="Bella-Olonjelogo Logo"
            id="desktopLogo"
          />
          <img
            src={mobileLogoImg}
            height={51}
            width={104}
            alt="Bella-Olonjelogo Logo"
            id="mobileLogo"
          />

        </div>
        <div class="container-fluid w-50 d-flex justify-content-end">
          <button
            class="navbar-toggler me-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse w-100" id="navbarContent">
            <ul class="navbar-nav w-100 d-flex justify-content-evenly">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Faq
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
