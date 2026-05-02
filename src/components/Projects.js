import React from "react";

const Projects = () => {
  return (
    <div className="projectContainer" id="projects">
      <h2>mes réalisations</h2>
      <div className="allProject">
        <h3>Quelques projets récents</h3>
        <button className="cta neutrale">
          Voir tous les projets <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className="cardContainer">
        {/* Card 1 */}
        <div className="card">
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
            <a href="">Voir le projet</a>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        {/* Card 2 */}
        <div className="card">
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
            <a href="">Voir le projet</a>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        {/* Card 3 */}
        <div className="card">
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
            <a href="">Voir le projet</a>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        {/* Card 4 */}
        <div className="card">
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
              <span className="techno">SASS</span>
              <span className="techno">Axios</span>
              <span className="techno">Bootstrap</span>
            </div>
          </div>
          <div className="card-footer">
            <a href="">Voir le projet</a>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
