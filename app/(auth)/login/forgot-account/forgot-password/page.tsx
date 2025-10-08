"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { forgetPassword } from "@/lib/auth/auth-client";

const ForgotPasswordPage = () => {
  const params = useSearchParams();
  const emailFromQuery = params.get("email") || "";
  const [email, setEamil] = useState(emailFromQuery);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.info(email);

    const { error } = await forgetPassword({
      email: email,
      redirectTo: `${window.location.origin}/login/forgot-account/forgot-password/reset-password`,
    });

    if (error) {
      toast.error("Something went wrong. Please try again.");
    } else {
      toast.success("Reset link sent. Please check your email.");
    }
  };

  return (
    <div className="container flex flex-col gap-3 m-auto p-2 h-fit w-full max-w-sm">
      <h2>Forgot your Password?</h2>
      <form
        onSubmit={handleSubmit}
        className="container flex flex-col gap-3 m-auto p-2 h-fit w-full max-w-sm"
      >
        <Input
          type="email"
          value={email}
          onChange={(e) => setEamil(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
