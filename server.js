// server.js
require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Endpoint to handle form submissions
app.post("/api/send-email", (req, res) => {
  const { fullName, phoneNumber, email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER, // Your email
    to: process.env.CLIENT_EMAIL, // Client's email
    subject: "New Form Submission",
    text: `You have a new submission from:
    Name: ${fullName}
    Phone: ${phoneNumber}
    Email: ${email}
    Message: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).send("Error sending email");
    }
    console.log("Email sent:", info.response);
    res.status(200).send("Email sent successfully");
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
