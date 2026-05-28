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
    console.log(e.target.value);

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    console.log("Sending Form !");
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);

      alert("Email envoye avec succes");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
      alert("Erreur serveur");
    }
  };
  return (
    <div className="contactContainer" id="contact">
      <div className="textContact">
        <div
          className="texte"
          data-aos="zoom-out-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-offset="200"
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
          data-aos-offset="200"
          data-aos-delay="200"
        >
          <div className="itemIcom">
            <i className="fa-solid fa-envelope"></i>
            <div className="text">
              <p>Email</p>
              <p>bloumoua@hotmail.com</p>
            </div>
          </div>
          <div className="itemIcom">
            <i className="fa-solid fa-map-location"></i>
            <div className="text">
              <p>Localisation</p>
              <p>Montréal, Canada</p>
            </div>
          </div>
          <div className="itemIcom">
            <i className="fa-solid fa-business-time"></i>
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
        data-aos-offset="200"
        data-aos-delay="210"
      >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            placeholder="Votre nom ..."
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            placeholder="Votre email ..."
            onChange={handleChange}
          />
          <textarea
            name="message"
            id="message"
            value={formData.message}
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
