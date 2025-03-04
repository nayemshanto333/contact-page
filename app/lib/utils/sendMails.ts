import nodemailer from "nodemailer";


interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

const smtpEmails = process.env.SMTP_EMAIL;
const defaultForm = `Contact US👻 ${smtpEmails}`;

export const sendMail = async (Option: EmailOptions) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      service: process.env.SMTP_SERVICE || undefined,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: { user: process.env.SMTP_EMAIL, pass: process.env.SMTP_PASS },
    });

    const info = await transporter.sendMail({ from: defaultForm, ...Option });
    console.log("Email sent successfully!", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
