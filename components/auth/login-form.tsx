"use client";
import Form from "next/form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardHeading,
  CardTitle,
  CardToolbar,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // this const creates a new inscance of FormData
    const formData = new FormData(e.currentTarget);

    // Simple validation
    const email = formData.get("email");
    if (!email) return toast.warning("Email is required");
    const password = formData.get("password");
    if (!password) return toast.warning("Password is required");

    // Call the signUp function from the client-side library
    await signIn.email(
      {
        email: email as string,
        password: password as string,
      },
      {
        onRequest: () => {
          toast.loading("Login in...");
        },
        onResponse: () => {
          toast.dismiss();
        },
        onSuccess: () => {
          toast.success("Logged in successfully!");
          router.push("/profile");
        },
        onError: (ctx) => {
          toast.error("Something went wrong!", {
            description: ctx.error.message,
          });
        },
      },
    );
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card variant={"accent"}>
        <CardHeader>
          <CardHeading>
            <CardTitle>Login</CardTitle>
            <CardDescription>Enter your credentials</CardDescription>
          </CardHeading>
          <CardHeading>
            <CardToolbar>
              <CardDescription>Don't have an account?</CardDescription>
              <Button variant={"outline"}>
                <Link href="/auth/register">Register</Link>
              </Button>
            </CardToolbar>
          </CardHeading>
        </CardHeader>
        <CardContent>
          <Form
            action={"/auth/login"}
            onSubmit={handleSubmit}
            className="max-w-sm w-full space-y-4"
          >
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" name="email" autoComplete="email" />
            <Label htmlFor="passowrd">Password</Label>
            <Input
              id="password"
              type="password"
              name="password"
              autoComplete="password"
            />
            <Button type="submit" className="w-full">
              Login
            </Button>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
