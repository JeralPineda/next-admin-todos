"use client";

import { SessionProvider } from "next-auth/react";

interface AuthProvidersProps {
  children: React.ReactNode;
}

export default function AuthProviders({
  children,
  ...rest
}: AuthProvidersProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
