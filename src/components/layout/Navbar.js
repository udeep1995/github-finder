import React from "react";
import { Link } from "react-router-dom";
const Navbar = props => {
  return (
    <div>
      <nav className="navbar bg-primary">
        <h1>
          <i className={props.icon}>{props.title}</i>
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github"
};

export default Navbar;
