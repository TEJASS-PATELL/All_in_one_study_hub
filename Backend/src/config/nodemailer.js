const SibApiV3Sdk = require('sib-api-v3-sdk');

// 🔑 Client aur API Key setup (Yeh code ek baar run hona chahiye)
const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];

// Agar BREVO_API_KEY set nahi hai to error denge
if (!process.env.BREVO_API_KEY) {
  console.error("❌ FATAL: BREVO_API_KEY is not set.");
}

apiKey.apiKey = process.env.BREVO_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

/**
 * ✅ Main Function: Email bhejane ka kaam karta hai.
 * @param {string} toEmail - Recipient email address
 * @param {string} subject - Email subject line
 * @param {string} htmlContent - HTML content for the email body
 */
const sendBrevoEmail = async (toEmail, subject, htmlContent) => {

  const senderAddress = process.env.MAIL_FROM_ADDRESS;
  if (!senderAddress) {
    console.error("CRITICAL: MAIL_FROM_ADDRESS ENV not found!");
    throw new Error("Configuration Error: Sender email is missing.");
  }
  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail.subject = subject;
  sendSmtpEmail.htmlContent = htmlContent;

  // 🛑 SENDER Details: Ensure MAIL_FROM_ADDRESS verified hai
  sendSmtpEmail.sender = {
    name: process.env.MAIL_SENDER_NAME || "Your Study Hub",
    address: "tejasspatell2@gmail.com"
  };

  sendSmtpEmail.to = [{ email: toEmail }];

  try {
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log('✅ Brevo API Email Sent Successfully. Message ID:', data.messageId);
    return { success: true, messageId: data.messageId };

  } catch (error) {
    // Yeh error Render logs mein bahut helpful hoga
    console.error('❌ Brevo API Email Error:', error.response ? error.response.text : error.message);
    throw new Error("Failed to send email via Brevo API.");
  }
};

module.exports = sendBrevoEmail; // ✅ Function ko export kiya