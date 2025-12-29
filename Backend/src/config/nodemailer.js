import axios from "axios";

const sendEmail = async (toEmail, subject, htmlContent) => {
  try {
    const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";
    const API_KEY = process.env.BREVO_API_KEY; 
    const SENDER_EMAIL = process.env.MAIL_FROM_ADDRESS; 

    if (!API_KEY || !SENDER_EMAIL) {
      throw new Error("BREVO_API_KEY or MAIL_FROM_ADDRESS is missing in env");
    }

    const data = {
      sender: { name: "Your App Name", email: SENDER_EMAIL },
      to: [{ email: toEmail }],
      subject: subject,
      htmlContent: htmlContent,
    };

    const response = await axios.post(BREVO_API_URL, data, {
      headers: {
        "api-key": API_KEY,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });

    console.log("Email Sent Successfully via Brevo API:", response.data.messageId);
    return { success: true, messageId: response.data.messageId };

  } catch (error) {
    const errorMsg = error.response ? JSON.stringify(error.response.data) : error.message;
    console.error("Brevo API Error:", errorMsg);
    throw new Error(`Failed to send email: ${errorMsg}`);
  }
};

export default sendEmail;