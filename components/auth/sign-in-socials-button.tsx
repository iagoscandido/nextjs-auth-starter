"use client";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth/auth-client";

export enum SocialProvider {
  GOOGLE = "google",
  MICROSOFT = "microsoft",
  GITHUB = "github",
}

interface SignInSocialsprops {
  provider: SocialProvider;
  className?: string;
  children?: React.ReactNode;
}
const SignInSocialsButton = ({ ...props }: SignInSocialsprops) => {
  const [isPending, setIPending] = useState(false);

  const handleClick = async () => {
    await signIn.social({
      provider: props.provider,
      callbackURL: "/dashboard",
      fetchOptions: {
        onError() {
          toast.error("Something went wrong!");
        },
        onSuccess() {
          toast.success(`Signed in with ${props.provider} successfully`);
        },
        onRequest() {
          toast.loading("Signing in...");
          setIPending(true);
        },
        onResponse() {
          setIPending(false);
        },
      },
    });
  };

  return (
    <Button
      type="button"
      variant={"outline"}
      className={props.className}
      onClick={handleClick}
      disabled={isPending}
      aria-disabled={isPending}
    >
      {props.children}
    </Button>
  );
};

export default SignInSocialsButton;
