import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailersend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY,
});

const sendMailersendEmail = async (toEmail, subject, htmlContent) => {
  try {
    const senderAddress = process.env.MAIL_FROM_ADDRESS;
    const senderName = process.env.MAIL_SENDER_NAME || "Your Study Hub";

    if (!senderAddress || senderAddress.trim() === "") {
      console.error("CRITICAL: MAIL_FROM_ADDRESS ENV not found!");
      throw new Error("Configuration Error: Sender email is missing.");
    }

    const sentFrom = new Sender(senderAddress, senderName);
    const recipients = [new Recipient(toEmail)];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject(subject)
      .setHtml(htmlContent)
      .setText("Please view this email in HTML mode."); 

    const response = await mailersend.email.send(emailParams);

    console.log("Mailersend API Email Sent Successfully. Response:", response);
    return { success: true, message: "Email sent via Mailersend." };

  } catch (error) {
    console.error("Mailersend API Email Error:", error);
    throw new Error("Failed to send email via Mailersend API.");
  }
};

export default sendMailersendEmail;
