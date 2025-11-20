const sgMail = require("@sendgrid/mail");
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (to, subject, html) => {
  try {
    const msg = {
      to,
      from: process.env.EMAIL_FROM, // must be verified sender
      subject,
      html,
    };
    const response = await sgMail.send(msg);
    console.log("✅ Email sent:", response[0].statusCode);
    return response;
  } catch (error) {
    console.error("❌ SendGrid error:", error);
    if (error.response) console.error(error.response.body);
    throw error;
  }
};

module.exports = sendEmail;
