import { PrismaClient } from "@prisma/client";
import sendMailersendEmail from "../config/nodemailer.js";

const prisma = new PrismaClient();

const sendOtp = async (userId, userEmail) => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expires = Date.now() + 5 * 60 * 1000; 

    await prisma.user.update({
        where: { id: userId },
        data: {
            verifyOtp: otp,
            verifyOtpExpireAt: expires,
        },
    });

    const subject = "Your Email Verification OTP";
    const htmlContent = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; text-align: center; border: 1px solid #eeeeee; padding: 40px; max-width: 600px; margin: auto; border-radius: 10px;">
            <h2 style="color: #2c3e50; margin-bottom: 20px;">Email Verification</h2>
            <p style="color: #555; font-size: 16px;">Thank you for choosing our service. Please use the following One-Time Password (OTP) to verify your email address:</p>
            <div style="background-color: #f9f9f9; padding: 20px; margin: 30px 0; border-radius: 8px;">
                <h1 style="color: #4A90E2; letter-spacing: 8px; font-size: 36px; margin: 0;">${otp}</h1>
            </div>
            <p style="color: #999; font-size: 14px;">This code is valid for <b>5 minutes</b>. If you did not request this, please ignore this email.</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
            <p style="color: #bbb; font-size: 12px;">© ${new Date().getFullYear()} Your Project Name. All rights reserved.</p>
        </div>
    `;

    try {
        await sendMailersendEmail(userEmail, subject, htmlContent);
        console.log(`OTP sent successfully to ${userEmail}`);
        return { success: true };
    } catch (error) {
        console.error(`Error sending OTP to ${userEmail}:`, error.message);
        throw new Error("Failed to send verification OTP.");
    }
};

export default sendOtp;