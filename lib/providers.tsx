"use client";

import { Toaster } from "sonner";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      {children}
      <Toaster position="top-right" richColors />
    </main>
  );
};

export default Providers;
