import { PrismaClient } from "@prisma/client";
import sendMailersendEmail from "../config/nodemailer.js";

const prisma = new PrismaClient();

const sendOtp = async (userId, userEmail) => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expires = Math.floor(Date.now() / 1000) + 5 * 60; 

    await prisma.user.update({
        where: { id: userId },
        data: {
            verifyOtp: otp,
            verifyOtpExpireAt: expires,
        },
    });

    const subject = "Your Email Verification OTP";
    const htmlContent = `
        <h2>Your OTP Code</h2>
        <h1>${otp}</h1>
        <p>This OTP is valid for 5 minutes.</p>
    `;

    try {
        await sendMailersendEmail(userEmail, subject, htmlContent);
        console.log(`OTP sent successfully to ${userEmail}`);
    } catch (error) {
        console.error(`Error sending OTP to ${userEmail}:`, error.message);
        throw new Error("Failed to send verification OTP.");
    }
};

export default sendOtp;