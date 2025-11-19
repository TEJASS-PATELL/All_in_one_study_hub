// 🛑 /opt/render/project/src/Backend/src/config/nodemailer.js ko poora replace karein

const { MailerSend, EmailParams, Sender, Recipient } = require("mailersend");

// 🔑 Mailersend Client Initialize karna
const mailersend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY,
});

/**
 * ✅ Main Function: Email bhejane ka kaam karta hai.
 * @param {string} toEmail - Recipient email address
 * @param {string} subject - Email subject line
 * @param {string} htmlContent - HTML content for the email body
 */
const sendMailersendEmail = async (toEmail, subject, htmlContent) => {
  try {
    const senderAddress = process.env.MAIL_FROM_ADDRESS;
    const senderName = process.env.MAIL_SENDER_NAME || "Your Study Hub";
    
    if (!senderAddress || senderAddress.trim() === "") {
        console.error("CRITICAL: MAIL_FROM_ADDRESS ENV not found!");
        throw new Error("Configuration Error: Sender email is missing.");
    }
    
    // Sender aur Recipient objects banana
    const sentFrom = new Sender(senderAddress, senderName);
    const recipients = [new Recipient(toEmail)];

    // Email content params
    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject(subject)
      .setHtml(htmlContent)
      .setText("Please view this email in HTML mode."); // Text fallback

    // 🚀 API call to send the email
    const response = await mailersend.email.send(emailParams);

    console.log('✅ Mailersend API Email Sent Successfully. Response:', response);
    return { success: true, message: "Email sent via Mailersend." };

  } catch (error) {
    // Error object ko dhang se log karna
    console.error('❌ Mailersend API Email Error:', error);
    throw new Error("Failed to send email via Mailersend API.");
  }
};

module.exports = sendMailersendEmail; // ✅ Function ko export kiya