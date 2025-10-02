import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="gap-2">
        <Button variant={"outline"} appearance={"ghost"}>
          <Link href={"/auth/register"}>Register</Link>
        </Button>
        <Button variant={"outline"} appearance={"ghost"}>
          <Link href={"/auth/login"}>Login</Link>
        </Button>
      </div>
    </main>
  );
}
