import React, { useState } from "react";
//import { NavLink } from "react-router-dom";
//import { NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

export const Navbar = () => {
  const [navLinkToggle, setNavLinkToggle] = useState(false);

  const handleNavLinkToggle = () => {
    setNavLinkToggle(!navLinkToggle);
  };

  const renderClasses = () => {
    let classes = "navlinks";

    if (navLinkToggle) {
      classes += " active";
    }
    return classes;
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="navbar">
      <div className="logo">
        <img
          className="logo-class"
          src={process.env.PUBLIC_URL + "/name_icon.png"}
          alt="logo"
          onClick={scrollToTop}
        />
      </div>
      <ul className={renderClasses()}>
        <li>
          <Link
            className="nav-item"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="nav-item"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="nav-item"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleNavLinkToggle} className="hamburger-toggle">
        <i className="fas fa-bars fa-lg"></i>
      </div>
    </div>
  );
};

export default Navbar;
