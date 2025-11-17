const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const transporter = require("../config/nodemailer");

const sendOtp = async (userId, userEmail) => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expires = Math.floor(Date.now() / 1000) + 5 * 60 * 60; 

  await prisma.user.update({
    where: { id: userId },
    data: {
      verifyOtp: otp,
      verifyOtpExpireAt: expires,
    },
  });

  const mailOption = {
    from: process.env.GMAIL_USER,
    to: userEmail,
    subject: "Your Email Verification OTP",
    html: `
      <h2>Your OTP Code</h2>
      <h1>${otp}</h1>
      <p>This OTP is valid for 5 minutes.</p>
    `,
  };

  await transporter.sendMail(mailOption);
};

module.exports = sendOtp;

