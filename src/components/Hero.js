import React from "react";

const Hero = () => {
  return (
    <div className="heroContainer" id="hero">
      <div className="heroPres">
        <p className="webDev">Brunel Loumouamou - Dévéloppeur Full-Stack</p>
        <h1>
          <span className="firstWord">Je</span> conçois des <br />
          <span className="ctaText"> applications web modernes</span> et
          performantes.
        </h1>
        <p className="whoAmI">
          Développeur Full-Stack passionné avec une maitrise en science
          informatique. J'aide les entreprises et entrepreneurs à transformer
          leurs idées en solutions digitales robustes, performantes et centrées
          utilisateur.
        </p>
        <div className="ctaContainer">
          <button className="cta">
            Voir mes projets <i className="fa-solid fa-arrow-right"></i>
          </button>
          <button className="cta neutrale">
            Télécharger mon CV <i className="fa-solid fa-download"></i>
          </button>
        </div>
        <div className="follow">
          <p>Suivez-moi</p>
          <div className="icons">
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-youtube"></i>
            <i class="fa-solid fa-envelope"></i>
          </div>
        </div>
      </div>
      <div className="imgHero"></div>
    </div>
  );
};

export default Hero;
