const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5000, () => console.log("Server Running on port 5000"));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dimassrizkii704@gmail.com",
    pass: "bcri xgej ampw yuoj", // Ganti dengan App Password dari Google
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log("Error verifying email:", error);
  } else {
    console.log("Ready to Send Emails");
  }
});

app.post("/contact", (req, res) => {
  const name = `${req.body.firstName} ${req.body.lastName}`;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  const mail = {
    from: name,
    to: "dimassrizkii704@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Phone:</strong> ${phone}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Email not sent:", error);
      res
        .status(500)
        .json({ status: "error", message: "Email failed to send" });
    } else {
      console.log("Email sent successfully!");
      res.status(200).json({ status: "success", message: "Message Sent" });
    }
  });
});
