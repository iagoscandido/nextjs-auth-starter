"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";

export const SignOutButton = () => {
  const router = useRouter();

  const handleClick = async () => {
    await signOut({
      fetchOptions: {
        onError(ctx) {
          toast.error(ctx.error.message);
        },
        onSuccess() {
          toast.success("Signed out successfully");
        },
      },
    });
    router.push("/auth/login");
  };

  return (
    <Button onClick={handleClick} variant="destructive" size={"sm"}>
      Sign Out
    </Button>
  );
};
