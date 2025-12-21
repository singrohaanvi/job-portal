import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS,
  },
});

// ❗ TEST MODE ME EMAIL VERIFY SKIP
if (process.env.NODE_ENV !== "test") {
  transporter.verify((error) => {
    if (error) {
      console.log("Email transporter error:", error);
    } else {
      console.log("Email transporter is ready ✅");
    }
  });
}

export default transporter;
