import React from "react";

const Projects = () => {
  return (
    <div className="projectContainer" id="projects">
      <h2>mes réalisations</h2>
      <div className="allProject">
        <h3>Quelques projets récents</h3>
        <button className="cta neutrale">
          <a
            rel="noreferrer"
            target="_blank"
            className="btnCta"
            href="https://regip.tech"
          >
            Voir tous les projets <i class="fa-solid fa-arrow-right"></i>
          </a>
        </button>
      </div>
      <div className="cardContainer">
        {/* Card 1 */}
        <div
          className="card"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-offset="200"
          data-aos-delay="200"
        >
          <div className="card-head moviestuff"></div>
          <div className="card-body">
            <h3>Moviestuff - webapp de cinéma.</h3>
            <p>
              {" "}
              Application web de cinéma utilisant une API themoviedb avec
              système d'authentification et paiement.
            </p>
            <div className="technosUsed">
              <span className="techno">React</span>
              <span className="techno">SASS</span>
              <span className="techno">Axios</span>
              <span className="techno">Bootstrap</span>
            </div>
          </div>
          <div className="card-footer">
            <a href="https://moviestuff-app.vercel.app/">Voir le projet</a>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        {/* Card 2 */}
        <div
          className="card"
          data-aos="fade-up"
          data-aos-duration="2050"
          data-aos-offset="200"
          data-aos-delay="210"
        >
          <div className="card-head ariva"></div>
          <div className="card-body">
            <h3>Moviestuff - webapp de cinéma.</h3>
            <p>
              {" "}
              Application web de cinéma utilisant une API themoviedb avec
              système d'authentification et paiement.
            </p>
            <div className="technosUsed">
              <span className="techno">React</span>
              <span className="techno">SASS</span>
              <span className="techno">Axios</span>
              <span className="techno">Bootstrap</span>
            </div>
          </div>
          <div className="card-footer">
            <a href="https://moviestuff-app.vercel.app/">Voir le projet</a>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        {/* Card 3 */}
        <div
          className="card"
          data-aos="fade-down"
          data-aos-duration="2100"
          data-aos-offset="200"
          data-aos-delay="215"
        >
          <div className="card-head marmitepartage"></div>
          <div className="card-body">
            <h3>Moviestuff - webapp de cinéma.</h3>
            <p>
              {" "}
              Application web de cinéma utilisant une API themoviedb avec
              système d'authentification et paiement.
            </p>
            <div className="technosUsed">
              <span className="techno">React</span>
              <span className="techno">SASS</span>
              <span className="techno">Axios</span>
              <span className="techno">Bootstrap</span>
            </div>
          </div>
          <div className="card-footer">
            <a href="https://moviestuff-app.vercel.app/">Voir le projet</a>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        {/* Card 4 */}
        <div
          className="card"
          data-aos="fade-right"
          data-aos-duration="2200"
          data-aos-offset="200"
          data-aos-delay="220"
        >
          <div className="card-head movie"></div>
          <div className="card-body">
            <h3>Moviestuff - webapp de cinéma.</h3>
            <p>
              {" "}
              Application web de cinéma utilisant une API themoviedb avec
              système d'authentification et paiement.
            </p>
            <div className="technosUsed">
              <span className="techno">React</span>
              <span className="techno" style={{ textAlign: "center" }}>
                Taiwind CSS
              </span>
              <span className="techno">SASS</span>
              <span className="techno">Axios</span>
              <span className="techno">Bootstrap</span>
            </div>
          </div>
          <div className="card-footer">
            <a href="https://moviestuff-app.vercel.app/">Voir le projet</a>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
