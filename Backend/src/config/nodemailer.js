import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (toEmail, subject, htmlContent) => {
  try {
    const senderAddress = process.env.MAIL_FROM_ADDRESS;

    if (!senderAddress) {
      throw new Error("MAIL_FROM_ADDRESS missing in env");
    }

    const response = await resend.emails.send({
      from: `Your-Study-Hub <${senderAddress}>`,
      to: toEmail,
      subject: subject,
      html: htmlContent,
    });

    console.log("Resend Email Sent:", response);
    return { success: true };

  } catch (error) {
    console.error("Resend Email Error:", error);
    throw new Error("Failed to send email via Resend");
  }
};

export default sendEmail;
