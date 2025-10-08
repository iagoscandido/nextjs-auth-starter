import { createAuthClient } from "better-auth/react";

export const {
  signUp,
  signOut,
  signIn,
  forgetPassword,
  useSession,
  resetPassword,
} = createAuthClient({});
