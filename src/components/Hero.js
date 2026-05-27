import Aos from "aos";
import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
// import { openComposer } from "react-native-email-link";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    Aos.refresh();
  }, []);
  // const sendEmail = openComposer({
  //   to: "bloumoua@hotmail.com",
  //   subject: "I have a question",
  //   body: "Hi, can you help me with...",
  // });
  return (
    <div className="heroContainer" id="hero">
      <div className="heroPres">
        <p className="webDev">Brunel Loumouamou - Dévéloppeur Full-Stack</p>
        <h1
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-offset="200"
          data-aos-delay="200"
        >
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
          <button
            className="cta"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="200"
          >
            <HashLink smooth to="/#projects" className="btnCta">
              Voir mes projets <i className="fa-solid fa-arrow-right"></i>
            </HashLink>
          </button>

          <a
            target="_blank"
            href="/cv_downloader/CV_Brunel+Lettre_motivation_.pdf"
          >
            <button
              className="cta neutrale"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="800"
            >
              Télécharger mon CV <i className="fa-solid fa-download"></i>
            </button>
          </a>
        </div>
        <div
          className="follow"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <p>Suivez-moi</p>
          <div className="icons">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/messie913"
              style={{ color: "white" }}
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              style={{ color: "white" }}
              href="https://www.linkedin.com/in/brunel-loumouamou-78557713b"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.youtube.com/@codedecomplexe"
              style={{ color: "white" }}
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="bloumoua@hotmail.com" style={{ color: "white" }}>
              <i class="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      <div
        className="imgHero"
        data-aos="flip-right"
        data-aos-duration="1000"
        data-aos-delay="50"
      ></div>
    </div>
  );
};

export default Hero;
