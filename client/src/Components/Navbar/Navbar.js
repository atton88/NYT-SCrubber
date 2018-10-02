import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">New York Times Scraper</h1>
        <p class="lead">Search for and annotate articles of interest!</p>
      </div>
    </div>
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link
        to="/search"
        className={
          window.location.pathname === "/search"
            ? "nav-link active"
            : "nav-link"
        }
      >
        Search
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/saved"
        className={
          window.location.pathname === "/saved" ? "nav-link active" : "nav-link"
        }
      >
        Saved
      </Link>
    </li>
  </ul>
  </div>
);

export default Navbar;
