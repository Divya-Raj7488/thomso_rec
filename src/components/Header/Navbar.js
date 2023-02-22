import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarIcon">
      </div>
      <div className="navbarListItems">
        <ul className="navbarListItemsUl">
          <li>Home</li>
          <li>products</li>
          <li>faq</li>
          <li>Contacts</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
