"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";

export const SignOutButton = () => {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    await signOut({
      fetchOptions: {
        onRequest() {
          toast.loading("Signing out...");
          setIsPending(true);
        },
        onResponse() {
          toast.dismiss();
          setIsPending(false);
        },
        onError(ctx) {
          toast.error("Something went wrong!", {
            description: ctx.error.message,
          });
        },
        onSuccess() {
          toast.success("Signed out successfully");
        },
      },
    });
    router.push("/auth/login");
  };

  return (
    <Button
      onClick={handleClick}
      variant="destructive"
      size={"sm"}
      disabled={isPending}
    >
      Sign Out
    </Button>
  );
};
