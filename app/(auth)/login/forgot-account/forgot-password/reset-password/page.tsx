"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { resetPassword } from "@/lib/auth/auth-client";

const ResetPasswordPage = async () => {
  const [password, setPassword] = useState("");
  const params = useSearchParams();
  const token = params.get("token");
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      toast.error("Invalid or missing token");
    }
  }, [token]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!token) return;

    const { error } = await resetPassword({
      token,
      newPassword: password,
    });

    if (error) {
      toast.error("Something went wrong. PLease try again.");
    } else {
      toast.message("Password reset successfully. You can now login.");
      setTimeout(() => router.push("/login"), 3000);
    }
  };

  return (
    <div className="container flex flex-col gap-3 m-auto p-2 h-fit w-full max-w-sm">
      <h2>Reset Password?</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Reset Password</Button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
