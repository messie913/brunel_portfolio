import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const toogleMenu = () => {
    if (isMobile) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  };
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
      <ul
        className="menu"
        style={{
          right: isMobile ? "0" : "100%",
        }}
      >
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
          <button>
            <HashLink
              smooth
              to="/#contact"
              style={{ color: "white", textDecoration: "none" }}
            >
              Me contacter
            </HashLink>
          </button>
        </NavLink>
      </div>
      <div className="iMobileMenu">
        <i class="fa-solid fa-bars-staggered" onClick={() => toogleMenu()}></i>
      </div>
    </div>
  );
};

export default Header;
