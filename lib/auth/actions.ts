"use server";

import { APIError } from "better-auth";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth/auth";
import prisma from "../prisma";

interface State {
  errorMessage?: string | null;
}

export const signUpAction = async (
  previousState: State,
  formData: FormData,
) => {
  const rawFormData = {
    email: formData.get("email") as string,
    password: formData.get("pwd") as string,
    firstName: formData.get("firstname") as string,
    lastName: formData.get("lastname") as string,
  };

  const { email, password, firstName, lastName } = rawFormData;

  try {
    await auth.api.signUpEmail({
      body: {
        name: `${firstName} ${lastName}`,
        email: email,
        password: password,
      },
    });
  } catch (error) {
    if (error instanceof APIError) {
      switch (error.status) {
        case "UNPROCESSABLE_ENTITY":
          return {
            errorMessage: "User already exists",
          };
        case "BAD_REQUEST":
          return {
            errorMessage: "Invalid email",
          };
        default:
          return {
            errorMessage: "Something went wrong",
          };
      }
    }
    console.error(error);
  }

  redirect("/dashboard");
};

export const SignInAction = async (
  previousState: State,
  formData: FormData,
) => {
  const rawformData = {
    email: formData.get("email") as string,
    password: formData.get("pwd") as string,
  };
  const { email, password } = rawformData;
  try {
    await auth.api.signInEmail({
      body: {
        email: email,
        password: password,
      },
    });
  } catch (error) {
    if (error instanceof APIError) {
      switch (error.status) {
        case "UNAUTHORIZED":
          return {
            errorMessage: "User not found",
          };
        case "BAD_REQUEST": {
          return {
            errorMessage: "Email or Passowrd is incorrect",
          };
        }
        default: {
          return {
            errorMessage: "Something went wrong",
          };
        }
      }
    }
    console.error(error);
  }
  redirect("/dashboard");
};

export const SearchAccountAction = async (email: string): Promise<boolean> => {

  if (!email) {
    return false;
  }

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  return !!user;
};
