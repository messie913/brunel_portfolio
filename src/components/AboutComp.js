import React from "react";

const AboutComp = () => {
  return (
    <div className="aboutSection">
      <div className="aboutText">
        <div className="texte">
          <h2>À PROPOS DE MOI</h2>
          <h3>Passionné par le code, animé par la résolution de problèmes.</h3>
          <p>
            Titulaire d'une maîtrise en science informatique, je suis
            dévéloppeur web full-stack avec une solide expérience dans la
            conception et le dévéloppement d'applications modernes. J'utilise
            des tecnologies innovantes pour créer des solutions efficaces,
            durable et scalables.
          </p>
          <button
            className="cta neutrale"
            style={{
              border: "1px solid #72c7ba",
              padding: "10px",
              fontSize: "1rem",
            }}
          >
            En savoir plus sur moi
          </button>
        </div>
        <div className="stats">
          <div className="statsItem">
            <i className="fa-solid fa-calendar"></i>
            <div className="nbStat">
              <p>3+</p>
              <p>Années d'expérience</p>
            </div>
          </div>
          <div className="statsItem">
            <i className="fa-solid fa-diagram-project"></i>
            <div className="nbStat">
              <p>10+</p>
              <p>Projets réalisés</p>
            </div>
          </div>
          <div className="statsItem">
            <i className="fa-brands fa-youtube"></i>
            <div className="nbStat">
              <p>10+</p>
              <p>Abonnées Youtube</p>
            </div>
          </div>
        </div>
      </div>
      <div className="skills">
        <h2>Compétences</h2>
        <p>Technologie avec lesquelles je travaille.</p>
        <div className="technos">
          <h3>Frontend</h3>
          <ul className="technosItem">
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
          </ul>
        </div>
        {/* Backend */}
        <div className="technos">
          <h3>Backend</h3>
          <ul className="technosItem">
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
              <i class="fa-brands fa-laravel"></i>
              <p>Laravel</p>
            </li>
          </ul>
        </div>
        {/* Utils */}
        <div className="technos">
          <h3>Outils & autres</h3>
          <ul className="technosItem">
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
      </div>
    </div>
  );
};

export default AboutComp;
