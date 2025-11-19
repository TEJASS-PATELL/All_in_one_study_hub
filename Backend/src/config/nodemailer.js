const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
});

transporter.verify(function (error, success) {
    if (error) {
        console.log("❌ SMTP Connection Error:", error);
    } else {
        console.log("✅ Server is ready to take our messages!");
    }
});


module.exports = transporter;