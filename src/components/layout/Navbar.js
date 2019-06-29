import React from "react";
const Navbar = props => {
  return (
    <div>
      <nav className="navbar bg-primary">
        <h1>
          <i className={props.icon}>{props.title}</i>
        </h1>
      </nav>
    </div>
  );
};
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github"
};

export default Navbar;
