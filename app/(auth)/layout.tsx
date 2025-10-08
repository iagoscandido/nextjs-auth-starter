import { Suspense } from "react";
import HomeButton from "@/components/home-button";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav className="flex justify-center items-center gap-4 p-4">
        <HomeButton />
      </nav>
      <main>
        <Suspense>{children}</Suspense>
      </main>
    </section>
  );
}
