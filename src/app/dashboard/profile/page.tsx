"use client";

import { useSession } from "next-auth/react";

export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: session } = useSession();

  return (
    <div>
      <h1>Perfil Client Side</h1>
      <hr />

      <div className="flex flex-col">
        <span>{session?.user?.name ?? "No Name"}</span>
        <span>{session?.user?.email ?? "No Email"}</span>
        <span>{session?.user?.image ?? "No Image"}</span>
        <span>{session?.user?.id ?? "No UUID"}</span>
        <span>{session?.user?.roles?.join(",") ?? ["no-role"]}</span>
      </div>
    </div>
  );
}
