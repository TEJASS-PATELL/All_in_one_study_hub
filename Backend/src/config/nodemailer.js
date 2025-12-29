import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, 
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 10000,
});

transporter.verify((error, success) => {
  if (error) {
    console.log("Connection check failed:", error);
  } else {
    console.log("Server is ready to send emails!");
  }
});

const sendEmail = async (toEmail, subject, htmlContent) => {
  try {
    const senderAddress = process.env.MAIL_FROM_ADDRESS || process.env.EMAIL_USER;

    if (!senderAddress) {
      throw new Error("Sender address (EMAIL_USER) missing in env");
    }

    const mailOptions = {
      from: `"Your App Name" <${senderAddress}>`, 
      to: toEmail,
      subject: subject,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Email Sent Successfully:", info.messageId);
    return { success: true, messageId: info.messageId };

  } catch (error) {
    console.error("Nodemailer Error:", error.message);
    throw new Error(`Failed to send email: ${error.message}`);
  }
};

export default sendEmail;