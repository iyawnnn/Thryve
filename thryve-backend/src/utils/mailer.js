// utils/mailer.js (Gmail SMTP with Nodemailer)
const nodemailer = require("nodemailer");

// Create transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Gmail address
    pass: process.env.EMAIL_PASS, // Gmail App Password (16 chars)
  },
});

// Verify transporter on startup
transporter.verify((err, success) => {
  if (err) {
    console.error("❌ SMTP transporter verification failed:", err);
  } else {
    console.log("✅ SMTP transporter verified, ready to send emails");
  }
});

const sendEmail = async (to, subject, html) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER, // sender
      to,
      subject,
      html,
    };

    console.log("📧 Sending email via Gmail SMTP...");
    console.log("📨 To:", to);

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", info.messageId);
    return info;
  } catch (err) {
    console.error("❌ Email sending failed:", err);
    throw err;
  }
};

module.exports = sendEmail;
