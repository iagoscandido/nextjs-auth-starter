"use server"

import { auth } from "@/lib/auth/auth";

export const signUpEmailAction = async(formData: FormData ): Promise<{error: string | null}>=> {
    const name = formData.get("name");
    if (!name) return ({error: "Name is required"});
    const email = formData.get("email");
    if (!email) return ({error: "Email is required"});
    const password = formData.get("password");
    if (!password) return ({error: "Password is required"});

    try {
        auth.api.signInEmail({
            body: {
                email: email as string,
                password: password as string,
            }
        })
        return {error: null }
    } catch(err) {
        if (err instanceof Error) return {error: "Something went wrong while signing up"}
    }
    return  {error: "Internal server error"}
}