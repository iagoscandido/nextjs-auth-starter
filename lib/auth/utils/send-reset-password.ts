import { sendEmail } from "@/lib/email";

interface User {
  email: string;
}

interface SendResetPasswordProps {
  user: User;
  url: string;
}

export const sendResetPassword = async ({
  ...props
}: SendResetPasswordProps) => {
  await sendEmail({
    to: props.user.email,
    subject: "Reset your password",
    text: `click the link to reset your password: ${props.url}`,
  });
};
