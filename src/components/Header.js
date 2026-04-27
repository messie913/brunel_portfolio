import React from "react";
import { NavLink } from "react-router-dom";

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
        <NavLink to="/" className="nav-active">
          <li>Accueil</li>
        </NavLink>
        <NavLink>
          <li>À propos</li>
        </NavLink>
        <NavLink>
          <li>Compétences</li>
        </NavLink>
        <NavLink>
          <li>Projets</li>
        </NavLink>
        <NavLink>
          <li>Ils parlent de moi</li>
        </NavLink>
        <NavLink>
          <li>
            Youtube{" "}
            <i className="fa-brands fa-youtube" style={{ color: "red" }}></i>
          </li>
        </NavLink>
        <NavLink>
          <li>Contact</li>
        </NavLink>
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
