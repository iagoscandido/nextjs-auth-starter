"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth/auth-client";

export const SignOutButton = () => {
  const [isPending, setIPending] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    await signOut({
      fetchOptions: {
        onSuccess() {
          toast.success("Signed out successfully");
          router.push("/login");
        },
        onError() {
          toast.error("Something went wrong!");
        },
        onRequest() {
          toast.loading("Signing out...");
          setIPending(true);
        },
        onResponse() {
          toast.dismiss();
          setIPending(false);
        },
      },
    });
  };

  return (
    <Button
      onClick={handleClick}
      variant={"ghost"}
      className="w-full"
      size={"sm"}
      disabled={isPending}
      aria-disabled={isPending}
    >
      <Icons.logout />
      Sign Out
    </Button>
  );
};
