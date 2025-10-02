"use client";
import Form from "next/form";
import Link from "next/link";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardHeading,
  CardTitle,
  CardToolbar,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUp } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  // function to handle submit form data
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // this const creates a new inscance of FormData
    const formData = new FormData(e.currentTarget);

    // Simple validation
    const name = formData.get("name");
    if (!name) return toast.warning("Name is required");
    const email = formData.get("email");
    if (!email) return toast.warning("Email is required");
    const password = formData.get("password");
    if (!password) return toast.warning("Password is required");

    // Call the signUp function from the client-side library
    await signUp.email(
      {
        name: name as string,
        email: email as string,
        password: password as string,
      },
      {
        onRequest: () => {
          toast.loading("Creating account...");
        },
        onResponse: () => {
          toast.dismiss();
        },
        onSuccess: () => {
          toast.success("Account created successfully!");
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
            <CardTitle>Register</CardTitle>
            <CardDescription>Create an account</CardDescription>
          </CardHeading>
          <CardHeading>
            <CardToolbar>
              <CardDescription>Have an account?</CardDescription>
              <Button variant={"outline"}>
                <Link href="/auth/login">Login</Link>
              </Button>
            </CardToolbar>
          </CardHeading>
        </CardHeader>
        <CardContent>
          <Form
            action={"/auth/register"}
            onSubmit={handleSubmit}
            className="max-w-sm w-full space-y-4"
          >
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" />

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
              Register
            </Button>
          </Form>
        </CardContent>
        <CardFooter className="text-muted-foreground text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4 gap-2">
          By clicking continue, you agree to our{" "}
          <Link href="#">Terms of Service</Link>
          <Link href="#">Privacy Policy</Link>
        </CardFooter>
      </Card>
    </div>
  );
}
