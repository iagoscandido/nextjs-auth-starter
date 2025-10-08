import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUpAction } from "@/lib/auth/actions";
import { Icons } from "../icons";
import SignInSocialsButton, { SocialProvider } from "./sign-in-socials-button";

export default function SignUpForm() {
  const initialState = { errorMessage: "" };
  const [state, formAction, pending] = useActionState(
    signUpAction,
    initialState,
  );

  useEffect(() => {
    if (state.errorMessage.length) toast.error(state.errorMessage);
  }, [state.errorMessage]);

  return (
    <section className="flex min-h-screen bg-zinc-50 px-4 py-16 md:py-32 dark:bg-transparent">
      <form
        action={formAction}
        className="bg-card m-auto h-fit w-full max-w-sm rounded-[calc(var(--radius)+.125rem)] border p-0.5 shadow-md dark:[--color-muted:var(--color-zinc-900)]"
      >
        <div className="p-8 pb-6">
          <div>
            <Link href="/" aria-label="go home">
              <HomeIcon />
            </Link>
            <h1 className="mb-1 mt-4 text-xl font-semibold">
              Create a IagoTech Account
            </h1>
            <p className="text-sm">Welcome! Create an account to get started</p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <SignInSocialsButton provider={SocialProvider.GOOGLE}>
              <Icons.socials.google />
              <span>Google</span>
            </SignInSocialsButton>
            <SignInSocialsButton provider={SocialProvider.MICROSOFT}>
              <Icons.socials.microsoft />
              <span>Microsoft</span>
            </SignInSocialsButton>
          </div>

          <hr className="my-4 border-dashed" />

          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="firstname" className="block text-sm">
                  Firstname
                </Label>
                <Input
                  type="text"
                  placeholder="John"
                  required
                  name="firstname"
                  id="firstname"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastname" className="block text-sm">
                  Lastname
                </Label>
                <Input
                  type="text"
                  placeholder="Doe"
                  required
                  name="lastname"
                  id="lastname"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="block text-sm">
                Email
              </Label>
              <Input
                type="email"
                placeholder="john.doe@email.com"
                required
                name="email"
                id="email"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pwd" className="text-sm">
                Password
              </Label>
              <Input
                type="password"
                required
                name="pwd"
                id="pwd"
                className="input sz-md variant-mixed"
              />
            </div>

            <Button
              className="w-full"
              disabled={pending}
              aria-disabled={pending}
            >
              Continue
            </Button>
          </div>
        </div>

        <div className="bg-muted rounded-(--radius) border p-3">
          <p className="text-accent-foreground text-center text-sm">
            Have an account ?
            <Button asChild variant="link" className="px-2">
              <Link href="/login">Sign In</Link>
            </Button>
          </p>
        </div>
      </form>
    </section>
  );
}
