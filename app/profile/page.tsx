import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { SignOutButton } from "@/components/auth/sign-out-button";
import {
  Card,
  CardContent,
  CardHeader,
  CardHeading,
  CardTitle,
} from "@/components/ui/card";
import { auth } from "@/lib/auth/auth";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) return redirect("/login");
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <SignOutButton />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-5">
        <Card>
          <CardHeader>
            <CardHeading>
              <CardTitle>User Data</CardTitle>
            </CardHeading>
          </CardHeader>

          <CardContent>{JSON.stringify(session.user, null, 2)}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardHeading>
              <CardTitle>Session Data</CardTitle>
            </CardHeading>
          </CardHeader>
          <CardContent>{JSON.stringify(session.session, null, 2)}</CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
