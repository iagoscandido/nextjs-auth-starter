import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

interface SendEmail {
  to: string;
  subject: string;
  text: string;
}

export const sendEmail = async ({
  to,
  subject,
  text,
}: SendEmail): Promise<void> => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    html: htmlTemplate(text),
  });
};

const htmlTemplate = (text: string): string => `
    <p>Your requested password reset.</p>
    <p>${text}</p>

    <p>If you did not request a password reset, please ignore this email or reply to let us know.</p>
`;
