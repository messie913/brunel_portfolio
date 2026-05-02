import React from "react";

const ContactComp = () => {
  return (
    <div className="contactContainer" id="contact">
      <div className="textContact">
        <div className="texte">
          <h2>Contact</h2>
          <h3>Travaillons ensemble</h3>
          <p>
            Vous avez un projet en tête ou une collaboration à proposer ?
            N'hésitez pas à me contacter.
          </p>
        </div>
        <div className="icons">
          <div className="itemIcom">
            <i class="fa-solid fa-envelope"></i>
            <div className="text">
              <p>Email</p>
              <p>bloumoua@hotmail.com</p>
            </div>
          </div>
          <div className="itemIcom">
            <i class="fa-solid fa-map-location"></i>
            <div className="text">
              <p>Localisation</p>
              <p>Montréal, Canada</p>
            </div>
          </div>
          <div className="itemIcom">
            <i class="fa-solid fa-business-time"></i>
            <div className="text">
              <p>Disponibilité</p>
              <p>Ouvert aux opportunités</p>
            </div>
          </div>
        </div>
      </div>
      <div className="formContainer">
        <form action="" method="post">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Votre nom ..."
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Votre email ..."
          />
          <textarea
            name="message"
            id="message"
            placeholder="Votre message ..."
          ></textarea>
          <input
            type="submit"
            value="Envoyer le message"
            className="cta neutrale"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactComp;
