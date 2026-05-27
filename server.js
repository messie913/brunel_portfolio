require("dotenv").config();
const { text } = require("motion/react-client");
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send-email", async (req, res) => {
  try {
    console.log(req);

    const { name, email, message } = req.body;
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Nouveau message portfolio",
      html: `
                <h2>Nouveau message</h2>

                <p><b>Nom :</b> ${name}</p>
                <p><b>Email :</b> ${email}</p>
                <p><b>Message :</b> ${message}</p>
            `,
    });
    res.status(200).json({
      success: true,
      message: "Email envoyé",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Erreur serveur",
    });
  }
});

// const mailOptions = {
//   from: process.env.EMAIL_USER,
//   to: "messie913@gmail.com",
//   subject: "Premier email Node JS",
//   text: "Bonjour premier email Node JS avec dotenv !",
// };
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email envoye" + info.response);
//   }
// });
app.listen(5000, () => {
  console.log("Serveur lancé sur port 5000");
});
