import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <div className="mainHeader">
      <figure className="logo">
        <NavLink to="/">
          <img
            src="./Logo/logo_resized.png"
            alt="logo Portofolio"
            title="Logo"
          />
        </NavLink>
      </figure>
      <ul className="menu">
        <HashLink
          to="/#hero"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Accueil</li>
        </HashLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>À propos</li>
        </NavLink>

        <HashLink
          to="/#projects"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Projets</li>
        </HashLink>
        <HashLink
          to="/#walloffame"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Ils parlent de moi</li>
        </HashLink>
        <HashLink
          to="/#Youtube"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>
            Youtube{" "}
            <i className="fa-brands fa-youtube" style={{ color: "red" }}></i>
          </li>
        </HashLink>

        <HashLink
          smooth
          to="/#contact"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Contact</li>
        </HashLink>
      </ul>
      <div className="btnContact">
        <NavLink>
          <button>Me contacter</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
