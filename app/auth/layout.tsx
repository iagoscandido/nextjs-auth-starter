import { GalleryVerticalEnd } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-accent-foreground flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 self-center font-medium text-accent"
        >
          <div className="flex size-6 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Acme Inc.
        </Link>
      </div>
      <main>
        <Suspense>{children}</Suspense>
      </main>
    </div>
  );
}
