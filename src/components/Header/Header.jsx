import React from "react";
import "./header.css";
import { Link } from "react-scroll";

function Header() {
  return (
    //setting the main header of the Home page
    <div className="headerWrapper">
      <div className="home-landing">
        <h1>
          The modern gate to write your <span>blog</span>
        </h1>
      </div>
      <div className="down-arrow">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,0"
        />
        <Link
          to="posts-destination"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <span className="material-symbols-outlined">
            keyboard_double_arrow_down
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
