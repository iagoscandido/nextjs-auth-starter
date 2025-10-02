import { headers } from "next/headers";
import { SignOutButton } from "@/components/auth/sign-out-button";
import { auth } from "@/lib/auth";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session)
    return (
      <p className="text-center text-3xl text-destructive">Not logged in</p>
    );
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <SignOutButton />
      <pre className="text-sm overflow-clip">
        {JSON.stringify(session, null, 2)}
      </pre>
    </div>
  );
};

export default ProfilePage;
