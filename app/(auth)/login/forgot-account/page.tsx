"use client";
import { useRouter } from "next/navigation";
import { useActionState, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SearchAccountAction } from "@/lib/auth/actions";

const ForgotAccountPage = () => {
  const [email, setemail] = useState("");
  const router = useRouter();

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const found = await SearchAccountAction(email);

    if (found) {
      router.push(
        `/login/forgot-account/forgot-password?email=${encodeURIComponent(email)}`,
      );
    } else {
      toast.error("Account not found.");
    }
  };

  return (
    <div className="container flex flex-col gap-3 m-auto p-2 h-fit w-full max-w-sm">
      <h2>Find Your Account</h2>
      <form
        onSubmit={handleSearch}
        className="flex flex-col gap-3 m-auto p-2 h-fit w-full max-w-sm"
      >
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <Button type="submit">Search</Button>
      </form>
    </div>
  );
};

export default ForgotAccountPage;
