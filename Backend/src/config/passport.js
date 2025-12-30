import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { prisma } from "../lib/prisma.js";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;
        const name = profile.displayName;

        if (!email) {
          return done(new Error("No email found in Google profile"), null);
        }

        let user = await prisma.user.findUnique({ where: { email }});

        if (!user) {
          user = await prisma.user.create({
            data: { name, email, password: "", isAccountVerified: true },
          });
        }

        done(null, user);
      } catch (err) {
        console.error("Google Auth Error:", err);
        done(err, null);
      }
    }
  )
);

export default passport;
