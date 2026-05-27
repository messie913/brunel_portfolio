import React, { useState } from "react";

const ContactComp = () => {
  // Set Form Data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // SAve Form Data
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="contactContainer" id="contact">
      <div className="textContact">
        <div
          className="texte"
          data-aos="zoom-out-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-offset="400"
        >
          <h2>Contact</h2>
          <h3>Travaillons ensemble</h3>
          <p>
            Vous avez un projet en tête ou une collaboration à proposer ?
            N'hésitez pas à me contacter.
          </p>
        </div>
        <div
          className="icons"
          data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-offset="400"
          data-aos-delay="200"
        >
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
      <div
        className="formContainer"
        data-aos="fade-right"
        data-aos-duration="2500"
        data-aos-offset="400"
        data-aos-delay="210"
      >
        <form action="" method="post">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Votre nom ..."
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Votre email ..."
            onChange={handleChange}
          />
          <textarea
            name="message"
            id="message"
            placeholder="Votre message ..."
            onChange={handleChange}
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
