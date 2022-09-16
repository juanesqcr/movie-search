import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-left">
        <div className=".navbar-left">
          <ul>
            <li>
              <a href="/Home">Movies</a>
            </li>
            <li>
              <a href="/TV">Tv Shows</a>
            </li>
            <li>
              <a href="/Search">Search</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
