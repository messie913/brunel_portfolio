import React, { useEffect } from "react";
import { motion } from "motion/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Aos from "aos";

const AboutP = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    Aos.refresh();
  }, []);
  return (
    <div>
      <Header />
      <div className="aboutMain">
        <h1>A propos de moi</h1>
        <div className="aboutContent">
          <div className="textAbout">
            <p>
              Je suis développeur web full-stack, spécialisé dans la création
              d’applications modernes, performantes et orientées utilisateur.
            </p>
            <p
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-delay="100"
            >
              Titulaire d’une maîtrise en science informatique, j’ai développé
              une solide expertise aussi bien en front-end qu’en back-end, ce
              qui me permet de concevoir des solutions complètes, de l’interface
              utilisateur jusqu’à la logique serveur.
            </p>
            <p
              data-aos="fade-left"
              data-aos-duration="2100"
              data-aos-delay="120"
            >
              Je travaille régulièrement avec des technologies telles que HTML,
              CSS, JavaScript, React, PHP et Node.js, ainsi que des outils
              modernes comme Tailwind CSS et Wix selon les besoins du projet.
            </p>
            <p
              data-aos="fade-right"
              data-aos-duration="2150"
              data-aos-delay="140"
            >
              Passionné par la programmation web, j’aime transformer des idées
              en produits concrets, tout en mettant l’accent sur la qualité du
              code, l’expérience utilisateur et la performance.
            </p>
            <p data-aos="fade-down-right" data-aos-duration="2200">
              En parallèle, je partage mes connaissances à travers ma chaîne
              YouTube <i style={{ color: "#72c7ba" }}>CodeDeComplexe</i>, où je
              vulgarise la programmation web afin de la rendre accessible à
              tous.
            </p>
            <p>
              <strong style={{ color: "#72c7ba" }}>
                Mon objectif est simple
              </strong>{" "}
              : créer des solutions utiles, élégantes et efficaces, tout en
              continuant à apprendre et à évoluer dans un domaine en constante
              évolution.
            </p>
          </div>
          <figure></figure>
        </div>
        <div className="statsAboutMe">
          <div
            className="statItem"
            data-aos="fade-down-right"
            data-aos-duration="1000"
            data-aos-offset="200"
          >
            <motion.i
              initial={{ rotate: 0 }}
              whileInView={{ rotate: 360 }}
              //   animate={{ rotate: 360 }}
              transition={{ duration: 1 }}
              className="fa-solid fa-calendar"
            ></motion.i>
            <div className="nbStat">
              <p>3+</p>
              <p>Années d'expérience</p>
            </div>
          </div>
          <div
            className="statItem"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-offset="200"
          >
            <i className="fa-solid fa-diagram-project"></i>
            <div className="nbStat">
              <p>10+</p>
              <p>Projets réalisés</p>
            </div>
          </div>
          <div
            className="statItem"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="200"
          >
            <i className="fa-brands fa-youtube"></i>
            <div className="nbStat">
              <p>10+</p>
              <p>Abonnées Youtube</p>
            </div>
          </div>
          <div
            className="statItem"
            data-aos="fade-down-left"
            data-aos-duration="1000"
            data-aos-offset="200"
          >
            <i className="fa-brands fa-youtube"></i>
            <div className="nbStat">
              <p>10+</p>
              <p>Abonnées Youtube</p>
            </div>
          </div>
        </div>
      </div>

      {/* New skills sections */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.7 }}
        viewport={{ once: true }}
        className="skillsNF"
      >
        <div className="skillsIntro">
          <h2>Mes compétences.</h2>
          <p>
            Voici un aperçu des technologies et outils que je maîtrise pour
            concevoir, dévélopper et déployer des applications web modernes,
            performates et évolutives.{" "}
          </p>
        </div>
        <div className="skillsNFWrapper">
          {/* Frontend */}
          <div className="technos">
            <article className="textTechno">
              <figure>
                <i class="fa-solid fa-window-maximize"></i>
              </figure>
              <div className="textContent">
                <h3>Frontend</h3>
                <p>
                  Je crée des interfaces modernes, réactives et accessibles avec
                  les meilleures technologies du web.
                </p>
              </div>
            </article>
            <ul className="technoWrapper">
              <li>
                <i class="fa-brands fa-html5"></i>
                <p>HTML</p>
              </li>
              <li>
                <i class="fa-brands fa-css3"></i>
                <p>CSS</p>
              </li>
              <li>
                <i class="fa-brands fa-js"></i>
                <p>Javascript</p>
              </li>
              <li>
                <i class="fa-brands fa-react"></i>
                <p>React</p>
              </li>
              <li>
                <i class="fa-brands fa-bootstrap"></i>
                <p>Bootsrap</p>
              </li>

              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  style={{
                    width: "30px",
                    height: "30px",
                    color: "white",
                  }}
                >
                  <path
                    fill="rgb(114, 199, 186)"
                    d="M320 128C234.7 128 181.3 170.7 160 256C192 213.3 229.3 197.3 272 208C296.3 214.1 313.7 231.8 333 251.3C364.4 283.1 400.7 320 480 320C565.3 320 618.7 277.3 640 192C608 234.7 570.7 250.7 528 240C503.7 233.9 486.3 216.2 467 196.7C435.6 164.9 399.3 128 320 128zM160 320C74.7 320 21.3 362.7 0 448C32 405.3 69.3 389.3 112 400C136.3 406.1 153.7 423.8 173 443.3C204.4 475.1 240.7 512 320 512C405.3 512 458.7 469.3 480 384C448 426.7 410.7 442.7 368 432C343.7 425.9 326.3 408.2 307 388.7C275.6 356.9 239.3 320 160 320z"
                  />
                </svg>

                <p>Tailwind CSS</p>
              </li>
            </ul>
          </div>

          {/* Backend */}
          <div className="technos">
            <article className="textTechno">
              <figure>
                <i class="fa-solid fa-server"></i>
              </figure>
              <div className="textContent">
                <h3>Backend</h3>
                <p>
                  Je développe des API robustes et des applications backend
                  sécurisées et performantes.
                </p>
              </div>
            </article>
            <ul className="technoWrapper">
              <li>
                <i class="fa-brands fa-php"></i>
                <p>PHP</p>
              </li>
              <li>
                <i class="fa-brands fa-node"></i>
                <p>Node.js</p>
              </li>
              <li>
                <i class="fa-brands fa-npm"></i>
                <p>npm</p>
              </li>
              <li>
                <i class="fa-solid fa-database"></i>
                <p>MySQL</p>
              </li>
              <li>
                <i class="fa-solid fa-hard-drive"></i>

                <p>PHP Composer</p>
              </li>
            </ul>
          </div>
          {/* Utils */}
          <div className="technos">
            <article className="textTechno">
              <figure>
                <i class="fa-solid fa-envelopes-bulk"></i>
              </figure>
              <div className="textContent">
                <h3>Outils & environnement</h3>
                <p>
                  J'utilise des outils professionnels pour un développement
                  efficace et collaboratif au quotidien.
                </p>
              </div>
            </article>
            <ul className="technoWrapper">
              <li>
                <i class="fa-brands fa-git-alt"></i>
                <p>Git</p>
              </li>
              <li>
                <i class="fa-brands fa-github"></i>
                <p>GitHub</p>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#29b6f6"
                    d="M44,11.11v25.78c0,1.27-0.79,2.4-1.98,2.82l-8.82,4.14L34,33V15L33.2,4.15l8.82,4.14 C43.21,8.71,44,9.84,44,11.11z"
                  ></path>
                  <path
                    fill="#0277bd"
                    d="M9,33.896L34,15V5.353c0-1.198-1.482-1.758-2.275-0.86L4.658,29.239 c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574C7.304,34.37,8.271,34.43,9,33.896z"
                  ></path>
                  <path
                    fill="#0288d1"
                    d="M9,14.104L34,33v9.647c0,1.198-1.482,1.758-2.275,0.86L4.658,18.761 c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"
                  ></path>
                </svg>
                <p>VS Code</p>
              </li>
              <li>
                <i class="fa-brands fa-wix"></i>
                <p>Wix</p>
              </li>
              <li>
                <i class="fa-brands fa-figma"></i>
                <p>Figma</p>
              </li>
            </ul>
          </div>
          {/* Others */}
          <div className="technos">
            <article className="textTechno">
              <figure>
                <i class="fa-solid fa-star"></i>
              </figure>
              <div className="textContent">
                <h3>Autres compétences</h3>
                <p>
                  Curieux et polyvalent, je m'adapte rapidement aux nouveaux
                  outils et technologies.
                </p>
              </div>
            </article>
            <ul className="technoWrapper">
              <li>
                <i class="fa-brands fa-js"></i>
                <p style={{ textAlign: "center" }}>
                  Javascript <br /> ES6+
                </p>
              </li>
              <li>
                <i class="fa-solid fa-display"></i>
                <p style={{ textAlign: "center" }}>
                  Responsive <br /> design
                </p>
              </li>
              <li>
                <i class="fa-solid fa-gauge-high"></i>
                <p>Performance</p>
              </li>
              <li>
                <i class="fa-brands fa-searchengin"></i>
                <p>SEO</p>
              </li>
              <li>
                <i class="fa-solid fa-universal-access"></i>
                <p>Accessibilité</p>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default AboutP;
